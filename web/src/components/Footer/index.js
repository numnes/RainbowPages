import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer(){

    return(
        <div id="footer-box">
            <div>🌈 RainbowPages 🌈</div>
            <div>contato@rainbowpages.com</div>
            <div className="social-icons-box">
                <SocialIcon network="twitter" style={{ height: 25, width: 25, marginLeft: "3px"}} className="icon-social-media"/>
                <SocialIcon network="instagram" style={{ height: 25, width: 25 }} className="icon-social-media"/>
                <SocialIcon network="linkedin" style={{ height: 25, width: 25 }} className="icon-social-media"/>
            </div>
        </div>
    )
}