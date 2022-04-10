import React from 'react'
import Timer from './Timer/Timer'
import {Form, Button, Modal, Row, Card} from 'react-bootstrap'
import $ from "jquery";

class UserForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '', 
            colour: '',
            level: '',
            message: ''
        };
        this.generateAvatar = this.generateAvatar.bind(this);
        this.MySubmit = this.MySubmit.bind(this);
    }

    generateAvatar() {
        $.ajax({
            url: "https://random.dog/woof.json?ref=apilist.fun",
            success: function(data) {
                $('.avatar').attr('src', data.url);
            }
        });
    }

    MySubmit(event) {
        event.preventDefault();
        this.generateAvatar();
        this.setState({
            username: $("input[name='username']").val(),
            email: $("input[name='email']").val(),
            password: $("input[name='password']").val(),
            colour: $("input[name='colour']:checked").parent().text(),
            level: $("select[name='level']").find(":selected").text(),
            message: $("textarea[name='message']").val()
        }, () => {
            $.ajax({
                type: "POST",
                url: "https://localhost:44385/api/User/add_player",
                data: JSON.stringify({
                    name: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    level: this.state.level
                }),
                headers: {
                  'Content-Type': 'application/json'
                },
                success: function(data) {
                    alert('Player has been added:' + 
                        '\nName : ' + data.player.name + 
                        '\nEmail : ' + data.player.email + 
                        '\nPassword : ' + data.player.password + 
                        '\nLevel : ' + data.player.level
                    );
                    console.log(data);
                }
            });
        });

    }

    render() {
        return (
            <div>
                <Modal.Dialog className="mt-4 text-white bordered mb-2">
                    <Modal.Header className="justify-content-center fs-5 bg-form">
                        User information
                    </Modal.Header>
                    <Card>
                        <Card.Img className="avatar" style={{width:'100%', maxHeight:'550px'}}/>
                    </Card>
                    <Modal.Body className="form bg-form">
                        <Form onSubmit={(event) => this.MySubmit(event)}>
                            <Form.Group>
                                <Form.Label>
                                    User name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="User name"
                                    required
                                    pattern='^[a-zA-Z0-9]+$'
                                    minLength={5}
                                    maxLength={10}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    User email
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="User email"
                                    required
                                    pattern='^[\w\.]+@([\w]+\.)+[\w]{2,4}$'>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    User password
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="User password"
                                    required
                                    pattern='^[a-zA-Z0-9]+$'>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Choose colour of the chess:
                                </Form.Label><br/>
                                <Form.Check
                                    name="colour"
                                    label="White"
                                    inline 
                                    type="radio">
                                </Form.Check>
                                <Form.Check
                                    name="colour"
                                    label="Black"
                                    inline 
                                    type="radio">
                                </Form.Check>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Choose round level:
                                </Form.Label>
                                <Form.Select 
                                    name="level">
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Write text:
                                </Form.Label>
                                <Form.Control
                                    name="message"
                                    as="textarea"
                                    style={{height: '40px'}}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Row className="justify-content-center mb-2">
                                    <Button
                                        type="reset">
                                        Reset 
                                    </Button>
                                </Row>
                                <Row className="justify-content-center">
                                    <Button
                                        type="submit">
                                        Submit
                                    </Button>
                                </Row>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal.Dialog>
                <Timer/>
            </div>
        );
    }
}
export default UserForm;