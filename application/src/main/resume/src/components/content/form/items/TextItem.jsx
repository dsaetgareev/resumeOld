import React from "react";

class TextItem extends React.Component{

    textValue = this.props.textValue;

    createMarkUp = () => {
        return {__html: this.textValue}
    };

    render() {
        this.textValue = this.props.textValue;
        return (
            <div dangerouslySetInnerHTML={this.createMarkUp()}/>

        )
    }

}

export default TextItem;