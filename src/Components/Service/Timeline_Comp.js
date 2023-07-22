import React from 'react';
import '../Style.css';
import { Chrono } from 'react-chrono';

const VerticalAlternatingTimeline = () => {
    let switching_mode;
    if(window.innerWidth>600)
    {
        switching_mode="VERTICAL_ALTERNATING";
    }
    else{
        switching_mode="VERTICAL";
    }
    const data = [
        {
            title:'Oracle Cloud Infastracture',
            cardDetailedText: 'Card detailed text 1',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://www.cloud4c.com/sites/default/files/2021-12/oracle-cloud-services-1_0.jpg',
                },
            },
        },
        {
            title:'Oracle Cloud Application',
            cardDetailedText: 'Card detailed text 1',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://www.nagarro.com/hubfs/Oracle%20cloud%20infrastructure.png',
                },
            },
        },
        {
            title:'Oracle Fusion Middleware',
            cardDetailedText: 'Card detailed text 1',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt3fb601577ca72826/632dfca7378d7a585394478e/cloudarchitecture-ArtemisDiana_AlamyStockPhoto.jpg',
                },
            },
        },
        {
            title:'BlockChain',
            cardDetailedText: 'Card detailed text 1',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://www.hyperledger.org/wp-content/uploads/2016/08/hl_bg_banner.jpg',
                },
            },
        },
        {
            title:'Hardware & Software',
            cardDetailedText: 'Card detailed text 1',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://s3-us-west-2.amazonaws.com/aa.techdemand.io/wp-content/uploads/2022/04/28112755/shutterstock_1806547387-1024x631.jpg',
                },
            },
        },
        {
            title:'Enterprise Wide Integration',
            cardDetailedText: 'Card detailed text 1',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://www.ibis-solutions.rs/wp-content/uploads/2021/06/group-people-network-circuit-board-link-connection-technology-1-1.jpg',
                },
            },
        },
        {
            title:'Software Solutions Experience',
            cardDetailedText: 'Card detailed text 1',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://as2.ftcdn.net/v2/jpg/01/34/31/79/1000_F_134317941_li6kQGjxitx2oDONDgHmshYWhbAZJeov.jpg',
                },
            },
        },
        {
            title:'Hardware Solutions Experience',
            cardDetailedText: 'Card detailed text 1',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/Hardware%20Section%201.jpeg',
                },
            },
        },
    // Add more data objects as needed
    ];

  return (
        <div className='timeline'>
            <Chrono 
                items={data} 
                mode={switching_mode}
                theme={{
                    primary: 'black',
                    secondary: 'white',
                    titleColor: 'black',
                    cardBgColor:'#33a6e9be',
                    titleColorActive: 'black',
                }}
                classNames={{
                    card: 'my-card',
                    cardMedia: 'my-card-media',
                    cardSubTitle: 'my-card-subtitle',
                    cardText: 'my-card-text',
                    cardTitle: 'my-card-title',
                    controls: 'my-controls',
                    title: 'my-title',
                    point: 'custom-timeline-point',
                }}
                hideControls="true"
                scrollable="true"
                />
        </div>
  );
};

export default VerticalAlternatingTimeline;
