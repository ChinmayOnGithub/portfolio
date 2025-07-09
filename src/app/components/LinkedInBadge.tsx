"use client";

import { useEffect, useRef } from "react";

export default function LinkedInBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!badgeRef.current) return;

    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    badgeRef.current.appendChild(script);
  }, [badgeRef]);

  return (
    <div ref={badgeRef}>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="chinmaypatil462"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://in.linkedin.com/in/chinmaypatil462?trk=profile-badge"
        >
          Chinmay Patil
        </a>
      </div>
    </div>
  );
}
