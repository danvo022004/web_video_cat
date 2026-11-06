import { useCallback, useMemo, useState } from 'react'
import { sampleVideos as allVideos } from './data/videos.js'
import { normalizeText } from './utils/normalizeText.js'
import AlbumFilter from './components/AlbumFilter.jsx'
import Gallery from './components/Gallery.jsx'
import Lightbox from './components/Lightbox.jsx'
import Quiz from './components/Quiz.jsx'

const albums = [...new Set(allVideos.map((video) => video.album))]

export default function App() {
  const [album, setAlbum] = useState('')
  const [query, setQuery] = useState('')
  const [openIndex, setOpenIndex] = useState(null)

  const visibleVideos = useMemo(() => {
    const keyword = normalizeText(query.trim())
    return allVideos.filter(
      (video) =>
        (!album || video.album === album) && (!keyword || normalizeText(video.title).includes(keyword)),
    )
  }, [album, query])

  const closeLightbox = useCallback(() => setOpenIndex(null), [])

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1 className="title">
            <span className="title__word" style={{ '--word-index': 0 }}>
              Thư
            </span>{' '}
            <span className="title__word" style={{ '--word-index': 1 }}>
              viện
            </span>{' '}
            <span className="title__mark">
              <span className="title__word" style={{ '--word-index': 2 }}>
                video
              </span>{' '}
              <span className="title__word" style={{ '--word-index': 3 }}>
                mèo
              </span>
            </span>
          </h1>
          <p className="header__subtitle">Duyệt video mèo theo album, tìm theo tên và xem toàn màn hình.</p>
        </div>
        <a className="header__link" href="#quiz">
          Đố vui về mèo
        </a>
      </header>

      <section className="toolbar" aria-label="Bộ lọc video">
        <input
          type="search"
          className="search"
          placeholder="Tìm video theo tên"
          aria-label="Tìm video theo tên"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <AlbumFilter albums={albums} active={album} onChange={setAlbum} />
      </section>

      <p className="count" aria-live="polite">
        Hiển thị{' '}
        <strong key={visibleVideos.length} className="count__number">
          {visibleVideos.length}
        </strong>{' '}
        trên {allVideos.length} video
      </p>

      <main>
        <Gallery videos={visibleVideos} onOpen={setOpenIndex} />
      </main>

      <Quiz />

      <footer className="footer">
        Video mẫu được lấy từ{' '}
        <a href="https://commons.wikimedia.org" target="_blank" rel="noreferrer">
          Wikimedia Commons
        </a>
        . Tác giả và giấy phép của từng video được ghi trong khung xem.
      </footer>

      {openIndex !== null && (
        <Lightbox
          videos={visibleVideos}
          index={openIndex}
          onClose={closeLightbox}
          onChange={setOpenIndex}
        />
      )}
    </div>
  )
}
