export function loadVideoSize(src) {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video')
    video.preload = 'metadata'
    video.onloadedmetadata = () =>
      resolve({ width: video.videoWidth, height: video.videoHeight, duration: video.duration })
    video.onerror = reject
    video.src = src
  })
}
