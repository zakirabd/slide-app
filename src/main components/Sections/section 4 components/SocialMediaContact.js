import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchLinks} from '../../../actions/MainActions';
export class SocialMediaContact extends Component {
    componentDidMount (){
        this.props.fetchLinks()
        
    }
    render() {
        const {links} = this.props;
        return (
            <div className="social-icons">
                <div className=" social-contact-rows">
                    <i className="fab fa-instagram social-icon"></i>
                    <div className="socal-links">
                        <a target="_blank" href="https://www.instagram.com/teqdimat_slayd_page/" className="link instagram-color">{links.length !== 0 ? links[0].instagram: null}</a>
                    </div>
                </div>
                <div className="social-contact-rows">
                    <i className="fab fa-facebook social-icon"></i>
                    <div className="socal-links">
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100068746597594" className="link facebook-color">{links.length !== 0 ? links[0].facebook : null}</a>
                    </div>
                </div>
                <div className="social-contact-rows">
                    <i className="far fa-envelope-open social-icon"></i>
                    <div className="socal-links">
                        <a target="_blank" href="mailto:zakir_abdurahimov@mail.ru" className="link mail-color">{links.length !== 0 ? links[0].email: null}</a>
                    </div>
                </div>
                <div className="social-contact-rows">
                    <i className="fas fa-phone-square-alt social-icon"></i>
                    <div className="socal-links">
                        <a href="tel:+99470 928 11 01" className="link phone-color">{links.length !== 0 ? links[0].whatsapp: null}</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    links: state.Data.links
})

const mapDispatchToProps = {fetchLinks};

export default connect(mapStateToProps, mapDispatchToProps)(SocialMediaContact)
