const express = require('express');
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const cors = require('cors');

const validator = require('validatorjs');

const {
    sequelize, Blog, Category, Supplier, User,
    Product, Communication, Orders, Reviews, Servieos,
} = require('./db')




const validate = (data, rules) => {
    let validation = new validator(data, rules);


    return !validation.fails();
}



const isPull = process.argv.includes('--pull')

const isSync = process.argv.includes('--sync')




if (isSync) {
    sequelize.sync({force: false}).then(() => {
        console.log('БД синхронизирована');
    });
}

if (isPull)
    run()



const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true})); // Обработка данных формы

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

const port = 3000;


app.post('/update/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findByPk(productId, {
            include: [Category, Supplier],
        });
        const categories = await Category.findAll();
        const suppliers = await Supplier.findAl1();
        res.render('edit-product', {product, categories, suppliers});
    } catch (error) {
        console.error('Error fetching product for edit:', error);
        res.status(580).send('Internal Server Error');
    }
});

app.post('/add-category', express.urlencoded({extended: true}), async (req, res) => {
    const {name} = req.body;
    if (name) {
        await Category.create({name});
    }


});
app.post('/add-supplier', express.urlencoded({extended: true}), async (req, res) => {
    const {name, contact} = req.body;
    if (name) {
        await Supplier.create({name, contact});
    }
});



app.post('/add-product', express.urlencoded({extended: true}), async (req, res) => {
    const {name, price, categoryId, supplierId} = req.body;
    if (name && price && categoryId && supplierId) {
        try {
            await Product.create({
                name,
                price,
                Categoryld: categoryId,
                SupplierId: supplierId,
            });
            res.redirect('/');
        } catch (error) {
            console.error('Error adding product:', error);
            res.status(500).send('Internal Server Error');
        }
    } else {
        res.status(400).send('All fields are required');
    }
});

app.post('/delete-product/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        await Product.destroy({
            where: {id: productId},
        });
        res.redirect('/');
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(508).send('Internal Server Error');
    }
});

app.get('/services', async (req, res) => {

    // const productId = req.params.id;
    const products = await Product.findAll({
        include: [Category, Supplier],
    });
    // const categories = await Category.findAll();
    // const suppliers = await Supplier.findAll();


    return res.send(products)
})
app.post('/edit-product/:id', express.urlencoded({extended: true}), async (req, res) => {
    try {
        const productid = req.params.id;
        const {name, price, categoryId, supplierId} = req.body;

        await Product.update(
            {name, price, CategoryId: categoryId, SupplierId: supplierId},
            {where: {id: productid}}
        );

        res.redirect('/');
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(580).send('Internal Server Error');
    }
});



app.get('/reviews', express.urlencoded({extended: true}), async (req, res) => {

    return res.send(await Reviews.findAll())
})
app.post('/send-review', express.urlencoded({extended: true}), async (req, res) => {

    const {name, text} = req.body;


    await Reviews.create(
        {name, text}
    );


    return res.send({data: true});
})


app.get('/questions', express.urlencoded({extended: true}), async (req, res) => {

    return res.send(await Communication.findAll())
})
app.post('/send-question', express.urlencoded({extended: true}), async (req, res) => {

    const data = req.body;


    await Communication.create(
        data
    );


    return res.send({data: true});
});

app.get('/orders', express.urlencoded({extended: true}), async (req, res) => {

    return res.send(await Orders.findAll())
})
app.post('/send-order', express.urlencoded({extended: true}), async (req, res) => {

    const data = req.body;


    await Orders.create(
        data
    );


    return res.send({data: true});
});



app.post('/login', async (request, response) => {
    const {login, password} = request.body;

    try {
        // Поиск пользователя в БД
        let user = await User.findOne({where: {login: login}});

        // Если пользователя не существует
        if (!user) {
            return response.status(413).send({error: 'Пользователь не найден'});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return response.status(413).send({error: 'Неверный пароль'});
        }


        let token = jwt.sign( { login: login }, "2315", { expiresIn: "30m" } );


        return response.send({
            token
        })
    } catch (error) {
        console.error('Ошибка авторизации:', error);
        return response.status(500).send({error: 'Пользователь не найден'});
    }
});






app.listen(port, () => {
    console.log(`Сервер запущен на порту http://localhost:${port}`);
});







async function run() {
    try {
        await sequelize.sync({force: true});
        console.log("Таблицы пересозданы.");


        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash("12345", salt, function (err, hash) {
                User.create({
                    login: "admins",
                    password: hash,
                });
            })});


        const categoryl = await Category.create({name: 'иномарка'});
        const category2 = await Category.create({name: 'отечественные'});

        const supplier1 = await Supplier.create({name: 'TechCorp', contact: 'avto@example.com'});
        const supplier2 = await Supplier.create({name: 'BookStore', contact: 'contact@f.com'});

        await Product.create({
            name: 'Техническое обслуживание',
            price: 1209.99,
            CategoryId: categoryl.id,
            SupplierId: supplier1.id
        });
        await Product.create({name: 'Замена масла', price: 799.49, CategoryId: category2.id, SupplierId: supplier1.id});


    } catch (error) {
        console.error("Ошибка:", error);
    }
}







