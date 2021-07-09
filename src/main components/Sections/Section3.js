import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Section3 extends Component {
    render() {
        const {changeLang} = this.props;
        return (
            <section className="about-section" id="section--3">
                <div className="container">
                    <h1 className="about-container-header">{changeLang.section3Header}</h1>
                    <div className="about-container">
                        <img src="img/about image.jpg" alt="about page image" className="about-img" />
                        <div className="about-text-container">
                            <div className="row">
                                <img src="img/logo-icon.png" alt="about logo" className="about-logo" />
                                <h2 className="about-text-header">Z Presentation</h2>
                            </div>
                            <p className="about-text">
                                {changeLang.aboutTextContainer}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    changeLang: state.Data.changeLang
})
export default connect(mapStateToProps)(Section3)
