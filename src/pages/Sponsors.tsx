import Navbar from '@/components/Navbar';
import Sponsors from '@/components/Sponsors';
import BackToTop from '@/components/BackToTop';

const SponsorsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Sponsors />
      </div>
      <BackToTop />
    </div>
  );
};

export default SponsorsPage;
