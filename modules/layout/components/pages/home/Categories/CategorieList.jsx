import styled from "@emotion/styled";
import { Box, HStack, Text } from "@chakra-ui/layout";
import Categorie from "./Categorie";

const CategorieList = ({ categories }) => {
  return (
    <Container display={["none", "block"]}>
      <Title>Top10 Cataloge</Title>
      <CategoriesContainer spacing={5}>
        {categories.map((cat, i) => (
          <Categorie key={i} categorie={cat} />
        ))}
      </CategoriesContainer>
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

const CategoriesContainer = styled(HStack)`
  overflow: auto;
`;
