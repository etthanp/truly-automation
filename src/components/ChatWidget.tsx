"use client";

import { useEffect } from "react";
import Script from "next/script";

// The GoHighLevel widget renders inside a shadow root, so page CSS can't reach it. Once it
// loads we add our own style tag inside it: bubble bottom-left and smaller, no pop-up prompt.
const OVERRIDE = `
#lc_text-widget { left: 16px !important; right: auto !important; bottom: 16px !important; }
.lc_text-widget--prompt { display: none !important; }
.lc_text-widget--bubble { left: 16px !important; right: auto !important; bottom: 16px !important; transition: none !important; }
.lc_text-widget--bubble, .lc_text-widget--bubble .icon { width: 44px !important; height: 44px !important; }
.lc_text-widget--bubble svg { width: 22px !important; height: 22px !important; }
`;

function applyOverride() {
  const root = document.querySelector("chat-widget")?.shadowRoot;
  if (!root || !root.querySelector("#lc_text-widget")) return false;
  if (!root.getElementById("ta-chat-override")) {
    const style = document.createElement("style");
    style.id = "ta-chat-override";
    style.textContent = OVERRIDE;
    root.appendChild(style);
  }
  return true;
}

/** GoHighLevel chat widget: the SMS opt-in form for A2P. Restyled to sit small in the bottom-left. */
export default function ChatWidget() {
  useEffect(() => {
    // The widget loads after the page and can re-render, so keep checking for a while.
    let tries = 0;
    const t = setInterval(() => {
      applyOverride();
      if (++tries > 300) clearInterval(t);
    }, 100);
    return () => clearInterval(t);
  }, []);

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6ad68732e19e4c46e8d80e21"
      data-source="WEB_USER"
      strategy="afterInteractive"
    />
  );
}
