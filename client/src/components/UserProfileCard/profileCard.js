import React from "react";
import "./profileCard.css"

function ProfileCard({user}){
    const profileCard = 
    <div className="cardContainer">
        <div className="image">
            <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="user profile" />
        </div>
        <div className="profileName"> <h5>{user}</h5> </div>
    </div>

    return profileCard

}



export default ProfileCard