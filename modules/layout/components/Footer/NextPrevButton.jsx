import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import classes from "./style/footer.module.css";

export const Prev = ({ onClick }) => {
  return (
    <div className={classes["slick-prev"]} onClick={onClick}>
      <BsFillArrowLeftCircleFill size="24px" />
    </div>
  );
};
export const Next = ({ onClick }) => {
  return (
    <div className={classes["slick-next"]} onClick={onClick}>
      <BsFillArrowRightCircleFill size="24px" />
    </div>
  );
};
