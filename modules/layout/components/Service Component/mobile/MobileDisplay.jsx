import styled from "@emotion/styled";
import { AspectRatio, Box, Flex, Text } from "@chakra-ui/layout";
import { FaStar } from "react-icons/fa";
import { Image } from "@chakra-ui/image";
import CustomButton from "../../UI/Button";

const MobileDisplay = ({ topics }) => {
  return (
    <Box w="100%" display={["block", "block", "none"]}>
      <Text fontSize="lg" fontWeight="extrabold" as="h1">
        The Best service Providers
      </Text>
      {topics.map((topic) => {
        return (
          <>
            <ServiceContainer>
              <ImageContainer ratio={3 / 4}>
                <Image
                  src={`https://api-top10.zakadev.com${topic.images[0].url}`}
                />
              </ImageContainer>
              <Box w="100%">
                <Text fontSize="md" fontWeight="bold" mb={4}>
                  {topic.name}
                </Text>
                <RowsContainer>
                  <Text>Rating</Text>
                  <Flex align="center">
                    <Text mr={1}>{topic.features[0].value}</Text>
                    <FaStar color="#ffc107" size="18px" />
                  </Flex>
                </RowsContainer>
                <RowsContainer>
                  <Text>Expert score</Text>
                  <Text>{topic.features[1].value}</Text>
                </RowsContainer>
                <RowsContainer>
                  <Text>Healthy</Text>
                  <Text>{topic.features[2].value}</Text>
                </RowsContainer>
                <RowsContainer>
                  <Text>Calorie Ratio</Text>
                  <Text>{topic.features[3].value}</Text>
                </RowsContainer>
              </Box>
            </ServiceContainer>
            <CustomButton href={topic.href} w="100%">
              Visit
            </CustomButton>
          </>
        );
      })}
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
