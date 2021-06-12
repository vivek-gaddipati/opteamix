"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../config/connection");
const models_1 = require("../models");
function addOrder() {
    return __awaiter(this, void 0, void 0, function* () {
        let tx = connection_1.connection.transaction();
        try {
            const item1 = yield models_1.Item.create({ "amount": 6344, "qty": 1, "product_fk": 2 });
            const item2 = yield models_1.Item.create({ "amount": 9011, "qty": 2, "product_fk": 1 });
            const order = yield models_1.Order.create({
                customer_fk: "anna@gmail.com",
                orderDate: new Date(),
                total: 81344.00
            });
            yield order.addItem(item1);
            yield order.addItem(item2);
            (yield tx).commit();
            connection_1.connection.close();
        }
        catch (err) {
            console.log(err);
            (yield tx).rollback();
        }
    });
}
addOrder();
//# sourceMappingURL=orderexample.js.map