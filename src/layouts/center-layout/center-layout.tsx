import React, { PropsWithChildren } from 'react';

import './center-layout.scss';

function CenterLayout({ children }: PropsWithChildren<Record<string, string>>) {
  return <div className="center-layout">{children}</div>;
}

export default CenterLayout;
