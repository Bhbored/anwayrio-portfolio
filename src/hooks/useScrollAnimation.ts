import { useEffect, useState } from 'react';

interface ScrollAnimationState {
  isVisible: boolean;
  animationPhase: 'hidden' | 'entering' | 'visible';
}

const useScrollAnimation = (elementId: string) => {
  const [animationState, setAnimationState] = useState<ScrollAnimationState>({
    isVisible: false,
    animationPhase: 'hidden'
  });

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start the animation sequence
          setAnimationState({
            isVisible: true,
            animationPhase: 'entering'
          });

          // After a brief moment, mark as fully visible
          setTimeout(() => {
            setAnimationState({
              isVisible: true,
              animationPhase: 'visible'
            });
          }, 50);
        } else {
          setAnimationState({
            isVisible: false,
            animationPhase: 'hidden'
          });
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '-10% 0px' // Trigger slightly before the element comes into view
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementId]);

  return animationState;
};

export default useScrollAnimation;