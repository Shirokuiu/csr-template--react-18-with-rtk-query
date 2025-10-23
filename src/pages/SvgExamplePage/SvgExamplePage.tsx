import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageLayout from 'src/shared/layouts/PageLayout/PageLayout';
import SvgSpriteIcon from 'src/shared/components/SvgSpriteIcon/SvgSpriteIcon';
import { SvgSpriteIconId } from 'src/shared/components/SvgSpriteIcon/types';

function SvgExamplePage() {
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

export default SvgExamplePage;
