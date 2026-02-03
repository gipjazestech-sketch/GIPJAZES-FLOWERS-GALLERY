
import Link from 'next/link';
import { Layout, Code, Zap, Smartphone, Monitor, Cpu } from 'lucide-react';

export const metadata = {
    title: 'CSS Grid Mastery 2026: The Ultimate Layout Guide | Gipjazes Academy',
    description: 'Master CSS Grid, Subgrid, and Intrinsic Layouts in 2026. A comprehensive guide for modern frontend developers.',
    keywords: ['CSS Grid', 'Subgrid', 'Frontend Development', 'Web Design 2026', 'Responsive Layouts']
};

export default function CSSGridMastery() {
    return (
        <div style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', color: '#ccc', lineHeight: '1.8', fontFamily: 'Inter, system-ui, sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                <Link href="/articles" style={{ color: '#3b82f6', textDecoration: 'none', marginBottom: '20px', display: 'inline-block', fontWeight: 'bold' }}>← Back to Academy</Link>
                <h1 style={{ fontSize: '3.5rem', background: 'linear-gradient(to right, #4ade80, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px', fontWeight: '900', letterSpacing: '-0.02em' }}>
                    CSS Grid Mastery 2026
                </h1>
                <p style={{ fontSize: '1.4rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto' }}>
                    Stop guessing. Master the most powerful layout system in the history of the web with our advanced 2026 update.
                </p>
            </header>

            <article style={{ fontSize: '1.1rem' }}>
                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Layout size={32} color="#4ade80" /> 1. The Death of Media Queries?
                    </h2>
                    <p>
                        In 2026, senior developers have moved beyond hundreds of lines of media queries. We now use **Intrinsic Layouts**. By leveraging `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`, we allow the browser to determine the best layout based on the available space, not the device name.
                    </p>
                    <div style={{ background: '#111', padding: '25px', borderRadius: '15px', border: '1px solid #333', marginTop: '25px', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '10px', right: '15px', fontSize: '0.7rem', color: '#4ade80', fontWeight: 'bold' }}>MODERN CSS</div>
                        <code style={{ color: '#4ade80', fontSize: '0.9rem' }}>
                            .gallery &#123;<br />
                            &nbsp;&nbsp;display: grid;<br />
                            &nbsp;&nbsp;grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));<br />
                            &nbsp;&nbsp;gap: 2rem;<br />
                            &#125;
                        </code>
                    </div>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Zap size={32} color="#3b82f6" /> 2. Subgrid: The Final Boss
                    </h2>
                    <p>
                        `subgrid` has finally reached 100% global support. It allows child elements to inherit the grid tracks of their parents. This is essential for building complex components like card headers and footers that line up perfectly across different columns.
                    </p>
                    <p style={{ marginTop: '20px' }}>
                        At Gipjazes Digital Hub, we use subgrid to ensure that our article summaries and &quot;Read More&quot; buttons remain perfectly aligned, regardless of how much text is in the title.
                    </p>
                </section>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '60px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '10px' }}>fr Units</h3>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Fractional units are the secret to flexible, proportional columns without calculating percentages.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '10px' }}>Grid Areas</h3>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>Named areas (`grid-template-areas`) make your CSS readable and structural changes a breeze.</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '10px' }}>minmax()</h3>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>The holy grail of responsive design. Ensures content never gets too small or too large.</p>
                    </div>
                </div>

                <section style={{ marginBottom: '60px', background: 'rgba(74, 222, 128, 0.05)', padding: '40px', borderRadius: '32px', border: '1px solid rgba(74, 222, 128, 0.1)' }}>
                    <h2 style={{ color: '#4ade80', fontSize: '2rem', marginBottom: '20px' }}>Why This Matters in 2026</h2>
                    <p style={{ opacity: 0.9 }}>
                        Performance is now the #1 ranking factor. Complex JavaScript-based layouts slow down the Main Thread. By moving your layout logic into CSS Grid, you reduce your JS bundle size and provide a smoother experience for users on low-powered mobile devices.
                    </p>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '30px' }}>3. Advanced Alignment</h2>
                    <p>
                        `place-items: center;` is just the beginning. In 2026, we use `justify-content: space-evenly;` to create high-end, gallery-style layouts that feel like a professional physical exhibit. Combined with the `gap` property, you have total control over the &quot;breathing room&quot; of your design.
                    </p>
                </section>

                <div style={{ textAlign: 'center', marginTop: '80px' }}>
                    <Link href="/articles" style={{ padding: '20px 50px', background: 'linear-gradient(45deg, #4ade80, #3b82f6)', color: '#fff', borderRadius: '50px', textDecoration: 'none', fontWeight: '900', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(74, 222, 128, 0.2)' }} className="hover-scale">
                        Explore More Academy Guides
                    </Link>
                </div>
            </article>
        </div>
    );
}
