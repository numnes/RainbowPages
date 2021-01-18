import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './styles.css';

export default function Footer(){

    return(
            <div id="footer-card-result" className="footer-card-result">
                <div id="Footer-textoBar" className="Footer-textoBar"><h3>🌈 RainbowPages 🌈</h3></div>
                <div id="Footer-textoBar" className="Footer-textoBar"><b>contato@rainbowpages.com</b></div>
                <div className="social-icons-box">
                <SocialIcon network="twitter" style={{ height: 25, width: 25, marginLeft: "3px"}} className="icon-social-media"/>
                <SocialIcon network="instagram" style={{ height: 25, width: 25 }} className="icon-social-media"/>
                <SocialIcon network="linkedin" style={{ height: 25, width: 25 }} className="icon-social-media"/>
            </div> 
        </div>
    )
}