import { PropsWithChildren, ReactElement } from 'react';

import { PropsWithCssClassName } from 'src/shared/types/shared';

export type PageLayoutProps = PropsWithChildren<
  PropsWithCssClassName<{
    renderFooter?: () => ReactElement | null;
  }>
>;
