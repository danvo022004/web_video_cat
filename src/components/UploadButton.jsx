import { useRef } from 'react'

export default function UploadButton({ onFiles }) {
  const inputRef = useRef(null)

  function handleChange(event) {
    onFiles(Array.from(event.target.files))
    event.target.value = ''
  }

  return (
    <>
      <button type="button" className="button" onClick={() => inputRef.current?.click()}>
        Tải video lên
      </button>
      <input ref={inputRef} type="file" accept="video/*" multiple hidden onChange={handleChange} />
    </>
  )
}
