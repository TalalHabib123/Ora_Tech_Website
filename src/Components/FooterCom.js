import React from 'react';

const FooterCom=({handleNavLinkClick})=>{
    return(
        <div className='footer-com'>
            <hr/>
            <div className='footer-content'>
                <div className='nav-links'>
                    <h2>
                        Sections
                    </h2>
                    <a href="#insight" onClick={handleNavLinkClick}>Insights</a>
                    <a href="#services" onClick={handleNavLinkClick}>Services</a>
                    <a href="#journey" onClick={handleNavLinkClick}>Our Journey</a>
                    <a href="#clientele" onClick={handleNavLinkClick}>Clientele</a>
                    <a href="#career" onClick={handleNavLinkClick}>Career</a>
                    <a href="#contact" onClick={handleNavLinkClick}>Contact Us</a>
                    <a href="#profile" onClick={handleNavLinkClick}>Company Profile</a>
                    <a href="#policy" onClick={handleNavLinkClick}>Company Policy</a>
                </div>
                <div className='footer-addresses'>
                    <h2>
                        Our Addresses
                    </h2>
                    <div className='address-rows'>
                        <h5>
                            Islamabad:
                        </h5>
                        <p>
                            3rd Floor, Beverley Centre, Jinnah Avenue, F-6/1 Islamabad 44000-Pakistan
                        </p>
                    </div>
                    <div className='address-rows'>
                        <h5>
                            Karachi:
                        </h5>
                        <p>
                            Head Office Four Square Plaza, 4th Floor, Building # 21A, H.H. Farooqi Road Off Tariq Road, PECHS, Block II Karachi – 75400, Pakistan
                        </p>
                    </div>
                    <div className='address-rows'>
                        <h5>
                            Lahore:
                        </h5>
                        <p>
                            58-59 Main Boulevard, 1st Floor,Cavalry Ground, Lahore Cantt- Pakistan
                        </p>
                    </div>
                    <div className='address-rows'>
                        <h5>
                            Dubai:
                        </h5>
                        <p>
                            Ora-Tech Systems LLC Unit No. 1403, 14th Floor, Fortune Executive Tower, Cluster T, Jumeirah Lake
                        </p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='company-@'>
                <h5>
                    © Company, Inc. All Rights Reserved.
                </h5>
            </div>
        </div>
    );
}

export default FooterCom;