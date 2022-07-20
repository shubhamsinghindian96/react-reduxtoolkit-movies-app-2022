// React Slick Carousel Settings
export const settings = {
  dots: false, //( ... )
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  initialSlide: 0,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
        infinite: false,
        dots: false,
        autoplay: true,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: false,
        dots: false,
        autoplay: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false,
        autoplay: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        autoplay: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
  ],
};
