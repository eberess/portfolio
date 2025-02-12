import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const revalidate = 3600; // Cache pendant 1 heure

// Optimisation des polices
const font = fetch(
  new URL('../../fonts/geist-sans.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET() {
  const fontData = await font;
  
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #1a1a1a, #0a0a0a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 -960 960 960"
          fill="#e8eaed"
        >
          <path d="m297-581 149-243q6-10 15-14.5t19-4.5q10 0 19 4.5t15 14.5l149 243q6 10 6 21t-5 20q-5 9-14 14.5t-21 5.5H331q-12 0-21-5.5T296-540q-5-9-5-20t6-21ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-60v-240q0-17 11.5-28.5T160-420h240q17 0 28.5 11.5T440-380v240q0 17-11.5 28.5T400-100H160q-17 0-28.5-11.5T120-140Z" />
        </svg>
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: '#e8eaed',
            marginTop: 40,
          }}
        >
          A.B.
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#e8eaed',
            opacity: 0.8,
            marginTop: 20,
          }}
        >
          Développeur & Chef de projet
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Geist',
          data: fontData,
          weight: 700,
        },
      ],
    },
  )
} 