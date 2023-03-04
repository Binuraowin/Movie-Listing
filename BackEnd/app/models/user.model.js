var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Users",
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        first_name: {
            type: "varchar",
        },
        last_name: {
            type: "varchar",
        },
        email: {
            type: "varchar",
            unique: true
        },
        password: {
            type: "varchar",
        },
    },
    relations: {
    },
})
