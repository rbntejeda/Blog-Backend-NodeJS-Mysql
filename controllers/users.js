var {Users} = require("../models");

module.exports = {
    create(req, res) {
        return users.create(req.body)
            .then(user => res.status(201).send(user))
            .catch(error => res.status(422).send(error));
    },
    async getAll(req, res) {
        res.send(await Users.findAll());
        // return Users.findAll().then(users => res.send(users)).catch(error => res.status(404).send(error))
    }
};