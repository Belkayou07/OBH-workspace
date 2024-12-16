export const pageTransition = {
  duration: 0.8,
  ease: [0.43, 0.13, 0.23, 0.96]
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: pageTransition
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};