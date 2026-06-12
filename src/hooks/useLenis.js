/** Offset for fixed navbar when scrolling to in-page anchors */
export const NAV_SCROLL_OFFSET = 80;

export const LENIS_OPTIONS = {
  autoRaf: true,
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.05,
  anchors: {
    offset: NAV_SCROLL_OFFSET,
  },
  allowNestedScroll: true,
};
