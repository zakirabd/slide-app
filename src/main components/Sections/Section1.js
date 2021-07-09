import React, { Component } from 'react';
import {connect} from 'react-redux';
import {IMG} from '../../APIKey';
import {fetchPresentations} from '../../actions/MainActions';
const env = window._env;
export class Section1 extends Component {
    componentDidMount () {
        this.props.fetchPresentations()
    }
    render() {
        const {changeLang, presentations} = this.props;
     
        return (
            <section className="presentations-section" id="section--1">
                <div className="container">
                    <h1 className="section-1-header">{changeLang.section1Header}</h1>
                    <div className="presentation_examples">
                        {
                           presentations && presentations.length>0 ? presentations.map((presentation, i) => {
                                return (
                                    <div className="presentation_container" key={i}>
                                        <div className="presentation_components">
                                            <img src={IMG+presentation.image} alt="presentation examples" />
                                            <h3>{ presentation.subject }</h3>
                                            <p>Fənni üçün hazırlanmış təqdimat</p>
                                        </div> 
                                    </div>
                                )
                            }):null
                        }
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    changeLang: state.Data.changeLang,
    presentations: state.Data.presentations
})
const mapDispatchToProps = {fetchPresentations}
export default connect(mapStateToProps, mapDispatchToProps)(Section1)
