"use client"

import { Music2Icon } from "lucide-react"
import { useEffect, useState } from "react"

type Track = {
  artist: string
  title: string
  url?: string
}

type SpotifyRecentlyPlayedProps = {
  fallbackTrack: Track
}

export function SpotifyRecentlyPlayed({
  fallbackTrack,
}: SpotifyRecentlyPlayedProps) {
  const [track, setTrack] = useState<Track>(fallbackTrack)

  useEffect(() => {
    let ignore = false

    async function loadRecentlyPlayed() {
      try {
        const response = await fetch("/api/spotify/recently-played")

        if (!response.ok) {
          return
        }

        const data = (await response.json()) as Track

        if (!ignore && data.title && data.artist) {
          setTrack(data)
        }
      } catch {
        // Keep the local fallback track if Spotify is unavailable.
      }
    }

    loadRecentlyPlayed()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <a
      href={track.url ?? "https://open.spotify.com/"}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-hover relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl bg-card/40 px-4 py-3 text-sm transition-colors"
      aria-label="Open recently played Spotify track"
    >
      <span className="relative flex min-w-0 items-center gap-3">
        <Music2Icon className="h-5 w-5 shrink-0 text-muted-foreground" />
        <span className="min-w-0 truncate text-muted-foreground">
          <span className="font-semibold text-foreground">{track.title}</span>
          <span> - {track.artist}</span>
        </span>
      </span>
      <span className="relative shrink-0 text-muted-foreground">
        Recently played
      </span>
    </a>
  )
}
