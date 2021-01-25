import React from 'react';
import emailjs from 'emailjs-com';
import { 
    ContactForm,
    ContactFormGroup,
    ContactFormLabel,
    ContactFormInput,
    ContactFormButton,
    ContainerWrapper,
    ContactContainer,
    InfoContainer,
    InfoForm,
    InfoLabel
} from './ContactUsElements';

const ContactPage = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_1z43ma8', e.target, 'user_e5zvSIcFNMAf1ErMYzsHH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <>
            <ContainerWrapper id='contactus'>
                <InfoContainer>
                    <InfoForm>
                        <InfoLabel>Company Name</InfoLabel>
                        <InfoLabel>Address</InfoLabel>
                        <InfoLabel>Phone</InfoLabel>
                        <InfoLabel>askda</InfoLabel>
                        <InfoLabel>askda</InfoLabel>
                        <InfoLabel>askda</InfoLabel>
                        <InfoLabel>askda</InfoLabel>
                        <InfoLabel>askda</InfoLabel>
                    </InfoForm>    
                </InfoContainer>
                <ContactContainer>
                    <ContactForm className="contact-form" onSubmit={sendEmail}>
                        <ContactFormGroup>
                            <ContactFormLabel>Subject</ContactFormLabel>
                            <ContactFormInput type="text" name="subject" placeholder="Subject" />
                        </ContactFormGroup>
                        <ContactFormGroup>
                            <ContactFormLabel>First Name</ContactFormLabel>
                            <ContactFormInput type="text" name="firstname" placeholder="First Name" />
                        </ContactFormGroup>
                        <ContactFormGroup>
                            <ContactFormLabel>Last Name</ContactFormLabel>
                            <ContactFormInput type="text" name="lastname" placeholder="Last Name" />
                        </ContactFormGroup>  
                        <ContactFormGroup>
                            <ContactFormLabel>Email</ContactFormLabel>
                            <ContactFormInput type="email" name="email" placeholder="name@gmail.com" />
                        </ContactFormGroup>
                        <ContactFormGroup>
                            <ContactFormLabel>Message</ContactFormLabel>
                            <ContactFormInput type="text" name="text" placeholder="Type Your Message" />
                        </ContactFormGroup>
                        <ContactFormButton value="Send" active type="submit">Send</ContactFormButton>
                    </ContactForm>
                </ContactContainer>    
            </ContainerWrapper>
        </>
    );
}

export default ContactPage;
