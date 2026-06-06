import Script from "next/script";

const SHELL = "<div class=\"phone\">\n  <header>\n    <div class=\"hrow\">\n      <div>\n        <div class=\"brand\">WhatsBiz <small>GIG</small></div>\n        <div class=\"tagline\" id=\"tagline\"></div>\n      </div>\n      <select class=\"lang\" id=\"lang\">\n        <option value=\"en\">English</option>\n        <option value=\"ms\">Bahasa</option>\n        <option value=\"zh\">中文</option>\n        <option value=\"bn\">বাংলা</option>\n      </select>\n    </div>\n    <div class=\"roles\" id=\"roles\"></div>\n  </header>\n  <main id=\"app\"></main>\n  <nav class=\"bn\" id=\"nav\"></nav>\n</div>";

export default function Page() {
  return (
    <>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: SHELL }} />
      <Script src="/gig.js" strategy="afterInteractive" />
    </>
  );
}
