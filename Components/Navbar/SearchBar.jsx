import { Center } from "@chakra-ui/layout";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ButtonIcon, Input } from "../styled-components";

const SearchBar = () => {
  return (
    <Center w="159px" h="31px" border="1px solid #01036A" borderRadius="15px">
      <Input
        type="search"
        placeholder="Search"
        fontSize="14px"
        margin="0 0 0 8px"
      />
      <ButtonIcon width="38px" height="23px" margin="0 4px" backColor="#01036A">
        <AiOutlineSearch color="#fff" size="13px" />
      </ButtonIcon>
    </Center>
  );
};

export default SearchBar;
