"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const products_routes_1 = require("./routes/products.routes");
const app = express_1.default(); // Middleware Framework for RESTful web services
const server = http_1.createServer(app);
const port = 3000;
const routes = [];
// configure middleware
app.use(express_1.default.json());
app.use(cors_1.default());
routes.push(new products_routes_1.ProductRoutes(app));
const msg = `Server running at http://localhost:${port}`;
app.get("/", (req, res) => {
    res.status(200).send(msg);
});
server.listen(port, () => console.log(msg));
// process.on('SIGINT', () => {
//     console.log("Die.............");
//     process.abort();
// });
//# sourceMappingURL=app.js.map