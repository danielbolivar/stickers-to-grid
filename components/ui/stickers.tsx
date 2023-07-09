import React from 'react';
import Image from 'next/image';
import {cn} from '@/lib/utils'

interface StickerProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

export const Sticker:React.FC<StickerProps> = ({src, alt, width, height, className}) => {

    return (
        <li>
            <figure>
                <Image src={src} loading='lazy' alt={alt} className={cn("rounded-md", className)} height={height} width={width} />
            </figure>
        </li>
    );

}

