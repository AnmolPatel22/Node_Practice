var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

if(env === 'production'){
    sequelize = new Sequelize(process.env.DATABASE_URL,{
        dialect: 'postgres'
    });
}else{
    sequelize = new Sequelize(undefined,undefined,undefined,{
        'dialect': 'sqlite',
        'storage': __dirname + '/data/dev-todo-api.sqlite',
        pool: {
            max: 5,
            min: 0
          }
    });
        
}


// var sequelize = new Sequelize(undefined,undefined,undefined,{
//     'dialect': 'sqlite',
//     'storage': __dirname + '/data/dev-todo-api.sqlite'
// });

var db = {};

db.todo = sequelize.import(__dirname + '/models/todo.js');
db.user = sequelize.import(__dirname + '/models/user.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

