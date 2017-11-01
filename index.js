const mysql = require('mysql2/promise')

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
        this.instance = this.createPool(opt)
        this.testConnect()
        this._openLog = false
    }


    createPool() {
        return mysql.createPool(this.opt)
    }

    testConnect() {
        this.instance.query('SELECT 1 + 1 AS Test')
            .then(() => {
                console.info(`MySQL [${this.opt.database}] connected √`)
            })
            .catch((err) => {
                console.error('MySQL connect failed X')
                console.error(err)
            })
    }

    openLog() {
        this._openLog = true
    }

    closeLog() {
        this._openLog = false
    }

    query(sql, params) {
        if (this._openLog) {
            console.log(`SQL: ${sql}`)
            if (params) console.log(`params: ${JSON.stringify(params)}`)
        }

        return this.instance.query(sql, params)
    }

}