//SERVER ROUTES
export const USER_SERVER = '/api/users';

export const API_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = '98327a35657ef553442ac26f7b5b22d8';
export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
export const SLICK_SETTINGS = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    centerPadding: '0px',
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  }