import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../config/connection';

export class Product extends Model {
    public id!:number;
    public name!:string;
    public price!:number;
    public category!:string;
}

Product.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: new DataTypes.STRING(128),
        allowNull: false,
        // field: "prd_name"
    },
    price: {
        type: new DataTypes.DOUBLE()
    },
    category: {
        type: new DataTypes.STRING(128)
    }
}, {
    tableName: "products",
    timestamps: false,
    sequelize
});