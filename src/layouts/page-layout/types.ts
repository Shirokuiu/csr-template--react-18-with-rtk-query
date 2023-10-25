import { PropsWithChildren } from 'react';

import { PropsWithCssClassName } from 'src/types/shared';

export type PageLayoutProps = PropsWithChildren<
  PropsWithCssClassName<{
    renderFooter?: () => JSX.Element | null;
  }>
>;
