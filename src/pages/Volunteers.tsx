import Navbar from '@/components/Navbar';
import Volunteers from '@/components/Volunteers';
import BackToTop from '@/components/BackToTop';

const VolunteersPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Volunteers />
      </div>
      <BackToTop />
    </div>
  );
};

export default VolunteersPage;
