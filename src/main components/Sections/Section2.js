import React, { Component } from 'react';
import { connect } from 'react-redux';
import {IMG} from '../../APIKey';
import { fetchSlides } from '../../actions/MainActions';
const env = window._env;

export class Section2 extends Component {
    componentDidMount () {
        const paginations = document.querySelector('.pagination');
        const slider = document.querySelector('.last_prepared-slider');
        const nextBtn = document.querySelector('.slider-right');
        const previousBtn = document.querySelector('.slider-left');
        
        let slide=0;

        for(let i = 0; i < 4; i++){
            const pagination = '<i class="far fa-circle"></i>';
            paginations.insertAdjacentHTML('beforeend', pagination)
        }

        const findPagination = (paginationNum) =>{
            const slideWidth = slider.getBoundingClientRect().width;
            slider.scrollTo({
                top: 0,
                left: slide * slideWidth,
                behavior: 'smooth'
            });
            for(let i = 0; i < slider.children.length; i++){
                paginations.children[i].classList.remove('fas');
                paginations.children[i].classList.remove('far');
                paginations.children[i].classList.add('far');
                paginations.children[paginationNum].classList.remove('far');
                paginations.children[paginationNum].classList.add('fas');
            }
        }
        const findSlidePage = (slideNum) =>{
            if(slideNum > slider.children.length - 1){
                slide = 0;
            } else if( slideNum < 0) {
                slide = slider.children.length - 1;
            }
            findPagination(slide)
        }

        nextBtn.addEventListener('click', ()=>{
            slide++;
            findSlidePage(slide)
        })
        previousBtn.addEventListener('click', ()=>{
            slide--;
            findSlidePage(slide)
        })
        const setIntervalFunction = () =>{
            setInterval(()=>{ 
                slide++;
                findSlidePage(slide)
            }, 5000);
        }
        window.addEventListener('load',()=>{
            setIntervalFunction();
            findPagination(slide);
        })
        // -------------------------------------
        // GET SLIDES
        this.props.fetchSlides()
    }
    render() {
        const {changeLang, slides} = this.props;
        return (
            <section className="last_prepared-section" id="section--2">
                <div className="container">
                    <div className="last_prepared-container">
                        <h1 className="section-2-header">{changeLang.section2Header}</h1>
                        <div className="last_prepared-slider">
                            {
                                slides.map((slide, i) => {
                                    return (
                                        <div className="slider" key={i}>
                                            <img src={IMG+slide.image}alt="slider" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="pagination">
                            {/* <i className="far fa-circle"></i>
                            <i className="far fa-circle"></i>
                            <i className="far fa-circle"></i>
                            <i className="far fa-circle"></i> */}
                        </div>
                        <div className="next-previous-btn">
                            <i className="fas fa-chevron-left slider-left"></i>
                            <i className="fas fa-chevron-right slider-right"></i>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    changeLang: state.Data.changeLang,
    slides: state.Data.slides
})
const mapDispatchToProps = { 
    fetchSlides 
}
export default connect(mapStateToProps, mapDispatchToProps)(Section2)
