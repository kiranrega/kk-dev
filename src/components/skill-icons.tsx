"use client";

import type React from "react";

// ---------------------------------------------------------------------------
// Individual brand SVG icons
// ---------------------------------------------------------------------------

function NextjsIcon() {
  return (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <mask id="nj-mask" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#nj-mask)">
        <circle cx="90" cy="90" r="90" fill="black" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#nj-g1)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#nj-g2)" />
      </g>
      <defs>
        <linearGradient id="nj-g1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="nj-g2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 54 33" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z" fill="#38bdf8"/>
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <rect width="400" height="400" rx="50" fill="#3178c6"/>
      <path d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5-.3-.3-31.7-.4-70-.4l-69.7.3v16.3zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 3.9 9.2 11 9.6 12.8.1.5-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-3.8-5.2-7.4-10.5-10.6-18.8-11.2-12.1-.8-20 5.5-19.9 16 0 3.1.5 4.9 1.8 7.4 2.8 5.6 8 9 23 15.6 28.4 12.2 40.5 20.3 48.1 31.7 8.5 12.8 10.4 33.3 4.7 48.6-6.3 16.6-22 27.8-44.1 31.5-6.8 1.2-23 1-30.5-.3-16.1-2.9-31.4-11-40.8-21.9-3.7-4.3-10.9-15.7-10.5-16.5.2-.3 1.8-1.3 3.6-2.3 1.7-1 8.3-4.8 14.6-8.4l11.4-6.6 2.4 3.5c3.3 5.1 10.6 12 15 14.6 12.7 6.7 30.1 5.7 38.7-2 3.7-3.4 5.3-6.9 5.3-12 0-4.6-.7-6.7-3.2-10.2-3.3-4.5-10-8.3-29.1-16.4-21.8-9.3-31.2-15.1-39.7-24.3-5-5.5-9.7-14.4-11.7-22.3-1.6-6.4-2-22.1-.6-28.7 4.6-21.5 20.7-36.5 43.5-40.8 7.5-1.4 25-.8 32.4 1z" fill="white"/>
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M19 28.5C19 25.98 20 23.56 21.78 21.78C23.56 20 25.98 19 28.5 19C31.02 19 33.44 20 35.22 21.78C36.99 23.56 38 25.98 38 28.5C38 31.02 36.99 33.44 35.22 35.22C33.44 36.99 31.02 38 28.5 38C25.98 38 23.56 36.99 21.78 35.22C20 33.44 19 31.02 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 44.98 1 42.56 2.78 40.78C4.56 39 6.98 38 9.5 38H19V47.5C19 50.02 17.99 52.44 16.22 54.22C14.44 55.99 12.02 57 9.5 57C6.98 57 4.56 55.99 2.78 54.22C1 52.44 0 50.02 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C31.02 19 33.44 17.99 35.22 16.22C36.99 14.44 38 12.02 38 9.5C38 6.98 36.99 4.56 35.22 2.78C33.44 1 31.02 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 12.02 1 14.44 2.78 16.22C4.56 17.99 6.98 19 9.5 19H19V0H9.5C6.98 0 4.56 1 2.78 2.78C1 4.56 0 6.98 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 31.02 1 33.44 2.78 35.22C4.56 36.99 6.98 38 9.5 38H19V19H9.5C6.98 19 4.56 20 2.78 21.78C1 23.56 0 25.98 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg viewBox="0 0 1155 1000" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M577.344 0L1154.69 1000H0L577.344 0Z" fill="white"/>
    </svg>
  );
}

function AwsIcon() {
  return (
    <svg viewBox="0 0 304 182" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4.1 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4.1-1-.8-.7-1.5-2-1.9-4L156 23l-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.6-2.2 1-4 1h-8.6zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2 1-13.4 2.9-3.2 1.9-4.8 4.8-4.8 8.8 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z" fill="#FF9900"/>
      <path d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" fill="#FF9900"/>
      <path d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" fill="#FF9900"/>
    </svg>
  );
}

function PostmanIcon() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <circle cx="16" cy="16" r="16" fill="#FF6C37"/>
      <path d="M22.4 9.6a9.07 9.07 0 00-12.83 12.83A9.07 9.07 0 0022.4 9.6zm-1.13 11.7a7.5 7.5 0 01-10.57 0 7.5 7.5 0 010-10.57 7.5 7.5 0 0110.57 10.57z" fill="white"/>
      <path d="M17.6 14.4l-4.8 4.8 1.13 1.13 4.8-4.8-1.13-1.13z" fill="white"/>
      <circle cx="18.4" cy="13.6" r="1.2" fill="white"/>
    </svg>
  );
}

