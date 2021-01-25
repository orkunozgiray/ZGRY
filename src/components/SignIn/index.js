import React from 'react';
import { 
    Container, 
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text 
} from './SigninElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>ZGRY</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign In To Your Account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required></FormInput>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required></FormInput>
                            <FormButton type='submit'>Sign In</FormButton>
                            <Text>Forgot Your Password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;
