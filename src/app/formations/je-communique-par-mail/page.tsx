'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PdfViewerPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-100 pt-24">
        {/* Back button */}
        <div className="container mx-auto px-4 mb-4">
          <Link 
            href="/formations" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft size={20} />
            Retour aux formations
          </Link>
        </div>

        {/* PDF Viewer */}
        <div className="container mx-auto px-4 pb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="/Je-communique-par-mail.pdf"
              className="w-full h-[85vh]"
              title="Je communique par mail - Cours EMMAUS CONNECT"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
