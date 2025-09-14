import { Trophy } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-scrumboks-white/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <Trophy className="w-16 h-16 text-scrumboks-blue animate-spin" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-scrumboks-yellow/20 border-t-scrumboks-yellow rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-scrumboks-blue font-medium">Scrumboks laden...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
