  // AppRouter.jsx 또는 router.jsx
  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
  import HeaderComp from '../components/HeaderComp';
  import IntroComp from '../components/IntroComp';
  import MainComp from '../components/MainComp';
  import FooterComp from '../components/FooterComp';
  import { useState } from 'react';

  const MainLayout = () => {
    return (
      <>
        <HeaderComp />
        <MainComp />
        <FooterComp />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />
    }
  ]);

  const AppRouter = () => {
    const [introStatus, setIntroStatus] = useState(true);
    return (
      <>
        {introStatus ? (
          <IntroComp setIntroStatus={setIntroStatus} />
        ) : (
          <RouterProvider router={router} />
        )}
      </>
    )
  };

  export default AppRouter;
