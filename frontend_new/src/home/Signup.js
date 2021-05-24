import { ApplicationContext } from '../ApplicationContext';
import { useContext, useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import config from '../config.json';

function SignupScreen() {
    const { dispatch } = useContext(ApplicationContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
        try {
            const result = await axios.post(config.backend + '/login', {
                body: {
                    username,
                    password,
                }
            });

            console.dir(result);
            if (result.status === 200) {
                dispatch({ type: 'LOGIN_SUCCESS' })
            } else {
                dispatch({ type: 'LOGIN_FAIL' })
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                onChange={e => setUsername(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Re Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button
                            variant="primary"
                            onClick={() => login()}>
                            Login
                         </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SignupScreen;