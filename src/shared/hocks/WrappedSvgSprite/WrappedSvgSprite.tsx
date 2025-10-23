import React from 'react';
import ReactDOM from 'react-dom';

import SvgSprite from 'src/shared/components/svgSprite/svgSprite';

function WrappedSvgSprite() {
  return ReactDOM.createPortal(<SvgSprite />, document.body);
}

export default WrappedSvgSprite;
