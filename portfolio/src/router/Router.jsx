import { Routes, Route } from 'react-router-dom'

import HeaderComp from '../components/HeaderComp'
import IntroComp from '../components/IntroComp'
import MainComp from '../components/MainComp'
import WorkComp from '../components/WorkComp'
import FooterComp from '../components/FooterComp'

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeaderComp />
            <IntroComp />
            <MainComp />
            <WorkComp />
            <FooterComp />
          </>
        }
      />
    </Routes>
  )
}

export default Router;
