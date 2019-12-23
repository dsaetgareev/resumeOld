import React from "react";
import s from './Screen.module.css'
import ImageUpload from "./ ImageUpload";

class Screen extends React.Component{

    render() {
        return (
            <div className={s.screen}>
                <ImageUpload/>
            </div>
        )
    }

}

export default Screen;