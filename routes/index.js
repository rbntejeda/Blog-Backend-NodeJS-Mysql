const usersController = require("../controllers").users;

module.exports = app => {
    app.get('/users',usersController.getAll);
    app.post('/users',usersController.create)
}