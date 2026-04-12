import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { detectRegion } from '../utils/BrowserDetector';

/**
 * RedirectManager.jsx
 * Handles automatic redirection based on browser country detection.
 * Only triggers if the user is at a 'root' path and hasn't had a redirect in this session.
 */
export const RedirectManager = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we are at the root path which supports auto-redirection
    const isRoot = pathname === '/';
    
    // Check if we've already redirected this session to avoid loops or annoying the user
    const hasRedirected = sessionStorage.getItem('has_redirected_locale');

    if (isRoot && !hasRedirected) {
      const detected = detectRegion();
      
      // If detected something other than 'default', redirect
      if (detected !== 'default') {
        sessionStorage.setItem('has_redirected_locale', 'true');
        
        let targetPath = `/${detected}`;
        navigate(targetPath, { replace: true });
      } else {
        // Even if default, mark as "redirected" so we don't keep running the detection
        sessionStorage.setItem('has_redirected_locale', 'true');
      }
    }
  }, [pathname, navigate]);

  return null;
};
