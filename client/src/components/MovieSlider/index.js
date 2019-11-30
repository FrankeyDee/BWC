import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";
import "./slider.css"

const MovieSlider = (props) => {
    return (
        <div className="carousel-container">
        <CarouselProvider className="carousel1"
        naturalSlideHeight={300}
        naturalSlideWidth={400}
        totalSlides={20}
        visibleSlides={1}>

            <Slider infinite="false" className="slider1">
            
            {props.movies.map((item, index) => (
                <Slide className="card mb-3" key={item.name} index={index}>
                <div>{item.index}</div>
                <h3 className="card-header">{item.name}</h3>
                    <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                    </div>
                <img src={item.poster} alt={item.name} />    
                <div className="card-body">
                <p className="card-text">{item.overview}</p>
                </div>
                <ButtonBack className="backBtn btn-outline-secondary">&lt;&lt;</ButtonBack>
                    { props.isSearch ? <button onClick={() => props.saveHandler(item)}>Save</button> : <button onClick={() => props.deleteHandler(item._id)}>Delete</button> }
                <ButtonNext className="btn-outline-secondary">&gt;&gt;</ButtonNext>
                </Slide>
                ))}
            </Slider>
        </CarouselProvider>
        </div>
    );
}; 

export default MovieSlider;

