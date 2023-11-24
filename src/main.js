const { DataBase } = require('quickmongo');

class ieconomy {

/**
 * Під'єднується до Вашої датабази
 * @param {string} key Ключ від ДБ.
*/
    async connectDB(key){
    const DB = new DataBase(key);
    }
}

module.exports = {
ieconomy
 }