const dataStore = require('../data/store')

module.exports = {

    getComments(req, res){
        if(req.query.id)return res.status(200).send(dataStore.posts[req.params.postId].comments[req.query.id])
        res.status(200).send(dataStore.posts[req.params.postId].comments)
    },

    addComment(req, res){
        let newComment = req.body
        let comments = dataStore.posts[req.params.postId].comments
        let commentId = comments.length
        comments.push(newComment)
        res.status(201).send({commentId : commentId})
    },

    updateComment(req, res){
        dataStore.posts[req.params.postId].comments[req.params.commentId] = Object.assign(dataStore.posts[req.params.postId].comments[req.params.commentId], req.body)
        res.status(200).send(dataStore.posts[req.params.postId].comments[req.params.commentId])
    },

    removeComment(req, res){
        dataStore.posts[req.params.postId].comments.splice(req.params.commentId, 1)
        res.status(204).send()
    }
}