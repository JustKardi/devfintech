import React from 'react';
import cyber4project from './assets/cyber4project_logo.webp';
import entrepreyouership from './assets/entrepreyouership_logo.webp';
import finventures from './assets/finventures_logo.webp';
import impact_edu from './assets/impact_edu_logo.webp';
import stemed_insight from './assets/stemed_insight_logo.webp';
import technogear from './assets/technogear_logo.webp';
import vanguard_visionaire from './assets/vanguard_visionaire_logo.webp';
import wall_street from './assets/wall_street_logo.webp';
import './SponsorCarousel.css';
import './scrollFade.css';

function SectionSix() {
    const styles = {
        carouselItem: {
            width: '200px',
            height: '200px',
            display: 'inline-block',
            marginRight: '100px',
        },
        main: {
            marginTop: '20px',
            overflow: 'hidden',
            position: 'relative',  // Ensure circles are behind other content
            height: '70vh',
        },
        title: {
            textAlign: 'center',
            color: '#7d49de',
            fontSize: '50px',
            fontFamily: '"Roboto", sans-serif',
            marginBottom: '100px',
            textDecoration: 'underline',
            zIndex: '1',
        },
    };

    const images = [
        cyber4project, entrepreyouership, finventures, impact_edu, stemed_insight,
        technogear, vanguard_visionaire, wall_street,
    ];

    return (
        <div style={styles.main} className='scroll-fade'>
            <div className="circles">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <h1 style={styles.title}>Our Sponsors</h1>
            <div className="carousel">
                <div className="carousel-track">
                    {images.concat(images).map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            style={styles.carouselItem}
                            alt={`Sponsor logo ${index + 1}`}
                            className='sponsor--carousel-item'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SectionSix;
