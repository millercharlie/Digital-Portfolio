import {  useRef } from 'react';
import PropTypes from 'prop-types';

export default function GlowCard({ color, children, href }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x - rect.width / 2) / (rect.width / 2);
    const percentY = -((y - rect.height / 2) / (rect.height / 2));

    card.style.transform = `rotateY(${percentX * 10}deg) rotateX(${percentY * 10}deg)`;
    glow.style.opacity = '1';
    glow.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, ${color}, #0000000f)`;
  };

  const handleLeave = () => {
    cardRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
    glowRef.current.style.opacity = '0';
    glowRef.current.style.backgroundImage = '';
  };

  return (
    <a
      href={href}
      className='sub-card'
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className='card-glow' ref={glowRef}>
      <div className='sub-card-content'>{children}</div>
      </div>
    </a>
  );
}

GlowCard.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.object,
  href: PropTypes.string.isRequired,
}