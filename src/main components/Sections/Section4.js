import React, { Component } from 'react';
import { connect } from 'react-redux'
import OnlineOrder from './section 4 components/OnlineOrder'
import SocialMediaContact from './section 4 components/SocialMediaContact'

export class Section4 extends Component {
    render() {
        const {changeLang} = this.props;
        return (
            <section className="contact-section" id="section--4">
                <div className="container">
                    <h1 className="contact-section-header">{changeLang.section4Header}</h1>
                    <div className="contact_us-container">
                        <SocialMediaContact />
                        <OnlineOrder />
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    changeLang: state.Data.changeLang
})
export default connect(mapStateToProps)(Section4)
