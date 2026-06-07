import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#030303",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(0,212,255,0.18), transparent 55%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            color: "#00D4FF",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Premium Car Care Studio · Patna, Bihar
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 800, marginTop: 20, lineHeight: 1 }}>
          DETAIL GOD <span style={{ color: "#00D4FF", marginLeft: 16 }}>INDIA</span>
        </div>
        <div style={{ fontSize: 36, color: "#A1A1AA", marginTop: 24, maxWidth: 820 }}>
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
            fontSize: 20,
            color: "#4FFFB0",
            letterSpacing: 4,
          }}
        >
          PPF · CERAMIC · GRAPHENE · DETAILING · PAINTING
        </div>
      </div>
    ),
    { ...size }
  );
}
