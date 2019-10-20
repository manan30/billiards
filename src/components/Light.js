import React from 'react';
import PropTypes from 'prop-types';

function Light(props) {
  const { type } = props;
  const LightType = type;

  return <LightType {...props} />;
}

Light.propTypes = {
  type: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.any)
};

Light.defaultProps = {
  position: []
};

export default Light;
