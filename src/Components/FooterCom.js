import React from 'react';
import FadeInSection from './FadIn';

const FooterCom=({handleNavLinkClick})=>{
    return(
        <FadeInSection>
            <div className='footer-com'>
                <hr/>
                <div className='footer-content'>
                    <div className='nav-links'>
                        <h2>
                            Sections
                        </h2>
                        <a onClick={() => handleNavLinkClick('#insight')}>Insights</a>
                        <a onClick={() => handleNavLinkClick('#services')}>Services</a>
                        <a onClick={() => handleNavLinkClick('#journey')}>Our Journey</a>
                        <a onClick={() => handleNavLinkClick('#clientele')}>Clientele</a>
                        <a onClick={() => handleNavLinkClick('#career')}>Career</a>
                        <a onClick={() => handleNavLinkClick('#contact')}>Contact Us</a>
                        <a onClick={() => handleNavLinkClick('#profile')}>Company Profile</a>
                        <a onClick={() => handleNavLinkClick('#policy')}>Company Policy</a>
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
                <div className='company-'>
                    <h5>
                        © Company, Inc. All Rights Reserved.
                    </h5>
                </div>
            </div>
        </FadeInSection>
    );
}

export default FooterCom;