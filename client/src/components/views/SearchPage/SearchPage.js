import React, { useState, useEffect } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL} from "../../Config";
import { Row, Button } from "antd";
import GridCards from "../commons/GridCards";

function SearchPage(props) {

    const [SearchedMovies, setSearchedMovies] = useState([])
    const [CurrntPage, setCurrntPage] = useState(0)

    useEffect(() => {
        const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=ko-KR&page=1&query=${props.match.params.query}`;
        fetchMovies(endpoint)
    }, [])

    const loadMoreItems = () => {
        const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=ko-KR&page=${CurrntPage + 1}&query=${props.match.params.query}`;
        fetchMovies(endpoint)
    }
    
    const fetchMovies = (endpoint) => {
        fetch(endpoint)
        .then(response => response.json())
        .then(response => { 
            setSearchedMovies([...SearchedMovies, ...response.results])
            setCurrntPage(response.page)
        })
    }

    return (
        <div style={{ width: '100%', margin: '50px 20px' }}>
            <h1><span style={{color: '#1890ff'}}>{props.match.params.query}</span> 검색 결과</h1>

            <div style={{ width:"85%", margin: '1rem auto' }}>
            <Row gutter={[16, 16]} >
                {SearchedMovies && SearchedMovies.map((movie, index) => (
                    <React.Fragment key={index}>
                        <GridCards
                            landingPage
                            image={movie.poster_path ?
                                `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                            movieId={movie.id}
                            movieName={movie.title}
                        />
                    </React.Fragment>
                ))}
            </Row>
            </div>                   
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <Button type="primary" onClick={loadMoreItems} style={{width: '100px', height: '50px', marginTop: '40px'}}>더보기</Button>
            </div>
        </div>
    )
}

export default SearchPage
