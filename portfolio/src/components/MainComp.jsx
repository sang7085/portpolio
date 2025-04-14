import VisualComp from "./VisualComp";
import AboutMeComp from "./AboutMeComp";
import WorkComp from "./WorkComp";

const MainComp = () => {

  const imageModules = import.meta.glob("../assets/images/img-intro*.jpg", { eager: true });

  return (
    <>
      <VisualComp />
      <AboutMeComp />
      <WorkComp />
    </>
  );
};

export default MainComp;
