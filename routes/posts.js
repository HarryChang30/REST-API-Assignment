const dataStore = require('../data/store.js')

module.exports = {

    getPosts(req, res){
        if(req.query.id)return res.status(200).send(dataStore.posts[req.query.id])
        res.status(200).send(dataStore.posts)
    }, 

    addPost(req, res){
        if(!req.body.comments)return res.sendStatus(400)
        let newPost = req.body
        let id = dataStore.posts.length
        dataStore.posts.push(newPost)
        res.status(201).send({id: id})
    },

    updatePost(req, res){
        dataStore.posts[req.params.postId] = req.body
        res.status(200).send(dataStore.posts[req.params.id])
    },

    removePost(req, res){
        dataStore.posts.splice(req.params.postId, 1)
        res.status(204).send()
    }
}