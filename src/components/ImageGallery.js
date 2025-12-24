'use client'

import { useEffect, useRef, useState } from 'react'
import OptimizedImage from './OptimizedImage'
import './Gallery.css'

export default function ImageGallery({ images = [], columns = { mobile: 1, tablet: 2, desktop: 3 } }) {
    const [loadedImages, setLoadedImages] = useState(new Set())
    const observerRef = useRef(null)

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const imageId = entry.target.dataset.imageId
                        setLoadedImages((prev) => new Set([...prev, imageId]))
                        observerRef.current?.unobserve(entry.target)
                    }
                })
            },
            {
                rootMargin: '100px',
                threshold: 0.01,
            }
        )

        return () => {
            observerRef.current?.disconnect()
        }
    }, [])

    return (
        <div className="gallery-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {images.length === 0 ? (
                <div style={{ gridColumn: '1/-1', padding: '100px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '30px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                    <p style={{ fontSize: '1.5rem', opacity: 0.3 }}>No flowers are currently in bloom.</p>
                </div>
            ) : (
                images.map((image, index) => (
                    <ImageCard
                        key={image.id || index}
                        image={image}
                        index={index}
                        observerRef={observerRef}
                        isLoaded={loadedImages.has(String(image.id || index))}
                    />
                ))
            )}
        </div>
    )
}

function ImageCard({ image, index, observerRef, isLoaded }) {
    const cardRef = useRef(null)

    useEffect(() => {
        const currentCard = cardRef.current
        if (currentCard && observerRef.current && !isLoaded) {
            observerRef.current.observe(currentCard)
        }
        return () => {
            if (currentCard && observerRef.current) {
                observerRef.current.unobserve(currentCard)
            }
        }
    }, [observerRef, isLoaded])

    const imageSrc = typeof image === 'string' ? `/uploads/${image}` : image.src

    return (
        <div
            ref={cardRef}
            data-image-id={image.id || index}
            className="group relative flower-card rounded-lg overflow-hidden"
            style={{
                aspectRatio: image.aspectRatio || '4/5',
                minHeight: '400px'
            }}
        >
            {isLoaded ? (
                <>
                    <OptimizedImage
                        src={imageSrc}
                        alt={image.alt || `Flower ${index + 1}`}
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-full"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="w-full flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-white">{image.title || (typeof image === 'string' ? image : 'Stunning Bloom')}</h3>
                                <p className="text-xs text-white/60">Tap to bloom</p>
                            </div>

                            <a
                                href={imageSrc}
                                download
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition-all"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </>
            ) : (
                <div className="w-full h-full shimmer-effect" style={{ background: 'rgba(255,255,255,0.03)' }} />
            )}
        </div>
    )
}
