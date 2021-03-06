import React from "react";
import {Field} from "redux-form";
import DesktopMenu from "../menu/DesktopMenu";
import {TextareaForm} from "../../../form/TextareaForm";
import {InputForm} from "../../../form/InputForm";
import s from '../Desktop.module.css'


class DesktopForm extends React.Component {

    editable = this.props.initialValues.editable;
    title = this.props.initialValues.title;
    content = this.props.initialValues.content;

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.getTitlesThunkCreator();
    }

    setTitle = () => {
        return (<Field placeholder={"Заголовок"}
                       component={InputForm}
                       name={"title"}
                       editable={this.editable}
            />
        )
    };

    setContent = () => {
        return (

            <Field placeholder={"ВВедите текст"}
                   component={TextareaForm}
                   name={"content"}
                   editable={this.editable}
            />
        )
    };


    render() {
        this.editable = this.props.initialValues.editable;
        this.title = this.props.initialValues.title;
        this.content = this.props.initialValues.content;
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div>
                        {this.setTitle()}
                    </div>

                    <div>
                        {this.setContent()}
                    </div>
                    <div>
                        <DesktopMenu editable={this.props.initialValues.editable} className={s.menu}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default DesktopForm;