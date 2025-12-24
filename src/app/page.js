import { list } from '@vercel/blob';
import Link from 'next/link';
import Image from 'next/image';
import ImageGallery from '@/components/ImageGallery';

export const dynamic = 'force-dynamic';

async function getImages() {
  try {
    const { blobs } = await list();
    // Use the blob URLs directly for the gallery
    return blobs.map(blob => ({
      src: blob.url,
      title: blob.pathname,
      downloadUrl: blob.downloadUrl || blob.url
    }));
  } catch (err) {
    console.error('Error fetching blobs:', err);
    return [];
  }
}

export default async function Home() {
  const images = await getImages();

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 className="animate-fade-in" style={{ fontSize: '4rem', marginBottom: '10px', background: 'linear-gradient(to bottom right, #fff, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Gipjazes Flowers
        </h1>
        <p className="animate-fade-in" style={{ opacity: 0.8, fontSize: '1.2rem', fontWeight: 300, animationDelay: '0.2s' }}>
          Exclusive 4D Digital Flora Collection
        </p>

        <div style={{ marginTop: '30px', padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', display: 'inline-block' }}>
          <p style={{ fontSize: '0.9rem', color: '#10b981' }}>⚡ Optimized for Mobile & Android - Lightning Fast Loading</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Link href="/admin/upload" style={{
            opacity: 0.4, fontSize: '0.8rem', textDecoration: 'none', marginRight: '15px'
          }}>
            Owner Portal
          </Link>
        </div>
      </header>

      <ImageGallery images={images} />

      <section style={{ marginTop: '80px', padding: '40px', background: 'rgba(255,255,255,0.03)', borderRadius: '30px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Premium Performance</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#d946ef' }}>WebP</h3>
            <p style={{ opacity: 0.7 }}>Modern formats for 80% smaller sizes</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#d946ef' }}>Lazy Load</h3>
            <p style={{ opacity: 0.7 }}>Only loads what you see</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#d946ef' }}>Responsive</h3>
            <p style={{ opacity: 0.7 }}>Perfect fit for Android & iOS</p>
          </div>
        </div>
      </section>
    </div>
  );
}