function NodejsIcon() {
  return (
    <svg viewBox="0 0 256 289" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915L128.795 19.213c-1.06-.53-2.385-.53-3.18 0L19.874 80.165c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.635 7.95 25.44-1.325 25.44-10.6V94.21c0-1.59 1.325-3.18 3.18-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18V214.26c0 20.936-11.396 32.596-31.271 32.596-6.095 0-10.865 0-24.38-6.625L10.74 223.8C4.115 220.09 0 213.2 0 205.78V83.61c0-7.42 4.115-14.31 10.74-18.02L117.93 4.37c6.36-3.44 14.84-3.44 21.2 0l107.06 61.22c6.625 3.71 10.74 10.6 10.74 18.02v122.17c0 7.42-4.115 14.31-10.74 18.02L139.13 285.55c-3.445 1.59-7.155 2.915-11.13 2.915z" fill="#539E43"/>
      <path d="M160.71 204.45c-46.376 0-56.18-21.2-56.18-39.22 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.915 1.06 2.915 2.65 2.12 14.045 8.215 20.936 36.57 20.936 22.525 0 32.066-5.035 32.066-16.96 0-6.89-2.65-11.925-37.365-15.37-29.15-2.915-47.17-9.275-47.17-32.596 0-21.465 18.02-34.186 48.23-34.186 33.92 0 50.615 11.66 52.735 37.1.265 1.59-1.06 3.18-2.65 3.18h-13.78c-1.325 0-2.65-1.06-2.915-2.385-3.18-14.575-11.395-19.345-33.39-19.345-24.645 0-27.56 8.48-27.56 14.84 0 7.685 3.445 10.07 36.305 14.31 32.596 4.24 48.23 10.335 48.23 33.39-.265 23.32-19.345 36.836-52.2 36.836z" fill="#539E43"/>
    </svg>
  );
}

function MongodbIcon() {
  return (
    <svg viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 00-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 64.18 5.966 64.18h17.045s4.26-37.946 5.965-64.18l1.917-1.28s228.614-169.994 31.32-421.89zm-47.726 418.05s-10.227-8.744-12.997-13.22v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.427c-2.77 4.477-12.997 13.22-12.997 13.22z" fill="#10AA50"/>
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M90.156 41.965L50.036 1.848a5.918 5.918 0 00-8.372 0l-8.328 8.332 10.566 10.566a7.03 7.03 0 017.23 1.684 7.043 7.043 0 011.673 7.277l10.183 10.184a7.026 7.026 0 017.278 1.672 7.04 7.04 0 010 9.957 7.045 7.045 0 01-9.961 0 7.038 7.038 0 01-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 011.86 11.29 7.04 7.04 0 01-9.957 0 7.04 7.04 0 010-9.958 7.034 7.034 0 012.308-1.539V33.926a7.001 7.001 0 01-2.308-1.535 7.049 7.049 0 01-1.516-7.7L29.242 14.273 1.734 41.777a5.918 5.918 0 000 8.371L41.852 90.27a5.92 5.92 0 008.37 0l39.934-39.934a5.925 5.925 0 000-8.371" fill="#F05133"/>
    </svg>
  );
}

function ReduxIcon() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-.9-3.5-1.2-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28.1-21.4z" fill="#764ABC"/>
      <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.4 5-3.3h1.8c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.9-24.4z" fill="#764ABC"/>
      <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4.1 34.8-.5.7-.8 1.8-.8 2.9z" fill="#764ABC"/>
    </svg>
  );
}

function WebpackIcon() {
  return (
    <svg viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M600 0L1200 337.5v525L600 1200 0 862.5v-525z" fill="#8DD6F9"/>
      <path d="M600 96L1104 375v450L600 1104 96 825V375z" fill="#1C78C0"/>
      <path d="M1063 644l-68 39-275-159V365l68-39 275 159v159zM137 644l68 39 275-159V365l-68-39-275 159v159zM600 840l-68 39v78l68 39 68-39v-78l-68-39z" fill="#8DD6F9"/>
    </svg>
  );
}

