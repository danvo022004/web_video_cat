import { useEffect, useRef } from 'react'

export default function Lightbox({ videos, index, onClose, onChange }) {
  const closeButton = useRef(null)
  const total = videos.length
  const video = videos[index]

  const goPrevious = () => onChange((index - 1 + total) % total)
  const goNext = () => onChange((index + 1) % total)

  // Khóa cuộn trang phía sau, chuyển focus vào hộp thoại và trả lại focus khi đóng.
  useEffect(() => {
    const opener = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      opener?.focus?.()
    }
  }, [])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
      // Khi đang chọn thanh điều khiển video, phím mũi tên dùng để tua video.
      else if (event.target instanceof HTMLVideoElement) return
      else if (event.key === 'ArrowLeft') onChange((index - 1 + total) % total)
      else if (event.key === 'ArrowRight') onChange((index + 1) % total)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [index, total, onClose, onChange])

  if (!video) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={video.title} onClick={onClose}>
      <button
        ref={closeButton}
        type="button"
        className="lightbox__close"
        aria-label="Đóng"
        onClick={onClose}
      >
        ×
      </button>

      {total > 1 && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--previous"
          aria-label="Video trước"
          onClick={(event) => {
            event.stopPropagation()
            goPrevious()
          }}
        >
          ‹
        </button>
      )}

      <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
        <video
          key={video.id}
          src={video.src}
          poster={video.thumb || undefined}
          aria-label={video.title}
          controls
          autoPlay
          loop
          playsInline
        />
        <figcaption>
          <strong>{video.title}</strong>
          <span>
            {video.album} · {index + 1} / {total}
          </span>
          {video.license && (
            <span>
              Tác giả: {video.author}. Giấy phép:{' '}
              <a href={video.licenseUrl} target="_blank" rel="noreferrer">
                {video.license}
              </a>
              .{' '}
              <a href={video.sourceUrl} target="_blank" rel="noreferrer">
                Xem nguồn
              </a>
            </span>
          )}
        </figcaption>
      </figure>

      {total > 1 && (
        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          aria-label="Video sau"
          onClick={(event) => {
            event.stopPropagation()
            goNext()
          }}
        >
          ›
        </button>
      )}
    </div>
  )
}
