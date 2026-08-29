import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Hospitality Marketing Project",
  description:
    "Tell No Quiet Nights what is underperforming in your restaurant, pub or bar and start a conversation about the right hospitality marketing solution.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function StartPage() {
  return <main className="section-pad" style={{paddingTop:140}}>
    <p className="eyebrow">Start a project</p>
    <h1 style={{fontFamily:'var(--condensed)',fontSize:'clamp(3rem,7vw,7rem)',lineHeight:.85,letterSpacing:'-.06em',textTransform:'uppercase',maxWidth:900}}>Tell us what is <em style={{fontFamily:'var(--serif)',textTransform:'none',color:'var(--signal)',fontWeight:400}}>quiet.</em></h1>
    <p style={{fontFamily:'var(--serif)',fontSize:'1.25rem',maxWidth:680}}>This enquiry page is being rebuilt next. For this preview, the pricing links are working and landing here safely without affecting the live site.</p>
    <a className="button button-ink" href="/pricing">Back to pricing <span>←</span></a>
  </main>;
}