export function RestApiIcon() {
  return (
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
    >
      {/* Gear Shape */}
      <path
        d="M48 10
        C58 10 62 18 68 20
        C76 22 84 18 88 28
        C92 38 84 44 84 48
        C84 52 92 58 88 68
        C84 78 76 74 68 76
        C62 78 58 86 48 86
        C38 86 34 78 28 76
        C20 74 12 78 8 68
        C4 58 12 52 12 48
        C12 44 4 38 8 28
        C12 18 20 22 28 20
        C34 18 38 10 48 10Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* API Text */}
      <text
        x="50%"
        y="56%"
        textAnchor="middle"
        fontSize="24"
        fontWeight="700"
        fill="currentColor"
        fontFamily="Arial, sans-serif"
      >
        API
      </text>
    </svg>
  );
}

export function JestIcon() {
  return (
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
    >
      {/* Top Triangles */}
      <path d="M38 10H58L48 38Z" fill="#99425B" />
      <path d="M58 10H78L68 38Z" fill="#99425B" />

      {/* Connecting Lines */}
      <path
        d="M48 38V50M68 38V50M28 50H48M48 50H68"
        stroke="#99425B"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Dots */}
      <circle cx="28" cy="50" r="8" fill="#99425B" />
      <circle cx="48" cy="50" r="8" fill="#99425B" />
      <circle cx="68" cy="50" r="8" fill="#99425B" />

      {/* Bottom Curve */}
      <path
        d="M48 58
        C48 78 38 86 24 86
        C12 86 8 76 8 66
        C8 60 10 54 14 50"
        stroke="#99425B"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ViteIcon() {
  return (
    <svg viewBox="0 0 410 404" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M399.641 59.525l-183.998 329.02c-3.799 6.793-13.559 6.833-17.415.073L10.582 59.556c-4.13-7.214 2.147-15.952 10.24-14.425l184.484 34.329a9.42 9.42 0 003.476 0l180.06-34.287c8.073-1.538 14.377 7.17 10.299 14.352z" fill="url(#vite-g1)"/>
      <path d="M292.965.297L156.801 27.331a4.711 4.711 0 00-3.745 4.402l-7.466 130.07a4.711 4.711 0 005.247 4.933l36.752-4.231c3.183-.366 5.826 2.523 5.214 5.665l-10.944 53.506c-.638 3.12 1.903 6.008 5.042 5.742l22.677-1.94c3.14-.269 5.686 2.622 5.042 5.742l-17.397 84.248c-1.086 5.264 5.726 8.135 8.638 3.598l1.907-2.94 105.045-209.498c1.66-3.31-.985-7.12-4.637-6.633l-37.876 5.18c-3.27.447-5.821-2.748-4.916-5.914l24.816-86.057C329.898 8.56 325.498.7 318.065.297h-25.1z" fill="url(#vite-g2)"/>
      <defs>
        <linearGradient id="vite-g1" x1="6" y1="32.667" x2="235" y2="344.667" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF"/><stop offset="1" stopColor="#BD34FE"/>
        </linearGradient>
        <linearGradient id="vite-g2" x1="194.651" y1="8.818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3E00"/><stop offset=".776" stopColor="#FF3E00" stopOpacity="0"/><stop offset="1" stopColor="#FF3E00" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function MysqlIcon() {
  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M2.001 90.458h4.906V72.994l6.5 15.097c.769 1.808 1.821 2.462 3.896 2.462 2.075 0 3.089-.654 3.858-2.462l6.5-14.712v17.079h4.906V72.609c0-1.673-.654-2.481-2.001-2.904-3.204-1.001-5.356-.192-6.319 2.02l-6.944 16.02-6.713-16.02c-.924-2.212-3.115-3.021-6.319-2.02-1.347.423-2.27 1.231-2.27 2.904v17.849zm38.5 0h13.619c3.973 0 6.012-2.135 6.012-5.279v-3.127c0-2.481-1.27-4.116-3.896-4.693 2.27-.654 3.358-2.135 3.358-4.424v-2.52c0-3.144-1.847-5.279-5.82-5.279H40.501v25.322zm5.01-14.712v-6.127h7.85c1.578 0 2.27.731 2.27 2.135v1.808c0 1.404-.692 2.184-2.27 2.184h-7.85zm0 10.289v-6.742h8.35c1.693 0 2.424.808 2.424 2.27v2.135c0 1.462-.731 2.337-2.424 2.337h-8.35zm22.5 4.423h4.906V65.136h-4.906v25.322zm7.85 0h4.906V72.994l6.5 15.097c.769 1.808 1.821 2.462 3.896 2.462 2.075 0 3.089-.654 3.858-2.462l6.5-14.712v17.079h4.906V72.609c0-1.673-.654-2.481-2.001-2.904-3.204-1.001-5.356-.192-6.319 2.02l-6.944 16.02-6.713-16.02c-.924-2.212-3.115-3.021-6.319-2.02-1.347.423-2.27 1.231-2.27 2.904v17.849z" fill="#00758F"/>
      <path d="M64 10c-29.8 0-54 24.2-54 54s24.2 54 54 54 54-24.2 54-54-24.2-54-54-54zm0 8c25.4 0 46 20.6 46 46s-20.6 46-46 46-46-20.6-46-46 20.6-46 46-46z" fill="#F29111"/>
    </svg>
  );
}

 function ContextApiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <circle cx="12" cy="12" r="3" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#61DAFB" strokeWidth="1.5" />
    </svg>
  );
}

 function WebSocketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M4 8L8 12L4 16M20 8L16 12L20 16"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 19L14 5"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

 function HTML5Icon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#E34F26"
        d="M3 2l1.8 18L12 22l7.2-2L21 2H3z"
      />
      <path
        fill="#fff"
        d="M12 4v15.5l5.8-1.6L19.2 4H12z"
        opacity=".2"
      />
      <path
        fill="#fff"
        d="M7 6h10l-.3 2H9.2l.2 2H16l-.5 5-3.5 1-3.5-1-.2-2h2l.1.7 1.6.4 1.6-.4.2-2.2H7.5L7 6z"
      />
    </svg>
  );
}

 function CSS3Icon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#1572B6"
        d="M3 2l1.8 18L12 22l7.2-2L21 2H3z"
      />
      <path
        fill="#fff"
        d="M12 4v15.5l5.8-1.6L19.2 4H12z"
        opacity=".2"
      />
      <path
        fill="#fff"
        d="M7.5 6H17l-.3 2H9.7l.2 2H16l-.5 5-3.5 1-3.5-1-.2-2h2l.1.7 1.6.4 1.6-.4.2-2.2H8L7.5 6z"
      />
    </svg>
  );
}

 function MaterialUIIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#007FFF"
        d="M3 6l4 3v9l-4-3V6zm7 0l4 3v9l-4-3V6zm7 0l4 3v9l-4-3V6z"
      />
    </svg>
  );
}

 function ExpressJSIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M4 7h16M4 12h10M4 17h16"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

