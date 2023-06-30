import { cn } from '@/lib/utils';
import * as React from 'react'

interface GridViewProps {
    children?: React.ReactNode;
    className?: string;
}

const GridView: React.FC<GridViewProps> = ({children, className}) => {
    return (
        <section className={cn("p-10 w-1/2", className)}>
            {children}
        </section>
    );
}

export {GridView}