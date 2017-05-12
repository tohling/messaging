var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

module.exports = function (context, req) {
    // Create connection to database
    var config = {
        userName: 'mcscroot', // update me
        password: 'mqRJAxoRd1lvlS1N1UVuhn220OzT0d', // update me
        server: 'mcsc.database.windows.net', // update me
        options: {
            database: 'social' //update me
        }
    }
    var connection = new Connection(config);

    connection.on('connect', function (err) {
        if (err) {
            context.res = {
                status: 500,
                body: err
            }
        }
        else {
            request = new Request("SELECT * FROM [dbo].[vwProfiles]",
                function (err, rowCount, rows) {
                    context.res = {
                        status: 200,
                        body: rows
                    };
                }
            );
        }
    });
    context.done();
}