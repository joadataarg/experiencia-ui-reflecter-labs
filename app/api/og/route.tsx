import { ImageResponse } from "next/og";

// Decryption helper
function decryptLanyardData(
  encrypted: string
): { username: string; variant: "dark" | "light" } | null {
  const OBFUSCATION_KEY = "reflecter";

  if (!encrypted) return null;
  try {
    let base64 = encrypted.replace(/-/g, "+").replace(/_/g, "/");
    const padding = (4 - (base64.length % 4)) % 4;
    base64 += "=".repeat(padding);

    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    const decoded = new TextDecoder().decode(bytes);

    if (decoded.startsWith(`${OBFUSCATION_KEY}:`)) {
      const withoutKey = decoded.slice(OBFUSCATION_KEY.length + 1);
      const colonIndex = withoutKey.indexOf(":");
      if (colonIndex === -1) return null;

      const variant = withoutKey.slice(0, colonIndex) as "dark" | "light";
      const username = withoutKey.slice(colonIndex + 1);

      if (variant !== "dark" && variant !== "light") return null;

      return { username, variant };
    }
    return null;
  } catch {
    return null;
  }
}

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

  if (resource) {
    const response = await fetch(resource[1])

    if (response.status == 200) {
      return await response.arrayBuffer()
    }
  }

  throw new Error('failed to load font data')
}

export async function GET(request: Request) {
  try {
    // Event details
    const EVENT_CITY = "Córdoba";
    const EVENT_DATE = "Marzo 2026";
    const TITLE = 'REFLECTER LABS'

    const { searchParams } = new URL(request.url);
    const encrypted = searchParams.get("u");
    const format = searchParams.get("format") || "og"; // og, twitter, linkedin, square

    const data = encrypted ? decryptLanyardData(encrypted) : null;
    const userName = data?.username || "Attendee";
    const variant = data?.variant || "dark";

    // Format dimensions
    const dimensions = {
      og: { width: 1200, height: 630 }, // Facebook, LinkedIn, Discord
      twitter: { width: 1200, height: 600 }, // Twitter summary_large_image
      linkedin: { width: 1200, height: 627 }, // LinkedIn optimal
      square: { width: 1200, height: 1200 }, // Instagram, WhatsApp
    };

    const { width, height } = dimensions[format as keyof typeof dimensions] || dimensions.og;

    // Colors based on variant
    const isDark = variant === "dark";
    const bgColor = isDark ? "#000000" : "#ffffff";
    const textColor = isDark ? "#ffffff" : "#000000";
    const accentColor = "#878787";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: bgColor,
            fontFamily: 'Geist',
            fontSize: 48,
            padding: "60px",
          }}
        >
          <div style={{
            display: 'flex',
            gap: '36px',
            alignItems: 'center'
          }}>
            <svg width="120" height="120" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z" fill={textColor} />
            </svg>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <span style={{
                color: textColor,
                textTransform: 'uppercase',
                lineHeight: '56px',
              }}>{EVENT_CITY}</span>
              <span style={{
                color: accentColor,
                textTransform: 'uppercase',
                lineHeight: '56px'
              }}>{EVENT_DATE}</span>
            </div>
          </div>
          <div style={{
            display: 'flex',
            gap: '36px',
            marginBottom: '48px',
            marginTop: '48px'
          }}>
            <span style={{
              color: textColor,
              fontSize: '110px',
              lineHeight: '110px',
              fontWeight: 'bold',
            }}>
              {TITLE}
            </span>
          </div>
          <div style={{
            display: 'flex',
            gap: '36px',
          }}>
            <span style={{
              color: accentColor,
              lineHeight: '56px',
              textTransform: 'uppercase'
            }}>
              {userName}
            </span>
          </div>
        </div>
      ),
      {
        width,
        height,
        fonts: [
          {
            name: 'Geist',
            data: await loadGoogleFont('Geist', TITLE + userName + EVENT_CITY + EVENT_DATE),
            style: 'normal',
          }
        ],
      }
    );
  } catch (e) {
    console.log(`OG Image Generation Error: ${e}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
