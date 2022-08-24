const db = require('./db')
const Query = {
   greeting:() => {
      return "Hello, Praveen"
   },
   students:() => db.students.list()
}

module.exports = {Query}