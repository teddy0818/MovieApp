import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, IMAGE_BASIC_URL, API_KEY} from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage"

function LandingPage() {

    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)

    useEffect(() => {
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetch(endPoint)
            .then(response => response.json())
            .then(response => {

                console.log(response)

                setMovies([response.results])
                setMainMovieImage(response.results[0])
            })
     
    }, [])


    return (
      <div style={{ width: '100%', margin: '0' }}>

          {/* { Main Image } */}
          {/* MainMovieImage 가 있으면 M ainImage component를 가져와라 */}
          {MainMovieImage &&
            <MainImage image={`${IMAGE_BASIC_URL}w1280${MainMovieImage.backdrop_path}`}
            title={ `${MainMovieImage.title}` }
            description={ `${MainMovieImage.overview}` }
            />
          }
          <div style={{ width:"85%", margin: '1rem auto' }}>
              <h3>Movies by lastest </h3>
              <hr />
              {/* { Movie Grid Cards } */}

          </div>

          <div style={{ display: 'flex', justifyContent: 'center'}}>
              <button>Load More</button>
          </div>
          
      </div>
    )
}

export default LandingPage
