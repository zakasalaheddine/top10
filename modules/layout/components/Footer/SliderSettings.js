import classes from "./style/footer.module.css";
import { Prev, Next } from "./NextPrevButton";

const SliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 3,
  className: `${classes.slides}`,
  nextArrow: <Next />,
  prevArrow: <Prev />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1470,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};
export default SliderSettings;
