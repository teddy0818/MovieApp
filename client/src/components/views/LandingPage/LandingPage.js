import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, IMAGE_BASIC_URL, API_KEY} from "../../Config";

function LandingPage() {

    const [Movies, setMovies] = useState([])

    useEffect(() => {
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetch(endPoint)
            .then(response => response.json())
            .then(response => {
                setMovies([response.result])
            })
     
    }, [])


    return (
      <div style={{ width: '100%', margin: '0' }}>
          {/* { Main Image } */}

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
