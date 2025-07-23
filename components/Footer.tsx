'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal  bg-[#101010] text-gray-300 items-center py-2 border-t border-gray-800 h-[35px]">
      <div className="flex flex-col sm:flex-row w-full justify-between max-w-6xl mx-auto">
        {/* Left side - Links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-0">
          <div className="font-light text-white text-xs">Predictas© 2025</div>
          <div className="flex flex-wrap gap-4 sm:gap-6 font-light text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/learn" className="hover:text-white transition-colors">
              Learn
            </Link>
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
            <Link href="/press" className="hover:text-white transition-colors">
              Press
            </Link>
          </div>
        </div>

        {/* Right side - Social media icons */}
        <div className="flex gap-4">
          {/* Email */}
          <a 
            href="mailto:support@predictas.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
              <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.01L12 15 4 6.01V20h16V6.01z"/>
            </svg>
          </a>
          {/* X (Twitter new logo) */}
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="X"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path
                d="M3.654 3.5h4.6l3.746 5.47 3.6-5.47h4.346l-5.7 8.01 6.354 9.49h-4.6l-4.1-6.01-4.1 6.01h-4.346l6.354-9.49-5.754-8.01zm2.13 1.5 4.224 5.88-5.13 7.67h2.13l4.1-6.01 4.1 6.01h2.13l-5.13-7.67 4.224-5.88h-2.13l-3.294 4.97-3.294-4.97h-2.13z"
                fill="#ffffff"
              />
            </svg>
          </a>
          {/* Instagram */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.981.981-1.213 2.093-1.272 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
          </a>
          {/* Discord */}
          <a 
            href="https://discord.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Discord"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.164-.393-.405-.874-.617-1.249a.07.07 0 0 0-.073-.035 19.736 19.736 0 0 0-4.885 1.515.064.064 0 0 0-.03.027C.533 9.045-.32 13.579.099 18.057a.08.08 0 0 0 .031.056c2.052 1.507 4.041 2.422 5.992 3.029a.07.07 0 0 0 .076-.027c.461-.63.873-1.295 1.226-1.994a.07.07 0 0 0-.038-.098c-.652-.247-1.27-.549-1.872-.892a.07.07 0 0 1-.007-.117c.126-.094.252-.192.371-.291a.07.07 0 0 1 .073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 0 1 .074.009c.12.099.245.197.372.291a.07.07 0 0 1-.006.117c-.603.343-1.221.645-1.873.892a.07.07 0 0 0-.038.098c.36.699.772 1.364 1.226 1.994a.07.07 0 0 0 .076.027c1.961-.607 3.95-1.522 6.002-3.029a.077.077 0 0 0 .03-.055c.5-5.177-.838-9.673-3.548-13.661a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/></svg>
          </a>
          {/* TikTok */}
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="TikTok"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18 " viewBox="0 0 24 24" className="fill-current"><path d="M12.75 2v12.75a3.25 3.25 0 1 1-3.25-3.25c.138 0 .273.012.406.03V9.5a6.25 6.25 0 1 0 6.25 6.25V7.5c.414.31.86.57 1.344.75A5.98 5.98 0 0 0 21 8.5V6.75a4.25 4.25 0 0 1-4.25-4.25H12.75z"/></svg>
          </a>
          {/* Open App */}
          <a 
            href="https://app.predictas.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Open App"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M14 3v2h3.59L7 15.59 8.41 17 19 6.41V10h2V3z"/><path d="M5 5v14h14v-7h-2v5H7V7h5V5H5z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}