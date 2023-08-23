import { lazy } from 'react';
import { RouteObject } from 'react-router';

import { LayoutPage } from '@/components/Layout/LayoutPage.tsx';

const HomePage = lazy(() => import('@/pages/Home'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];
