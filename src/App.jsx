import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { RedirectManager } from './shared/components/RedirectManager'
import { LocaleProvider } from './shared/hooks/useLocale'

// Lazy loaded pages for performance enhancement
const MarcusElitePage = lazy(() => import('./marcus/pages/MarcusElitePage.jsx'))
const GiveawayPage = lazy(() => import('./marcus/pages/GiveawayPage.jsx'))
const FeedbackPage = lazy(() => import('./marcus/pages/FeedbackPage.jsx'))

// Loading fallback for non-blocking paint
const PageLoader = () => (
  <div className="fixed inset-0 bg-black flex items-center justify-center z-[500]">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

// Supported locale segments
const regions = ['us', 'uk', 'au', 'ca', 'fr', 'de'];

const AppLayout = () => (
  <LocaleProvider>
    <Suspense fallback={<PageLoader />}>
      <RedirectManager />
      <Outlet />
    </Suspense>
  </LocaleProvider>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      // Marcus Vance (Main Root)
      { path: '/', element: <MarcusElitePage /> },
      ...regions.map(r => ({ path: `/${r}`, element: <MarcusElitePage /> })),
      
      // Marcus Additional
      { path: '/marcus/giveaway', element: <GiveawayPage /> },
      ...regions.map(r => ({ path: `/marcus/giveaway/${r}`, element: <GiveawayPage /> })),
      { path: '/marcus/feedback', element: <FeedbackPage /> },
      ...regions.map(r => ({ path: `/marcus/feedback/${r}`, element: <FeedbackPage /> })),
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
