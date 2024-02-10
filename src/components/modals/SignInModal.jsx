import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap';
import SignUpModal from './SignUpModal';

const SignInModal = ({ showSignInModal, toggleSignInModal }) => {
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const toggleSignUpModal = () => {
        setShowSignUpModal(!showSignUpModal);

        // signup modal 닫을 때 signin modal도 닫는다.
        if (!showSignUpModal) {
            toggleSignInModal();
        };
    };

    return (
        <div>
        <Modal isOpen={showSignInModal}>
            <ModalHeader className="bg-success text-white" toggle={toggleSignInModal}>
                Sign In
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup floating>
                        <Input type="email" id="email" placeholder="Email"/>
                        <Label for="email"> Email </Label>
                    </FormGroup>

                    <FormGroup floating>
                        <Input type="password" id="password" placeholder="Password"/>
                        <Label for="password"> Password </Label>
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter className="d-flex justify-content-center">
                <Button color="success" className="me-3"> Sign In </Button>
                <Button onClick={toggleSignUpModal} color="primary"> Sign Up </Button>
            </ModalFooter>
        </Modal>
        <SignUpModal showSignUpModal={showSignUpModal} toggleSignUpModal={toggleSignUpModal}></SignUpModal>
        </div>
    )
};

export default SignInModal;