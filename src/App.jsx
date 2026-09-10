import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import Header from './components/Header'
import Home from './components/Home'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import { pageTransition } from './lib/motion'
import { postBySlug } from './content/posts'

// Inner pages are code-split so the home page bundle stays as small as it was.
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ReferralPage = lazy(() => import('./pages/ReferralPage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const PostPage = lazy(() => import('./pages/PostPage'))
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

const SERVICE_SLUGS = ['palliative-care', 'personal-care', 'community-participation', 'domestic-assistance', 'meal-prep', 'transportation', 'gardening', 'sil']

// Root-level slugs mirror the live WordPress site: /palliative-care is a
// service, /ndis-price-guide-2025-26 is a blog post. Anything else is a 404.
function RootSlug() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\/|\/$/g, '')
  if (SERVICE_SLUGS.includes(slug)) return <ServicePage />
  if (postBySlug(slug)) return <PostPage />
  return <NotFoundPage />
}

function Fallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#f3f6fc]" aria-busy="true" aria-label="Loading">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-brand-primary/20 border-t-brand-primary" />
    </div>
  )
}

function App() {
  const location = useLocation()
  return (
    // reducedMotion="user" makes every motion component honour the OS setting.
    <MotionConfig reducedMotion="user">
     <ScrollToTop/>
      <div className="min-h-screen bg-gradient-to-b from-[#f4f8ff] via-[#eaf1fc] to-[#eef2f8]">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-body focus:text-sm focus:font-semibold focus:text-brand-deep focus:shadow-lg"
        >
          Skip to content
        </a>
        <Header />
        <div id="content">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={location.pathname} {...pageTransition}>
              <Suspense fallback={<Fallback />}>
                <Routes location={location}>
                  <Route path="/" element={<Home/>} />
                
                 <Route path="/services" element={<ServicesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact-us" element={<ContactPage />} />
                  <Route path="/participant-referral" element={<ReferralPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/thank-you" element={<ThankYouPage />} />
                  <Route path="/:slug" element={<RootSlug />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
