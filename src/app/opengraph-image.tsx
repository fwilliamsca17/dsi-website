import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Direct Servicing Initiative — Private Loan Servicing for Southern California";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background:
            "linear-gradient(158deg, #041420 0%, #052035 58%, #020812 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          fontFamily: "system-ui",
          position: "relative",
        }}
      >
        {/* Top jade hairline accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background:
              "linear-gradient(90deg, transparent 0%, #10B981 25%, #6EE7B7 50%, #10B981 75%, transparent 100%)",
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -100,
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle, rgba(16,185,129,0.18), transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            color: "#6EE7B7",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ width: 32, height: 2, background: "#10B981" }} />
          DIRECT SERVICING INITIATIVE
        </div>

        <div
          style={{
            color: "#EAF4F1",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: 24,
            maxWidth: 900,
            letterSpacing: -1.5,
          }}
        >
          You fund them. We collect.
        </div>

        <div
          style={{
            color: "rgba(234,244,241,0.6)",
            fontSize: 24,
            lineHeight: 1.5,
            maxWidth: 800,
            marginBottom: 50,
          }}
        >
          Southern California&apos;s trusted private loan servicer. Compliant,
          transparent, end-to-end servicing for lenders and investors.
        </div>

        <div style={{ display: "flex", gap: 64 }}>
          {[
            { value: "$150M+", label: "Loans Serviced" },
            { value: "500+", label: "Active Loans" },
            { value: "99.8%", label: "Payment Accuracy" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  color: "#6EE7B7",
                  fontSize: 40,
                  fontWeight: 800,
                  letterSpacing: -1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: "rgba(234,244,241,0.5)",
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ color: "rgba(234,244,241,0.4)", fontSize: 16 }}>
            trustdsi.com
          </div>
          <div style={{ color: "rgba(234,244,241,0.4)", fontSize: 14 }}>
            DRE# 01979442 | NMLS# 1858674
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
