import React from 'react'
import './videobg.css'
import Video from '../../assets/header_video.mp4'

const Videobg = () => {
  return (
    <div className="header-bg">
      <video src={Video} autoPlay='autoplay' muted loop type="video/mp4" id='video-bg'/>
    </div>
  )
}

export default Videobg
