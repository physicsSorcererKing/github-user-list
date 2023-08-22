import { lazy } from 'react';
import { RouteObject } from 'react-router';

const HomePage = lazy(() => import('@/pages/Home'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
];
