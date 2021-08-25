const {Model, DataTypes} = require("sequelize")

class User extends Model{

    static init(connecttion){
        super.init(
            {
                name: DataTypes.STRING,
                email: DataTypes.STRING,
                password: DataTypes.STRING,
            },
            {
                sequelize: connecttion,
            }
        )
    }

    static associate(models){
        this.hasMany(models.Post);
    }
}



module.exports = User;