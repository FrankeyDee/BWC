import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";
import "./slider.css"

const MovieSlider = (props) => {
    return (
        <div className="carousel-container">
        <CarouselProvider className="carousel1"
        naturalSlideHeight={200}
        naturalSlideWidth={10}
        totalSlides={15}
        visibleSlides={1}>

            <Slider infinite="false">
                <div className="card-container">
                {props.movies.map((item, index) => (            
                <Slide className="card border-primary mb-3 cardy" key={item.name} index={index} style={{maxWidth: '20rem'}}>
                    <div>{item.index}</div>
                    <div className="card-header">{item.name}
                    </div>
                    <div className="card-body">
                        <img src={item.poster} />
                        <p className="overview card-text">{item.overview}</p>
                    </div>    
                </Slide>
                ))}
                </div>
            </Slider>
      </CarouselProvider>
      </div>
    );
}; 

export default MovieSlider;



