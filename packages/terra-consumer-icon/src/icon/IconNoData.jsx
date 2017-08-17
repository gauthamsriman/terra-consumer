/* eslint-disable */
import React from 'react';
import IconBase from 'terra-icon/lib/IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path data-cap="butt" fill="none" stroke="#444" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" d="M38 18v-8H20l-4-6H2v40h35l8-26H10L2 44" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconNoData";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
