import React, { Component } from 'react';
import './Navigation.css';

                                /*<ul id="AboutUs">
                                    <li>Contact Us</li>
                                    <li>Address</li>
                                </ul>*/

class Navigation extends Component{
    render(){
        return(
            <div>
                <div id="Navigationn">
                    <div id="logo"><a href="#">muudy</a></div>
                    <div id="Lists">
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Social</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Home</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;