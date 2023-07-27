import ReactPlayer from "react-player";

const VideoPlayer=()=>{
    return(
        <div className="journey-video">
            <ReactPlayer url={'https://www.ora-tech.com/assets/videos/journey.mp4'} controls={true}  width={"100%"} height={"100%"} className="journey-video-two"/>
        </div>
    );
}

export default VideoPlayer;