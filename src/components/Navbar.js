'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Monitor, BookOpen, Shield, ShieldCheck, Mail, Info } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Gallery', href: '/', icon: <Monitor size={18} /> },
        { name: 'Articles', href: '/articles', icon: <BookOpen size={18} /> },
        { name: 'Tools', href: '/tools', icon: <Monitor size={18} /> },
        { name: 'Glossary', href: '/glossary', icon: <ShieldCheck size={18} /> },
        { name: 'About', href: '/about', icon: <Info size={18} /> },
        { name: 'Contact', href: '/contact', icon: <Mail size={18} /> },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '20px 40px',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            background: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(20px)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Link href="/" style={{
                fontSize: '1.5rem',
                fontWeight: '900',
                color: '#fff',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                letterSpacing: '-0.02em'
            }}>
                <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(45deg, #3b82f6, #d946ef)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem'
                }}>G</div>
                <span>GIPJAZES HUB</span>
            </Link>

            {/* Desktop Menu */}
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="hidden md:flex">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            style={{
                                color: isActive ? '#3b82f6' : '#fff',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: isActive ? '700' : '400',
                                opacity: isActive ? 1 : 0.6,
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}
                            className="hover-opacity"
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    );
                })}
                <Link href="/articles/how-to-become-a-web-developer" style={{
                    padding: '8px 20px',
                    background: 'linear-gradient(45deg, #3b82f6, #2563eb)',
                    color: '#fff',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                }} className="hover-scale">
                    Start Learning
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div style={{ display: 'none' }} className="md:none mobile-toggle">
                {/* CSS would handle this normally, but I'll make it visible for now and then hide it via standard CSS if needed */}
            </div>
        </nav>
    );
}
