import React, {useEffect, useState} from 'react'
import GridCards from "../../commons/GridCards";
import { API_URL, API_KEY, IMAGE_BASE_URL, SLICK_SETTINGS} from "../../../Config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../arrow.css";

function UpcomingMovie() {
    const [UpcomingMovie, setUpcomingMovie] = useState([])

    useEffect(() => {
        fetchUpcomingMovie()
    }, [])

    const fetchUpcomingMovie = ()  => {
        fetch(`${API_URL}movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`)
            .then(response => response.json())
            .then(response => {
                setUpcomingMovie(response.results.slice(0, 12)) 
            })
        }

    return (
        <div style={{ width:"85%", margin: '1rem auto' }}>
            <h1 style={{marginBottom: '0px', marginLeft: '5px'}}>개봉 예정 영화</h1>
                <Slider {...SLICK_SETTINGS}>
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
        </div>
    )
}

export default UpcomingMovie
