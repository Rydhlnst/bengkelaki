import { ImageResponse } from "next/og";
import { business } from "@/config/business";

export const alt = `${business.name} — Aki Darurat & Teknisi Express Jakarta`;
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
          justifyContent: "space-between",
          backgroundColor: "#101214",
          padding: 72,
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E31E24",
              borderRadius: 10,
              fontSize: 44,
              fontWeight: 700,
            }}
          >
            ⚡
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: "-1px",
              display: "flex",
            }}
          >
            {business.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              maxWidth: 900,
            }}
          >
            Aki Mobil &amp; Motor Lengkap. Bisa Langsung Pasang.
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#9CA3AF" }}>
            Aki darurat, jumper, ganti, dan pasang di lokasi — 24 jam
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "4px solid #FDB515",
            paddingTop: 24,
            fontSize: 26,
            color: "#D1D5DB",
          }}
        >
          <div style={{ display: "flex" }}>
            GS Astra • Yuasa • Amaron • Incoe • Motobatt • Bosch
          </div>
          <div style={{ display: "flex", color: "#FDB515", fontWeight: 700 }}>
            {business.phoneDisplay}
          </div>
        </div>
      </div>
    ),
    size
  );
}
