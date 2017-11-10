const mysql = require('mysql2/promise')

const debug = require('debug')
const log = debug('MySQL:log')
const error = debug('MySQL:error')
const info = debug('MySQL:info')

export default class spMysql {

    constructor(opt) {
        this.opt = Object.assign({
            connectionLimit: 10,
            host: '127.0.0.1',
            port: '3306',
            // user: 'root',
            // password: 'root',
            database: 'no-set-db-name',
            charset:'UTF8_GENERAL_CI'
        }, opt)
        this.instance = this.createPool()
        this.testConnect()
    }

    createPool() {
        return mysql.createPool(this.opt)
    }

    testConnect() {
        this.instance.query('SELECT 1 + 1 AS Test')
            .then(() => {
                info(`DB [%o] connected √`, this.opt.database)
            })
            .catch((err) => {
                info(`DB [%o] connect failed X`, this.opt.database)
                error(err)
            })
    }

    query(sql, params) {
        if (this._openLog) {
            log(`SQL: ${sql}`)
            if (params) log('params: %j', params)
        }

        log('SQL: %o', sql)
        if (params) log('params: %j', params)

        return this.instance.query(sql, params)
    }

}