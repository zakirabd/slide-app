import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    {/* <div className="container">
                        <div className="footer-container">
                            <div className="footer-logo">
                                <img src="img/logo.png" alt="logo" className="logo" />
                            </div>
                            <div className="footer-menu">
                            <img src="img/logo.png" alt="logo" className="logo" />
                            </div>
                            <div className="footer-socials">
                            <img src="img/logo.png" alt="logo" className="logo" />
                            </div>
                        </div>
                    </div> */}
                    <p>Copyright &copy;  2021 | Z- Presentation is designed by <a className="footer-name" target="blank" blank="true" href="http://react.az/zakir/">Zakir Abdurrahimov</a></p>
                </footer>
            </div>
        )
    }
}

export default Footer
