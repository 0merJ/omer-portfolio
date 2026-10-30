import { useState } from 'react'
import type { ProjectMedia } from '../types'

export function MediaPlaceholder({ media, featured = false }: { media: ProjectMedia; featured?: boolean }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  if (media.kind === 'video') {
    return (
      <figure className={`media-frame ${featured ? 'media-frame--featured' : ''} media-frame--video`}>
        <video controls preload="metadata" poster={media.poster} aria-label={media.caption} onError={() => setFailed(true)}>
          <source src={media.src} type={media.src.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
        </video>
        <figcaption>{media.caption}</figcaption>
      </figure>
    )
  }
  return (
    <figure className={`media-frame ${featured ? 'media-frame--featured' : ''}`}>
      <img src={media.src} alt={media.alt} loading={featured ? 'eager' : 'lazy'} onError={() => setFailed(true)} />
      <figcaption>{media.caption}</figcaption>
    </figure>
  )
}
