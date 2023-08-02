import React from "react";
import VideoPlayer from "./VideoPlayer";
import FadeInSection from "../FadIn";
const Journey=()=>{
    return(
        <FadeInSection>
            <div className="journey">
                <h1>
                    Our Journey
                </h1>
                <VideoPlayer />
            </div>
        </FadeInSection>
    );
}

export default Journey;