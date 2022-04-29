import React from 'react';
import './Slider.css';
function Crousel() {
  return (
    <div className="wrapper">
      <div className="carousel" tabindex="0">
        <div className="slide">
          <a href="#item-4">Slide 4</a>
          <img
            id="item-1"
            src="https://source.unsplash.com/random/800x500?1"
            alt=""
          />
          <a href="#item-2">Slide 2</a>
        </div>
        <div className="slide">
          <a href="#item-1">Slide 1</a>
          <img
            id="item-2"
            src="https://source.unsplash.com/random/800x500?2"
            alt=""
          />
          <a href="#item-3">Slide 3</a>
        </div>
        <div className="slide">
          <a href="#item-2">Slide 2</a>
          <img
            id="item-3"
            src="https://source.unsplash.com/random/800x500?3"
            alt=""
          />
          <a href="#item-4">Slide 4</a>
        </div>
        <div className="slide">
          <a href="#item-3">Slide 3</a>
          <img
            id="item-4"
            src="https://source.unsplash.com/random/800x500?4"
            alt=""
          />
          <a href="#item-1">Slide 1</a>
        </div>
      </div>
      <nav className="carousel__nav">
        <ul>
          <li>
            <a href="#item-1" aria-label="Item 1">
              <svg viewBox="0 0 10 10" width="1em">
                <circle cx="5" cy="5" r="5" fill="#fff" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#item-2" aria-label="Item 2">
              <svg viewBox="0 0 10 10" width="1em">
                <circle cx="5" cy="5" r="5" fill="#fff" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#item-3" aria-label="Item 3">
              <svg viewBox="0 0 10 10" width="1em">
                <circle cx="5" cy="5" r="5" fill="#fff" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#item-4" aria-label="Item 4">
              <svg viewBox="0 0 10 10" width="1em">
                <circle cx="5" cy="5" r="5" fill="#fff" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Crousel;
