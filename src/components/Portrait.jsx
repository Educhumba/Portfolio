import { useState } from 'react';
import { assetUrl } from '../utils/assets.js';

export default function Portrait({ className = '', alt = '', rounded = 'rounded-full' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gold-soft font-display text-xl font-semibold text-gold ${rounded} ${className}`}
        role={alt ? 'img' : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
      >
        <span aria-hidden>EC</span>
      </div>
    );
  }

  return (
    <img
      src={assetUrl('profile.jpg')}
      alt={alt}
      className={`max-w-full ${rounded} ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
