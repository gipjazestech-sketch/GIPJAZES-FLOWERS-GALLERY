
import Link from 'next/link';

export const metadata = {
    title: 'Digital Insights & Academy | Gipjazes Knowledge Hub',
    description: 'Explore our collection of expert guides on Web Development, AI, Cybersecurity, and Digital Art.',
    keywords: ['Tech Blog', 'Coding Academy', 'AI News', 'Digital Art Hints']
};

export default function ArticlesPage() {
    const articles = [
        {
            title: "Digital Marketing Mastery 2026",
            summary: "Advanced strategies for semantic SEO, viral growth, and AI-driven content engines for the modern era.",
            link: "/articles/digital-marketing-2026",
            date: "Jan 2026",
            tag: "Growth",
            color: "#fbbf24",
            readTime: "16 min"
        },
        {
            title: "AI-Powered Development: The 2026 Paradigm",
            summary: "Leveraging autonomous agents and LLMs to build high-performance software at 10x speed while maintaining expert quality.",
            link: "/articles/ai-development-guide",
            date: "Feb 2026",
            tag: "AI Future",
            color: "#fb7185",
            readTime: "14 min"
        },
        {
            title: "Complete Guide to 4K Wallpapers: Everything You Need to Know",
            summary: "An exhaustive 2500+ word guide covering resolution, pixel density, aspect ratios, color psychology, file formats, and practical tips for choosing the perfect wallpaper for any device in 2026.",
            link: "/articles/complete-guide-to-4k-wallpapers",
            date: "Feb 3, 2026",
            tag: "Featured Guide",
            color: "#3b82f6",
            readTime: "15 min"
        },
        {
            title: "Digital Photography Mastery: From Smartphone to Professional Camera",
            summary: "Master the exposure triangle, composition techniques, lighting principles, and post-processing workflows. A comprehensive 3000+ word guide for aspiring photographers in 2026.",
            link: "/articles/digital-photography-mastery",
            date: "Feb 3, 2026",
            tag: "Photography",
            color: "#d946ef",
            readTime: "18 min"
        },
        {
            title: "CSS Grid Mastery 2026",
            summary: "Stop guessing. Master the most powerful layout system in web history with our advanced update on intrinsic layouts and subgrid.",
            link: "/articles/complete-coding-guide",
            date: "Feb 2026",
            tag: "Engineering",
            color: "#4ade80",
            readTime: "12 min"
        },
        {
            title: "The Ultimate Wallpaper Selection Guide",
            summary: "A technical deep-dive into PPI, color theory, and aspect ratios to optimize your digital environment for peak performance.",
            link: "/articles/resolution-guide",
            date: "Feb 2026",
            tag: "Utility",
            color: "#3b82f6",
            readTime: "8 min"
        },

        {
            title: "The Future of AI: Beyond Chatbots",
            summary: "Exploring how autonomous AI agents and multimodal models are reshaping the digital landscape in 2026.",
            link: "/articles/future-of-ai-2026",
            date: "Jan 2026",
            tag: "Trending",
            color: "#d946ef",
            readTime: "11 min"
        },
        {
            title: "Roadmap: Become a Web Developer",
            summary: "A high-octane intensive guide to mastering Next.js, React, and modern engineering standards in 4 weeks.",
            link: "/articles/how-to-become-a-web-developer",
            date: "Jan 2026",
            tag: "Roadmap",
            color: "#60a5fa",
            readTime: "13 min"
        },
        {
            title: "Mastering Modern UI/UX Architecture",
            summary: "Motion design, glassmorphism, and the psychology of premium interfaces. Why the best sites feel 'alive'.",
            link: "/articles/mastering-modern-ui-ux",
            date: "Jan 2026",
            tag: "Design",
            color: "#d946ef",
            readTime: "10 min"
        },
        {
            title: "Cybersecurity Mastery: Defense Protocol",
            summary: "Learn how hackers think and how to secure your digital life. MFA, encryption, and secure coding practices.",
            link: "/articles/cybersecurity-mastery",
            date: "Jan 2026",
            tag: "Security",
            color: "#ef4444",
            readTime: "15 min"
        }
    ];

    return (
        <div style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', color: '#ccc', fontFamily: 'Inter, system-ui, sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '20px', display: 'inline-block' }}>← Back to Collection</Link>
                <h1 style={{ fontSize: '4.5rem', background: 'linear-gradient(to right, #3b82f6, #60a5fa, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px', fontWeight: '900', letterSpacing: '-0.02em' }}>
                    Digital Insights
                </h1>
                <p style={{ fontSize: '1.4rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
                    Expert articles on digital art, technology, and the future of web design.
                </p>
            </header>

            <div style={{ display: 'grid', gap: '30px' }}>
                {articles.map((article, i) => (
                    <Link key={i} href={article.link} style={{ textDecoration: 'none' }} className="hover-scale">
                        <div style={{
                            background: 'rgba(255,255,255,0.02)',
                            padding: '40px',
                            borderRadius: '32px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '4px',
                                height: '100%',
                                background: article.color || '#3b82f6'
                            }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    color: article.color || '#3b82f6',
                                    background: `${article.color || '#3b82f6'}11`,
                                    padding: '6px 16px',
                                    borderRadius: '50px',
                                    fontWeight: '900',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>{article.tag}</span>
                                <span style={{ fontSize: '0.8rem', opacity: 0.4 }}>{article.date}</span>
                            </div>

                            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '15px', fontWeight: '800' }}>{article.title}</h2>
                            <p style={{ lineHeight: '1.7', opacity: 0.6, fontSize: '1.1rem', maxWidth: '750px' }}>{article.summary}</p>

                            <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '8px', color: article.color || '#3b82f6', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                Read Article <span style={{ fontSize: '1.2rem' }}>→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>


        </div>
    );
}
