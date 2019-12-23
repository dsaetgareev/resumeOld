import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import MainContent from "./components/content/main/MainContent";
import HeaderContainer from "./components/header/HeaderContainer";

function App() {
    return (
        <div className="grid">
            <HeaderContainer />
            <NavbarContainer/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;
