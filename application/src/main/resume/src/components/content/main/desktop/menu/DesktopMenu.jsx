import React from "react";
import s from './DesktopMenu.modules.css'

class DesktopMenu extends React.Component{
    editable = this.props.editable;

    onChangeEditable = () => {
        this.editable = !this.editable;
        this.props.updateEditable(this.editable)
    };

    render = () => {
        this.editable = this.props.editable;
        if (!this.editable) {
            return (
                <div className={s.menu}>
                    <button onClick={this.onChangeEditable}>Редактировать</button>
                </div>
            )
        }
        return (
            <div className={s.menu}>
                <button onClick={this.onChangeEditable}>Сохранить</button>
            </div>
        )

    }

}

export default DesktopMenu;