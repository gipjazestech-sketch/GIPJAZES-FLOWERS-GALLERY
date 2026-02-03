'use client';

import Link from 'next/link';
import { Mail, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{
            marginTop: '100px',
            padding: '80px 40px',
            background: 'rgba(0, 0, 0, 0.5)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '60px',
                    marginBottom: '60px'
                }}>
                    {/* Brand Column */}
                    <div>
                        <Link href="/" style={{
                            fontSize: '1.5rem',
                            fontWeight: '900',
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '20px'
                        }}>
                            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(45deg, #3b82f6, #d946ef)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>G</div>
                            <span>GIPJAZES HUB</span>
                        </Link>
                        <p style={{ opacity: 0.5, fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                            The nexus of digital creative tools and advanced technical knowledge. Empowering 20K+ learners worldwide.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="#" style={{ color: '#fff', opacity: 0.4 }} className="hover-opacity"><Twitter size={20} /></a>
                            <a href="#" style={{ color: '#fff', opacity: 0.4 }} className="hover-opacity"><Github size={20} /></a>
                            <a href="#" style={{ color: '#fff', opacity: 0.4 }} className="hover-opacity"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Academy Links */}
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '25px', fontWeight: '800', letterSpacing: '1px' }}>ACADEMY</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li><Link href="/articles/how-to-become-a-web-developer" style={{ color: '#fff', opacity: 0.5, textDecoration: 'none', fontSize: '0.9rem' }} className="hover-opacity">Web Dev Roadmap</Link></li>
                            <li><Link href="/articles/ai-development-guide" style={{ color: '#fff', opacity: 0.5, textDecoration: 'none', fontSize: '0.9rem' }} className="hover-opacity">AI Dev Guide</Link></li>
                            <li><Link href="/articles/complete-coding-guide" style={{ color: '#fff', opacity: 0.5, textDecoration: 'none', fontSize: '0.9rem' }} className="hover-opacity">CSS Grid Mastery</Link></li>
                            <li><Link href="/glossary" style={{ color: '#fff', opacity: 0.5, textDecoration: 'none', fontSize: '0.9rem' }} className="hover-opacity">Technical Glossary</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '25px', fontWeight: '800', letterSpacing: '1px' }}>RESOURCES</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li><Link href="/" style={{ color: '#fff', opacity: 0.5, textDecoration: 'none', fontSize: '0.9rem' }} className="hover-opacity">4K Wallpapers</Link></li>
                            <li><Link href="/faq" style={{ color: '#fff', opacity: 0.5, textDecoration: 'none', fontSize: '0.9rem' }} className="hover-opacity">Support & FAQ</Link></li>
                            <li><Link href="/articles/resolution-guide" style={{ color: '#fff', opacity: 0.5, textDecoration: 'none', fontSize: '0.9rem' }} className="hover-opacity">Resolution Guide</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '25px', fontWeight: '800', letterSpacing: '1px' }}>LEGAL</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li><Link href="/terms" style={{ color: '#fff', opacity: 0.5, textDecoration: 'none', fontSize: '0.9rem' }} className="hover-opacity">Terms & Licensing</Link></li>
                            <li><Link href="/privacy" style={{ color: '#fff', opacity: 0.5, textDecoration: 'none', fontSize: '0.9rem' }} className="hover-opacity">Privacy Policy</Link></li>
                            <li><Link href="/about" style={{ color: '#fff', opacity: 0.5, textDecoration: 'none', fontSize: '0.9rem' }} className="hover-opacity">About Gipjazes</Link></li>
                            <li><Link href="/contact" style={{ color: '#fff', opacity: 0.5, textDecoration: 'none', fontSize: '0.9rem' }} className="hover-opacity">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    paddingTop: '40px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <p style={{ opacity: 0.3, fontSize: '0.8rem' }}>
                        © 2026 GIPJAZES DIGITAL HUB • THE ULTIMATE DIGITAL ACADEMY • CRAFTED WITH PASSION
                    </p>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 12px', background: 'rgba(74, 222, 128, 0.1)', borderRadius: '50px', fontSize: '0.75rem', color: '#4ade80', fontWeight: 'bold' }}>
                            <div style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%' }}></div>
                            SYSTEMS ONLINE
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
