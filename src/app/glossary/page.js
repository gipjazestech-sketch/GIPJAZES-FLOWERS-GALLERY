import Link from 'next/link';

export const metadata = {
    title: 'Digital & Coding Glossary | Gipjazes Technical Academy',
    description: 'A comprehensive dictionary of digital marketing, web development, and cybersecurity terms for modern professionals.',
};

export default function GlossaryPage() {
    const terms = [
        { term: 'API (Application Programming Interface)', definition: 'A set of rules and protocols that allow different software applications to communicate with each other. In web development, APIs are used to fetch data from servers.' },
        { term: 'Backend', definition: 'The server-side of a website, including the database and server logic. It handles data processing and storage.' },
        { term: 'Cloud Computing', definition: 'The delivery of computing services—including servers, storage, databases, networking, and software—over the internet.' },
        { term: 'DNS (Domain Name System)', definition: 'The system that translates human-readable domain names (like gipjazes.com) into IP addresses that computers use to identify each other.' },
        { term: 'Encryption', definition: 'A method of securing data by converting it into a coded format that can only be read by someone with the correct decryption key.' },
        { term: 'Frontend', definition: 'The client-side of a website, encompassing everything a user interacts with visually and interactively in their browser.' },
        { term: 'Git', definition: 'A distributed version control system used to track changes in source code during software development.' },
        { term: 'HTML5', definition: 'The latest version of the Hypertext Markup Language, used for structuring and presenting content on the World Wide Web.' },
        { term: 'IP Address', definition: 'A unique string of numbers separated by periods that identifies each computer using the Internet Protocol to communicate over a network.' },
        { term: 'JSON (JavaScript Object Notation)', definition: 'A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.' },
        { term: 'Kubernetes', definition: 'An open-source system for automating deployment, scaling, and management of containerized applications.' },
        { term: 'Latency', definition: 'The delay before a transfer of data begins following an instruction for its transfer.' },
        { term: 'MVC (Model-View-Controller)', definition: 'A software architectural pattern for implementing user interfaces on computers.' },
        { term: 'Node.js', definition: 'An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.' },
        { term: 'Open Source', definition: 'Software with source code that anyone can inspect, modify, and enhance.' },
        { term: 'Phishing', definition: 'The fraudulent practice of sending emails purporting to be from reputable companies in order to induce individuals to reveal personal information.' },
        { term: 'Quantum Computing', definition: 'A type of computing that takes advantage of the collective properties of quantum states, such as superposition and entanglement.' },
        { term: 'Responsive Design', definition: 'An approach to web design that makes web pages render well on a variety of devices and window or screen sizes.' },
        { term: 'SEO (Search Engine Optimization)', definition: 'The process of improving the quality and quantity of website traffic to a website or a web page from search engines.' },
        { term: 'TypeScript', definition: 'A syntactic superset of JavaScript which adds static typing to the language.' },
        { term: 'UX (User Experience)', definition: 'The overall experience of a person using a product such as a website or computer application, especially in terms of how easy or pleasing it is to use.' },
        { term: 'Vercel', definition: 'A cloud platform for static sites and Serverless Functions that fits perfectly with your workflow.' },
        { term: 'WebP', definition: 'A modern image format that provides superior lossless and lossy compression for images on the web.' },
        { term: 'XML', definition: 'eXtensible Markup Language, a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.' },
    ];

    return (
        <div style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', color: '#ccc', fontFamily: 'Inter, system-ui, sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                <Link href="/articles" style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '20px', display: 'inline-block' }}>← Back to Academy</Link>
                <h1 style={{ fontSize: '3.5rem', background: 'linear-gradient(to right, #60a5fa, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px', fontWeight: '900' }}>
                    Technical Glossary
                </h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '700px', margin: '0 auto' }}>
                    Essential terms and definitions for every digital professional, developer, and creative artist.
                </p>
            </header>

            <div style={{ display: 'grid', gap: '20px' }}>
                {terms.map((item, index) => (
                    <div key={index} style={{
                        background: 'rgba(255,255,255,0.02)',
                        padding: '30px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        transition: 'transform 0.2s ease'
                    }}>
                        <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '10px' }}>{item.term}</h3>
                        <p style={{ lineHeight: '1.6', opacity: 0.7 }}>{item.definition}</p>
                    </div>
                ))}
            </div>

            <footer style={{ marginTop: '100px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
                <p style={{ opacity: 0.4 }}>© 2026 Gipjazes Academy</p>
            </footer>
        </div>
    );
}
