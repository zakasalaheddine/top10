import { Box } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import Navbar from "./components/navbar";
import Footer from "./components/Footer/Footer";

export default function Layout({ children, categories }) {
  return (
    <LayoutContainer>
      <Navbar />
      <ContentContainer as="main">{children}</ContentContainer>
      <Footer categories={categories} />
    </LayoutContainer>
  );
}

const LayoutContainer = styled(Box)``;
const ContentContainer = styled(Box)``;
