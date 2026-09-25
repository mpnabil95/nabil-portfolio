import type {Metadata} from 'next';
import './globals.css';
import {SiteMotion} from '@/components/site-motion';
export const metadata:Metadata={title:{default:'Nabil — Data Scientist',template:'%s | Nabil'},description:'Muhammad Pangeran Nabil — Data scientist exploring business analytics, machine learning, and Indonesian NLP. Based in Yogyakarta, Indonesia.',icons:{icon:`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/favicon.svg`},openGraph:{title:'Nabil — Finding clarity in complex data.',description:'Selected work in data analysis, machine learning, and natural language processing.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to content</a>{children}<SiteMotion/></body></html>}
