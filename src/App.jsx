import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import AnimatedBackground from "./components/AnimatedBackground";

// Lazy loaded pages for better performance
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Testimonials = React.lazy(() => import("./pages/Testimonials"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms"));
const DigitalMarketing = React.lazy(() => import("./pages/services/DigitalMarketing"));
const SEO = React.lazy(() => import("./pages/services/SEO"));
const WordPress = React.lazy(() => import("./pages/services/WordPress"));
const HubSpot = React.lazy(() => import("./pages/services/HubSpot"));
const VideoEditing = React.lazy(() => import("./pages/services/VideoEditing"));
const WebDesign = React.lazy(() => import("./pages/services/WebDesign"));
const AppDevelopment = React.lazy(() => import("./pages/services/AppDevelopment"));
const AdminLogin = React.lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = React.lazy(() => import("./pages/admin/AdminDashboard"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="relative">
      <div className="h-16 w-16 rounded-full border-4 border-t-primary-500 border-r-transparent border-b-accent-500 border-l-transparent animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-8 w-8 rounded-full bg-white/10 animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Page transition wrapper
const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on page change with a slight delay to ensure smooth transition
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        {children}
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route 
            path="/admin/login" 
            element={
              <PageTransitionWrapper>
                <AdminLogin />
              </PageTransitionWrapper>
            } 
          />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <PageTransitionWrapper>
                  <AdminDashboard />
                </PageTransitionWrapper>
              </ProtectedRoute>
            } 
          />
          
          {/* Public Routes with Navbar and Footer */}
          <Route path="/*" element={
            <>
              <AnimatedBackground variant="default" opacity={0.4} />
              <Navbar />
              <Routes>
                <Route index element={<PageTransitionWrapper><Home /></PageTransitionWrapper>} />
                <Route path="about" element={<PageTransitionWrapper><About /></PageTransitionWrapper>} />
                <Route path="testimonials" element={<PageTransitionWrapper><Testimonials /></PageTransitionWrapper>} />
                <Route path="contact" element={<PageTransitionWrapper><Contact /></PageTransitionWrapper>} />
                <Route path="services/digital-marketing" element={<PageTransitionWrapper><DigitalMarketing /></PageTransitionWrapper>} />
                <Route path="services/seo" element={<PageTransitionWrapper><SEO /></PageTransitionWrapper>} />
                <Route path="services/wordpress" element={<PageTransitionWrapper><WordPress /></PageTransitionWrapper>} />
                <Route path="services/hubspot" element={<PageTransitionWrapper><HubSpot /></PageTransitionWrapper>} />
                <Route path="services/video-editing" element={<PageTransitionWrapper><VideoEditing /></PageTransitionWrapper>} />
                <Route path="services/web-design" element={<PageTransitionWrapper><WebDesign /></PageTransitionWrapper>} />
                <Route path="services/app-development" element={<PageTransitionWrapper><AppDevelopment /></PageTransitionWrapper>} />
                <Route path="privacy" element={<PageTransitionWrapper><Privacy /></PageTransitionWrapper>} />
                <Route path="terms" element={<PageTransitionWrapper><Terms /></PageTransitionWrapper>} />
                <Route path="*" element={<PageTransitionWrapper><NotFound /></PageTransitionWrapper>} />
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;