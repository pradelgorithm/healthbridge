import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import ForProviders from '@/components/sections/ForProviders';
import PricingTabs from '@/components/sections/PricingTabs';

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ForProviders />
        <PricingTabs />
      </main>
      <Footer />
    </div>
  );
}
