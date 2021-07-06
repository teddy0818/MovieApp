import React, {useEffect, useState} from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL} from "../../Config";
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';
import GridCards from '../commons/GridCards';
import { Row } from "antd";
import Favorite from './Sections/Favorite';
import Comment from './Sections/Comment';


function MovieDetail(props) {

    // App.js 에서 설정해서 값을 가져올 수 있는거임
    let movieId = props.match.params.movieId;

    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState([])
    const [ActorToggle, setActorToggle] = useState(false)
    const [Comments, setComments] = useState('')

    useEffect(() => {

        // console.log(props.match);

        const endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        
        const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                setMovie(response) 
            })

        fetch(endpointCrew)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                setCasts(response.cast)
                
            })
    }, [])

    const toggleActorView = () => {
        setActorToggle(!ActorToggle);
    }
        

    return (
        <div style={{ width: '100%', margin: '0' }}>
            
            {/* Header */}
            <MainImage image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
            title={Movie.original_title}
            description={Movie.overview}
            />

            {/* Body */}
            <div style={{ width: '85%', margin: '1rem auto'}}>

                <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <Favorite
                        movieInfo={Movie}
                        movieId={movieId}
                        // 로그인 시 localStorage 에 userId 넣어둠.
                        userFrom={localStorage.getItem('userId')}
                        
                    />
                </div>
                

                {/* Movie info */}
                <MovieInfo 
                    movie={Movie}
                />

                <br />
                
                <div style={{ display: 'flex', justifyContent: "center", margin: "2rem" }}>
                    <button onClick={toggleActorView}> Toggle Actor View</button>
                </div>

                {/* Actors Grid */}
                {ActorToggle &&
                    <Row gutter={[16, 16]} >
                        {Casts && Casts.map((cast, index) => (
                            <React.Fragment key={index}>
                                <GridCards
                                    landingPage
                                    image={cast.profile_path ?
                                        `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                                    characterName={cast.name}
                                />
                            </React.Fragment>
                        ))}
                    </Row>
                }
            {/* Comment */}
            <Comment 
                movieId={movieId}
            />
            </div>


        </div>
    )
}

export default MovieDetail
