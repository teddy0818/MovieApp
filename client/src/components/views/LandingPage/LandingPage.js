import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL} from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import GridCards from "../commons/GridCards";
import { Row } from "antd";

function LandingPage() {

    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [CurrntPage, setCurrntPage] = useState(0)

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endpoint)

    }, [])

    const loadMoreItems = () => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrntPage + 1}`;
        fetchMovies(endpoint)
    }


    const fetchMovies = (endpoint)  => {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                // ... : 배열안에 elements를 붙여서 합쳐준다
                // ...Movies : 원래있던것들, ..response.results : 추가되는것들
                setMovies([...Movies, ...response.results]) 
                setMainMovieImage(response.results[0])
                setCurrntPage(response.page)
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
              
                {/* gutter 가 좌우 여백을 줌 */}
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
              <button onClick={loadMoreItems}>Load More</button>
          </div>
          
      </div>
    )
}

export default LandingPage
