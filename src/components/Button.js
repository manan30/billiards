import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ChooserButton = styled.div`
  position: absolute;
  top: ${props => props.top && props.top};
  right: 64px;
  height: 24px;
  background: lightcoral;
  color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1000;

  :hover {
    box-shadow: 2px 2px 2px white;
  }
`;

function Button({ top, text, handler }) {
  return (
    <ChooserButton top={top} onClick={handler}>
      {text}
    </ChooserButton>
  );
}

Button.propTypes = {
  top: PropTypes.string,
  text: PropTypes.string,
  handler: PropTypes.func
};

Button.defaultProps = {
  top: '64px',
  text: '',
  handler: () => {}
};

export default Button;
