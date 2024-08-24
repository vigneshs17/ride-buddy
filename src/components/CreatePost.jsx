import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import UserProfile from "../UserProfile";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
    let navigate = useNavigate();
    const getPostsPath = `/viewPosts`
    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());

        axios.post('http://localhost:8000/createPost',
            formDataObj
        ).then(() => {
            navigate(getPostsPath)
        })
    };

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="user">
                <Form.Label>User</Form.Label>
                <Form.Control type="email" name="user" placeholder="" value={UserProfile.getName()} disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="from">
                <Form.Label>From</Form.Label>
                <Form.Control type="text" name="from" placeholder="Enter source" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="to">
                <Form.Label>To</Form.Label>
                <Form.Control type="text" name="to" placeholder="Enter destination" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="date" placeholder="Enter the date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="time">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" name="time" placeholder="Enter the time" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="fee">
                <Form.Label>Fee</Form.Label>
                <Form.Control type="text" name="fee" placeholder="Enter the fee" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );

}