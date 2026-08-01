import { ImageResponse } from "next/og";

import { CONTACT, SITE } from "@/constants/site";
import { en } from "@/i18n/dictionaries/en";

export const dynamic = "force-static";
export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated at build time — no design file to keep in sync. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #04040a 0%, #0b0b16 45%, #10101d 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(59,130,246,0.42), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            right: -140,
            width: 660,
            height: 660,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(139,92,246,0.38), transparent 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",
              color: "#04040a",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            SU
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#e8eaf4", fontSize: 26, fontWeight: 600 }}>
              {SITE.name}
            </span>
            <span style={{ color: "#7c84a5", fontSize: 19 }}>{en.hero.headline}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              color: "#f7f8fc",
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            I build ML systems that survive contact with production.
          </span>
          <span style={{ color: "#a2a8c4", fontSize: 27, maxWidth: 900, lineHeight: 1.4 }}>
            Leading ASINT — an asset-valuation platform live at OFB Bank, OTP Bank and
            beyond, built on 5.3M+ market records.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {["3+ yrs production", "5.3M+ records", "3 orgs live", CONTACT.location].map(
            (chip) => (
              <span
                key={chip}
                style={{
                  color: "#c8cce0",
                  fontSize: 21,
                  padding: "12px 24px",
                  borderRadius: 9999,
                  border: "1px solid rgba(247,248,252,0.14)",
                  background: "rgba(247,248,252,0.05)",
                  display: "flex",
                }}
              >
                {chip}
              </span>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
