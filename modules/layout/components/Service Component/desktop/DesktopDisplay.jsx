import { Flex } from "@chakra-ui/layout";
import Slider from "react-slick";
import Service from "./Service";
import ServiceHeader from "./ServiceHeader";
import SliderSettings from "./SliderSettings";

const DesktopDisplay = ({ topics }) => {
  return (
    <Flex display={["none", "none", "flex"]} position="relative">
      <ServiceHeader />
      <Slider {...SliderSettings}>
        {topics.map((topic) => {
          return (
            <Service
              key={topic.id}
              name={topic.name}
              href={topic.href}
              imgUrl={topic.images[0].url}
              features={topic.features}
            />
          );
        })}
      </Slider>
    </Flex>
  );
};

export default DesktopDisplay;
