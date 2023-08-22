import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { LoadingCover } from '@/components/LoadingCover/LoadingCover.tsx';
import { routes } from '@/utils/const/routes.tsx';

const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <Suspense fallback={<LoadingCover position={'fixed'} />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
