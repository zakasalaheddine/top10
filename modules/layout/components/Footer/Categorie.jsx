import { Image } from "@chakra-ui/image";
import { Link, Text } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import { CategorieContainer } from "./CategorieListDesktop";

const Categorie = ({ categorie }) => {
  return (
    <Link to={`/${categorie.slug}`}>
      <CategorieContainer>
        <Logo src={categorie.icon} />
        <CategorieText>{categorie.name}</CategorieText>
      </CategorieContainer>
    </Link>
  );
};

export default Categorie;

const Logo = styled(Image)`
  width: 30px;
  height: 30px;
`;
const CategorieText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-left: 7%;
`;
