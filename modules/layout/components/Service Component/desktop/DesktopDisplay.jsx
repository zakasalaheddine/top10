import { Flex } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import Service from "./Service";
import ServiceHeader from "./ServiceHeader";

const DesktopDisplay = () => {
  return (
    <Flex display={["none", "none", "flex"]}>
      <ServiceHeader />
      <ServicesContainer>
        {[...Array(4)].map((service, i) => {
          return <Service key={i} />;
        })}
      </ServicesContainer>
    </Flex>
  );
};

export default DesktopDisplay;

const ServicesContainer = styled(Flex)`
  width: 79%;
  flex-shrink: 0;
  overflow: auto;
`;
