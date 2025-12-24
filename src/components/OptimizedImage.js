'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    priority = false,
    className = '',
    sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    quality = 75,
    fill = false,
    style = {},
    onLoadComplete = () => { },
}) {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const handleLoad = (result) => {
        setIsLoading(false)
        onLoadComplete(result)
    }

    const handleError = () => {
        setIsLoading(false)
        setHasError(true)
    }

    if (hasError) {
        return (
            <div
                className={`flex items-center justify-center bg-gray-900 ${className}`}
                style={{ width, height, ...style, borderRadius: '15px' }}
            >
                <div className="text-center p-4">
                    <p className="text-sm opacity-50">Image Wilted</p>
                </div>
            </div>
        )
    }

    return (
        <div className={`relative overflow-hidden ${className}`} style={{ ...style, borderRadius: '15px' }}>
            {isLoading && (
                <div className="absolute inset-0 shimmer-effect" style={{ background: 'rgba(255,255,255,0.05)', zIndex: 1 }} />
            )}
            <Image
                src={src}
                alt={alt}
                width={fill ? undefined : width}
                height={fill ? undefined : height}
                fill={fill}
                quality={quality}
                priority={priority}
                sizes={sizes}
                loading={priority ? 'eager' : 'lazy'}
                onLoad={handleLoad}
                onError={handleError}
                className={`
                    duration-700 ease-in-out
                    ${isLoading ? 'scale-110 blur-xl' : 'scale-100 blur-0'}
                `}
                style={{
                    objectFit: 'cover',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            />
        </div>
    )
}
