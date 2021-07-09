import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeStateMain} from '../../../actions/MainActions';

export class ShowPresentations extends Component {
    componentDidMount () {
        const goLeft = document.querySelector('.fa-chevron-left');
        const goRight = document.querySelector('.fa-chevron-right');
        const imgs = document.querySelector('.show_presentation-slider');

        let slide = 0;
        const showImg = (slideNum) => {
            const slideWidth = imgs.getBoundingClientRect().width;
            if (slideNum > 3){
                slide = 0;
                slideNum = 0
            }else if (slideNum < 0) {
                slide = 4
                slideNum = 4
            }
            imgs.scrollTo({
                top: 0,
                left: slideNum*slideWidth,
                behavior: 'smooth'
            });
        }
        goLeft.addEventListener('click', () => {
            slide --;
            showImg(slide)
        })
        goRight.addEventListener('click', () => {
            slide ++;
            showImg(slide)
        })
        setInterval(()=>{ 
            slide++;
            showImg(slide)
        }, 5000);

    }

    closePage () {
        this.props.changeStateMain({
            name: 'showPresentations',
            value: false
        })
    }
    render() {
        const {images} = this.props;
        return (
            <div className="show_presentation-container">
                <i className="fas fa-times close_show_component" onClick={this.closePage.bind(this)}></i>
                <div className="show_presentation-component">
                    <h4>{images[0].name}</h4>
                    <div className="show_presentation-slider_container">
                        <i className="fas fa-chevron-left"></i>
                        <div className="show_presentation-slider">
                            {
                                images.map((image, i) => {
                                    return (
                                        <img key={i} src={image.img} />
                                    )
                                })
                            }
                        </div>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    showPresentations: state.Data.showPresentations,
    images: state.Data.images
})
const mapDispatchToProps = {changeStateMain}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPresentations)
