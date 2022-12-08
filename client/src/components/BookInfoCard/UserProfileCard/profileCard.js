import React from "react";
import "./profileCard.css"

function ProfileCard(props){
    const profileCard = 
    <div className="cardContainer">
        <div className="image">
            <img src={props.profileImage} alt="user profile" />
        </div>
        <div className="profileName"> <h5>{props.profileName}</h5> </div>
    </div>

    return profileCard

}



export default ProfileCard