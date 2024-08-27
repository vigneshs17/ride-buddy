import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import UserProfile from "../UserProfile";


export default function EditPost() {
    const { post } = useLocation().state || {};
    let navigate = useNavigate();
    const getPostsPath = `/viewPosts`
    const submitHandler = (event) => {
        event.preventDefault();
        const formDataObj = Object.fromEntries(new FormData(event.target).entries());
        axios.post('http://localhost:8000/editPost',
            formDataObj
        ).then(() => {
            navigate(getPostsPath)
        })
    };
    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="user">
                <Form.Label>User</Form.Label>
                <Form.Control type="email" name="user" placeholder="" value={UserProfile.getName()} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="user">
                <Form.Label>Post ID</Form.Label>
                <Form.Control type="string" name="id" placeholder="" value={post._id} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="from">
                <Form.Label>From</Form.Label>
                <Form.Control type="text" name="from" placeholder="Enter source" defaultValue={post.from} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="to">
                <Form.Label>To</Form.Label>
                <Form.Control type="text" name="to" placeholder="Enter destination" defaultValue={post.to} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="date" placeholder="Enter the date" defaultValue={post.date} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="time">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" name="time" placeholder="Enter the time" defaultValue={post.time} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="fee">
                <Form.Label>Fee</Form.Label>
                <Form.Control type="text" name="fee" placeholder="Enter the fee" defaultValue={post.fee} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}