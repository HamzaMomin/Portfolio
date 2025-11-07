// src/lib/analytics.ts
import ReactGA from "react-ga4";

/**
 * Your Google Analytics 4 Measurement ID
 * Example: G-ABCD1234
 */
const GA_MEASUREMENT_ID = "G-E6H9ZJF4WR";

/**
 * Initialize Google Analytics (call once in your app root)
 */
export const initGA = (): void => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

/**
 * Track a page view (for single-page apps)
 * Call this inside a useEffect that listens to route changes
 */
export const trackPageView = (path: string): void => {
  ReactGA.send({ hitType: "pageview", page: path });
};

/**
 * Track custom events (button clicks, downloads, etc.)
 * Example: trackEvent("signup", { category: "User", label: "Email signup" })
 */
export const trackEvent = (
  action: string,
  params?: {
    category?: string;
    label?: string;
    value?: number;
  }
): void => {
  ReactGA.event({
    category: params?.category || "General",
    action,
    label: params?.label,
    value: params?.value,
  });
};


