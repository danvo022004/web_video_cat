// Đổi số giây thành dạng phút:giây, ví dụ 75 thành 1:15.
export function formatDuration(totalSeconds) {
  const seconds = Math.max(0, Math.round(totalSeconds))
  const minutes = Math.floor(seconds / 60)
  return `${minutes}:${String(seconds % 60).padStart(2, '0')}`
}
