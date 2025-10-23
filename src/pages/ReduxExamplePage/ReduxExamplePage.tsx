import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/shared/hooks';
import CenterLayout from 'src/shared/layouts/CenterLayout/CenterLayout';
import PageLayout from 'src/shared/layouts/PageLayout/PageLayout';
import { mainPageSliceActions } from 'src/store/slices/mainPageSlice/mainPageSlice';
import { getTitle } from 'src/store/slices/mainPageSlice/selectors';

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
