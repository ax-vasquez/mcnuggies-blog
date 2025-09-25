import React from 'react'
import Image from 'next/image'

interface ArticleBodyImageProps {
    imgIndex: number
    imgUrl: string,
    blurImg: string
}

export const ArticleBodyImage: React.FC<ArticleBodyImageProps> = ({
    imgIndex,
    imgUrl,
    blurImg
}) => {
    return (
      <Image
        src={imgUrl}
        height={0}
        width={0}
        sizes="100vw"
        alt={`article-image-${imgIndex}`}
        placeholder='blur'
        // /**
        //  * For blur Data URLs, it's recommended to use an image that's 10x10 pixels or less
        //  * 
        //  * @see https://nextjs.org/docs/pages/api-reference/components/image#blurdataurl
        //  */
        blurDataURL={blurImg}
        style={{ width: `100%`, height: `auto` }}
    />

    )
}

export default ArticleBodyImage
