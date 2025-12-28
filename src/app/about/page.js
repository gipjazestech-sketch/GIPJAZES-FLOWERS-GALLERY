import Link from 'next/link';

export default function AboutPage() {
    return (
        <div style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto', color: '#ccc', textAlign: 'center' }}>
            <header style={{ marginBottom: '80px' }}>
                <h1 style={{ fontSize: '4rem', background: 'linear-gradient(to right, #d946ef, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>
                    Gipjazes Studio
                </h1>
                <p style={{ fontSize: '1.2rem', fontWeight: 300, letterspacing: '0.1em' }}>
                    Curating the World's Finest Digital Flora
                </p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', textAlign: 'left', marginBottom: '80px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h2 style={{ color: '#fff', marginBottom: '20px' }}>Our Mission</h2>
                    <p style={{ lineHeight: '1.8' }}>
                        Gipjazes Flowers Gallery was founded to provide a premium, ad-supported digital experience for lovers of
                        botanical art. Each image in our gallery is carefully selected to represent the pinnacle of 4D digital
                        rendering and floral photography.
                    </p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h2 style={{ color: '#fff', marginBottom: '20px' }}>Contact Details</h2>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
                        <li>📧 <span style={{ color: '#fff' }}>hello@gipjazesflowersgallery.com</span></li>
                        <li>📍 <span style={{ color: '#fff' }}>Digital Studio, Global</span></li>
                        <li>📱 <span style={{ color: '#fff' }}>Official Support Portal</span></li>
                    </ul>
                </div>
            </div>

            <section style={{ padding: '40px', background: 'rgba(217, 70, 239, 0.05)', borderRadius: '30px' }}>
                <h3 style={{ color: '#fff', marginBottom: '15px' }}>Licensing & Cooperation</h3>
                <p>If you are interested in licensing our high-resolution assets for commercial use, please get in touch.</p>
            </section>

            <footer style={{ marginTop: '80px' }}>
                <Link href="/" style={{ color: '#d946ef', textDecoration: 'none', fontWeight: 'bold' }}>
                    ← Back to the Blooms
                </Link>
            </footer>
        </div>
    );
}
