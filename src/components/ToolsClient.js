'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, Smartphone, Monitor, Info, CheckCircle } from 'lucide-react';

export default function ToolsClient() {
    // PPI Calculator State
    const [width, setWidth] = useState(1920);
    const [height, setHeight] = useState(1080);
    const [inches, setInches] = useState(24);
    const [ppi, setPpi] = useState(0);
    const [retinaDistance, setRetinaDistance] = useState(0);

    const calculatePPI = () => {
        const diagonalPixels = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        const calculatedPpi = diagonalPixels / inches;
        setPpi(calculatedPpi.toFixed(2));

        // Retina distance calculation: Distance where the human eye can't distinguish pixels
        // Based on 20/20 vision (1 arcminute resolution)
        // Formula: 3438 / PPI (inches)
        const distance = 3438 / calculatedPpi;
        setRetinaDistance(distance.toFixed(1));
    };

    return (
        <div style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', color: '#ccc', fontFamily: 'Inter, system-ui, sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', marginBottom: '20px', display: 'inline-block', fontWeight: 'bold' }}>← Back to Hub</Link>
                <h1 style={{ fontSize: '3.5rem', background: 'linear-gradient(to right, #4ade80, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px', fontWeight: '900' }}>
                    Digital Utility Suite
                </h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '700px', margin: '0 auto' }}>
                    Professional-grade calculators and tools for designers, developers, and digital marketers.
                </p>
            </header>

            <div style={{ display: 'grid', gap: '60px' }}>

                {/* PPI Calculator Tool */}
                <section style={{
                    background: 'rgba(255,255,255,0.02)',
                    padding: '40px',
                    borderRadius: '30px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                        <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '12px', borderRadius: '15px', color: '#60a5fa' }}>
                            <Calculator size={32} />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2rem', color: '#fff', fontWeight: '700', marginBottom: '5px' }}>PPI & Retina Calculator</h2>
                            <p style={{ fontSize: '0.95rem', opacity: 0.6 }}>Calculate pixel density and optimal viewing distance.</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>

                        {/* Input Area */}
                        <div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#fff', fontWeight: '600' }}>Resolution Width (px)</label>
                                <input
                                    type="number"
                                    value={width}
                                    onChange={(e) => setWidth(e.target.value)}
                                    style={{ width: '100%', padding: '15px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1.1rem' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#fff', fontWeight: '600' }}>Resolution Height (px)</label>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    style={{ width: '100%', padding: '15px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1.1rem' }}
                                />
                            </div>
                            <div style={{ marginBottom: '30px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', color: '#fff', fontWeight: '600' }}>Screen Size (Diagonal Inches)</label>
                                <input
                                    type="number"
                                    value={inches}
                                    onChange={(e) => setInches(e.target.value)}
                                    style={{ width: '100%', padding: '15px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1.1rem' }}
                                />
                            </div>
                            <button
                                onClick={calculatePPI}
                                style={{
                                    width: '100%',
                                    padding: '18px',
                                    background: '#3b82f6',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '15px',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    boxShadow: '0 5px 15px rgba(59, 130, 246, 0.4)'
                                }}
                            >
                                Calculate Value
                            </button>
                        </div>

                        {/* Result Area */}
                        <div style={{ background: 'rgba(59, 130, 246, 0.05)', borderRadius: '20px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                            {ppi > 0 ? (
                                <>
                                    <div style={{ marginBottom: '30px' }}>
                                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Pixel Density</p>
                                        <p style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff', lineHeight: 1 }}>{ppi}</p>
                                        <p style={{ opacity: 0.6 }}>Pixels Per Inch (PPI)</p>
                                    </div>
                                    <div>
                                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(74, 222, 128, 0.1)', padding: '5px 15px', borderRadius: '20px', color: '#4ade80', marginBottom: '10px' }}>
                                            <CheckCircle size={16} /> Retina Ready
                                        </div>
                                        <p style={{ fontSize: '1.2rem', color: '#fff' }}>
                                            Perfect viewing distance: <strong style={{ color: '#60a5fa' }}>{retinaDistance} inches</strong>
                                        </p>
                                        <p style={{ opacity: 0.6, fontSize: '0.9rem', marginTop: '10px' }}>
                                            (Approx {(retinaDistance / 12).toFixed(1)} feet)
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <div style={{ opacity: 0.4 }}>
                                    <Info size={48} style={{ marginBottom: '10px' }} />
                                    <p>Enter your device specs to reveal density metrics.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Info Section about PPI */}
                <section>
                    <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '20px' }}>Why This Matters?</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                        <div style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h4 style={{ color: '#fff', marginBottom: '10px', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}> <Monitor size={20} color="#d946ef" /> For Designers</h4>
                            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                                Ensure your UI assets don't look blurry on modern screens.
                                Target <strong>{'>'}150 PPI</strong> for standard web and <strong>{'>'}300 PPI</strong> for print-quality mobile interfaces.
                            </p>
                        </div>
                        <div style={{ padding: '25px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h4 style={{ color: '#fff', marginBottom: '10px', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}> <Smartphone size={20} color="#fbbf24" /> For Developers</h4>
                            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                                Understand when to serve `@2x` or `@3x` retina images.
                                Optimizing image delivery based on device PPI saves bandwidth and improves LCP scores.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
