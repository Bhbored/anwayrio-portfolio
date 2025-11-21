import { useEffect, useState } from 'react';

interface ScrollItemAnimationState {
  isVisible: boolean;
  animationPhase: 'hidden' | 'entering' | 'visible';
}

const useScrollItemAnimation = (elementId: string, index: number) => {
  const [animationState, setAnimationState] = useState<ScrollItemAnimationState>({
    isVisible: false,
    animationPhase: 'hidden'
  });

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    // Add delay based on index for staggered effect
    const delay = index * 100; 

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a delay for staggered animations
          setTimeout(() => {
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
            }, 100);
          }, delay);
        } else {
          setAnimationState({ 
            isVisible: false, 
            animationPhase: 'hidden' 
          });
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '-10% 0px' // Trigger slightly before the element comes into view
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementId, index]);

  return animationState;
};

export default useScrollItemAnimation;