const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes')

app.use(bodyParser.json())
app.use(morgan('dev'))


app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postId', routes.posts.updatePost)
app.delete('/posts/:postId', routes.posts.removePost)

app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)


app.listen(3000)
console.log('App start at port:3000')
