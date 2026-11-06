// Bộ câu hỏi đố vui về thể hình và cơ bụng 6 múi.
// answer là vị trí (bắt đầu từ 0) của đáp án đúng trong mảng options.
export const quizQuestions = [
  {
    id: 'cb-01',
    topic: 'Cơ bụng 6 múi',
    question: 'Những "múi" bụng mà mọi người hay nhắc đến thực chất là cơ nào?',
    options: ['Cơ thẳng bụng', 'Cơ ngực lớn', 'Cơ liên sườn', 'Cơ tam đầu cánh tay'],
    answer: 0,
    explanation:
      'Cơ thẳng bụng chạy dọc phía trước bụng. Các đường gân ngang cắt ngang cơ này tạo nên hình dạng các múi mà bạn nhìn thấy.',
  },
  {
    id: 'cb-02',
    topic: 'Cơ bụng 6 múi',
    question: 'Số múi bụng và hình dạng của chúng ở mỗi người chủ yếu phụ thuộc vào yếu tố nào?',
    options: [
      'Số lần gập bụng mỗi ngày',
      'Di truyền, vì các đường gân ngang khác nhau ở mỗi người',
      'Loại giày mang khi tập',
      'Chiều cao của người tập',
    ],
    answer: 1,
    explanation:
      'Vị trí các đường gân ngang do di truyền quyết định, nên có người có 4 múi, 6 múi hoặc 8 múi, và các múi có thể lệch nhau đôi chút. Tập luyện làm cơ dày lên chứ không đổi được vị trí các đường này.',
  },
  {
    id: 'cb-03',
    topic: 'Cơ bụng 6 múi',
    question: 'Ngoài tập luyện, điều kiện quan trọng nhất để nhìn thấy rõ cơ bụng là gì?',
    options: [
      'Ngủ ít hơn để đốt thêm năng lượng',
      'Mặc áo bó để cơ bụng nổi lên',
      'Uống thật nhiều nước tăng lực',
      'Giảm lớp mỡ phủ bên ngoài cơ bụng',
    ],
    answer: 3,
    explanation:
      'Ai cũng có cơ bụng, nhưng nó chỉ lộ rõ khi tỷ lệ mỡ cơ thể đủ thấp. Vì vậy chế độ ăn uống quan trọng không kém việc tập luyện.',
  },
  {
    id: 'cb-04',
    topic: 'Cơ bụng 6 múi',
    question: 'Chỉ tập gập bụng thật nhiều thì có đốt được mỡ riêng ở vùng bụng không?',
    options: [
      'Có, mỡ giảm đúng vùng đang tập',
      'Chỉ có tác dụng với nam giới',
      'Không, cơ thể giảm mỡ trên toàn thân chứ không chọn riêng một vùng',
      'Chỉ có tác dụng nếu tập vào buổi sáng',
    ],
    answer: 2,
    explanation:
      'Giảm mỡ theo từng vùng là một quan niệm sai. Cơ thể lấy năng lượng từ mỡ ở nhiều nơi, còn gập bụng giúp cơ bụng khỏe và săn chắc hơn.',
  },
  {
    id: 'dd-01',
    topic: 'Dinh dưỡng',
    question: 'Chất dinh dưỡng nào đóng vai trò quan trọng nhất trong việc sửa chữa và xây dựng cơ bắp?',
    options: ['Đường tinh luyện', 'Muối', 'Chất đạm (protein)', 'Chất xơ'],
    answer: 2,
    explanation:
      'Chất đạm cung cấp các axit amin để sửa chữa những tổn thương nhỏ trong sợi cơ sau buổi tập và giúp cơ phát triển.',
  },
  {
    id: 'dd-02',
    topic: 'Dinh dưỡng',
    question: 'Muốn giảm mỡ để lộ cơ bụng, về nguyên tắc bạn cần nạp năng lượng như thế nào?',
    options: [
      'Ít hơn mức năng lượng cơ thể tiêu hao',
      'Nhiều hơn mức năng lượng cơ thể tiêu hao',
      'Không cần quan tâm đến lượng ăn',
      'Chỉ ăn một bữa mỗi ngày',
    ],
    answer: 0,
    explanation:
      'Giảm mỡ cần thâm hụt năng lượng ở mức vừa phải. Nên kết hợp đủ chất đạm và tập tạ để giữ được khối cơ trong quá trình giảm mỡ.',
  },
  {
    id: 'dd-03',
    topic: 'Dinh dưỡng',
    question: 'Bữa ăn sau buổi tập nên ưu tiên điều gì để hỗ trợ phục hồi?',
    options: ['Chỉ uống cà phê đen', 'Chất đạm kết hợp tinh bột', 'Chỉ ăn đồ chiên rán', 'Nhịn ăn thêm vài tiếng'],
    answer: 1,
    explanation:
      'Chất đạm giúp sửa chữa sợi cơ, còn tinh bột bổ sung năng lượng dự trữ đã dùng trong lúc tập.',
  },
  {
    id: 'dd-04',
    topic: 'Dinh dưỡng',
    question: 'Vì sao người tập luyện nên uống đủ nước?',
    options: [
      'Nước làm cơ bụng to ra ngay lập tức',
      'Nước thay thế hoàn toàn các bữa ăn',
      'Nước đốt mỡ riêng ở vùng bụng',
      'Nước giúp điều hòa thân nhiệt và duy trì hiệu suất tập',
    ],
    answer: 3,
    explanation:
      'Khi ra mồ hôi, cơ thể mất nước và khoáng chất. Uống đủ nước giúp giữ thân nhiệt ổn định, hạn chế mệt mỏi và duy trì sức tập.',
  },
  {
    id: 'tl-01',
    topic: 'Kỹ thuật tập luyện',
    question: 'Động tác kéo xà chủ yếu tác động đến nhóm cơ nào?',
    options: ['Cơ bắp chân', 'Cơ mông', 'Cơ xô ở lưng và cơ nhị đầu cánh tay', 'Cơ cổ'],
    answer: 2,
    explanation:
      'Khi kéo xà, cơ xô ở lưng và cơ nhị đầu ở cánh tay trước phải làm việc nhiều nhất để kéo cơ thể lên.',
  },
  {
    id: 'tl-02',
    topic: 'Kỹ thuật tập luyện',
    question: 'Động tác squat tác động mạnh nhất đến nhóm cơ nào?',
    options: ['Cơ đùi trước và cơ mông', 'Cơ tam đầu cánh tay', 'Cơ ngực', 'Cơ cẳng tay'],
    answer: 0,
    explanation:
      'Squat là bài tập kép cho phần thân dưới, tác động chính đến cơ đùi trước và cơ mông, đồng thời cần cơ bụng và cơ lưng giữ thân người vững.',
  },
  {
    id: 'tl-03',
    topic: 'Kỹ thuật tập luyện',
    question: 'Khi tập deadlift, nên giữ lưng như thế nào để giảm nguy cơ chấn thương?',
    options: [
      'Cong tròn để nhấc tạ dễ hơn',
      'Giữ thẳng, siết cơ bụng và thân người',
      'Ngửa hẳn ra sau',
      'Thả lỏng hoàn toàn',
    ],
    answer: 1,
    explanation:
      'Giữ lưng ở tư thế trung lập và siết chặt cơ bụng giúp bảo vệ cột sống khi nhấc tạ nặng từ sàn lên.',
  },
  {
    id: 'tl-04',
    topic: 'Kỹ thuật tập luyện',
    question: 'Vì sao nên khởi động trước khi tập tạ nặng?',
    options: [
      'Để đốt hết mỡ bụng trong vài phút',
      'Để cơ to ra ngay trong 5 phút',
      'Chỉ để cho đẹp mắt',
      'Làm ấm cơ và khớp để giảm nguy cơ chấn thương',
    ],
    answer: 3,
    explanation:
      'Khởi động làm tăng nhiệt độ cơ, tăng lưu thông máu và giúp khớp linh hoạt hơn, nhờ vậy bạn tập an toàn và hiệu quả hơn.',
  },
  {
    id: 'ls-01',
    topic: 'Lịch sử và văn hóa',
    question: 'Eugen Sandow, người xuất hiện trong video cổ điển của thư viện, thường được gọi là gì?',
    options: [
      'Cha đẻ của thể hình hiện đại',
      'Nhà vô địch cờ vua thế giới',
      'Nhà thám hiểm Bắc Cực',
      'Nhà vô địch đua xe đạp',
    ],
    answer: 0,
    explanation:
      'Sandow là lực sĩ người Đức nổi tiếng vào cuối thế kỷ 19. Năm 1901, ông tổ chức một cuộc thi thể hình quy mô lớn tại London.',
  },
  {
    id: 'ls-02',
    topic: 'Lịch sử và văn hóa',
    question: 'Muscle Beach, nơi tập luyện ngoài trời nổi tiếng một thời, nằm ở bang nào của Mỹ?',
    options: ['Alaska', 'California', 'Maine', 'Montana'],
    answer: 1,
    explanation:
      'Muscle Beach hình thành ở Santa Monica, bang California, và thu hút nhiều lực sĩ cùng vận động viên thể dục dụng cụ đến luyện tập trước đông đảo người xem.',
  },
  {
    id: 'ls-03',
    topic: 'Lịch sử và văn hóa',
    question: 'Ai từng giành danh hiệu Mr. Olympia bảy lần, sau đó đóng phim và làm Thống đốc California?',
    options: ['Bruce Lee', 'Sylvester Stallone', 'Arnold Schwarzenegger', 'Jackie Chan'],
    answer: 2,
    explanation:
      'Arnold Schwarzenegger giành Mr. Olympia bảy lần, trở thành ngôi sao điện ảnh và làm Thống đốc California từ năm 2003 đến năm 2011.',
  },
  {
    id: 'ls-04',
    topic: 'Lịch sử và văn hóa',
    question: 'Hạng mục Men\'s Physique trong các cuộc thi thể hình nam khác thể hình truyền thống ở điểm nào?',
    options: [
      'Chỉ thi nâng tạ lấy số ký',
      'Chỉ dành cho người trên 60 tuổi',
      'Không có phần chấm điểm',
      'Chú trọng dáng vóc cân đối, vai rộng eo thon hơn là khối cơ cực lớn',
    ],
    answer: 3,
    explanation:
      'Men\'s Physique đánh giá thân hình cân đối với vai rộng, eo thon và cơ bụng rõ nét, vận động viên mặc quần đùi dài thay vì quần bơi ngắn như thể hình truyền thống.',
  },
]
