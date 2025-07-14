// pages/index.js
import Head from 'next/head';
import NetworkOfTrust from '../components/NetworkOfTrust';
import GlimpseSection from '../components/GlimpseSection';
import '../styles/globals.css';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>CrowdSec Solutions</title>
                <meta name="description" content="Maximized Security Efficiency for the Oil & Energy Sector" />
            </Head>

            <main>
                <h1>Maximized Security Efficiency for the Oil & Energy Sector</h1>
                <NetworkOfTrust />
                <GlimpseSection />
            </main>

            
        </div>
    );
}