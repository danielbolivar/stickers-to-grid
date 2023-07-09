"use client"

import { stickersData } from "@/data/data"
import { Sticker } from '@/components/ui/stickers'
import { useEffect, useState } from "react"
import { Skeleton } from "./skeleton";

const SkeletonStickerList: React.FC = () => {

    return (
        <>
            <Skeleton className="rounded-md w-[200px] h-[150px]"/>
            <Skeleton className="rounded-md w-[200px] h-[150px]"/>
            <Skeleton className="rounded-md w-[200px] h-[150px]"/>
            <Skeleton className="rounded-md w-[200px] h-[150px]"/>
        </>
    );
}

const StickerList: React.FC = () => {

    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(()=> {
            setLoading(false);  
        }, 1000)
    })

    return (

        <ul className='relative flex gap-2 md:flex-wrap' >



           { isLoading ? <SkeletonStickerList/> :
                
                  (stickersData.map((sticker) =>{
                    return <Sticker key={sticker.alt} src={sticker.src} alt={sticker.alt} width={200} height={200}/>
                  }))
            }

        </ul>
    );
}

export default StickerList;