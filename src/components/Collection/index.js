import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';
import { GlobalStyle } from '../../globalStyles';
import { Button } from '../ButtonElement';
import { 
  BtnWrap,
} from './CollectionElements';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ButtonModal = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function CollectionPage( primary, dark, dark2,) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <ButtonModal onClick={openModal}>I'm a modal</ButtonModal>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
      <BtnWrap>
        <Button 
          to='women'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
          primary={primary ? 1 : 0}
          dark={dark ? 1 : 0}
          dark2={dark2 ? 1 : 0}
        >
          ButtonWomen
        </Button>
        <Button 
          to='men'
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
          primary={primary ? 1 : 0}
          dark={dark ? 1 : 0}
          dark2={dark2 ? 1 : 0}
        >
          ButtonMen
        </Button>
      </BtnWrap>  
    </>
  );
}

export default CollectionPage;
