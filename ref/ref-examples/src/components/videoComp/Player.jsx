import { useRef } from "react"

/* eslint-disable react/prop-types */
const Player = ({selectedVideo}) => {
  let videoRef=useRef();
  return (
    <div>
        <video src={selectedVideo} controls></video>
        {/* <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/xR3V5Ow2dTI?si=X16gnprtIY8Q-30u"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
    </div>
  )
}

export default Player