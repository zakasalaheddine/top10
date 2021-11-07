import DesktopDisplay from "./desktop/DesktopDisplay";
import MobileDisplay from "./mobile/MobileDisplay";

const Services = ({ topics }) => {
  return (
    <>
      <DesktopDisplay topics={topics} />
      <MobileDisplay topics={topics} />
    </>
  );
};

export default Services;
