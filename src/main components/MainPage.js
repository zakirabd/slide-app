import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeStateMain } from '../actions/MainActions'
import Footer from './layouts/Footer';
import Header from './layouts/header components/Header';
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import PricesSection from './Sections/PricesSection';
import ShowPresentations from './Sections/price_section_components/ShowPresentations';

import * as lang from '../Language'
import Spinner from './layouts/Spinner';

export class MainPage extends Component {
    componentDidMount () {
        setTimeout(()=>{
            this.props.changeStateMain({
                name: 'loading',
                value: false
            })
        }, 1000)
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
        const allSections = document.querySelectorAll('.container');

        const revealSection = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;

        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target);
        };

        const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
        });

        allSections.forEach(function (section) {
        sectionObserver.observe(section);
        section.classList.add('section--hidden');
        });
    }
    render() {
        const {loading, showPresentations} = this.props;
        return (
            <div>
                { loading ? <Spinner /> : null }
                <Header />
                <PricesSection />
                { showPresentations ? <ShowPresentations /> : null}
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Footer />
               
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    loading: state.Data.loading,
    showPresentations: state.Data.showPresentations
})
const mapDispatchToProps = {changeStateMain}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
