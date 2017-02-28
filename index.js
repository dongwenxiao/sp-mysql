import Sequelize from 'sequelize'

export default class spMysql {
    constructor() {
        var sequelize = new Sequelize('ux_translate_platform', 'root', '', {
            host: '127.0.0.1',
            dialect: 'mysql',

            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },

            // SQLite only
            // storage: 'path/to/database.sqlite'
        })

        var User = sequelize.define('test_user', {
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            }
        });

        // force: true will drop the table if it already exists
        User.sync({ force: false }).then(function() {
            // Table created
            return User.create({
                firstName: 'John',
                lastName: 'Hancock'
            });
        }).then(() => {

            User.findAll().then(function(users) {
                console.log(users)
            })
        })

    }
}