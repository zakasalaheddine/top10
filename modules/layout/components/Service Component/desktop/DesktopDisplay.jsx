import { Flex } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import ServiceHeader from "./ServiceHeader";

const DesktopDisplay = () => {
  return (
    <Flex display={["none", "none", "flex"]}>
      <ServiceHeader />
      {/* here i'll create the list of services */}
    </Flex>
  );
};

export default DesktopDisplay;
