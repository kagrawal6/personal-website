import { NextResponse } from "next/server"

type SpotifyTokenResponse = {
  access_token?: string
  error?: string
}

type SpotifyRecentlyPlayedResponse = {
  items?: Array<{
    played_at: string
    track: {
      external_urls?: {
        spotify?: string
      }
      name: string
      artists: Array<{
        name: string
      }>
    }
  }>
}

export const dynamic = "force-dynamic"

async function getAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

  if (!clientId || !clientSecret || !refreshToken) {
    return null
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  })

  if (!response.ok) {
    return null
  }

  const data = (await response.json()) as SpotifyTokenResponse
  return data.access_token ?? null
}

export async function GET() {
  const accessToken = await getAccessToken()

  if (!accessToken) {
    return NextResponse.json(
      { error: "Spotify credentials are not configured." },
      { status: 503 },
    )
  }

  const response = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    },
  )

  if (!response.ok) {
    return NextResponse.json(
      { error: "Unable to fetch recently played track." },
      { status: response.status },
    )
  }

  const data = (await response.json()) as SpotifyRecentlyPlayedResponse
  const item = data.items?.[0]

  if (!item) {
    return NextResponse.json(
      { error: "No recently played track found." },
      { status: 404 },
    )
  }

  return NextResponse.json({
    artist: item.track.artists.map((artist) => artist.name).join(", "),
    playedAt: item.played_at,
    title: item.track.name,
    url: item.track.external_urls?.spotify ?? "https://open.spotify.com/",
  })
}
