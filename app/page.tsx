import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UrgentTicker from "@/components/UrgentTicker";
import QuickActions from "@/components/QuickActions";
import NoticeBoard from "@/components/NoticeBoard";
import RoutinePreview from "@/components/RoutinePreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <main>
        <HeroSection />
        <UrgentTicker />
        <QuickActions />
        <NoticeBoard />
        <RoutinePreview />
      </main>
      
      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>&copy; 2024 VarsityHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
