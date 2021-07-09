import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as lang from '../../../Language';
import { changeStateMain } from '../../../actions/MainActions';
export class TextBox extends Component {
    redirectonlineOrder (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
    onClickChangeLang (language, e) {

        localStorage.setItem('zPresentationLanguage', language)

        if (localStorage.getItem('zPresentationLanguage')){
            if (localStorage.getItem('zPresentationLanguage') === 'azLang') {
                this.props.changeStateMain({
                    name: 'changeLang',
                    value: lang.azLang
                })
            } else if (localStorage.getItem('zPresentationLanguage') === 'engLang') {
                this.props.changeStateMain({
                    name: 'changeLang',
                    value: lang.engLang
                })
            }
        }
    }
    render() {
        const {changeLang} = this.props;
        return (
            <div className="container">
                <div className="header-text_box">
                    <h1>
                        <span>Z Presentation </span>  
                         {changeLang.headerTextContainer}
                    </h1>
                    <div className="header-socials">
                            {/* <div className="socials">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="far fa-envelope-open"></i></a>
                                <a href="#"><i className="fas fa-phone-square-alt"></i></a>
                            </div> */}
                            <div className="header-online-order">
                                <a href="#section--4" onClick={this.redirectonlineOrder.bind(this)} className="online-order-btn"> {changeLang.onlineOrderBtn} <i className="fas fa-chevron-circle-right order_btn_icon"></i></a>
                            </div>
                            <ul className="nav-change-lahguage">
                                <li><img className="az-lang" onClick={this.onClickChangeLang.bind(this, 'azLang')} src="img/azerbaijan-flag.jpg" alt="change language icon" /></li>
                                <li><img className="eng-lang" onClick={this.onClickChangeLang.bind(this, 'engLang')}  src="img/english-flag.png" alt="change language icon" /></li>
                            </ul>  
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    changeLang: state.Data.changeLang
})

const mapDispatchToProps = { changeStateMain }

export default connect(mapStateToProps, mapDispatchToProps)(TextBox)
