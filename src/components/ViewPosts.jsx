import axios from "axios";
import { useState, useEffect } from "react";

export default function ViewPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/getPosts')
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const deleteHandler = (id) => {
        axios.post('http://localhost:8000/deletePost',
            { _id: id }
        ).then((res) => {
            setPosts(res.data)
        })
    }


    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Fee</th>
                        <th>Delete Post</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <tr key={index}>
                            <td>{post._id}</td>
                            <td>{post.user}</td>
                            <td>{post.from}</td>
                            <td>{post.to}</td>
                            <td>{post.date}</td>
                            <td>{post.time}</td>
                            <td>{post.fee}</td>
                            <td><button type="button" class="btn btn-danger" onClick={() => deleteHandler(post._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
