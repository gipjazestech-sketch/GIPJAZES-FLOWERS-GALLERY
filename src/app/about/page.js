import Link from 'next/link';

export default function AboutPage() {
    return (
        <div style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', color: '#ccc' }}>
            <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h1 style={{ fontSize: '4rem', background: 'linear-gradient(to right, #3b82f6, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px', fontWeight: '900' }}>
                    Gipjazes Digital Hub
                </h1>
                <p style={{ fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.05em', color: '#60a5fa' }}>
                    Where Art Meets Engineering
                </p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                <section style={{ background: 'rgba(255,255,255,0.02)', padding: '50px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '25px' }}>Our Mission</h2>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
                        Gipjazes Digital Hub is not just a gallery; it is a comprehensive ecosystem for the modern digital creative. We believe that true digital excellence lies at the intersection of aesthetic beauty and technical precision.
                    </p>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                        Our platform serves two distinct but connected purposes: providing <strong>World-Class Digital Assets</strong> for your devices and offering <strong>Deep Technical Education</strong> for your mind. Whether you are downloading an 8K wallpaper or learning Semantic SEO, our standard for quality remains the same: uncompromising.
                    </p>
                </section>

                <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.05)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                        <h2 style={{ color: '#fff', marginBottom: '20px' }}>The Academy</h2>
                        <p style={{ lineHeight: '1.8' }}>
                            We are building the web's most practical repository of knowledge. From **Full-Stack Development** guides that take you from zero to deployed app, to **Digital Marketing Mastery** that teaches real-world monetization. Our content is written by senior engineers and industry veterans, ensuring you get signal, not noise.
                        </p>
                    </div>

                    <div style={{ background: 'rgba(217, 70, 239, 0.05)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(217, 70, 239, 0.1)' }}>
                        <h2 style={{ color: '#fff', marginBottom: '20px' }}>The Gallery</h2>
                        <p style={{ lineHeight: '1.8' }}>
                            We ensure that every pixel is perfect, utilizing <strong>8DX rendering techniques</strong> and AI-enhanced upscaling. Our collection is curated not just for beauty, but for psychological impact—designed to improve focus, mood, and productivity for professionals who stare at screens all day.
                        </p>
                    </div>
                </section>

                <section style={{ textAlign: 'center', padding: '60px 40px', background: 'rgba(255,255,255,0.02)', borderRadius: '30px' }}>
                    <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '30px' }}>By The Numbers</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
                        <div>
                            <h4 style={{ fontSize: '2.5rem', color: '#3b82f6', marginBottom: '5px', fontWeight: '900' }}>50+</h4>
                            <p style={{ opacity: 0.5, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Technical Guides</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '2.5rem', color: '#d946ef', marginBottom: '5px', fontWeight: '900' }}>12K+</h4>
                            <p style={{ opacity: 0.5, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Premium Assets</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '2.5rem', color: '#4ade80', marginBottom: '5px', fontWeight: '900' }}>1M+</h4>
                            <p style={{ opacity: 0.5, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Global Users</p>
                        </div>
                    </div>
                </section>

                <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '60px', marginBottom: '40px' }}>
                    <h2 style={{ color: '#fff', marginBottom: '30px', textAlign: 'center' }}>Connect With Us</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ opacity: 0.5, marginBottom: '10px' }}>Course Support</p>
                            <p style={{ color: '#fff' }}>learn@gipjazes.com</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ opacity: 0.5, marginBottom: '10px' }}>Asset Licensing</p>
                            <p style={{ color: '#fff' }}>licensing@gipjazes.com</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ opacity: 0.5, marginBottom: '10px' }}>Verification</p>
                            <p style={{ color: '#fff' }}>Google Trust Id: 829-102</p>
                        </div>
                    </div>
                </section>
            </div>


        </div>
    );
}
