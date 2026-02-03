'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Globe } from 'lucide-react';

export default function ContactPage() {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <div style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', color: '#ccc', fontFamily: 'Inter, system-ui, sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h1 style={{ fontSize: '4rem', background: 'linear-gradient(to right, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px', fontWeight: '900' }}>
                    Get in Touch
                </h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
                    Have questions about our wallpapers, articles, or technical guides? We&apos;re here to help you navigate the digital landscape.
                </p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px' }}>
                {/* Contact Information */}
                <div>
                    <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '30px' }}>Contact Information</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', color: '#3b82f6' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', marginBottom: '5px' }}>Email Us</h4>
                                <p style={{ opacity: 0.6 }}>General Inquiries: support@gipjazes.com</p>
                                <p style={{ opacity: 0.6 }}>Business: business@gipjazes.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ padding: '12px', background: 'rgba(217, 70, 239, 0.1)', borderRadius: '12px', color: '#d946ef' }}>
                                <Globe size={24} />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', marginBottom: '5px' }}>Global Presence</h4>
                                <p style={{ opacity: 0.6 }}>Digital HQ: remote-first infrastructure</p>
                                <p style={{ opacity: 0.6 }}>Serving users in 150+ countries</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ padding: '12px', background: 'rgba(74, 222, 128, 0.1)', borderRadius: '12px', color: '#4ade80' }}>
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', marginBottom: '5px' }}>Response Time</h4>
                                <p style={{ opacity: 0.6 }}>We typically respond within 24-48 hours during business days.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '40px 0' }}>
                            <div style={{ width: '80px', height: '80px', background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                <Send size={40} />
                            </div>
                            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '10px' }}>Message Sent!</h3>
                            <p style={{ opacity: 0.7 }}>Thank you for reaching out. A member of the Gipjazes team will get back to you shortly.</p>
                            <button onClick={() => setStatus('')} style={{ marginTop: '30px', background: 'transparent', border: '1px solid #3b82f6', color: '#3b82f6', padding: '10px 25px', borderRadius: '50px', cursor: 'pointer' }}>Send Another</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', opacity: 0.8 }}>Full Name</label>
                                <input required type="text" style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', outline: 'none' }} placeholder="John Doe" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', opacity: 0.8 }}>Email Address</label>
                                <input required type="email" style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', outline: 'none' }} placeholder="john@example.com" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', opacity: 0.8 }}>Message</label>
                                <textarea required rows="5" style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', outline: 'none', resize: 'none' }} placeholder="How can we help you?"></textarea>
                            </div>
                            <button disabled={status === 'sending'} type="submit" style={{
                                padding: '18px',
                                background: 'linear-gradient(45deg, #3b82f6, #2563eb)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '12px',
                                fontWeight: '700',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                transition: 'all 0.3s ease'
                            }} className="hover-scale">
                                {status === 'sending' ? 'Sending...' : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
