import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL} from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import GridCards from "../commons/GridCards";
import { Row } from "antd";

function LandingPage() {

    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endpoint)

    }, [])


    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovies([...Movies, ...response.results])
                setMainMovieImage(response.results[0])
            })
    }


    return (
      <div style={{ width: '100%', margin: '0' }}>

          {/* { Main Image } */}
          {/* MainMovieImage 가 있으면 M ainImage component를 가져와라 */}
        
          {MainMovieImage &&
            <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
            title={ `${MainMovieImage.original_title}` }
            description={ `${MainMovieImage.overview}` }
            />
          }

          <div style={{ width:"85%", margin: '1rem auto' }}>
              <h3>Movies by lastest </h3>
              <hr />
              {/* { Movie Grid Cards } */}
              {/* <Row>
                { Movies && Movies.map((movie, index) => (
                    <React.Fragment key={index}>
                        <GridCards
                            image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                            movieId={movie.id}
                            movieName={movie.original_title}
                        />
                    </React.Fragment>
                ))}
              </Row> */}

                <Row gutter={[16, 16]} >

                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <GridCards
                                landingPage
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        </React.Fragment>
                    ))}

                </Row>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center'}}>
              <button>Load More</button>
          </div>
          
      </div>
    )
}

export default LandingPage
