import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL} from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import GridCards from "../commons/GridCards";
import { Row, Button } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./arrow.css";

function LandingPage() {

    const settings = {
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

    let genres = []
    const [PopularMovie, setPopularMovie] = useState([])
    const [UpcomingMovie, setUpcomingMovie] = useState([])
    const [TopRatedMovie, setTopRatedMovie] = useState([])
    const [Recommendations, setRecommendations] = useState([])


    useEffect(() => {
        fetchPopularMovie()
        fetchUpcomingMovie()
        fetchTopRatedMovie()
        fetchRecommendations()
    }, [])
    
        const fetchPopularMovie = ()  => {
            fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`)
                .then(response => response.json())
                .then(response => {
                    console.log(response.results)
                    setPopularMovie(response.results.slice(0, 12)) 
                })
            }
    
        const fetchUpcomingMovie = ()  => {
            fetch(`https://api.themoviedb.org/3/movie/upcoming/?api_key=${API_KEY}&language=ko-KR&page=1`)
                .then(response => response.json())
                .then(response => {
                    setUpcomingMovie(response.results.slice(0, 12)) 
                })
            }

        const fetchTopRatedMovie= ()  => {
            fetch(`${API_URL}movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`)
                .then(response => response.json())
                .then(response => {
                    setTopRatedMovie(response.results.slice(0, 12)) 
                })
            }

        const fetchRecommendations= ()  => {
            fetch(`${API_URL}movie/497698/similar?api_key=${API_KEY}&language=ko-KR`)
                .then(response => response.json())
                .then(response => {
                    setRecommendations(response.results.slice(0, 12)) 
                })
            }

    return (
      <div style={{ width: '100%', margin: '0' }}>

          <div style={{ width:"85%", margin: '1rem auto' }}>
              <h1 style={{marginBottom: '0px', marginLeft: '5px'}}>최신 인기 영화</h1>
                <Slider {...settings}>
                    {PopularMovie && PopularMovie.map((movie, index) => (
                        <React.Fragment key={index}>
                            <div className="movieNum">{index+1}</div>
                            <GridCards
                                landingPage
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.title}
                                date={movie.release_date.substr(0,4)}
                                average={movie.vote_average}
                            />
                        </React.Fragment>
                    ))}
                </Slider>
                <br /><br /><br />
              <h1 style={{marginBottom: '0px', marginLeft: '5px'}}>개봉 예정 영화</h1>
                <Slider {...settings}>
                    {UpcomingMovie && UpcomingMovie.map((movie, index) => (
                        <React.Fragment key={index}>
                            <div className="movieNum">{index+1}</div>
                            <GridCards
                                landingPage
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.title}
                                date={movie.release_date.substr(0,4)}
                                average={movie.vote_average}
                            />
                        </React.Fragment>
                    ))}
                </Slider>
                <br /><br /><br />
              <h1 style={{marginBottom: '0px', marginLeft: '5px'}}>최고 평점 영화</h1>
                <Slider {...settings}>
                    {TopRatedMovie && TopRatedMovie.map((movie, index) => (
                        <React.Fragment key={index}>
                            <div className="movieNum">{index+1}</div>
                            <GridCards
                                landingPage
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.title}
                                date={movie.release_date.substr(0,4)}
                                average={movie.vote_average}
                            />
                        </React.Fragment>
                    ))}
                </Slider>
                <br /><br /><br />
              <h1 style={{marginBottom: '0px', marginLeft: '5px'}}>'블랙위도우'와 유사한 영화</h1>
                <Slider {...settings}>
                    {Recommendations && Recommendations.map((movie, index) => (
                        <React.Fragment key={index}>
                            <div className="movieNum"></div>
                            <GridCards
                                landingPage
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.title}
                                date={movie.release_date.substr(0,4)}
                                average={movie.vote_average.toFixed(1)}
                            />
                        </React.Fragment>
                    ))}
                </Slider>
          </div>
      </div>
    )
}

export default LandingPage
