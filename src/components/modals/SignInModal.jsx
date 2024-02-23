import React, { useContext, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap';
import SignUpModal from './SignUpModal';
import CryptoJS from "crypto-js";
import Context from "../contexts/Context";

const SignInModal = ({ showSignInModal, toggleSignInModal }) => {
    const {setIsSignedIn} = useContext(Context);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [input, setInput] = useState({email: "", password: ""});

    const toggleSignUpModal = () => {
        setShowSignUpModal(!showSignUpModal);
    };

    const handleSignIn = () => {
        console.log("Sign In 버튼이 눌렸습니다.");
        localStorage.setItem('userInfo', JSON.stringify({
            'nickname': 'zzang12'
        }));
        setIsSignedIn(true);
        toggleSignInModal();
    }

    const handleSignUp = () => {
        console.log("Sign Up 버튼이 눌렸습니다.");
        toggleSignInModal();
        toggleSignUpModal();
    }

    const handleInputChange = (event) => {
        const id = event.target.id;
        let value = event.target.value;
        if (id === "password") {
            value = CryptoJS.SHA256(value).toString();
        }

        setInput({
            ...input,
            [id]: value
        });

        console.log(input);

    }

    return (
        <div>
        <Modal isOpen={showSignInModal}>
            <ModalHeader style= {{"backgroundColor": "#082E5D", "color": "white"}} toggle={toggleSignInModal}>
                Sign In
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup floating>
                        <Input type="email" id="email" placeholder="Email" onChange={handleInputChange}/>
                        <Label for="email"> Email </Label>
                    </FormGroup>

                    <FormGroup floating>
                        <Input type="password" id="password" placeholder="Password" onChange={handleInputChange}/>
                        <Label for="password"> Password </Label>
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter className="d-flex justify-content-center">
                <Button style= {{"backgroundColor": "#082E5D"}} className="me-3" onClick={handleSignIn}> Sign In </Button>
                <Button style= {{"backgroundColor": "#082E5D", "color": "white"}} onClick={handleSignUp}> Sign Up </Button>
            </ModalFooter>
        </Modal>
        <SignUpModal showSignUpModal={showSignUpModal} toggleSignUpModal={toggleSignUpModal}></SignUpModal>
        </div>
    )
};

export default SignInModal;