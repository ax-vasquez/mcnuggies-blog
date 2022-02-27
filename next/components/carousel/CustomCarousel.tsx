import React, { FunctionComponent, useEffect, useMemo, useRef, useState } from 'react'
import CustomIcon from '../util/CustomIcon'
import styles from './Carousel.module.scss'

interface SlideConfig {
    id: string
    content: React.ReactNode
    caption?: React.ReactNode
}

interface CustomCarouselProps {
    slides: SlideConfig[]
}

const CustomCarousel: FunctionComponent<CustomCarouselProps> = ({
    slides
}) => {
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
    
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    const prevSlide = useMemo<React.ReactNode>(() => {
        const prevIndex = decrementIndex(activeSlideIndex)
        return (
            <div className={`${styles.slide} ${styles.slideLeft}`}>
                {slides[prevIndex].content}
            </div>
        )
    }, [activeSlideIndex])

    const activeSlide = useMemo<React.ReactNode>(() => {
        return (
            <div className={`${styles.slide} ${styles.slideLeft}`}>
                {slides[activeSlideIndex].content}
            </div>
        )
    }, [activeSlideIndex])

    const nextSlide = useMemo<React.ReactNode>(() => {
        const nextIndex = incrementIndex(activeSlideIndex)
        return (
            <div className={`${styles.slide} ${styles.slideLeft}`}>
                {slides[nextIndex].content}
            </div>
        )
    }, [activeSlideIndex])

    return (
        <div>
            <div
                className={styles.customCarousel}
            >
                <div className={styles.customCarouselInner}>
                    {prevSlide}
                    {activeSlide}
                    {nextSlide}
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
                        {slides.map((slide, index) => <li key={`indicator-slide-${slide.id}`} className={`${(activeSlideIndex === index) ? styles.activeIndicator : undefined}`} onClick={() => setActiveSlideIndex(index)} >{index}</li>)}
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
