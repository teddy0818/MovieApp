import React, {useEffect} from 'react'
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {

    let { movie } = props

    return (
        <Descriptions title="영화 정보" bordered>
            <Descriptions.Item label="제목">{movie.title}</Descriptions.Item>
            <Descriptions.Item label="발표일">{movie.release_date}</Descriptions.Item>
            <Descriptions.Item label="수익">$ {props.revenue}</Descriptions.Item>
            <Descriptions.Item label="러닝타임">{movie.runtime} 분</Descriptions.Item>
            <Descriptions.Item label="평균 평점" span={2}>
                {movie.vote_average} / 10 점
            </Descriptions.Item>
            <Descriptions.Item label="장르">{props.genre}</Descriptions.Item>
            <Descriptions.Item label="상태">{movie.status}</Descriptions.Item>
        </Descriptions>
    )
}

export default MovieInfo