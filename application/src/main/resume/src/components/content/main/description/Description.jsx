import React from "react";
import s from './Description.module.css'
import DescBody from "./descbody/DescBody";
import DescMenu from "./descmenu/DescMenu";

class Description extends React.Component{

    title='Описание:'

    updateDescEditable =(editable) => {
        this.props.updateDescEditable(this.props.descPage.descPage.desc, editable)
    };

    render = () => {
        return (
            <div className={s.desc}>
                <DescBody updateDesc={this.props.updateDesc}
                          desc={this.props.descPage.descPage.desc}
                          editable={this.props.descPage.descPage.editable}
                            title={this.title}
                />
                <DescMenu updateDescEditable={this.updateDescEditable} editable={this.props.descPage.descPage.editable}/>
            </div>

        )
    }

}
export default Description;