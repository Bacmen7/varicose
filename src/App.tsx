import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Blog = lazy(() => import("@/pages/Blog"));
const CanVaricoseVeinsComeBack = lazy(
  () => import("@/pages/blog/CanVaricoseVeinsComeBack"),
);
const EarlyWarningSigns = lazy(() => import("@/pages/blog/EarlyWarningSigns"));
const WhenToSeeDoctor = lazy(() => import("@/pages/blog/WhenToSeeDoctor"));
const WhyVaricoseVeinsHappen = lazy(
  () => import("@/pages/blog/WhyVaricoseVeinsHappen"),
);
const BlogOverview = lazy(() => import("@/pages/BlogOverview"));
const BookAppointment = lazy(() => import("@/pages/BookAppointment"));
const Clinics = lazy(() => import("@/pages/Clinics"));
const Conditions = lazy(() => import("@/pages/Conditions"));
const VaricoseVeins = lazy(() => import("@/pages/conditions/VaricoseVeins"));
const DiseaseOverview = lazy(() => import("@/pages/DiseaseOverview"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Evlt = lazy(() => import("@/pages/treatments/Evlt"));
const Rfa = lazy(() => import("@/pages/treatments/Rfa"));
const TreatmentsOverview = lazy(() => import("@/pages/TreatmentsOverview"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/can-varicose-veins-come-back"
            element={<CanVaricoseVeinsComeBack />}
          />
          <Route path="/blog/early-warning-signs" element={<EarlyWarningSigns />} />
          <Route path="/blog/when-to-see-doctor" element={<WhenToSeeDoctor />} />
          <Route
            path="/blog/why-varicose-veins-happen"
            element={<WhyVaricoseVeinsHappen />}
          />
          <Route path="/blog-overview" element={<BlogOverview />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/conditions/varicose-veins" element={<VaricoseVeins />} />
          <Route path="/disease-overview" element={<DiseaseOverview />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/treatments/evlt" element={<Evlt />} />
          <Route path="/treatments/rfa" element={<Rfa />} />
          <Route path="/treatments-overview" element={<TreatmentsOverview />} />
        </Routes>
      </Suspense>
    </>
  );
}
