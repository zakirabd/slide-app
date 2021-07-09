import React, { Component } from 'react';
import * as lang from '../../../Language';

import {connect} from 'react-redux';
import { changeStateMain } from '../../../actions/MainActions';
import { logDOM } from '@testing-library/dom';

export class Nav extends Component {
    
    
    render() {
        const {changeLang} = this.props
        return (
            <nav className="nav">
                <input type="checkbox" id="check-box" />
                <img src="img/logo.png" alt="logo" className="logo" />
                
                
                <ul className="main-nav">
                    <li className="main-btn"><a className="nav-link" href="#header">{ changeLang.navBtns[0] }</a></li>
                    <li className="main-btn"><a className="nav-link" href="#section--price">{ changeLang.navBtns[1] }</a></li>
                    <li className="main-btn"><a className="nav-link" href="#section--1">{ changeLang.navBtns[2] }</a></li>
                    <li className="main-btn"><a className="nav-link" href="#section--2">{ changeLang.navBtns[3] }</a></li>
                    <li className="main-btn"><a className="nav-link" href="#section--3">{ changeLang.navBtns[4] }</a></li>
                    <li className="main-btn"><a className="nav-link" href="#section--4">{ changeLang.navBtns[5] }</a></li>
                </ul>
                <label htmlFor="check-box" className="nav-btn"><i className="fas fa-bars"></i></label>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    changeLang: state.Data.changeLang
})

const mapDispatchToProps = { changeStateMain }

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
