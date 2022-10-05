import { Suspense } from 'react';
import Navigation from './Navigation';
import OurRoutes from './OurRoutes';

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <OurRoutes />
      </Suspense>
    </>
  );
};
