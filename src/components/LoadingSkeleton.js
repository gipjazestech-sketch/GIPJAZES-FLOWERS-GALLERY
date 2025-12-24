import './Gallery.css'

export default function LoadingSkeleton({ className = '', aspectRatio = '1/1' }) {
    return (
        <div
            className={`relative overflow-hidden rounded-lg ${className}`}
            style={{ aspectRatio, background: 'rgba(255,255,255,0.05)' }}
        >
            <div className="absolute inset-0 shimmer-effect" />
            <div className="absolute inset-0 flex items-center justify-center">
                <p style={{ fontSize: '2rem', opacity: 0.2 }}>🌸</p>
            </div>
        </div>
    )
}

export function SkeletonGrid({ count = 6, columns = { mobile: 1, tablet: 2, desktop: 3 } }) {
    return (
        <div className="gallery-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: count }).map((_, i) => (
                <LoadingSkeleton key={i} aspectRatio="4/5" />
            ))}
        </div>
    )
}
