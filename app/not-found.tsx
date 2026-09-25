import Link from 'next/link';
import {Header,Footer} from '@/components/portfolio';
export default function NotFound(){return <div id="top"><Header/><main id="main-content" className="wrap missing-page"><span className="small-label">404 / A MISSING DATA POINT</span><h1>This page is<br/>off the chart.</h1><p>Let’s get you back to something useful.</p><Link href="/" className="button button-blue">Back to home ↗</Link></main><Footer/></div>}
