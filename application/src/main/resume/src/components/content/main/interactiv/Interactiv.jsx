import React from 'react';
import s from './Interactiv.module.css'
import Screen from "./screen/Screen";
import NotesContainer from "./notes/NotesContainer";


class Interactiv extends React.Component{

    render() {
        return (
            <div className={s.interactive}>
                <Screen/>
                <NotesContainer />
            </div>

        )
    }

}

export default Interactiv;