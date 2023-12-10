import React, { useState } from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import client from '../../sanity/client'

interface ArticleBodyImageProps {
    imageRef: string
}

export const ArticleBodyImage: React.FC<ArticleBodyImageProps> = ({
    imageRef,
}) => {

    const [loading, setLoading] = useState(true)
    const [imgUrl, setImgUrl] = useState(null as unknown as string)
    const [blurImgUrl, setBlurImgUrl] = useState(null as unknown as string)

    useEffect(() => {
        async function fetchImageData() {
            const imageData = await client.fetch(`*[_type == "sanity.imageAsset" && _id == $ref][0]{
                metadata,
                url
            }`, { ref: imageRef }) as {
                // There are more fields available here, but we only need the lqip field
                metadata: {
                    lqip: string    // A 20x20, base64 encoding of the image, useful for placeholders
                },
                url: string     // The URL to the original, full-resolution asset
            }
            setImgUrl(imageData.url)
            setBlurImgUrl(imageData.metadata.lqip)
        }

        fetchImageData()
        .then(() => {
            // If either one is loaded, we know they both are (NOTE: the imgUrl being defined does not mean the image has rendered - just that the URL is ready to be used)
            if (imgUrl || blurImgUrl) {
                setLoading(false)
            }
        })
    })

    if (loading) {
        return <div>Loading image...</div>
    }

    return (
      <Image
        src={imgUrl}
        height={0}
        width={0}
        sizes="100vw"
        alt={`embedded-image-${imageRef}`}
        placeholder='blur'
        // /**
        //  * For blur Data URLs, it's recommended to use an image that's 10x10 pixels or less
        //  * 
        //  * @see https://nextjs.org/docs/pages/api-reference/components/image#blurdataurl
        //  */
        blurDataURL={blurImgUrl}
        style={{ width: `100%`, height: `auto` }}
    />

    )
}

export default ArticleBodyImage
