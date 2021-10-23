import { Flex } from "@chakra-ui/layout";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const Rating = ({ nbrStar, size }) => {
  return (
    <Flex aling="center">
      {[...Array(5)].map((star, i) => {
        if (nbrStar >= i + 1) {
          return <FaStar size={size} color="#ffc107" key={i} />;
        }
        if (nbrStar < i + 1 && i + 1 - nbrStar < 1) {
          return <FaStarHalfAlt size={size} color="#ffc107" key={i} />;
        }
        return <FaRegStar size={size} color="#ffc107" key={i} />;
      })}
    </Flex>
  );
};

export default Rating;
