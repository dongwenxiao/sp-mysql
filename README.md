# sp-mysql
super-project moudle for mysql operate.


# Usage

## Init

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


## Log

```js
mysql.openLog() // open log

mysql.closeLog() // close log
```

## Test Connection

```js
mysql.testConnect()

// console => MySQL [db_name] connected √
//         => MySQL connect failed X
```