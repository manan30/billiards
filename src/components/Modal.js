import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: grey;
  opacity: 0.5;
  z-index: 100;
`;

const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 290px;
  width: calc(100vw - 40%);
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 30px;
  text-align: center;
`;

const ModalText = styled.span`
  color: black;
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
  border-radius: 10px;
  cursor: pointer;

  :hover {
    box-shadow: 2px 2px 2px black;
  }
`;

function Modal({ handler }) {
  return (
    <ModalBackground>
      <ModalContainer>
        <ModalText>
          Please press space bar to hit the cue ball. You&apos;ll be able to
          play multiple shots with this version. Also, whenever a ball hits a
          pocket it will be taken of the table and shown on the upper right of
          the screen. However, currently there isn&apos;t a way to change the
          direction of the cue and hence the cue ball will only go in one
          direction.Ah and yes along side translation motion, the balls with
          transfer rotational motion on collisions.
        </ModalText>
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
