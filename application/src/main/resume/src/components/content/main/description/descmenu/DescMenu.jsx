import React from "react";

class DescMenu extends React.Component{

    editable = this.props.editable;

    onChangeDescEditable = () => {
        this.editable = !this.editable;
        this.props.updateDescEditable(this.editable)
    };

    render = () => {
        this.editable = this.props.editable;
        if (!this.editable) {
            return (
                <div>
                    <button onClick={this.onChangeDescEditable}>Редактировать</button>
                </div>
            )
        }
        return (
            <div>
                <button onClick={this.onChangeDescEditable}>Сохранить</button>
            </div>
        )

    }


}

export default DescMenu;