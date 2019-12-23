import React from "react";
import s from './Heading.module.css'

class Heading extends React.Component{

    heading = this.props.heading;
    editable = this.props.editable;

    refHeading = React.createRef();

    onChangeHeading = () => {
        let text = this.refHeading.current.value;
        this.props.updateHeading(text);
    };

    render = () => {
        this.heading = this.props.heading;
        this.editable = this.props.editable;
        if (this.heading === '' || this.editable) {
            return (
                <div>
                    <div className={s.heading}>
                        <h1>Введите заголовок</h1>
                    </div>
                    <input type='text' value={this.heading}
                           onChange={this.onChangeHeading}
                           ref={this.refHeading}/>
                </div>
            )
        } else {
            return (
                <h1>
                    {this.heading}
                </h1>
            )
        }
    }

}

export default Heading;