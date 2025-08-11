import Image from 'next/image';
import React from 'react'

interface Props {
    className?: string;
    src: string;
    alt?: string
}

const SimplePic = ({ className, src, alt = 'img' }: Props) => {
    return (
        <Image
            className={className}
            src={src}
            alt={alt}
            loading='lazy'
            height={400}
            width={400}
        />
    )
}

export default SimplePic
