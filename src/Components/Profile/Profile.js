import React from "react";
import FadeInSection from "../FadIn";
const Profile=()=>{
    return(
        <FadeInSection>
            <div className="Profile">
                <div className="Profile_Heading">
                    <h1>
                        Company Profile
                    </h1>
                </div>
                <div className="Profile_Redriector">
                    <a href="https://www.ora-tech.com/assets/profile/ora-tech%20systems%20company%20profile.pdf" target="_blank">
                        <button>Click To View</button>
                    </a>
                </div>
            </div>
        </FadeInSection>
        
    );
}

export default Profile;