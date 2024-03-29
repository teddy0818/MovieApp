import React, {useEffect, useState} from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL} from "../../Config";
import MainImage from '../commons/MainImage';
import MovieInfo from './Sections/MovieInfo';
import GridCards from '../commons/GridCards';
import { Row, Button} from "antd";
import Favorite from './Sections/Favorite';
import Comment from './Sections/Comment';
import Axios from 'axios';
import LikeDisLikes from './Sections/LikeDisLikes'
import Starrate from './Sections/Starrate'


function MovieDetail(props) {

    // App.js 에서 주소에 route 설정해서 값을 가져올 수 있는거임
    let movieId = props.match.params.movieId;
    let genreString = "";

    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState([])
    const [ActorToggle, setActorToggle] = useState(false)
    const [Comments, setComments] = useState([])
    const [MainIMG, setMainIMG] = useState(null)
    const [GenreString, setGenreString] = useState("")
    const [Revenue, setRevenue] = useState("")


    useEffect(() => {

        const endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        
        // const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko-KR`;

        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                setMovie(response) 
                setMainIMG(
                    {
                        backdrop_path: response.backdrop_path,
                        title: response.title,
                        overview : response.overview
                    }
                )
                for(let i=0; i<response.genres.length; i++) {
                    if(i == response.genres.length-1) {
                        genreString += response.genres[i].name 
                    } else {
                        genreString += response.genres[i].name + ', '
                    }
                }
                setRevenue(response.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
                setGenreString(genreString)
            })

        fetch(endpointCrew)
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                setCasts(response.cast)
            })

        Axios.post('/api/comment/getComments', {movieId})
        .then(response => {
            // console.log(response.data)
            if(response.data.success) {
                setComments(response.data.comments)
            } else {
                alert('댓글 가져오기 실패')
            }
        })


    }, [])

    const toggleActorView = () => {
        setActorToggle(!ActorToggle);
    }

    const refreshFunction = (newComment) => {
        setComments(Comments.concat(newComment))
    }


    return (
        <div style={{ width: '100%', margin: '0' }}>
            
            {/* Header */}

            {MainIMG && <MainImage
            image={`${IMAGE_BASE_URL}w1280${MainIMG.backdrop_path}`}
            title={MainIMG.title}
            description={MainIMG.overview}
            />}

            {/* Body */}
            <div style={{ width: '85%', margin: '1rem auto'}}>
                <span style={{fontWeight:'bold', fontSize:'14px', color:'#1890ff'}}>별점주기</span>
                <Starrate
                    movieInfo={Movie}
                    movieId={movieId}
                    userFrom={localStorage.getItem('userId')}
                />

                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Favorite
                        movieInfo={Movie}
                        movieId={movieId}
                        // 로그인 시 localStorage 에 userId 넣어둠.
                        userFrom={localStorage.getItem('userId')}
                        
                    />
                </div>
                

                {/* Movie info */}
                <MovieInfo 
                    genre={GenreString}
                    movie={Movie}
                    revenue={Revenue}
                />

                <br />

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                    {/* Like & DisLike */}
                    <LikeDisLikes 
                        movieId={movieId}
                    />
                </div>
                
                <div style={{ display: 'flex', justifyContent: "center", margin: "2rem" }}>
                    <Button type="primary" onClick={toggleActorView}> {ActorToggle ? '출연진 상세표시 △' : '출연진 상세표시 ▽'} </Button>
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
                commentList={Comments}
                refreshFunction={refreshFunction}
                userFrom={localStorage.getItem('userId')}
            />
            </div>


        </div>
    )
}

export default MovieDetail
