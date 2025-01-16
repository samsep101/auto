const express = require('express');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const ejs = require('ejs');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "bd.sqlite",
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
  
{ 
  timestamps: false, 
},
);

const Servieos = sequelize.define(
  "Servieos",
  {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          },
    heading: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    desscription: DataTypes.STRING,
    price: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

const Reviews = sequelize.define(
  "Reviews",
  {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Добавлено ограничение not null
      },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
          len: [1, 11], // Валидация формата number с помощью Sequelize
        }
    },
    text: {
      type: DataTypes.STRING,
      validate: {
          len: [5, 10000], // Валидация длины имени
        },
      },
  },
  {
    timestamps: false,
  }
);

const Orders = sequelize.define(
  "Orders",
  {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Добавлено ограничение not null
      },
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    brand: DataTypes.STRING,
    desscription: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);


const Blog = sequelize.define(
  "Blog",
  {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          },
    heading: {
      type: DataTypes.STRING,
      allowNull: false, // Добавлено ограничение not null
      },
    desscription: DataTypes.STRING,
    photo: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

const Communication = sequelize.define(
  "Communication",
  {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          },
    name: {
      type: DataTypes.STRING,
      },
    email: DataTypes.STRING,
    questions: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);


const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
});
const Category = sequelize.define('Category', {
  name: { type: DataTypes.STRING, allowNull: false },
});
const Supplier = sequelize.define('Supplier', {
  name: { type: DataTypes.STRING, allowNull: false },
  contact: { type: DataTypes.STRING },
});
Product.belongsTo(Category);
Product.belongsTo(Supplier);
Category.hasMany(Product);
Supplier.hasMany(Product);


async function run() {
  try {
    await sequelize.sync({ force: true });
    console.log("Таблицы пересозданы.");


  await User.create({
     login: "admins",
     password: 12345,
     });

     const categoryl = await Category.create({ name: 'иномарка' });
     const category2 = await Category.create({ name: 'отечественные' });
   
     const supplier1 = await Supplier.create({ name: 'TechCorp', contact: 'avto@example.com' });
     const supplier2 = await Supplier.create({ name: 'BookStore', contact: 'contact@f.com' });
   
     await Product.create({ name: 'Техническое обслуживание', price: 1209.99, CategoryId: categoryl.id, SupplierId: supplier1.id });
     await Product.create({ name: 'Замена масла', price: 799.49, CategoryId: category2.id, SupplierId: supplier1.id }); 


} catch (error) {
    console.error("Ошибка:", error);
  }
}


run()



app.get('/', async (req, res) => {
  const products = await Product.findAll({
    include: [Category, Supplier],
  });
  res.render('index', { products });
});
app.get('/add-category', (req, res) => {
  res.render('add-category');
});
app.get('/add-supplier', (req, res) => {
  res.render('add-supplier');
});
app.get('/add-product', async (req, res) => {
  try {
    const categories = await Category.findAll();
    const suppliers = await Supplier.findAll();
    res.render('add-product', { categories, suppliers });
  } catch (error) {
    console.error('Error fetching categories or suppliers:', error);
    res.status(580).send('Internal Server Error');
  }
});

app.get('/edit-product/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId, {
      include: [Category, Supplier],
    });
    const categories = await Category.findAll();
    const suppliers = await Supplier.findAl1();
    res.render('edit-product', { product, categories, suppliers });
  } catch (error) {
    console.error('Error fetching product for edit:', error);
    res.status(580).send('Internal Server Error');
  }
});

app.post('/add-category', express.urlencoded({ extended: true }), async (req, res) => {
  const { name } = req.body;
  if (name) {
    await Category.create({ name });
  }
  res.redirect('/');
});
app.post('/add-supplier', express.urlencoded({ extended: true }), async (req, res) => {
  const { name, contact } = req.body;
  if (name) {
    await Supplier.create({ name, contact });
  }
  res.redirect('/');
});

app.post('/add-product', express.urlencoded({ extended: true }), async (req, res) => {
  const { name, price, categoryId, supplierId } = req.body;
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
      await Product. destroy({
        where: { id: productId },
  });
      res.redirect('/');
    } catch (error) {
      console.error('Error deleting product:', error); 
      res.status(508).send('Internal Server Error');
}
});

  app.post('/edit-product/:id', express.urlencoded({ extended: true }), async (req, res) => {
    try {
      const productid = req.params.id;
      const { name, price, categoryId, supplierId } = req.body;

      await Product. update(
        { name, price, CategoryId: categoryId, SupplierId: supplierId }, 
        { where: { id: productid } }
      );

      res.redirect('/');
  } catch (error) {
      console.error( 'Error updating product:', error); 
      res.status(580).send('Internal Server Error');
  }
  });

  app.use(express.urlencoded({ extended: true })); // Обработка данных формы
  app.use(express.json()); // Обработка JSON
  
  // для сессий
  app.use(session({
      secret: 'your_secret_key',
      resave: false,
      saveUninitialized: true,
  }));

  // Middleware для проверки аутентификации
const requireAuth = (req, res, next) => {
  if (req.session && req.session.isLoggedIn) {
      next();
  } else {
      res.redirect('/login'); // Перенаправляем на страницу логина, если нет доступа
  }
};

// Синхронизация с БД (создаем таблицу users если её нет)
sequelize.sync({ force: false }).then(() => {
  console.log('БД синхронизирована');
});

// Страница авторизации (GET)
app.use(express.urlencoded({ extended: true }));
app.get('/login', (req, res) => {
res.render('login', { error: null });
});


// Авторизация (POST)
app.use(express.urlencoded({ extended: true }));
app.post('/auth', async (request, response) => {
const { login, password } = request.body;

try {
  // Поиск пользователя в БД
 let user = await User.findOne({ where: { login: login } });

  // Если пользователя не существует
  if (!user) {
     return  response.render('login', { error: 'Пользователь не найден' });
  }

   // Проверка пароля
  const passwordMatch = await bcrypt.compare(password, user.password);

  // Если пароль не совпадает
  if (!passwordMatch) {
      return  response.render('login', { error: 'Неверный пароль' });
  }
  res.setHeader('Access-Control-Allow-Origin', '*'); //  Разрешить  всем  доменам
  // или укажите конкретные домены:
  // res.setHeader('Access-Control-Allow-Origin', 'https://yourdomain.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // Если авторизация прошла успешно, устанавливаем сессию
  request.session.isLoggedIn = true;
  request.session.login = login;


   request.session.save(function (err) {
       if (err) {
          console.error(err)
          return  response.sendStatus(500);
      }
       response.redirect('/edit-product'); // Перенаправляем на страницу админа
    });
} catch (error) {
  console.error('Ошибка авторизации:', error);
    return response.status(500).send('Ошибка сервера');
}
});

// Страница личного кабинета (требует аутентификации)
app.get('/add-product', requireAuth, (req, res) => {
  res.render('edit-product', { login: req.session.login });
});
  app.listen(port, () => {
    console.log(`Сервер запущен на порту http://localhost:${port}`);
  });
  





  
