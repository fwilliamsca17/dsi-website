import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background:
            "linear-gradient(135deg, #041420 0%, #052035 60%, #053D57 100%)",
          borderRadius: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Top jade hairline accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 18,
            right: 18,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, #6EE7B7, transparent)",
          }}
        />
        <div
          style={{
            color: "#6EE7B7",
            fontSize: 72,
            fontWeight: 900,
            fontFamily: "system-ui",
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          DSI
        </div>
      </div>
    ),
    { ...size }
  );
}
