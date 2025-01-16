const express = require('express');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
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
  
  (async () => {
      try {
          await sequelize.sync({ force: true }); 
  
    const categoryl = await Category.create({ name: 'иномарка' });
    const category2 = await Category.create({ name: 'отечественные' });
  
    const supplier1 = await Supplier.create({ name: 'TechCorp', contact: 'avto@example.com' });
    const supplier2 = await Supplier.create({ name: 'BookStore', contact: 'contact@f.com' });
  
    await Product.create({ name: 'Техническое обслуживание', price: 1209.99, CategoryId: categoryl.id, SupplierId: supplier1.id });
    await Product.create({ name: 'Замена масла', price: 799.49, CategoryId: category2.id, SupplierId: supplier1.id }); 
   
    app.listen (PORT, () => console. log(`Server is running on http://localhost:${PORT}`));
    } catch (error) {
    console.error ('Error initializing the application:', error);
    }
  })();
  