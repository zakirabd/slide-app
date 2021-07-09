import React, { Component } from 'react'
import Nav from './Nav'
import TextBox from './TextBox'

export class Header extends Component {
    componentDidMount () {
        const logo = document.querySelector('.logo');
        const navLinks = document.querySelectorAll('.nav-link');
        const header = document.querySelector('#header');
        const nav = document.querySelector('.nav');
        const navHeight = nav.getBoundingClientRect().height;

        const stickyNav = function (entries) {
            
            const [entry] = entries;
            if (!entry.isIntersecting){
                nav.classList.add('sticky');
                logo.classList.add('mini-logo')
                for(let i = 0; i < navLinks.length; i++){
                    navLinks[i].classList.add('colorBlue')
                }
            } 
            else {
                nav.classList.remove('sticky');
                logo.classList.remove('mini-logo')
                for(let i = 0; i < navLinks.length; i++){
                    navLinks[i].classList.remove('colorBlue')
                }
            }
          };
          const headerObserver = new IntersectionObserver(stickyNav, {
            root: null,
            threshold: 0,
            rootMargin: `-${navHeight}px`,
          });
          
          headerObserver.observe(header);
        // ----------------------
        const btns = document.querySelectorAll('.nav-link');
        for ( let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', (e) => {
                e.preventDefault();
                const id = e.target.getAttribute('href');
                document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
            })
        }
    }
    render() {
        return (
            <div>
                <header id="header">
                    <Nav />
                    <TextBox />
                </header>
            </div>
        )
    }
}

export default Header
