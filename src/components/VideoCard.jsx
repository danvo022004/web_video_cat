import { useState } from 'react'
import { formatDuration } from '../utils/formatDuration.js'

export default function VideoCard({ video, index, onOpen }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className="card" style={{ '--card-index': Math.min(index, 12) }}>
      <button
        type="button"
        className="card__button"
        style={{ aspectRatio: `${video.width} / ${video.height}` }}
        aria-label={`Xem video ${video.title}`}
        onClick={onOpen}
      >
        {failed ? (
          <span className="card__fallback">Không tải được video</span>
        ) : (
          <img
            src={video.thumb}
            alt={video.title}
            width={video.width}
            height={video.height}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
        <span className="card__play" aria-hidden="true">
          ▶
        </span>
        <span className="card__duration">{formatDuration(video.duration)}</span>
        <span className="card__caption">
          <strong>{video.title}</strong>
          <span>{video.album}</span>
        </span>
      </button>
    </figure>
  )
}
