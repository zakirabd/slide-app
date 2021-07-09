import React, { Component } from 'react'
import {connect} from 'react-redux';
import {changeStateMain} from '../../actions/MainActions';
import {forLesson, forWork, forDiploma} from '../../showImages'

export class PricesSection extends Component {

    openShowPage (image) {
        this.props.changeStateMain({
            name: 'showPresentations',
            value: true
        })
        this.props.changeStateMain({
            name: 'images',
            value: image
        })
    }
    render() {
        const {changeLang} = this.props
        return (
            <div className="prices_section" id="section--price">
                <div className="container">
                    <h1 className="prices_header">{changeLang.sectionPricesHeader}</h1>
                    <div className="price_components-container">
                        <div className="price_components">
                            <h3>{changeLang.presentationForLesson}</h3>
                            <h4>{changeLang.priceOnePage}</h4>
                            <div className="price_circle">0.4 Manat</div>
                            <div className="prices_buttons">
                                <button type="button" onClick={this.openShowPage.bind(this, forLesson)}>{changeLang.showBtn}</button>
                                {/* <button type="button">Sifariş et</button> */}
                            </div>
                        </div>
                        <div className="price_components">
                            <h3>{changeLang.presentationForWork}</h3>
                            <h4>{changeLang.priceOnePage}</h4>
                            <div className="price_circle">1 Manat</div>
                            <div className="prices_buttons">
                                <button type="button" onClick={this.openShowPage.bind(this, forWork)}>{changeLang.showBtn}</button>
                                {/* <button type="button">Sifariş et</button> */}
                            </div>
                        </div>
                        <div className="price_components">
                            <h3>{changeLang.presentationForDiploma}</h3>
                            <h4>{changeLang.priceOnePage}</h4>
                            <div className="price_circle">0.6 Manat</div>
                            <div className="prices_buttons">
                                <button type="button" onClick={this.openShowPage.bind(this, forDiploma)}>{changeLang.showBtn}</button>
                                {/* <button type="button">Sifariş et</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    changeLang: state.Data.changeLang
})
const mapDispatchToProps = {changeStateMain}

export default connect(mapStateToProps, mapDispatchToProps)(PricesSection)
