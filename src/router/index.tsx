import { useRoutes } from 'react-router-dom';

import Main from '../page/Main';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [{ index: true, element: <Main /> }]
    }
    // { path: '*', element: <NotFound /> }
  ]);
}
