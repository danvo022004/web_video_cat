// Bỏ dấu tiếng Việt và đưa về chữ thường để tìm kiếm không phân biệt dấu.
export function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
}
