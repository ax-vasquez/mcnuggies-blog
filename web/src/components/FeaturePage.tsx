import React from 'react'
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { Layout } from "../components/Layout"

export const FeaturePage = ({ heroImage, text }: { heroImage: IGatsbyImageData, text: string }) => {
    return (
        <Layout>
            <div className="hero-image-container">
                <GatsbyImage image={heroImage} alt="projects" className="hero-image"/>
                <div className="hero-image-overlay">
                    <h1 className="hero-image-text">{text}</h1>
                </div>
            </div>
        </Layout>
    )
}
