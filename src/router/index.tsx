import { Suspense, lazy } from 'react';
import NoMatch from '@component/noMatch';
import Loading from '@component/loading';

const Home = lazy(() => import('@page/home'));
const Login = lazy(() => import('@page/login'));

const Element = (view: JSX.Element) => {
  return <Suspense fallback={<Loading />}>{view}</Suspense>;
};

const routes = [
  {
    path: '/',
    exact: true,
    element: Element(<Home />),
  },
  {
    path: '/login',
    exact: false,
    element: Element(<Login />),
  },
  {
    path: '*',
    element: <NoMatch />,
  },
];

export default routes;
