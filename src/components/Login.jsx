import axios from "axios";
import { Button, Form } from "react-bootstrap";
import UserProfile from "../UserProfile";

export default function Login() {

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());

        axios.post('http://localhost:8000/login',
            formDataObj
        ).then((res) => {
            console.log(res.data)
            UserProfile.setName(res.data)
            UserProfile.getName()
        })
    };

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter password" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}