import React, { PropsWithChildren } from 'react';

import './center-layout.scss';

function CenterLayout({ children }: PropsWithChildren<unknown>) {
  return <div className="center-layout">{children}</div>;
}

export default CenterLayout;
