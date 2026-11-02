import VideoCard from './VideoCard.jsx'

export default function Gallery({ videos, onOpen }) {
  if (videos.length === 0) {
    return <p className="empty">Không tìm thấy video phù hợp. Hãy thử từ khóa hoặc album khác.</p>
  }

  return (
    <div className="gallery">
      {videos.map((video, index) => (
        <VideoCard key={video.id} video={video} onOpen={() => onOpen(index)} />
      ))}
    </div>
  )
}
