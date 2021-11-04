import { Flex } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import Slider from "react-slick";
import Service from "./Service";
import ServiceHeader from "./ServiceHeader";
import SliderSettings from "./SliderSettings";

const DesktopDisplay = () => {
  return (
    <Flex display={["none", "none", "flex"]}>
      <ServiceHeader />
      <Slider {...SliderSettings}>
        {[...Array(4)].map((service, i) => {
          return <Service key={i} />;
        })}
      </Slider>
    </Flex>
  );
};

export default DesktopDisplay;
