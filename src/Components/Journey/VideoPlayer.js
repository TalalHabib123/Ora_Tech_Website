import ReactPlayer from "react-player";
import '../Style.css';

const VideoPlayer=()=>{
    return(
        <div className="journey-video">
            <ReactPlayer url={'https://www.ora-tech.com/assets/videos/journey.mp4'} controls={true}  width={"100%"} height={"100%"}/>
        </div>
    );
}

export default VideoPlayer;