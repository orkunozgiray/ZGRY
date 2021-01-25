import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    border-radius: 20px;
    background: ${({primary}) => (primary ? '#ba7d8a' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1.5px solid #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; 
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#d6c3c7' : '#afd1db')};
        font-size: 20px;
    }
`;

export const ButtonHero = styled(Link)`
    border-radius: 8px;
    background: ${({primary}) => (primary ? '#ffffff' : '#c3cad6')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1.5px solid #d6d6d6;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; 
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#c3cad6' : '#99adcf')};
        font-size: 20px;
    }
`;

export const ButtonMen = styled(Link)`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#ebf7fa' : '#37a8c4')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1.5px solid #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; 
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#d6c3c7' : '#afd1db')};
        font-size: 20px;
    }
`;

export const ButtonWomen = styled(Link)`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#f0f5c4' : '#afedbf')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1.5px solid #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; 
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#d6c3c7' : '#afd1db')};
        font-size: 20px;
    }
`;

export const ButtonBlog = styled(Link)`
    border-radius: 8px;
    background: ${({primary}) => (primary ? '#8cedbe' : '#afedbf')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1.5px solid #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; 
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#12e37e' : '#afd1db')};
        font-size: 20px;
        font-weight: 500;
    }
`;