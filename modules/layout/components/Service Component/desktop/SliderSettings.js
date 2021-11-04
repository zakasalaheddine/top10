import classes from "./style/services.module.css";
import { Prev, Next } from "./NextPrevButton";

const SliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  className: `${classes.slides}`,
  nextArrow: <Next />,
  prevArrow: <Prev />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
export default SliderSettings;
