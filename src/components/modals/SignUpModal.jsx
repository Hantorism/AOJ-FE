import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const SignUpModal = ({showSignUpModal, toggleSignUpModal}) => {
    return (
        <div>
            <Modal isOpen={showSignUpModal}>
                <ModalHeader toggle={toggleSignUpModal} className="bg-success text-white">
                    Sign Up
                </ModalHeader>
                <ModalBody>
                    <Form>
                    <FormGroup floating>
                        <Input type="text" id="userName" placeholder="User Name"/>
                        <Label for="username">User Name</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input type="email" id="email" placeholder="Email"/>
                        <Label for="email">Email</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input type="password" id="password" placeholder="Password"/>
                        <Label for="password">Password</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input type="password" id="passwordCheck" placeholder="Password Check"/>
                        <Label for="password">Password Check</Label>
                    </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter className="d-flex justify-content-center">
                    <Button color="success">Sign Up</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};

export default SignUpModal;