import React from 'react';

const FadeInSection = ({ children, targetRef, threshold }) => {
  const [isVisible, setVisible] = React.useState(false);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === domRef.current) {
            setVisible(entry.isIntersecting || hasAnimated);
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true);
            }
          }
        });
      },
      {
        threshold: threshold || 0.3, // Adjust the threshold as needed for when the element is considered in the viewport
      }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, [threshold, hasAnimated]);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={(ref) => {
        if (targetRef) {
          targetRef.current = ref;
        }
        domRef.current = ref;
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;

