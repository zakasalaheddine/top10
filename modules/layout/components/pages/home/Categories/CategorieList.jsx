import styled from "@emotion/styled";
import { Box, HStack, Text } from "@chakra-ui/layout";
import Slider from "react-slick";
import Categorie from "./Categorie";
import SliderSettings from "./SliderSettings";

const CategorieList = ({ categories }) => {
  return (
    <Container display={["none", "block"]}>
      <Title>Top10 Cataloge</Title>
      <Slider {...SliderSettings}>
        {categories.map((cat, i) => (
          <Categorie key={i} categorie={cat} />
        ))}
      </Slider>
    </Container>
  );
};

export default CategorieList;

//styled components
const Container = styled(Box)`
  width: 100%;
`;

const Title = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  line-height: 27px;
  margin-bottom: 24px;
`;
