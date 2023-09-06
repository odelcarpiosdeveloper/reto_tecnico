"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlConn = void 0;
var db_config_1 = require("../config/db.config");
exports.mysqlConn = require('serverless-mysql')({
    config: {
        host: db_config_1.default.HOST,
        database: db_config_1.default.DB,
        user: db_config_1.default.USER,
        password: db_config_1.default.PASSWORD
    }
});
//# sourceMappingURL=mysql.js.map