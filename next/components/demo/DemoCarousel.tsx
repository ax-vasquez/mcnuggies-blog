import React, { FunctionComponent } from 'react'
import { Carousel } from 'react-bootstrap'
import TitledCard from '../layout/TitledCard'
import SectionHeader from './common/SectionHeader'

interface DemoCarouselProps {

}

const DemoCarousel: FunctionComponent<DemoCarouselProps> = ({}) => {

    const imgPrefix = `/demo/carousel`

    const slideImages = [
        `${imgPrefix}/carousel-1`,
        `${imgPrefix}/carousel-2`,
        `${imgPrefix}/carousel-3`,
        `${imgPrefix}/carousel-4`,
        `${imgPrefix}/carousel-5`,
        `${imgPrefix}/carousel-6`,
    ]

    return (
        <section
            id="demo-carousel"
        >
            <TitledCard
                title='Carousels'
                description={
                    <>
                        Carousel styles are defined in <code>./next/styles/_bootstrap.scss</code>. This site simply uses the 
                        {' '}<a href="https://react-bootstrap.github.io/components/carousel/" target="_blank">React Bootstrap Carousel</a>, so
                        most of it is the same. The only difference is that the indicators are shifted down by default so that text in the slide isn't covered
                        inadvertently. Otherwise, all implementation details are more-or-less the same.
                    </>
                }
            >
                <SectionHeader sectionTitle='Generic Carousel' />
                <Carousel>
                    <Carousel.Item>
                        <h2>
                            Slide 1
                        </h2>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                             do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                             laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                             irure dolor in reprehenderit in voluptate velit esse cillum 
                             dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                             non proident, sunt in culpa qui officia deserunt mollit anim id 
                             est laborum.
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h2>
                            Slide 2
                        </h2>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                             do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                             laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                             irure dolor in reprehenderit in voluptate velit esse cillum 
                             dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                             non proident, sunt in culpa qui officia deserunt mollit anim id 
                             est laborum.
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h2>
                            Slide 3
                        </h2>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                             do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                             laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                             irure dolor in reprehenderit in voluptate velit esse cillum 
                             dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                             non proident, sunt in culpa qui officia deserunt mollit anim id 
                             est laborum.
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h2>
                            Slide 4
                        </h2>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                             do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                             laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                             irure dolor in reprehenderit in voluptate velit esse cillum 
                             dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                             non proident, sunt in culpa qui officia deserunt mollit anim id 
                             est laborum.
                        </div>
                    </Carousel.Item>
                </Carousel>
                <SectionHeader sectionTitle='Image Carousel' />
                <Carousel>
                    <Carousel.Item >
                        <div style={{
                            display: 'flex'
                        }}>
                            <img src={`${slideImages[0]}.jpg`} />
                        </div>
                        <Carousel.Caption>
                            This is a carousel
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{
                            display: 'flex'
                        }}>
                            <img src={`${slideImages[1]}.jpg`} />
                        </div>
                        <Carousel.Caption>
                            This is also a carousel
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{
                            display: 'flex'
                        }}>
                            <img src={`${slideImages[2]}.jpg`} />
                        </div>
                        <Carousel.Caption>
                            This is also a carousel
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{
                            display: 'flex'
                        }}>
                            <img src={`${slideImages[3]}.jpg`} />
                        </div>
                        <Carousel.Caption>
                            This is also dfa carousel
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </TitledCard>
        </section>
    )
}

export default DemoCarousel
