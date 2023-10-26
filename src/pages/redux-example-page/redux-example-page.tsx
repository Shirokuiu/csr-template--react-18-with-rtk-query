import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import CenterLayout from 'src/shared/layouts/center-layout/center-layout';
import PageLayout from 'src/shared/layouts/page-layout/page-layout';
import { mainPageSliceActions } from 'src/store/slices/main-page-slice/main-page-slice';
import { getTitle } from 'src/store/slices/main-page-slice/selectors';

function ReduxExamplePage() {
  const title = useAppSelector(getTitle);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(mainPageSliceActions.clearState());
  };

  return (
    <PageLayout>
      <CenterLayout>
        <h2>{title}</h2>
        <button type="button" onClick={handleButtonClick}>
          Reset state
        </button>
        <br />
        <br />
        <div>
          <Link to="/">На главную</Link>
        </div>
      </CenterLayout>
    </PageLayout>
  );
}

export default ReduxExamplePage;
