import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./arrow.css";
import PopularMovie from "./Sections/PopularMovie"
import UpcomingMovie from "./Sections/UpcomingMovie"
import TopRatedMovie from "./Sections/TopRatedMovie"
import Recommendations from "./Sections/Recommendations"

function LandingPage() {
    return (
      <div style={{ width: '100%', margin: '0' }}>
          <PopularMovie /><br /><br /><br />
          <UpcomingMovie /><br /><br /><br />
          <TopRatedMovie /><br /><br /><br />
          <Recommendations />
      </div>
    )
}

export default LandingPage
