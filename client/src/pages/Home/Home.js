import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ButtonBtn from "../../components/ButtonBtn";
import logo from "../../images/logosm.svg";
import './Home.css';

class Home extends Component {

    logout = () => {
        this.props.deAuthenticate();
        sessionStorage.removeItem(`numCorrect${sessionStorage.getItem("gameID")}`);
        sessionStorage.removeItem(`numWrong${sessionStorage.getItem("gameID")}`);
        sessionStorage.removeItem(`gameCounter${sessionStorage.getItem("gameID")}`);
        sessionStorage.removeItem("userAuth");
        sessionStorage.removeItem("userUsername");
        sessionStorage.removeItem("adminID");
        window.location.reload();
    }


    render() {
        var message = "The information contained on www.tba.com website and Venatus Education Games mobile app (the Service) is for general information purposes only. Venatus Education Games assumes no responsibility for errors or omissions in the contents on the Service. In no event shall Venatus Education Games be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. Venatus Education Games reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice. This Disclaimer for Venatus Education Games is generated by TermsFeed Venatus Education Games does not warrant that the website is free of viruses or other harmful components.";

        if (sessionStorage.getItem('userAuth') === 'yes') {
            return (
                <div className="homeWrap">
                    <div className="homeContain">
                        <div className="homeLogo">
                            <img alt="logo" src={logo} />
                        </div>
                        <ButtonBtn><Link to={"/user"}>PLAY</Link></ButtonBtn>
                        <ButtonBtn onClick={this.logout}>LOGOUT</ButtonBtn>
                    </div>
                    <h3>{message}</h3>

                </div>
            )
        }
        else {
            return (
                <div className="homeWrap">
                    <div className="homeContain">
                        <div className="homeLogo">
                            <img alt="logo" src={logo} />
                        </div>
                        <ButtonBtn><Link to={"/login"}>LOGIN</Link></ButtonBtn>
                        <ButtonBtn><Link to={"/register"}>REGISTER</Link></ButtonBtn>
                    </div>
                    <h3>{message}</h3>
                </div>
            )
        }

    }
}

export default Home;