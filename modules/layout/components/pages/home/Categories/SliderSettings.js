import classes from "./style/categorie.module.css";
import { Prev, Next } from "./NextPrevButton";

const SliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll: 3,
  className: `${classes.slides}`,
  nextArrow: <Next />,
  prevArrow: <Prev />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 8,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
};
export default SliderSettings;