//  function JestIcon() {
//   return (
//     <svg viewBox="0 0 24 24" className="h-5 w-5">
//       <path
//         fill="#C21325"
//         d="M12 2l3 2v5l-3 2-3-2V4l3-2zm-5 9l3 2v5l-3 2-3-2v-5l3-2zm10 0l3 2v5l-3 2-3-2v-5l3-2z"
//       />
//     </svg>
//   );
// }

 function ReactTestingLibraryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <circle cx="10" cy="10" r="5" stroke="#E33332" strokeWidth="2" />
      <path
        d="M14 14l6 6"
        stroke="#E33332"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

 function TDDIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M5 12l4 4L19 6"
        stroke="#22C55E"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

 function SonarQubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M4 16c3-3 13-3 16 0"
        stroke="#4E9BCD"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 12c2-2 10-2 12 0"
        stroke="#4E9BCD"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 8c1-1 7-1 8 0"
        stroke="#4E9BCD"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

 function ESLintIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#4B32C3"
        d="M12 2l8 5v10l-8 5-8-5V7l8-5z"
      />
      <path
        fill="#fff"
        d="M12 7l4 2.5v5L12 17l-4-2.5v-5L12 7z"
      />
    </svg>
  );
}

 function AxiosIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M5 18L12 6L19 18"
        stroke="#5A29E4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="15" r="1.5" fill="#5A29E4" />
    </svg>
  );
}

 function FramerMotionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#0055FF"
        d="M4 4h16l-6 6h6l-10 10V14H4z"
      />
    </svg>
  );
}

 function NetlifyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M7 4h3v3H7V4zm7 0h3v3h-3V4zM7 17h3v3H7v-3zm7 0h3v3h-3v-3z"
        fill="#00C7B7"
      />
      <path
        d="M10 7l4 10"
        stroke="#00C7B7"
        strokeWidth="2"
      />
      <path
        d="M14 7l-4 10"
        stroke="#00C7B7"
        strokeWidth="2"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Registry: normalised name → { icon component, background colour }
// Keys are lowercase for case-insensitive lookup
// ---------------------------------------------------------------------------
type IconEntry = { component: () => React.JSX.Element; bg: string };

