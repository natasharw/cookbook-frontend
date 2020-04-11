import React, { Component } from "react";
import Emoji from './Emoji';

class Header extends Component {
    render() {
        return (
            <div className = "text-center">
            <div className = "top-buffer">
            </div>
                <h1>
                    <b>My Cookbook</b>
                </h1>
                <h6>
                    <i>served up by Django and React </i><Emoji symbol="🥣" label="food bowl"/>
                </h6>
            </div>
        );
    }
}

export default Header;