import styled from 'styled-components';

export const ContainerWrapper = styled.div `
    height: 568px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff1f4b;
    padding-right: 350px;

    
    @media screen and (max-width: 968px) {
        height: 600px;
        padding-left: 0;
        padding-top: 35px;
        padding-right: 0;
    }

    @media screen and (max-width: 768px) {
        height: 1050px;
        padding-top: 35px;
        padding-right: 0;
        flex-direction: column;
    }
`;

export const ContactContainer = styled.div`
    padding-left: 50px;
    padding-bottom: 30px;

    @media screen and (max-width: 920px) {
        flex-direction: column;
        padding-left: 0;
        padding-bottom: 30px;
    }
`;


export const ContactForm = styled.form`
    height: 450px;
    background-color: #fff;
    width: 100%;
    border-radius: 20px;
    align-items: center;
    
    @media screen and (max-width: 920px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const ContactFormGroup = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 920px) {
        flex-direction: column;
        margin: -33px 0 25px 0;
    }
`;

export const ContactFormLabel = styled.p`
    margin: 10px auto 0 10px;
    font-size: 16px;
    padding: 20px 20px;
`;

export const ContactFormInput = styled.input`
    background: #ede8ea;
    padding: 10px 30px ;
    border-radius: 8px;
    margin-right: 20px;
    outline: none;
    font-size: 16px;
    border: 1px solid #000;

    &::placeholder {
        color: #b7babd;
    }

    @media screen and (max-width: 920px) {
        margin: -15px;
    }
`;

export const ContactFormButton = styled.button`
    border-radius: 32px;
    background: ${({primary}) => (primary ? '#c24468' : '#7c9cd9') };
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px') };
    margin: 20px 100px;
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px') };
    outline: none;
    border: none;
    cursor: pointer;
    width: 50%;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${({primary}) => (primary ? ' #e090a5' : '#3dad8c')};
    }

    @media screen and (max-width: 960px) {
        width: 40%;
    }
`;

export const InfoContainer = styled.div`
    padding-left: 350px;
    padding-bottom: 30px;


    @media screen and (max-width: 920px) {
        flex-direction: column;
        padding-left: 0;
        padding-bottom: 80px;
    }
`;

export const InfoForm = styled.div`
    height: 450px;
    background-color: #fff;
    color: #000;
    align-items: center;
    justify-content: center;
    width: 400px;
    border-radius: 20px;
    
    @media screen and (max-width: 920px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const InfoLabel = styled.p`
    margin: 10px auto 1 10px;
    font-size: 16px;
    padding: 15px 150px;
`;