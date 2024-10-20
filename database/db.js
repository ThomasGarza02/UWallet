var sqlite3 = require('sqlite3');

new sqlite3.Database('./wallet.db',sqlite3.OPEN_CREATE, (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
        createDatabase();
        return;
        } else if (err) {
            console.log("Getting error " + err);
            exit(1);
    }
    runQueries(db);
});
function createDatabase(){
    var walletdb = new sqlite3.Database('wallet.db', (err) => {
        if (err) {
            console.log("Getting error " + err);
            exit(1);
        }
        createTables(walletdb);
    });
}
function createTables(walletdb) {
    walletdb.exec(`
    create table Users (
        email text primary key not null,
        password text not null,
    );
    insert into hero (email, password)
        values ('test@test', 'test');

        `
    );
}