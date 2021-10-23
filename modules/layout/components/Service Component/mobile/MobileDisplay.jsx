import styled from "@emotion/styled";
import { AspectRatio, Box, Flex, Text } from "@chakra-ui/layout";
import { FaStar } from "react-icons/fa";
import { Image } from "@chakra-ui/image";

const MobileDisplay = () => {
  return (
    <Box w="100%" display={["block", "block", "none"]}>
      <Text fontSize="lg" fontWeight="extrabold" as="h1">
        The Best service Providers
      </Text>
      {/* here we will loop over the service array */}
      <ServiceContainer>
        <ImageContainer ratio={3 / 4}>
          <Image src="/images/Rectangle51.jpg" />
        </ImageContainer>
        <Box w="100%">
          <Text fontSize="md" fontWeight="bold" mb={4}>
            Service Provider
          </Text>
          <RowsContainer>
            <Text>Rating</Text>
            <Flex align="center">
              <Text mr={1}>4.5</Text>
              <FaStar color="#ffc107" size="18px" />
            </Flex>
          </RowsContainer>
          <RowsContainer>
            <Text>Expert score</Text>
            <Text>4.5</Text>
          </RowsContainer>
          <RowsContainer>
            <Text>Healthy</Text>
            <Text>3.5</Text>
          </RowsContainer>
          <RowsContainer>
            <Text>Calorie Ratio</Text>
            <Text>3%</Text>
          </RowsContainer>
        </Box>
      </ServiceContainer>
      <Button>Visit</Button>
    </Box>
  );
};

export default MobileDisplay;

const ServiceContainer = styled(Flex)`
  margin: 15px 0;
  align-items: center;
`;
const ImageContainer = styled(AspectRatio)`
  width: 200px;
  margin-right: 18px;
  border-radius: 15px;
  overflow: hidden;
`;
const RowsContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  height: 35px;
  & p {
    font-size: ${({ fontSize }) => fontSize || "14px"};
  }
  & > p:first-of-type {
    font-weight: bold;
  }
`;
const Button = styled.button`
  width: 100%;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 15px;
  background-color: #01036a;
  color: #fff;
  padding: 10px 0;
`;
