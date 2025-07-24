'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-[#101010] text-gray-300 items-center border-t border-gray-800 h-[35px] min-h-[35px] max-h-[35px] w-full">
      <div className="flex flex-col sm:flex-row w-full justify-between max-w-6xl mx-auto">
        {/* Left side - Links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-0">
          <div className="font-light text-white text-xs">Predictas LLC© 2025</div>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 20 20"
              fill="none"
              className="c-PJLV c-PJLV-ihTQBYo-css"
            >
              <g clipPath="url(#clip0_3518_21)">
                <path
                  d="M0.76001 5.85791L9.38444 10.6156C9.76806 10.8271 10.232 10.8271 10.6156 10.6156L19.24 5.85791"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.30897 17.3284L16.6911 17.3284C18.0988 17.3284 19.24 16.1872 19.24 14.7794V5.22077C19.24 3.81302 18.0988 2.67181 16.6911 2.67181L3.30897 2.67181C1.90122 2.67181 0.760006 3.81302 0.760006 5.22077V14.7794C0.760006 16.1872 1.90122 17.3284 3.30897 17.3284Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_3518_21">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
              </defs>
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
                width="16px"
                height="16px"
                viewBox="0 0 20 20"
                fill="none"
                className="c-PJLV c-PJLV-iUbCFr-css"
              >
                <path
                  d="M15.2719 1.58655H18.0831L11.9414 8.60612L19.1667 18.1582H13.5094L9.07837 12.3649L4.0083 18.1582H1.19537L7.76454 10.65L0.833344 1.58655H6.63427L10.6395 6.88182L15.2719 1.58655ZM14.2853 16.4755H15.843L5.78784 3.18082H4.11623L14.2853 16.4755Z"
                  fill="white"
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
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                viewBox="0 0 20 20"
                fill="none"
                className="c-PJLV c-PJLV-iUbCFr-css"
              >
                <g clipPath="url(#clip0_3508_13)">
                  <path
                    d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95313C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95313C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523437C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z"
                    fill="white"
                  />
                  <path
                    d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z"
                    fill="white"
                  />
                  <path
                    d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3508_13">
                    <rect width={20} height={20} fill="black" />
                  </clipPath>
                </defs>
              </svg>
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