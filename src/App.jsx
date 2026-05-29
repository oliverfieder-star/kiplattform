import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { useAuth } from './context/AuthContext.jsx'
import Landing from './pages/Landing.jsx'
import Journey from './pages/Journey.jsx'
import StageDetail from './pages/StageDetail.jsx'
import Lesson from './pages/Lesson.jsx'
import Tools from './pages/Tools.jsx'
import Onboarding from './pages/Onboarding.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import NotFound from './pages/NotFound.jsx'
import HandwerkLanding from './handwerk/Landing.jsx'
import HandwerkLerntour from './handwerk/Lerntour.jsx'
import HandwerkLesson from './handwerk/Lesson.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

// Sends members without a chosen level to onboarding – but only once auth has
// resolved and only when they enter a protected area, so public pages (journey,
// tools, landing) stay freely browsable.
const PROTECTED_PREFIXES = ['/dashboard', '/lesson']

function OnboardingGate({ children }) {
  const { ready, needsOnboarding } = useAuth()
  const { pathname } = useLocation()
  const onProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p))
  if (ready && needsOnboarding && onProtected && pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />
  }
  return children
}

export default function App() {
  const { pathname } = useLocation()
  // The "KI-Werkstatt" prototype variant ships its own light-theme layout,
  // so the global C&C navbar/footer are suppressed underneath it.
  const isHandwerk = pathname.startsWith('/handwerk')

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      {!isHandwerk && <Navbar />}
      <main className="flex-1">
        <OnboardingGate>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/journey/:stageId" element={<StageDetail />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/lesson/:lessonId"
              element={
                <ProtectedRoute>
                  <Lesson />
                </ProtectedRoute>
              }
            />
            <Route
              path="/onboarding"
              element={
                <ProtectedRoute>
                  <Onboarding />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Handwerk variant prototype */}
            <Route path="/handwerk" element={<HandwerkLanding />} />
            <Route path="/handwerk/lerntour" element={<HandwerkLerntour />} />
            <Route path="/handwerk/lektion/:lessonId" element={<HandwerkLesson />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </OnboardingGate>
      </main>
      {!isHandwerk && <Footer />}
    </div>
  )
}
