import { useEffect, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [cursorHidden, setCursorHidden] = useState(false);

  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.cursor-dot');
      const cursorOutline = document.querySelector('.cursor-outline');

      if (cursor && cursorOutline) {
        // Direct follow for small dot
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power2.out',
        });

        // Delayed follow for outline (creates fluid effect)
        gsap.to(cursorOutline, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseDown = () => {
      gsap.to('.cursor-outline', {
        scale: 0.8,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const handleMouseUp = () => {
      gsap.to('.cursor-outline', {
        scale: 1,
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    // Detect hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select') ||
        target.closest('.cta-wrapper, .card-border, .group, .cursor-pointer');

      if (isInteractive) {
        setIsHovering(true);
        if (target.closest('a, button, [role="button"], .cta-wrapper')) {
          setIsClickable(true);
        }
      } else {
        setIsHovering(false);
        setIsClickable(false);
      }
    };

    // Hide cursor when leaving window
    const handleMouseLeave = () => setCursorHidden(true);
    const handleMouseEnter = () => setCursorHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver, true);
    window.addEventListener('mouseout', handleMouseOver, true);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver, true);
      window.removeEventListener('mouseout', handleMouseOver, true);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`cursor-dot fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-200 ${
          cursorHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Cursor outline with magnetic effect */}
      <div
        className={`cursor-outline fixed top-0 left-0 border border-primary/50 rounded-full pointer-events-none z-[9998] transition-opacity duration-200 ${
          cursorHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
          width: isClickable ? '64px' : isHovering ? '48px' : '32px',
          height: isClickable ? '64px' : isHovering ? '48px' : '32px',
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease',
          backgroundColor: isClickable ? 'rgba(205, 124, 46, 0.1)' : 'transparent',
        }}
      />

      {/* Magnetic pull effect rings */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9997] transition-all duration-500 ${
          isHovering && !cursorHidden ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
          width: isClickable ? '80px' : '64px',
          height: isClickable ? '80px' : '64px',
          border: '1px dashed rgba(205, 124, 46, 0.3)',
          borderRadius: '50%',
        }}
      />
    </>
  );
};

export default CustomCursor;
