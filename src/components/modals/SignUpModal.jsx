import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const SignUpModal = ({showSignUpModal, toggleSignUpModal}) => {
    const [input, setInput] = useState({userName: "", email:"", password: "", passwordCheck: ""});

    const handleSignUp = () => {
        console.log("Sign Up 버튼이 눌렸습니다.");
        toggleSignUpModal();
    }

    const handleInputChange = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        setInput({
            ...input,
            [id]: value
        });

        console.log(input);
    }
    
    return (
        <div>
            <Modal isOpen={showSignUpModal}>
                <ModalHeader toggle={toggleSignUpModal} style= {{"backgroundColor": "#082E5D", "color":"white"}}>
                    Sign Up
                </ModalHeader>
                <ModalBody>
                    <Form>
                    <FormGroup floating>
                        <Input type="text" id="userName" placeholder="User Name" onChange={handleInputChange}/>
                        <Label for="username">User Name</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input type="email" id="email" placeholder="Email" onChange={handleInputChange}/>
                        <Label for="email">Email</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input type="password" id="password" placeholder="Password" onChange={handleInputChange}/>
                        <Label for="password">Password</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input type="password" id="passwordCheck" placeholder="Password Check" onChange={handleInputChange}/>
                        <Label for="password">Password Check</Label>
                    </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter className="d-flex justify-content-center">
                    <Button style= {{"backgroundColor": "#082E5D"}} onClick={handleSignUp}>Sign Up</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};

export default SignUpModal;