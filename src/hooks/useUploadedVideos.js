import { useCallback, useEffect, useRef, useState } from 'react'
import { loadVideoSize } from '../utils/loadVideoSize.js'

export const UPLOAD_ALBUM = 'Video của bạn'

// Video tải lên chỉ nằm trong bộ nhớ của trình duyệt, tải lại trang sẽ mất.
export function useUploadedVideos() {
  const [videos, setVideos] = useState([])
  const objectUrls = useRef([])
  const nextId = useRef(0)

  useEffect(() => {
    return () => objectUrls.current.forEach((url) => URL.revokeObjectURL(url))
  }, [])

  const addFiles = useCallback(async (fileList) => {
    const files = Array.from(fileList).filter((file) => file.type.startsWith('video/'))

    const added = await Promise.all(
      files.map(async (file) => {
        const src = URL.createObjectURL(file)
        objectUrls.current.push(src)

        try {
          const { width, height, duration } = await loadVideoSize(src)
          return {
            id: `upload-${nextId.current++}`,
            title: file.name.replace(/\.[^.]+$/, ''),
            album: UPLOAD_ALBUM,
            width,
            height,
            duration,
            thumb: '',
            src,
          }
        } catch {
          URL.revokeObjectURL(src)
          return null
        }
      }),
    )

    setVideos((previous) => [...added.filter(Boolean), ...previous])
  }, [])

  return { videos, addFiles }
}
