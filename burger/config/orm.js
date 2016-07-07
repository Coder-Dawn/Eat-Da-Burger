var connection = require('./connection.js');

var orm = {
    selectWhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = 'SELECT * FROM ' + tableInput + ' (burger_name) ' + colToSearch + ' = ?';
        var burgerName =burger;
        connection.query(queryString, [nameInput], function(err, result) {
            console.log(result);
        });
    },
    devour: function(wuserInput) {
        //var queryString = 'SELECT ' + whatToSelect + ' FROM ' + table + ' ORDER BY '+ orderCol + ' ' + orderBy;
        //console.log(queryString)
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    },
    allBurger: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        //var queryString = 'SELECT ' + tableOneCol + ', COUNT(' + tableOneCol + ') AS count FROM ' + tableOne + ' LEFT JOIN ' + tableTwo + ' ON ' + tableTwo + '.' + tableTwoForeignKey + '= ' + tableOne + '.id GROUP BY ' + tableOneCol + ' ORDER BY count desc LIMIT 1';
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    }
};

module.exports = orm;