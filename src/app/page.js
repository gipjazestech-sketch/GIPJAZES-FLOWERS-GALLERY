import { list } from '@vercel/blob';
import Link from 'next/link';
import Image from 'next/image';
import ImageGallery from '@/components/ImageGallery';
import nextDynamic from 'next/dynamic';

const GallerySection = nextDynamic(() => import('@/components/GallerySection'), {
  loading: () => <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p style={{ opacity: 0.5 }}>Loading Gallery...</p></div>,
  ssr: true,
});

export const dynamic = 'force-dynamic';

async function getImages() {
  const staticWallpapers = [
    {
      src: '/neon-lotus.png',
      title: 'Neon Lotus 4K',
      category: 'Cyberpunk',
      downloadUrl: '/neon-lotus.png'
    },
    {
      src: '/quantum-network.png',
      title: 'Quantum Network',
      category: 'Abstract',
      downloadUrl: '/quantum-network.png'
    },
    {
      src: '/cyber-city.png',
      title: 'Cyber City Rain',
      category: 'Urban',
      downloadUrl: '/cyber-city.png'
    }
  ];

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.warn('BLOB_READ_WRITE_TOKEN is missing. Returning static gallery.');
    return staticWallpapers;
  }
  try {
    const { blobs } = await list();
    const blobImages = blobs.map(blob => {
      // Parse category from path: "gallery/Rose/file.jpg"
      const pathParts = blob.pathname.split('/');
      const category = pathParts.length > 2 ? pathParts[pathParts.length - 2] : 'Others';

      return {
        src: blob.url,
        title: blob.pathname,
        category: category,
        downloadUrl: blob.downloadUrl || blob.url
      };
    });
    return [...staticWallpapers, ...blobImages];
  } catch (err) {
    console.error('Error fetching blobs:', err);
    return staticWallpapers;
  }
}

