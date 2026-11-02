# Thư viện video mèo với React

Đây là một website hiển thị video mèo được xây dựng bằng React và Vite, nhân bản từ project thư viện ảnh web_image. Bạn có thể duyệt video theo album, tìm video theo tên, xem video toàn màn hình và tải thêm video từ máy của mình.

## Tính năng

* Lưới video dạng masonry, tự điều chỉnh số cột theo độ rộng màn hình, mỗi video có ảnh bìa, biểu tượng phát và thời lượng.
* Lọc video theo album và tìm kiếm theo tên, hỗ trợ tìm không phân biệt dấu tiếng Việt.
* Xem video toàn màn hình (lightbox) có thanh điều khiển phát, chuyển video bằng phím mũi tên trái, mũi tên phải và đóng bằng Esc.
* Tải video lên từ máy, video được lưu tạm trong trình duyệt và sẽ mất khi tải lại trang.
* Ảnh bìa tải theo kiểu lazy loading và hiển thị thông báo khi một video không tải được.
* Ghi rõ tác giả, giấy phép và đường dẫn nguồn của từng video mẫu.
* Giao diện thân thiện với bàn phím và trình đọc màn hình.

## Yêu cầu

Bạn cần cài Node.js phiên bản 18 trở lên. Bạn có thể tải tại https://nodejs.org.

## Bắt đầu nhanh

Cài đặt các thư viện:

```bash
npm install
```

Chạy website ở chế độ phát triển, sau đó mở địa chỉ hiển thị trong terminal (thường là http://localhost:5173):

```bash
npm run dev
```

Đóng gói bản chạy thật:

```bash
npm run build
```

Xem thử bản đã đóng gói:

```bash
npm run preview
```

## Đưa website lên GitHub Pages

Dự án đã có sẵn workflow tại `.github/workflows/deploy.yml`. Mỗi lần bạn đẩy code lên nhánh `main`, GitHub sẽ tự động build và cập nhật website. Bạn chỉ cần bật GitHub Pages một lần theo các bước sau:

1. Đẩy code lên GitHub bằng lệnh `git push origin main`.
2. Trên trang repo, vào Settings, chọn Pages.
3. Ở mục Build and deployment, chọn Source là GitHub Actions.
4. Vào tab Actions để theo dõi workflow chạy, thường mất khoảng một đến hai phút.

Khi workflow hoàn tất, website sẽ có địa chỉ dạng `https://<tên-tài-khoản>.github.io/web_video_cat/`.

## Cấu trúc dự án

```
web_video_cat
├── index.html
├── package.json
├── vite.config.js
├── public
│   └── favicon.svg
└── src
    ├── main.jsx                   Điểm khởi chạy của ứng dụng
    ├── App.jsx                    Quản lý trạng thái lọc, tìm kiếm và lightbox
    ├── index.css                  Toàn bộ giao diện
    ├── components
    │   ├── AlbumFilter.jsx        Các nút lọc theo album
    │   ├── Gallery.jsx            Lưới video
    │   ├── VideoCard.jsx          Một video trong lưới
    │   ├── Lightbox.jsx           Xem video toàn màn hình
    │   └── UploadButton.jsx       Nút tải video lên
    ├── data
    │   └── videos.js              Danh sách video mèo mẫu
    ├── hooks
    │   └── useUploadedVideos.js   Quản lý video tải lên từ máy
    └── utils
        ├── formatDuration.js      Đổi số giây thành dạng phút:giây
        ├── loadVideoSize.js       Đọc kích thước và thời lượng thật của video
        └── normalizeText.js       Bỏ dấu tiếng Việt để tìm kiếm
```

## Dùng video của bạn

Mở file `src/data/videos.js` và thay danh sách video mẫu bằng video của bạn. Mỗi video cần có các trường sau:

```js
{
  id: 'meo-01',
  title: 'Mèo con đang chơi',
  album: 'Mèo con',
  width: 1920,
  height: 1080,
  duration: 30,                       // thời lượng tính bằng giây
  thumb: `${import.meta.env.BASE_URL}videos/thumbs/meo-01.jpg`, // ảnh bìa hiển thị trong lưới
  src: `${import.meta.env.BASE_URL}videos/meo-01.mp4`,          // file video phát trong lightbox
}
```

Bạn có thể đặt file video trong thư mục `public/videos` rồi trỏ đường dẫn như ví dụ trên. Việc dùng `import.meta.env.BASE_URL` giúp đường dẫn vẫn đúng khi website nằm trong thư mục con của GitHub Pages. Lưu ý GitHub giới hạn mỗi file tối đa 100 MB và nên giữ repo ở dung lượng nhỏ, nên với video dài bạn có thể dùng link từ nơi lưu trữ khác như các video mẫu hiện tại. Các album sẽ tự động xuất hiện trong bộ lọc dựa trên trường `album`. Nếu video có yêu cầu ghi nguồn, bạn có thể thêm các trường tùy chọn `author`, `license`, `licenseUrl` và `sourceUrl`, thông tin này sẽ hiển thị bên dưới video trong lightbox.

Bạn cũng có thể dùng nút "Tải video lên" trên trang để xem nhanh video từ máy mà không cần sửa code.

## Nguồn video mẫu

Video mẫu hiện tại được lấy từ [Wikimedia Commons](https://commons.wikimedia.org) và phát trực tiếp từ máy chủ của Wikimedia, nên cần có kết nối Internet để hiển thị. Mỗi video có giấy phép riêng (CC0, miền công cộng, CC BY hoặc CC BY SA), tác giả và giấy phép được ghi trong khung xem của từng video. Khi dùng lại các video này, bạn cần tuân theo điều kiện của giấy phép tương ứng.
