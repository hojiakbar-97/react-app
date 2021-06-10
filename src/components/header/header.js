import React, {useState} from 'react';

import './header.scss';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const Header = () => {


    let slideArr = [
        {
            id: 1,
            img: 'images/slide2.jpg',
            altText: 'Разработка приложений',
            caption: 'Предоставление технических талантов для создания отличных приложений и поддержки их работы.'
        },
        {
            id: 2,
            img: "images/about-us.jpg",
            altText: 'Разработка сайта',
            caption: 'Технические навыки и проверенные в боях процессы для создания высокопроизводительных веб-сайтов.'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === slideArr.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? slideArr.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = slideArr.map((item) => {
        return (
            <CarouselItem
                className="slide-content"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img src={item.img} alt="slide-image"/>
                <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.altText}/>
            </CarouselItem>
        );
    });

    return (
        <div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className="slide-show-container">
                <CarouselIndicators items={slideArr} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
            </Carousel>
        </div>
    );

};

export default Header;

