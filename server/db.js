const {Sequelize, DataTypes} = require("sequelize");

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

// const Servieos = sequelize.define(
//     "Servieos",
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         heading: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         desscription: DataTypes.STRING,
//         price: DataTypes.STRING,
//     },
//     {
//         timestamps: false,
//     }
// );

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
        // number: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true,
        //     validate: {
        //         len: [1, 11], // Валидация формата number с помощью Sequelize
        //     }
        // },
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
        phone: DataTypes.STRING,
        // time: DataTypes.STRING,
        // brand: DataTypes.STRING,
        description: DataTypes.STRING,
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
        description: DataTypes.STRING,
        // photo: DataTypes.STRING,
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
    description: { type: DataTypes.STRING, allowNull: true },
    price: { type: DataTypes.FLOAT, allowNull: false },
});

// const Category = sequelize.define('Category', {
//     name: { type: DataTypes.STRING, allowNull: false },
// });
// const Supplier = sequelize.define('Supplier', {
//     name: { type: DataTypes.STRING, allowNull: false },
//     contact: { type: DataTypes.STRING },
// });
//
//
//
// Product.belongsTo(Category);
// Product.belongsTo(Supplier);
// Category.hasMany(Product);
// Supplier.hasMany(Product);





module.exports = {
    sequelize,
    Product,
    // Category,
    // Supplier,
    Communication,
    Blog,
    Reviews,
    User,
    // Servieos,
    Orders,
}
