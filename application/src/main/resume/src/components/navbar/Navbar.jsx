import React from 'react';
import s from './Navbar.module.css'
import NavItem from "./NavItem";
import NavMenu from "./NavMenu";
import ApiTitles from "../../api/ApiTitles";

class Navbar extends React.Component{

    state = {
        titles:[],
        items: []
    };

    constructor(props) {
        super(props);

    }

    componentDidMount = () => {
        debugger
        this.props.getTitlesThunkCreator();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger

    }

    toDesktop = (id) => {
        let s = this.getPageState(id, this.props.state.pages);
        this.props.toDesktop(s);
    };

    getPageState = (id, pages) => {
        let temp;
        for (let item of pages) {
            if (item.descPage.id + '' === id) {
                temp = item;
                break;
            }
        }
        return temp;
    };

    render = () => {
        debugger
        this.state.titles = this.props.titles.titles;
        this.state.items = this.state.titles.map((item) => <NavItem key={item.resumeId}
                                                                    id={item.resumeId}
                                                                    value={item.title}
                                                                    toDesktop={this.toDesktop}/>);
        return (
            <nav className={s.sidebar}>
                {this.state.items}
            </nav>
        )
    }

}

export default Navbar;