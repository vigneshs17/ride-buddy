import axios from "axios";
import { Button, Form } from "react-bootstrap";

export default function CreateUser() {

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);

        axios.post('http://localhost:8000/createUser',
            formDataObj
        )
    };

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" name="phone" placeholder="Enter phone number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="locality">
                    <Form.Label>Locality</Form.Label>
                    <Form.Control type="text" name="locality" placeholder="Enter locality" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="vehicleType">
                    <Form.Label>TYpe of vehicle</Form.Label>
                    <Form.Control type="vehicleType" name="vehicleType" placeholder="Type of vehicle" />
                </Form.Group>

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