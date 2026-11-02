import { useCallback, useMemo, useState } from 'react'
import { sampleVideos } from './data/videos.js'
import { useUploadedVideos } from './hooks/useUploadedVideos.js'
import { normalizeText } from './utils/normalizeText.js'
import AlbumFilter from './components/AlbumFilter.jsx'
import Gallery from './components/Gallery.jsx'
import Lightbox from './components/Lightbox.jsx'
import UploadButton from './components/UploadButton.jsx'

export default function App() {
  const { videos: uploadedVideos, addFiles } = useUploadedVideos()
  const [album, setAlbum] = useState('')
  const [query, setQuery] = useState('')
  const [openIndex, setOpenIndex] = useState(null)

  const allVideos = useMemo(() => [...uploadedVideos, ...sampleVideos], [uploadedVideos])
  const albums = useMemo(() => [...new Set(allVideos.map((video) => video.album))], [allVideos])

  const visibleVideos = useMemo(() => {
    const keyword = normalizeText(query.trim())
    return allVideos.filter(
      (video) =>
        (!album || video.album === album) && (!keyword || normalizeText(video.title).includes(keyword)),
    )
  }, [allVideos, album, query])

  const closeLightbox = useCallback(() => setOpenIndex(null), [])

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Thư viện video mèo</h1>
          <p className="header__subtitle">Duyệt video mèo theo album, tìm theo tên và xem toàn màn hình.</p>
        </div>
        <UploadButton onFiles={addFiles} />
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
        Hiển thị {visibleVideos.length} trên {allVideos.length} video
      </p>

      <main>
        <Gallery videos={visibleVideos} onOpen={setOpenIndex} />
      </main>

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
