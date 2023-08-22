import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RelayEnvironmentProvider } from 'react-relay';
import { ChakraProvider, Spinner } from '@chakra-ui/react';

import { App } from '@/components/App.tsx';

import { RelayEnvironment } from './utils/RelayEnvironment.ts';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={<Spinner />}>
          <App />
        </Suspense>
      </RelayEnvironmentProvider>
    </ChakraProvider>
  </StrictMode>,
);
