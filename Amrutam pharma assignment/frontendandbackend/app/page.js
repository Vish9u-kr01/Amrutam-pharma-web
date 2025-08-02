import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import WhyChoose from './components/WhyChoose';
import JoinCircle from './components/JoinCircle';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import LetsConnect from './components/LetsConnect';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
       <WhyChoose />
      <JoinCircle />
      <Testimonials />
      <FAQ />
      <DownloadApp />
      <LetsConnect/>
      <Footer/>
    </div>
  );
}
