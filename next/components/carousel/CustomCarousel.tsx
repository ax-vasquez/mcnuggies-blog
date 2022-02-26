import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import CustomIcon from '../util/CustomIcon'
import styles from './Carousel.module.scss'

interface SlideConfig {
    id: string
    content: React.ReactNode
    caption?: React.ReactNode
}

interface CustomCarouselProps {
    title?: string
    slides: SlideConfig[]
}

const CustomCarousel: FunctionComponent<CustomCarouselProps> = ({
    title,
    slides
}) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    const incrementIndex = (indexValue: number) => {
        return (indexValue < (slides.length - 1)) ? 
            ++indexValue
            :
            0
    }

    const decrementIndex = (indexValue: number) => {
        return (indexValue > 0) ? 
            --indexValue
            :
            slides.length - 1
    }

    return (
        <div>
            {title ? <span>{title}</span> : undefined}
            <div
                className={styles.customCarousel}
            >
                <div className={styles.customCarouselInner} style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}>
                    {slides.map((slide, index) => {
                        return (
                            <div key={slide.id} className={styles.slide}>
                                {slide.content}
                            </div>
                        )
                    })}
                </div>
                <div className={styles.controls}>
                    <button onClick={() => setActiveSlideIndex(decrementIndex(activeSlideIndex))}>
                        <CustomIcon 
                            fileName='bootstrap-chevron-left'
                            height={32}
                            width={32}
                        />
                    </button>
                    <ul className={styles.pageIndicators}>
                        {slides.map((slide, index) => <li key={`indicator-slide-${slide.id}`} className={`${(activeSlideIndex === index) ? styles.activeIndicator : undefined}`} >{index}</li>)}
                    </ul>
                    <button onClick={() => setActiveSlideIndex(incrementIndex(activeSlideIndex))}>
                        <CustomIcon 
                            fileName='bootstrap-chevron-right'
                            height={32}
                            width={32}
                        />
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default CustomCarousel
