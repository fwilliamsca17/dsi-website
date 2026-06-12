import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// DSI favicon — ink base with jade accent letter. Sibling of CDF's
// blue/champagne mark but visually distinct.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#041420",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "#6EE7B7",
            fontSize: 18,
            fontWeight: 900,
            fontFamily: "system-ui",
            letterSpacing: -1,
          }}
        >
          D
        </div>
      </div>
    ),
    { ...size }
  );
}
