# sp-mysql
super-project moudle for mysql operate.


# Usage

## Init

Config More: https://github.com/mysqljs/mysql#connection-options
```js
import spMysql from 'sp-mysql'

const config = {
    host: '127.0.0.1',
    port: '3306',
    user: 'xxxx',
    password: 'xxxx',
    database: 'db_name'
}

const mysql = new spMysql(config)


```

## Query

```js


let sql = 'SELECT 1 + 1 AS Test'
let [result] = await mysql.query(sql)

// result 查询结果并保护下面数据
// { affectedRows, insertId } = result

```


## Debug

Use [debug](https://www.npmjs.com/package/debug) for log.

设置环境变量
```shell
set DEBUG=*             # 全部信息
set DEBUG=MySQL*        # MySQL相关信息，包括（info\log\errro）
set DEBUG=MySQL:info    # info信息
set DEBUG=MySQL:log     # log信息，执行sql
set DEBUG=MySQL:error   # error错误信息
```

## Test Connection

```js
mysql.testConnect()

// console => MySQL:info DB ['db_name'] connected √
//         => MySQL:info DB ['db_name'] connect failed X
```