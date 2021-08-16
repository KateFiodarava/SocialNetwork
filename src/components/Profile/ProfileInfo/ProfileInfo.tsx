import React from "react";
import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=' +
                'tbn:ANd9GcREbjs74kHNQ6EbVpQPwqe6hfqhPxpFu3whAg&usqp=CAU'}/>
            </div>
            <div className={s.describeBlock}>
                ava+description
            </div>
        </div>

    )
}

export default ProfileInfo;