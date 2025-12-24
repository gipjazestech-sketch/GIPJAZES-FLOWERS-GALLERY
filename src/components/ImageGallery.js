'use client'

import OptimizedImage from './OptimizedImage'
import './Gallery.css'

export default function ImageGallery({ images = [] }) {
    return (
        <div className="gallery-grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3">
            {images.length === 0 ? (
                <div style={{ gridColumn: '1/-1', padding: '100px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '30px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                    <p style={{ fontSize: '1.5rem', opacity: 0.3 }}>Your gallery is empty.<br />Upload your first flower!</p>
                </div>
            ) : (
                images.map((image, index) => (
                    <ImageCard
                        key={image.url || image.src || index}
                        image={image}
                        index={index}
                    />
                ))
            )}
        </div>
    )
}

function ImageCard({ image, index }) {
    const imageSrc = image.src || image.url

    return (
        <div
            className="group relative flower-card rounded-lg overflow-hidden"
            style={{ aspectRatio: '4/5', minHeight: '350px' }}
        >
            <OptimizedImage
                src={imageSrc}
                alt="Flower"
                fill={true}
                priority={index < 4} // Load first row immediately
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Always visible on mobile, hover on desktop */}
            <div className="card-overlay">
                <div className="w-full flex justify-between items-center" style={{ pointerEvents: 'auto' }}>
                    <div style={{ maxWidth: '70%' }}>
                        <h3 className="text-sm font-medium text-white truncate">
                            {image.title ? image.title.split('/').pop() : 'Stunning Bloom'}
                        </h3>
                    </div>
                    <a
                        href={image.downloadUrl || imageSrc}
                        download
                        style={{ zIndex: 10, position: 'relative' }}
                        className="bg-white/20 hover:bg-white/40 backdrop-blur-xl p-3 rounded-full transition-all"
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
        </div>
    )
}
