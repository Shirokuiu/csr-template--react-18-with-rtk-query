/// <reference types="vite-plugin-svgr/client" />
import GeneratedSvgSprite from 'src/assets/sprites/_sprite.svg?react';

import './svg-sprite.scss';

function SvgSprite() {
  return <GeneratedSvgSprite className="svg-sprite" />;
}

export default SvgSprite;
