import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import PageLayout from '../../layouts/page-layout/page-layout';
import SvgSpriteIcon from '../../shared/components/svg-sprite-icon/svg-sprite-icon';
import { SvgSpriteIconId } from '../../shared/components/svg-sprite-icon/types';

function SvgIconsExamplePage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>svg иконок</title>
      </Helmet>
      <PageLayout>
        <ul>
          <li>
            <h1>svg иконок</h1>
          </li>
          <li>
            <SvgSpriteIcon id={SvgSpriteIconId.Telegram} />
          </li>
          <li>
            <SvgSpriteIcon id={SvgSpriteIconId.PhoneCall} />
          </li>
          <li>
            <SvgSpriteIcon id={SvgSpriteIconId.ShoppingCart} />
          </li>
          <li>
            <Link to="/">Go home</Link>
          </li>
        </ul>
      </PageLayout>
    </HelmetProvider>
  );
}

export default SvgIconsExamplePage;
