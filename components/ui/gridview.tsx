"use client"

import { cn } from '@/lib/utils';
import * as React from 'react'

interface GridViewProps {
    children?: React.ReactNode;
    className?: string;
}

const GridView: React.FC<GridViewProps> = ({children, className}) => {

    return (
                    <div className='outline-dashed outline-2 rounded-lg w-auto h-full aspect-A4'>
                        {children}
                    </div>
            
    );
}

export {GridView}