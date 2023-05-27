import React, { useEffect, useState, useRef } from "react";
import "./Header.css";

function FirstHeader() {
    
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        setInterval(() => {
            setAnimate(true);
        }, 5000)
    })
    

    const [index, setIndex] = useState(0)
    const text = ['30 days money back guarantee', 'Call Toll Free: 0323 204 576', 'We are expert in shipping', 'Quality products assured ']

    useEffect(() => {
    const textInterval =    setInterval(() => {
            setIndex((index) => (index + 1) % text.length)
        }, 5000)
        return () => clearInterval(textInterval)
    }, [text], 5000)

    const handleDropBtnValue1 = () => {
        const dropBtn = document.querySelector('.dropbtn')
        dropBtn.innerHTML = 'EUR <i className="fa fa-caret-down"></i>'
    }
    const handleDropBtnValue2 = () => {
        const dropBtn = document.querySelector('.dropbtn')
        dropBtn.innerHTML = 'GBP <i className="fa fa-caret-down"></i>'
    }
    const handleDropBtnValue3 = () => {
        const dropBtn = document.querySelector('.dropbtn')
        dropBtn.innerHTML = 'AUD <i className="fa fa-caret-down"></i>'
    }
    const handleDropBtnValue4 = () => {
        const dropBtn = document.querySelector('.dropbtn')
        dropBtn.innerHTML = 'USD <i className="fa fa-caret-down"></i>'
    }
    return (
        <div className="firstHeader" >
            <div className='social-media'>
                <a href='' target='_blank'>
                    <i className='fab fa-facebook'></i>
                </a>
                <a href='' target='_blank'>
                    <i className='fab fa-twitter'></i>
                </a>
                <a href='' target='_blank'>
                    <i className='fab fa-instagram'></i>
                </a>
            </div>
            <div className='randomText'>
                <p className={` animate__animated ${animate && 'animate__slideInUp' }`}>
                    {text[index]}
                </p>
            </div>
            <div className='hoverDropdown'>
                <div className='dropdown'>
                    <button className='dropbtn'>USD <i className='fa fa-caret-down'></i></button>
                    <div className='dropdown-content'>
                        <a href='' onClick={handleDropBtnValue4}>
                            <i className='fa fa-usd'></i>
                            USD
                        </a>
                        <a href='' onClick={handleDropBtnValue1}>
                            <i className='fa fa-eur'></i>
                            EUR
                        </a>
                        <a href='' onClick={handleDropBtnValue2}>
                            <i className='fa fa-gbp'></i>
                            GBP</a>
                        <a href='' onClick={handleDropBtnValue3}>
                            <i className='fa fa-usd'></i>
                            AUD</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstHeader;