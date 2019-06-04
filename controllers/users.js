var {users} = require("../models");

module.exports = {
    create(req, res) {
        return users.create(req.body)
            .then(user => res.status(201).send(user))
            .catch(error => res.status(422).send(error));
    },
    getAll(req, res) {
        return users.findAll().then(users => res.send(users)).catch(error => res.status(404).send(error))
    }
};