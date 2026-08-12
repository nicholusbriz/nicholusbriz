import { Metadata } from 'next';
import CertificatesContent from '@/components/CertificatesContent';

export const metadata: Metadata = {
  title: "Certificates | Atbriz - Software Developer",
  description: "View the professional certifications of Nicholus Turyamureba (Atbriz). Certified in Web & Computer Programming, PATHWAY Program, and other professional development achievements.",
  keywords: ["Certificates", "Certifications", "Web Programming", "PATHWAY", "Professional Development", "Software Developer", "Atbriz", "Nicholus Turyamureba"],
  alternates: {
    canonical: "https://nicholusbriz.vercel.app/certificates",
  },
  openGraph: {
    title: "Certificates | Atbriz - Software Developer",
    description: "View the professional certifications of Nicholus Turyamureba (Atbriz). Certified in Web & Computer Programming, PATHWAY Program, and other professional development achievements.",
    url: "https://nicholusbriz.vercel.app/certificates",
  },
};

export default function CertificatesPage() {
  return <CertificatesContent />;
}