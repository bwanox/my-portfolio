import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-8 z-10">
      <div className="container mx-auto text-center text-white/50">
        <p>&copy; {new Date().getFullYear()} Cosmic Folio. All rights reserved.</p>
        <p className="mt-2 text-sm">Designed and built in a galaxy far, far away.</p>
      </div>
    </footer>
  );
}