const registry: Record<string, IconEntry> = {
  // Core
  "next.js":                  { component: NextjsIcon,              bg: "#000000" },
  "nextjs":                   { component: NextjsIcon,              bg: "#000000" },
  "tailwind css":             { component: TailwindIcon,            bg: "#0f172a" },
  "tailwindcss":              { component: TailwindIcon,            bg: "#0f172a" },
  "typescript":               { component: TypeScriptIcon,          bg: "#3178c6" },
  "react":                    { component: ReactIcon,               bg: "#20232a" },
  "react.js":                 { component: ReactIcon,               bg: "#20232a" },
  "figma":                    { component: FigmaIcon,               bg: "#1e1e1e" },
  "vercel":                   { component: VercelIcon,              bg: "#111111" },
  "aws":                      { component: AwsIcon,                 bg: "#232f3e" },
  "postman":                  { component: PostmanIcon,             bg: "#FF6C37" },
  "node.js":                  { component: NodejsIcon,              bg: "#1a1a1a" },
  "nodejs":                   { component: NodejsIcon,              bg: "#1a1a1a" },
  "mongodb":                  { component: MongodbIcon,             bg: "#001e2b" },
  "git":                      { component: GitIcon,                 bg: "#1a1a1a" },
  "redux":                    { component: ReduxIcon,               bg: "#1a1a1a" },
  "redux toolkit":            { component: ReduxIcon,               bg: "#1a1a1a" },
  "webpack":                  { component: WebpackIcon,             bg: "#1a1a1a" },
  "jest":                     { component: JestIcon,                bg: "#1a1a1a" },
  "vite":                     { component: ViteIcon,                bg: "#1a1a1a" },
  "mysql":                    { component: MysqlIcon,               bg: "#1a1a1a" },
  // New icons added by user
  "context api":              { component: ContextApiIcon,          bg: "#20232a" },
  "websockets":               { component: WebSocketIcon,           bg: "#1a1a1a" },
  "html5":                    { component: HTML5Icon,               bg: "#e34f26" },
  "css3":                     { component: CSS3Icon,                bg: "#1572b6" },
  "material ui":              { component: MaterialUIIcon,          bg: "#0a1929" },
  "express.js":               { component: ExpressJSIcon,           bg: "#1a1a1a" },
  "expressjs":                { component: ExpressJSIcon,           bg: "#1a1a1a" },
  "react testing library":    { component: ReactTestingLibraryIcon, bg: "#1a1a1a" },
  "rtl":                      { component: ReactTestingLibraryIcon, bg: "#1a1a1a" },
  "tdd":                      { component: TDDIcon,                 bg: "#14532d" },
  "sonarqube":                { component: SonarQubeIcon,           bg: "#1a1a1a" },
  "eslint":                   { component: ESLintIcon,              bg: "#1a1a1a" },
  "axios":                    { component: AxiosIcon,               bg: "#1a1a1a" },
  "framer motion":            { component: FramerMotionIcon,        bg: "#0055ff" },
  "netlify":                  { component: NetlifyIcon,             bg: "#00c7b7" },
};

function lookup(name: string): IconEntry | undefined {
  return registry[name.toLowerCase()];
}

// ---------------------------------------------------------------------------
// SkillPill — coloured tile, icon always visible, name slides in on hover
// Used in the Stack section groups
// ---------------------------------------------------------------------------
export function SkillPill({ name }: { name: string }) {
  const entry = lookup(name);

  if (!entry) {
    return (
      <span className="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
        {name}
      </span>
    );
  }

  const IconComponent = entry.component;

  return (
    <div
      className="group flex h-10 cursor-default items-center overflow-hidden rounded-xl border border-zinc-700/40 transition-all duration-200"
      style={{ backgroundColor: entry.bg }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center">
        <IconComponent />
      </div>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-white transition-all duration-200 group-hover:max-w-[140px] group-hover:pr-3">
        {name}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// TechChip — same hover-expand animation as SkillPill, slightly smaller
// Used in Experience and Projects tech lists
// ---------------------------------------------------------------------------
export function TechChip({ name }: { name: string }) {
  const entry = lookup(name);

  if (!entry) {
    return (
      <span className="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
        {name}
      </span>
    );
  }

  const IconComponent = entry.component;

  return (
    <div
      className="group flex h-8 cursor-default items-center overflow-hidden rounded-lg border border-zinc-700/40 transition-all duration-200 [&_svg]:h-4 [&_svg]:w-4"
      style={{ backgroundColor: entry.bg }}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center">
        <IconComponent />
      </div>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium text-white transition-all duration-200 group-hover:max-w-[120px] group-hover:pr-2.5">
        {name}
      </span>
    </div>
  );
}
