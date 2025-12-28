import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', color: '#ccc', lineHeight: '1.8' }}>
            <header style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '20px' }}>Privacy Policy</h1>
                <p style={{ opacity: 0.6 }}>Effective Date: December 28, 2025</p>
            </header>

            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>1. Information We Collect</h2>
                <p>
                    At Gipjazes Flowers Gallery, we prioritize your privacy. We do not collect personal data from casual visitors.
                    If you use our download services, we may collect anonymous technical data such as your IP address and device type
                    to optimize our flower gallery performance.
                </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>2. Cookies & Advertising</h2>
                <p>
                    We use Google AdSense to serve ads. Google, as a third-party vendor, uses cookies to serve ads on our site.
                    Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our sites
                    and/or other sites on the Internet.
                </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>3. Data Protection</h2>
                <p>
                    Our site uses SSL encryption to ensure that any interaction you have with the "Exclusive 4D Digital Flora Collection"
                    is secure and private.
                </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>4. Contact Us</h2>
                <p>
                    For any privacy-related inquiries, please contact us through our official Owener Portal or via email at support@gipjazesflowersgallery.com.
                </p>
            </section>

            <footer style={{ marginTop: '80px', textAlign: 'center' }}>
                <Link href="/" style={{ color: '#d946ef', textDecoration: 'none', fontWeight: 'bold' }}>
                    ← Return to Gallery
                </Link>
            </footer>
        </div>
    );
}
