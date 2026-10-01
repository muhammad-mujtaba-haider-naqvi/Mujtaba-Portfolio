/** Only absolute HTTP(S) destinations can become external project links. */
export function externalUrl(value?: string): string | undefined {
  if (!value?.trim()) return undefined
  try {
    const url = new URL(value)
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) return undefined
    return url.href
  } catch {
    return undefined
  }
}

export function youtubeId(value?: string): string | undefined {
  const href = externalUrl(value)
  if (!href) return undefined
  const url = new URL(href)
  const host = url.hostname.replace(/^www\./, '')
  const parts = url.pathname.split('/').filter(Boolean)
  let id: string | null | undefined

  if (host === 'youtu.be') id = parts[0]
  else if (['youtube.com', 'm.youtube.com', 'youtube-nocookie.com'].includes(host)) {
    if (parts[0] === 'watch') id = url.searchParams.get('v')
    else if (['embed', 'shorts', 'live'].includes(parts[0])) id = parts[1]
  }

  return id && /^[\w-]{11}$/.test(id) ? id : undefined
}
