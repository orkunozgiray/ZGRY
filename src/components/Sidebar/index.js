import React from 'react';
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLinks,
    SideBtnWrap,
    SidebarRoute
 } from './Sidebar.elements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to='about' onClick={toggle}>About</SidebarLinks>
                    {/* <SidebarLinks to='women' onClick={toggle}>Women</SidebarLinks>
                    <SidebarLinks to='men' onClick={toggle}>Men</SidebarLinks> */}
                    <SidebarLinks to='collection' onClick={toggle}>Collection</SidebarLinks>
                    <SidebarLinks to='blog' onClick={toggle}>Blog</SidebarLinks>
                    <SidebarLinks to='team' onClick={toggle}>Team</SidebarLinks>
                    <SidebarLinks to='contactus' onClick={toggle}>Contact Us</SidebarLinks>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;
