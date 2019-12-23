import React from "react";
import s from './Desktop.module.css'
import Heading from "./heading/Heading";
import Body from "./body/Body";
import DesktopMenu from "./menu/DesktopMenu";

class Desktop extends React.Component{

    heading = this.props.desktopPage.desktopPage.heading;
    body = this.props.desktopPage.desktopPage.body;
    editable = this.props.desktopPage.desktopPage.editable;

    updateEditable =(editable) => {
        this.props.updateEditable(this.props.desktopPage.desktopPage.heading, this.props.desktopPage.desktopPage.body, editable)
    };


    render =() => {
        this.heading = this.props.desktopPage.desktopPage.heading;
        this.body = this.props.desktopPage.desktopPage.body;
        this.editable = this.props.desktopPage.desktopPage.editable;
        return (
            <div className={s.desktop}>
                <div>
                    <Heading updateHeading={this.props.updateHeading} heading={this.heading} editable={this.editable}/>
                    <Body updateBody={this.props.updateBody} body={this.body} editable={this.editable}/>
                    <DesktopMenu updateEditable={this.updateEditable} editable={this.editable}/>
                </div>
            </div>
        );
    }

}

export default Desktop;