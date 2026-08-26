import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f59e0b",
          borderRadius: 36,
          fontWeight: 900,
          fontFamily: "monospace",
          border: "4px solid rgba(245, 158, 11, 0.5)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
        }}
      >
        {"</>"}
      </div>
    ),
    {
      ...size,
    }
  );
}
