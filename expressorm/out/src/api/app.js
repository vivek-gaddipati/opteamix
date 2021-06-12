"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const products_routes_1 = require("./routes/products.routes");
const winston = __importStar(require("winston"));
const app = express_1.default(); // Middleware Framework for RESTful web services
const server = http_1.createServer(app);
const routes = [];
// configure middleware
app.use(express_1.default.json());
app.use(cors_1.default());
// Logger configuration
const loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true }))
};
// app.use(expressWinston.logger(loggerOptions));
// end logger configuration
const msg = `Server running at http://localhost:${process.env.PORT}`;
app.get("/", (req, res) => {
    res.status(200).send(msg);
});
routes.push(new products_routes_1.ProductRoutes(app));
server.listen(process.env.PORT || 3000, () => console.log(msg));
exports.default = app;
//# sourceMappingURL=app.js.map