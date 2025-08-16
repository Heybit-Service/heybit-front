"use client";

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithSkeletonProps extends Omit<ImageProps, 'alt'> {
    skeletonHeight?: string;
    alt: string;
}

export default function ImageWithSkeleton({ 
    skeletonHeight = '400px',
    alt,
    ...props 
}: ImageWithSkeletonProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            {isLoading && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: skeletonHeight,
                        backgroundColor: 'var(--heybit-variable-HB-gray100)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ 
                        display: 'flex', 
                        gap: '4px'
                    }}>
                        <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--heybit-variable-HB-gray400)',
                            animation: 'bounce 1.4s infinite ease-in-out both',
                            animationDelay: '-0.32s'
                        }} />
                        <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--heybit-variable-HB-gray400)',
                            animation: 'bounce 1.4s infinite ease-in-out both',
                            animationDelay: '-0.16s'
                        }} />
                        <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--heybit-variable-HB-gray400)',
                            animation: 'bounce 1.4s infinite ease-in-out both'
                        }} />
                    </div>
                </div>
            )}
            <Image
                {...props}
                alt={alt}
                onLoadingComplete={() => setIsLoading(false)}
                style={{ 
                    ...props.style,
                    opacity: isLoading ? 0 : 1,
                    transition: 'opacity 0.3s ease-in-out'
                }}
            />
            <style jsx>{`
                @keyframes bounce {
                    0%, 80%, 100% {
                        transform: scale(0);
                    }
                    40% {
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
}