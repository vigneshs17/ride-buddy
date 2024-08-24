const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./User')
const Post = require('./Post')
const moment = require('moment');
require("dotenv").config();
var { ObjectId } = require('mongodb')


mongoose.connect(process.env.MONGO_PROD_URI);

const app = express()
app.use(cors());
app.use(express.json());

const port = 8000

app.get('/', (res) => {
    res.send('Welcome to ride buddy!')
})

app.post('/createUser', (req, res) => {
    const user = new User(req.body)
    try {
        user.save()
    }
    catch (err) {
        throw err;
    }
    res.send(req.body)
})

app.post('/createPost', (req, res) => {
    const { user, from, to, date, time, fee } = req.body

    // Replace space with 'T' to make it ISO 8601 compatible
    const isoDateTimeStr = date + 'T' + time + ':00.000Z';
    console.log(isoDateTimeStr)

    // Create a Date object
    const dateTime = new Date(isoDateTimeStr);
    console.log(dateTime)
    console.log(typeof (dateTime))

    const postParams = { user, from, to, dateTime, fee }
    const post = new Post(postParams)
    try {
        console.log(post)
        post.save()
    }
    catch (err) {
        throw err;
    }
    res.send(req.body)
})

app.get('/getPosts', async (req, res) => {
    try {
        const posts = await Post.find({});

        // Map over posts and create a new array with the date and time properties added
        const modifiedPosts = posts.map(post => {
            const date = post.dateTime.toISOString().substring(0, 10);
            const time = post.dateTime.toISOString().substring(11, 16);

            // Return a new object with the added date and time properties
            return {
                ...post.toObject(), // Convert Mongoose Document to plain object
                date: date.split("-").reverse().join("-"),
                time: time
            };
        });
        res.send(modifiedPosts);
    } catch (error) {
        console.error(error);
        res.sendStatus(500).send('Server error');
    }
});

app.post('/deletePost', async (req, res) => {

    const postId = req.body._id;
    const result = await Post.deleteOne({ "_id": ObjectId.createFromHexString(postId) });

    if (result.deletedCount === 0) {
        return res.status(404).send('Post not found');
    }

    // Optionally, return the remaining posts
    const posts = await Post.find({});
    const modifiedPosts = posts.map(post => {
        const date = post.dateTime.toISOString().substring(0, 10);
        const time = post.dateTime.toISOString().substring(11, 16);

        return {
            ...post.toObject(),
            date: date.split("-").reverse().join("-"),
            time: time
        };
    });

    res.json(modifiedPosts);
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email })
        if (user) {
            const result = password === user.password;
            if (result) {
                console.log('success')
                res.send(user.name)
            } else {
                res.status(400).json({ error: "password doesn't match" });
            }
        } else {
            res.status(400).json({ error: "User doesn't exist" });
        }
    }
    catch (err) {
        throw err;

    }
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
