const Sequelize = require("sequelize");
const dbconfig = require("../config/database")

const Post = require("../models/Post")
const User = require("../models/User")

const connection = new Sequelize(dbconfig.url, dbconfig.config);

Post.init(connection);
User.init(connection);

//inicializando os relacionamnetos 
Post.associate(connection.models);
User.associate(connection.models);

module.exports = connection;