export default async function Home() {
  const images = await getImages();

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '80px', position: 'relative' }}>
        <h1 className="animate-fade-in" style={{ fontSize: '4.5rem', marginBottom: '15px', background: 'linear-gradient(to bottom right, #fff, #60a5fa, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900', letterSpacing: '-0.03em' }}>
          Gipjazes Digital Hub
        </h1>
        <p className="animate-fade-in" style={{ opacity: 0.9, fontSize: '1.6rem', fontWeight: 300, animationDelay: '0.2s', color: '#60a5fa', marginBottom: '30px' }}>
          The Nexus of Digital Creative Tools and Advanced Technical Knowledge
        </p>
        <div className="animate-fade-in" style={{ maxWidth: '900px', margin: '0 auto 40px', opacity: 0.8, lineHeight: '1.8', animationDelay: '0.3s', fontSize: '1.1rem' }}>
          <p>
            Welcome to <strong>Gipjazes Digital Hub</strong>, your premier destination for high-fidelity 4K wallpapers and deep technical education. Our platform bridges the gap between artistic expression and engineering excellence. Explore our curated gallery of neon-inspired digital art or dive into our academy for in-depth guides on full-stack development, cybersecurity, and digital marketing. Whether you are a creative professional seeking a fresh aesthetic or a developer looking to sharpen your edge, we provide the resources to fuel your digital journey.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
          <div style={{ padding: '15px 30px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '30px' }}>
            <p style={{ fontSize: '0.95rem', color: '#60a5fa', margin: 0 }}>📊 <strong>20K+</strong> Active Learners</p>
          </div>
          <div style={{ padding: '15px 30px', background: 'rgba(217, 70, 239, 0.1)', border: '1px solid rgba(217, 70, 239, 0.2)', borderRadius: '30px' }}>
            <p style={{ fontSize: '0.95rem', color: '#d946ef', margin: 0 }}>🎨 <strong>Premium</strong> 4K Assets</p>
          </div>
          <div style={{ padding: '15px 30px', background: 'rgba(74, 222, 128, 0.1)', border: '1px solid rgba(74, 222, 128, 0.2)', borderRadius: '30px' }}>
            <p style={{ fontSize: '0.95rem', color: '#4ade80', margin: 0 }}>🔒 <strong>Verified</strong> Security Content</p>
          </div>
        </div>
      </header>

      {/* NEW Digital Marketing Section */}
      <section style={{
        marginBottom: '60px',
        padding: '40px',
        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.08), rgba(245, 158, 11, 0.08))',
        borderRadius: '30px',
        border: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <span style={{ padding: '5px 12px', background: '#fbbf24', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px', color: '#000' }}>HOT TOPIC</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800' }}>Digital Marketing Mastery</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '30px' }}>
            <div>
              <p style={{ opacity: 0.8, lineHeight: '1.7', marginBottom: '20px' }}>
                Learn how to build a massive online presence and monetize it in 2026. From SEO and social media growth to creating automated wealth engines.
              </p>
              <Link href="/articles/digital-marketing-2026" style={{
                display: 'inline-block',
                padding: '12px 25px',
                background: '#fbbf24',
                color: '#000',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }} className="hover-scale">
                Master Marketing →
              </Link>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>Key Strategies:</h4>
              <ul style={{ paddingLeft: '20px', opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li>Semantic SEO & Voice Search</li>
                <li>Viral Social Media Growth</li>
                <li>Email Marketing & Retention</li>
                <li>AI Content Engines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEW Featured Comprehensive Guides Section */}
      <section style={{
        marginBottom: '60px',
        padding: '40px',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(217, 70, 239, 0.08))',
        borderRadius: '30px',
        border: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ padding: '8px 16px', background: '#3b82f6', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px', color: '#fff', marginBottom: '20px', display: 'inline-block' }}>FEATURED GUIDES</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '15px' }}>Comprehensive Knowledge Base</h2>
            <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>In-depth, professional guides covering everything you need to know</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            <Link href="/articles/complete-guide-to-4k-wallpapers" style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s ease' }} className="hover-scale">
              <div style={{ fontSize: '0.75rem', color: '#3b82f6', marginBottom: '10px', fontWeight: 'bold' }}>2500+ WORDS • 15 MIN READ</div>
              <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '12px', fontWeight: '700' }}>Complete Guide to 4K Wallpapers</h3>
              <p style={{ opacity: 0.7, lineHeight: '1.7', fontSize: '0.95rem' }}>
                Everything about resolution, pixel density, aspect ratios, color psychology, and file formats. A comprehensive technical deep-dive.
              </p>
            </Link>

            <Link href="/articles/digital-photography-mastery" style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s ease' }} className="hover-scale">
              <div style={{ fontSize: '0.75rem', color: '#d946ef', marginBottom: '10px', fontWeight: 'bold' }}>3000+ WORDS • 18 MIN READ</div>
              <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '12px', fontWeight: '700' }}>Digital Photography Mastery</h3>
              <p style={{ opacity: 0.7, lineHeight: '1.7', fontSize: '0.95rem' }}>
                Master the exposure triangle, composition, lighting, and post-processing. From smartphone to professional camera.
              </p>
            </Link>

            <Link href="/articles" style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} className="hover-scale">
              <h3 style={{ color: '#4ade80', fontSize: '1.6rem', marginBottom: '12px', fontWeight: '700' }}>View All Articles →</h3>
              <p style={{ opacity: 0.7, lineHeight: '1.7', fontSize: '0.95rem' }}>
                Explore 10+ comprehensive guides on development, design, marketing, and more
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* NEW Ultimate Coding Section at the very top */}
      <section style={{
        marginBottom: '60px',
        padding: '40px',
        background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.08), rgba(59, 130, 246, 0.08))',
        borderRadius: '30px',
        border: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <span style={{ padding: '5px 12px', background: '#4ade80', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px', color: '#000' }}>FULL COURSE</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800' }}>The Ultimate Coding</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '30px' }}>
            <div>
              <p style={{ opacity: 0.8, lineHeight: '1.7', marginBottom: '20px' }}>
                Your complete zero-to-hero guide. Master HTML5, CSS3, JavaScript, and Python in one massive, free resource.
              </p>
              <Link href="/articles/complete-coding-guide" style={{
                display: 'inline-block',
                padding: '12px 25px',
                background: '#4ade80',
                color: '#000',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }} className="hover-scale">
                Start Learning Now →
              </Link>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#4ade80', marginBottom: '10px' }}>Curriculum:</h4>
              <ul style={{ paddingLeft: '20px', opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li>HTML5 Semantic Structure</li>
                <li>CSS3 Flexbox & Grid</li>
                <li>Modern JavaScript (ES6+)</li>
                <li>Python for AI & Backend</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEW Cybersecurity Section */}
      <section style={{
        marginBottom: '60px',
        padding: '40px',
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(248, 113, 113, 0.08))',
        borderRadius: '30px',
        border: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <span style={{ padding: '5px 12px', background: '#ef4444', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px', color: '#fff' }}>ESSENTIAL SKILL</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800' }}>Cybersecurity Mastery</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '30px' }}>
            <div>
              <p style={{ opacity: 0.8, lineHeight: '1.7', marginBottom: '20px' }}>
                Protect yourself and your code. Learn how hackers operate and the protocols you need to stay safe in 2026.
              </p>
              <Link href="/articles/cybersecurity-mastery" style={{
                display: 'inline-block',
                padding: '12px 25px',
                background: '#ef4444',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }} className="hover-scale">
                Learn Defense →
              </Link>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#f87171', marginBottom: '10px' }}>Defense Protocols:</h4>
              <ul style={{ paddingLeft: '20px', opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li>Phishing Detection</li>
                <li>Secure Coding Practices</li>
                <li>Encryption Standards</li>
                <li>Identity Protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* New Expanded Education Section at the top */}
      <section style={{
        marginBottom: '60px',
        padding: '40px',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(217, 70, 239, 0.08))',
        borderRadius: '30px',
        border: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <span style={{ padding: '5px 12px', background: '#3b82f6', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px' }}>NEW GUIDE</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800' }}>Become a Web Developer</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '30px' }}>
            <div>
              <p style={{ opacity: 0.8, lineHeight: '1.7', marginBottom: '20px' }}>
                Ever wondered how websites like Gipjazes are built? We believe anyone can become a professional developer by following a fast-track, project-based approach.
              </p>
              <Link href="/articles/how-to-become-a-web-developer" style={{
                display: 'inline-block',
                padding: '12px 25px',
                background: '#3b82f6',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }} className="hover-scale">
                Start Your Journey →
              </Link>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#60a5fa', marginBottom: '10px' }}>What You&apos;ll Learn:</h4>
              <ul style={{ paddingLeft: '20px', opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li>Modern HTML5 & CSS3 Architecture</li>
                <li>JavaScript Mastery for 2026</li>
                <li>Next.js & React Frameworks</li>
                <li>AI-Assisted Coding Workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* NEW Future of AI Section */}
      <section style={{
        marginBottom: '60px',
        padding: '40px',
        background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.08), rgba(217, 70, 239, 0.08))',
        borderRadius: '30px',
        border: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <span style={{ padding: '5px 12px', background: '#fb7185', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px', color: '#fff' }}>TRENDING</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800' }}>The Future of AI</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '30px' }}>
            <div>
              <p style={{ opacity: 0.8, lineHeight: '1.7', marginBottom: '20px' }}>
                Discover how autonomous AI agents and multimodal models are reshaping the digital landscape in 2026 and beyond.
              </p>
              <Link href="/articles/future-of-ai-2026" style={{
                display: 'inline-block',
                padding: '12px 25px',
                background: '#fb7185',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }} className="hover-scale">
                Explore AI Future →
              </Link>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#fb7185', marginBottom: '10px' }}>Key Insights:</h4>
              <ul style={{ paddingLeft: '20px', opacity: 0.7, fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li>Rise of Agentic AI</li>
                <li>Multimodal Mastery</li>
                <li>On-Device Intelligence</li>
                <li>Ethical AI Frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GallerySection images={images} />

      <section style={{ marginTop: '80px', padding: '60px 40px', background: 'rgba(255,255,255,0.02)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Professional Wallpaper Features</h2>
          <p style={{ opacity: 0.5 }}>Why choose Gipjazes for your digital background needs</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#3b82f6', marginBottom: '15px' }}>Next-Gen WebP</h3>
            <p style={{ opacity: 0.7, fontSize: '0.95rem' }}>We utilize advanced WebP compression technology to deliver crystal-clear images that load 80% faster than traditional formats.</p>
          </div>
          <div style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#3b82f6', marginBottom: '15px' }}>Adaptive Loading</h3>
            <p style={{ opacity: 0.7, fontSize: '0.95rem' }}>Our intelligent lazy-loading system ensures that your browsing experience remains smooth by only downloading images as they enter your view.</p>
          </div>
          <div style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#3b82f6', marginBottom: '15px' }}>Multi-Device Fit</h3>
            <p style={{ opacity: 0.7, fontSize: '0.95rem' }}>Every wallpaper in our gallery is meticulously tested to ensure a perfect fit across all screen sizes, from Android phones to widescreen monitors.</p>
          </div>
        </div>

        <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '30px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '20px' }}>Community Support</h3>
            <p style={{ opacity: 0.7, marginBottom: '25px', lineHeight: '1.7' }}>
              Join our growing community of digital artists and developers. Get help with your projects and share your latest wallpaper creations.
            </p>
            <Link href="/faq" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>Join Community →</Link>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '30px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '20px' }}>Resolution Guide</h3>
            <p style={{ opacity: 0.7, marginBottom: '25px', lineHeight: '1.7' }}>
              Understand the science behind 4K displays and how to choose the perfect resolution for your specific device and pixel density.
            </p>
            <Link href="/articles/resolution-guide" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>Read Guide →</Link>
          </div>
        </div>

        <div style={{ marginTop: '60px', textAlign: 'left', maxWidth: '900px', margin: '60px auto 0' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>How to Download Your Wallpaper</h3>
          <ol style={{ opacity: 0.7, lineHeight: '2', paddingLeft: '20px' }}>
            <li>Browse our collection and find a design that inspires you.</li>
            <li>Hover over the image or tap on mobile to reveal the download options.</li>
            <li>Click the <strong>DOWNLOAD</strong> button to save the high-resolution file directly to your device.</li>
            <li>Go to your device settings and set your new Gipjazes image as the background.</li>
          </ol>
          <p style={{ marginTop: '20px', opacity: 0.5, fontStyle: 'italic' }}>
            *All our wallpapers are free for personal use. For commercial inquiries, please contact our support.
          </p>
        </div>
      </section>

    </div>
  );
}
