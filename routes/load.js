var express = require('express');
var router = express.Router();
var { Users, Todos, Posts, Comments, Albums, Photos } = require('../models');
// var users = require('../Schemas/users.json');
// var todos = require('../Schemas/todos.json');
// var posts = require('../Schemas/posts.json');
var comments = require('../Schemas/comments.json');
// var albums = require('../Schemas/albums.json');
var photos = require('../Schemas/photos.json');

// router.get('/', async (req, res) => {
//     try {
//         var arrtodos = await Promise.all(comments.map(x=>Comments.create(x)));
//         var arrposts = await Promise.all(photos.map(x=>Photos.create(x)));

//         res.send([arrtodos,arrposts]);

//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

module.exports = router;