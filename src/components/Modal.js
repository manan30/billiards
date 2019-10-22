import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: black;
  opacity: 0.5;
  z-index: 100;
`;

const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 128px;
  width: calc(100vw - 60%);
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 6%;
  text-align: center;
`;

const ModalText = styled.span`
  color: blue;
  font-size: 24px;
  font-weight: bolder;
`;

const ModalButton = styled.div`
  height: 24px;
  width: 48px;
  margin: 30px auto;
  background: black;
  color: white;
  padding: 10px;
  border-radius: 10%;
  cursor: pointer;

  :hover {
    box-shadow: 2px 2px 2px black;
  }
`;

function Modal({ handler }) {
  return (
    <ModalBackground>
      <ModalContainer>
        <ModalText>Please press space bar to hit the cue ball</ModalText>
        <ModalButton onClick={handler}>Ok</ModalButton>
      </ModalContainer>
    </ModalBackground>
  );
}

Modal.propTypes = {
  handler: PropTypes.func
};

Modal.defaultProps = {
  handler: () => {}
};

export default Modal;
