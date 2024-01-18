const questions = [
  {
    content: "Câu 1: Tại một buổi tiệc, bạn sẽ:",
    answers: [
      {
        answerId: "1",
        answerContent: "a. Giao tiếp với nhiều người, kể cả người lạ",
      },
      {
        answerId: "2",
        answerContent: "b. Chỉ giao tiếp với một số ít người mà bạn đã quen",
      },
    ],
  },
  {
    content: "Câu 2: Bạn thấy mình là người nghiêng về kiểu nào nhiều hơn?",
    answers: [
      { answerId: "3", answerContent: "a. Thực tế" },
      { answerId: "4", answerContent: "b. Sáng tạo" },
    ],
  },
  {
    content: "Câu 3: Bạn nghĩ tình huống nào tồi tệ hơn?",
    answers: [
      {
        answerId: "5",
        answerContent: "a. Đầu óc của bạn cứ 'bay bổng trên mây'",
      },
      {
        answerId: "6",
        answerContent:
          "b. Cuộc sống của bạn thật nhàm chán và không bao giờ thay đổi",
      },
    ],
  },
  {
    content: "Câu 4: Bạn sẽ bị ấn tượng hơn với",
    answers: [
      { answerId: "7", answerContent: "a. Các nguyên tắc" },
      { answerId: "8", answerContent: "b. Những cảm xúc" },
    ],
  },
  {
    content: "Câu 5: Khi quyết định việc gì đó, bạn thường hay dựa vào:",
    answers: [
      { answerId: "9", answerContent: "a. Sự thuyết phục" },
      { answerId: "10", answerContent: "b. Sự đồng cảm" },
    ],
  },
  {
    content: "Câu 6: Bạn thích làm việc theo kiểu nào nhiều hơn?",
    answers: [
      { answerId: "11", answerContent: "a. Theo đúng thời hạn" },
      { answerId: "12", answerContent: "b. Tùy hứng" },
    ],
  },
  {
    content: "Câu 7: Bạn có khuynh hướng đưa ra các lựa chọn",
    answers: [
      { answerId: "13", answerContent: "a. Rất cẩn thận" },
      { answerId: "14", answerContent: "b. Phần nào theo cảm nhận" },
    ],
  },
  {
    content: "Câu 8: Tại các bữa tiệc, bạn thường:",
    answers: [
      {
        answerId: "15",
        answerContent: "a. Ở lại tới cùng và cảm thấy càng lúc càng hào hứng",
      },
      { answerId: "16", answerContent: "b. Ra về sớm vì cảm thấy mệt mỏi dần" },
    ],
  },
  {
    content: "Câu 9: Kiểu người nào sẽ thu hút bạn hơn?",
    answers: [
      { answerId: "17", answerContent: "a. Người thực tế và có lý lẽ" },
      { answerId: "18", answerContent: "b. Người giàu trí tưởng tượng" },
    ],
  },
  {
    content: "Câu 10: Điều nào khiến bạn thấy thích thú hơn?",
    answers: [
      { answerId: "19", answerContent: "a. Những điều thực tế" },
      { answerId: "20", answerContent: "b. Những ý tưởng khả thi" },
    ],
  },
  {
    content:
      "Câu 11: Khi đánh giá hoặc phán xét người khác, bạn thường hay dựa vào điều gì?",
    answers: [
      { answerId: "21", answerContent: "a. Luật lệ và nguyên tắc" },
      { answerId: "22", answerContent: "b. Hoàn cảnh" },
    ],
  },
  {
    content:
      "Câu 12: Khi tiếp cận, tiếp xúc người khác, bạn nghiêng về hướng nào hơn?",
    answers: [
      { answerId: "23", answerContent: "a. Tiếp cận theo hướng khách quan" },
      {
        answerId: "24",
        answerContent: "b. Tiếp cận theo hướng sử dụng trải nghiệm cá nhân",
      },
    ],
  },
  {
    content: "Câu 13: Phong cách của bạn nghiêng về hướng nào hơn?",
    answers: [
      { answerId: "25", answerContent: "a. Đúng giờ, nghiêm túc" },
      { answerId: "26", answerContent: "b. Nhàn nhã, thoải mái" },
    ],
  },
  {
    content: "Câu 14: Bạn cảm thấy không thoải mái khi có những việc:",
    answers: [
      { answerId: "27", answerContent: "a. Chưa hoàn thiện" },
      { answerId: "28", answerContent: "b. Đã quá hoàn thiện" },
    ],
  },
  {
    content: "Câu 15: Trong các mối quan hệ xã hội, bạn thường",
    answers: [
      {
        answerId: "29",
        answerContent:
          "a. Luôn nắm bắt kịp thời thông tin về các vấn đề của mọi người",
      },
      {
        answerId: "30",
        answerContent: "b. Thường biết thông tin sau những người khác",
      },
    ],
  },
  {
    content: "Câu 16: Với các công việc thông thường, bạn nghiêng về cách:",
    answers: [
      { answerId: "31", answerContent: "a. Làm theo cách thông thường" },
      { answerId: "32", answerContent: "b. Làm theo cách của riêng mình" },
    ],
  },
  {
    content: "Câu 17: Các nhà văn nên:",
    answers: [
      {
        answerId: "33",
        answerContent:
          "a. Viết những gì họ nghĩ và chân thật với những gì mình viết",
      },
      {
        answerId: "34",
        answerContent: "b. Diễn đạt sự việc bằng cách so sánh hay liên tưởng",
      },
    ],
  },
  {
    content: "Câu 18: Điều gì lôi cuốn bạn hơn?",
    answers: [
      {
        answerId: "35",
        answerContent: "a. Tính nhất quán của tư duy, suy nghĩ",
      },
      {
        answerId: "36",
        answerContent: "b. Sự hòa hợp trong các mối quan hệ của con người",
      },
    ],
  },
  {
    content: "Câu 19: Bạn cảm thấy thoải mái hơn khi đưa ra:",
    answers: [
      {
        answerId: "37",
        answerContent: "a. Những đánh giá, nhận xét một cách logic",
      },
      {
        answerId: "38",
        answerContent: "b. Những đánh giá, nhận xét một cách có ý nghĩa",
      },
    ],
  },
  {
    content: "Câu 20: Bạn thích những điều:",
    answers: [
      { answerId: "39", answerContent: "a. Đã được sắp xếp, quyết định trước" },
      {
        answerId: "40",
        answerContent: "b. Chưa xác định, chưa được quyết định",
      },
    ],
  },
  {
    content: "Câu 21: Bạn tự thấy mình:",
    answers: [
      { answerId: "41", answerContent: "a. Nghiêm túc, quyết đoán" },
      { answerId: "42", answerContent: "b. Dễ gần, thoải mái" },
    ],
  },
  {
    content: "Câu 22: Khi nói chuyện điện thoại, bạn:",
    answers: [
      { answerId: "43", answerContent: "a. Cứ gọi bình thường" },
      { answerId: "44", answerContent: "b. Chuẩn bị trước những điều sẽ nói" },
    ],
  },
  {
    content: "Câu 23: Những sự kiện trong thực tế",
    answers: [
      {
        answerId: "45",
        answerContent: "a. Bản thân nó giải thích cho chính nó",
      },
      {
        answerId: "46",
        answerContent:
          "b. Nó là bằng chứng giải thích cho các quy tắc, quy luật",
      },
    ],
  },
  {
    content: "Câu 24: Những người có tầm nhìn xa/người lo xa.",
    answers: [
      {
        answerId: "47",
        answerContent: "a. Thường gây khó chịu cho người khác",
      },
      { answerId: "48", answerContent: "b. Khá thú vị" },
    ],
  },
  {
    content: "Câu 25: Bạn thường là người",
    answers: [
      { answerId: "49", answerContent: "a. Cái đầu lạnh" },
      { answerId: "50", answerContent: "b. Trái tim nóng" },
    ],
  },
  {
    content: "Câu 26: Điều nào thì tồi tệ hơn?",
    answers: [
      { answerId: "51", answerContent: "a. Không công bằng" },
      { answerId: "52", answerContent: "b. Tàn nhẫn" },
    ],
  },
  {
    content: "Câu 27: Các sự kiện nên xảy ra theo hướng:",
    answers: [
      {
        answerId: "53",
        answerContent: "a. Được lựa chọn và cân nhắc kỹ lưỡng",
      },
      { answerId: "54", answerContent: "b. Ngẫu nhiên và tự nhiên" },
    ],
  },
  {
    content: "Câu 28: Bạn cảm thấy thoải mái hơn khi",
    answers: [
      { answerId: "55", answerContent: "a. Đã mua một thứ gì đó" },
      { answerId: "56", answerContent: "b. Đang lựa chọn để mua" },
    ],
  },
  {
    content: "Câu 29: Trong công ty, bạn là người:",
    answers: [
      { answerId: "57", answerContent: "a. Khởi xướng các câu chuyện" },
      {
        answerId: "58",
        answerContent: "b. Đợi người khác bắt chuyện với mình",
      },
    ],
  },
  {
    content:
      "Câu 30: Đối với những quy ước, quy tắc thông thường trong xã hội, bạn:",
    answers: [
      { answerId: "59", answerContent: "a. Ít khi nghi ngờ những điều này" },
      {
        answerId: "60",
        answerContent: "b. Thường xem xét lại tính đúng đắn của những điều đó",
      },
    ],
  },
  {
    content: "Câu 31: Trẻ em thường:",
    answers: [
      { answerId: "61", answerContent: "a. Chưa cố gắng đủ" },
      { answerId: "62", answerContent: "b. Chưa vui chơi đủ" },
    ],
  },
  {
    content: "Câu 32: Khi đưa ra các quyết định, bạn sẽ thấy thoải mái hơn với",
    answers: [
      { answerId: "63", answerContent: "a. Các tiêu chuẩn" },
      { answerId: "64", answerContent: "b. Cảm xúc, cảm nhận" },
    ],
  },
  {
    content: "Câu 33: Bạn nghiêng về tính cách nào hơn?",
    answers: [
      { answerId: "65", answerContent: "a. Cứng rắn" },
      { answerId: "66", answerContent: "b. Nhẹ nhàng" },
    ],
  },
  {
    content: "Câu 34: Theo bạn, khả năng nào đáng khâm phục hơn?",
    answers: [
      {
        answerId: "67",
        answerContent: "a. Khả năng tổ chức và làm việc có phương pháp",
      },
      {
        answerId: "68",
        answerContent: "b. Khả năng thích ứng và xoay xở trước mọi tình huống",
      },
    ],
  },
  {
    content: "Câu 35: Bạn đề cao tố chất nào hơn?",
    answers: [
      { answerId: "69", answerContent: "a. Sự chắc chắn" },
      { answerId: "70", answerContent: "b. Sự cởi mở" },
    ],
  },
  {
    content:
      "Câu 36: Khi phải tương tác với người khác ở các tình huống và vấn đề mới lạ, không thường gặp, bạn thường:",
    answers: [
      { answerId: "71", answerContent: "a. Thấy phấn chấn và hào hứng" },
      { answerId: "72", answerContent: "b. Cảm thấy mệt mỏi" },
    ],
  },
  {
    content: "Câu 37: Thường thì bạn là:",
    answers: [
      { answerId: "73", answerContent: "a. Người thực tế" },
      {
        answerId: "74",
        answerContent: "b. Người có khả năng tưởng tượng phong phú",
      },
    ],
  },
  {
    content: "Câu 38: Bạn thường có xu hướng:",
    answers: [
      {
        answerId: "75",
        answerContent: "a. Xem người khác có thể làm được việc gì hữu ích",
      },
      {
        answerId: "76",
        answerContent: "b. Xem người khác sẽ nghĩ và cảm nhận như thế nào",
      },
    ],
  },
  {
    content: "Câu 39: Bạn cảm thấy thoải mái hơn khi:",
    answers: [
      {
        answerId: "77",
        answerContent: "a. Thảo luận một vấn đề kĩ lưỡng, triệt để",
      },
      {
        answerId: "78",
        answerContent: "b. Đạt được thỏa thuận, sự nhất trí về vấn đề",
      },
    ],
  },
  {
    content: "Câu 40: Cái đầu hay trái tim chi phối bạn nhiều hơn",
    answers: [
      { answerId: "79", answerContent: "a. Cái đầu" },
      { answerId: "80", answerContent: "b. Trái tim" },
    ],
  },
  {
    content:
      "Câu 41: Bạn cảm thấy thoải mái hơn khi làm các công việc theo dạng",
    answers: [
      {
        answerId: "81",
        answerContent: "a. Được giao trọn gói, làm xong hết rồi bàn giao",
      },
      {
        answerId: "82",
        answerContent: "b. Công việc làm hàng ngày, theo lịch",
      },
    ],
  },
  {
    content: "Câu 42: Bạn có xu hướng tìm kiếm những điều",
    answers: [
      { answerId: "83", answerContent: "a. Theo trật tự, thứ tự" },
      { answerId: "84", answerContent: "b. Ngẫu nhiên" },
    ],
  },
  {
    content: "Câu 43: Bạn thích kiểu nào hơn?",
    answers: [
      { answerId: "85", answerContent: "a. Nhiều bạn bè ở mức độ xã giao" },
      { answerId: "86", answerContent: "b. Một vài người bạn thân" },
    ],
  },
  {
    content: "Câu 44: Bạn thường dựa vào:",
    answers: [
      { answerId: "87", answerContent: "a. Sự kiện, thông tin thực tế" },
      { answerId: "88", answerContent: "b. Nguyên lý, nguyên tắc" },
    ],
  },
  {
    content: "Câu 45: Bạn hứng thú với việc gì hơn?",
    answers: [
      { answerId: "89", answerContent: "a. Sản xuất và phân phối" },
      { answerId: "90", answerContent: "b. Thiết kế và nghiên cứu" },
    ],
  },
  {
    content: "Câu 46: Lời khen nào giá trị hơn?",
    answers: [
      {
        answerId: "91",
        answerContent: "a. “Đó là một người có suy nghĩ rất logic”",
      },
      {
        answerId: "92",
        answerContent: "b. “Đó là một người rất tình cảm, tinh tế”",
      },
    ],
  },
  {
    content: "Câu 47: Bạn thích mình có tố chất nào hơn?",
    answers: [
      { answerId: "93", answerContent: "a. Kiên định, vững vàng" },
      { answerId: "94", answerContent: "b. Toàn tâm, cống hiến" },
    ],
  },
  {
    content: "Câu 48: Bạn thường thích điều nào hơn?",
    answers: [
      {
        answerId: "95",
        answerContent: "a. Một tuyên bố cuối cùng, không thay đổi",
      },
      { answerId: "96", answerContent: "b. Một tuyên bố dự kiến, ban đầu" },
    ],
  },
  {
    content: "Câu 49: Bạn thấy thoải mái hơn vào lúc:",
    answers: [
      { answerId: "97", answerContent: "a. Trước khi đưa ra quyết định" },
      { answerId: "98", answerContent: "b. Sau khi đưa ra quyết định" },
    ],
  },
  {
    content: "Câu 50: Bạn có thấy mình:",
    answers: [
      {
        answerId: "99",
        answerContent:
          "a. Dễ dàng bắt chuyện và kéo dài cuộc trò chuyện với người mới gặp",
      },
      {
        answerId: "100",
        answerContent: "b. Khó mà trò chuyện nhiều với những người mới quen",
      },
    ],
  },
  {
    content: "Câu 51: Bạn có xu hướng tin tưởng vào:",
    answers: [
      { answerId: "101", answerContent: "a. Kinh nghiệm của mình" },
      { answerId: "102", answerContent: "b. Linh cảm của mình" },
    ],
  },
  {
    content: "Câu 52: Bạn cho rằng mình thuộc tuýp người nào hơn?",
    answers: [
      { answerId: "103", answerContent: "a. Người thực tế" },
      { answerId: "104", answerContent: "b. Người khôn khéo" },
    ],
  },
  {
    content: "Câu 53: Theo bạn ai là người đáng được khen ngợi hơn?",
    answers: [
      { answerId: "105", answerContent: "a. Một người giàu lý trí" },
      { answerId: "106", answerContent: "b. Một người giàu cảm xúc" },
    ],
  },
  {
    content: "Câu 54: Bạn có xu hướng hành xử:",
    answers: [
      { answerId: "107", answerContent: "a. Công bằng, vô tư" },
      { answerId: "108", answerContent: "b. Thông cảm, đồng cảm" },
    ],
  },

  {
    content: "Câu 55: Bạn thích:",
    answers: [
      {
        answerId: "109",
        answerContent:
          "a. Đảm bảo rằng mọi việc được chuẩn bị, thu xếp sẵn sàng",
      },
      { answerId: "110", answerContent: "b. Để mọi việc diễn ra tự nhiên" },
    ],
  },
  {
    content: "Câu 56: Trong các mối quan hệ thì mọi việc:",
    answers: [
      {
        answerId: "111",
        answerContent: "a. Có thể thảo luận để giải quyết được",
      },
      {
        answerId: "112",
        answerContent: "b. Diễn ra ngẫu nhiên và tùy theo điều kiện hoàn cảnh",
      },
    ],
  },
  {
    content: "Câu 57: Khi chuông điện thoại reo, bạn sẽ:",
    answers: [
      { answerId: "113", answerContent: "a. Là người đầu tiên nhấc máy" },
      {
        answerId: "114",
        answerContent: "b. Hi vọng có người khác sẽ nhấc máy",
      },
    ],
  },
  {
    content: "Câu 58: Bạn đánh giá cao điều gì trong mình hơn:",
    answers: [
      {
        answerId: "115",
        answerContent: "a. Nhận thức tốt về các yếu tố thực tế",
      },
      {
        answerId: "116",
        answerContent: "b. Có trí tưởng tượng phong phú, rực rỡ",
      },
    ],
  },
  {
    content: "Câu 59: Bạn sẽ chú tâm hơn đến:",
    answers: [
      { answerId: "117", answerContent: "a. Các nguyên tắc, nguyên lý cơ bản" },
      { answerId: "118", answerContent: "b. Các ngụ ý, hàm ý, ẩn ý" },
    ],
  },
  {
    content: "Câu 60: Điều gì có vẻ sẽ là một lỗi lớn hơn?",
    answers: [
      { answerId: "119", answerContent: "a. Quá nồng nhiệt, thiết tha" },
      { answerId: "120", answerContent: "b. Quá khách quan, thờ ơ" },
    ],
  },
  {
    content: "Câu 61: Về cơ bản, bạn sẽ đánh giá mình là người thế nào?",
    answers: [
      {
        answerId: "121",
        answerContent: "a. Thiết thực, ít bị chi phối bởi tình cảm",
      },
      { answerId: "122", answerContent: "b. Từ tâm, đa cảm" },
    ],
  },
  {
    content: "Câu 62: Tình huống nào sẽ lôi cuốn bạn hơn?",
    answers: [
      { answerId: "123", answerContent: "a. Tình huống rõ ràng, có kế hoạch" },
      {
        answerId: "124",
        answerContent: "b. Tình huống không xác định, không có kế hoạch",
      },
    ],
  },
  {
    content: "Câu 63: Bạn là người có xu hướng nào hơn?",
    answers: [
      { answerId: "125", answerContent: "a. Theo thói quen" },
      { answerId: "126", answerContent: "b. Hay thay đổi" },
    ],
  },
  {
    content: "Câu 64: Bạn có xu hướng nào hơn?",
    answers: [
      { answerId: "127", answerContent: "a. Là người dễ tiếp cận" },
      { answerId: "128", answerContent: "b. Ở mức độ nào đó là người kín đáo" },
    ],
  },
  {
    content: "Câu 65: Khi viết, bạn thích:",
    answers: [
      { answerId: "129", answerContent: "a. Viết theo hướng văn chương hơn" },
      { answerId: "130", answerContent: "b. Viết theo số liệu, dữ liệu hơn" },
    ],
  },
  {
    content: "Câu 66: Đối với bạn, điều gì khó thực hiện hơn?",
    answers: [
      { answerId: "131", answerContent: "a. Hiểu và chia sẻ với người khác" },
      { answerId: "132", answerContent: "b. Điều khiển người khác" },
    ],
  },
  {
    content: "Câu 67: Bạn mong ước mình sẽ có thêm nhiều điều gì?",
    answers: [
      {
        answerId: "133",
        answerContent: "a. Lí trí và khả năng nhận xét rõ ràng",
      },
      {
        answerId: "134",
        answerContent: "b. Tình thương, lòng trắc ẩn sâu sắc",
      },
    ],
  },
  {
    content: "Câu 68: Điều gì sẽ là lỗi lớn hơn?",
    answers: [
      {
        answerId: "135",
        answerContent: "a. Hành động bừa bãi, không cân nhắc",
      },
      { answerId: "136", answerContent: "b. Hành động chỉ trích, phê phán" },
    ],
  },
  {
    content: "Câu 69: Bạn sẽ thích sự kiện nào hơn?",
    answers: [
      { answerId: "137", answerContent: "a. Sự kiện có lên kế hoạch trước" },
      { answerId: "138", answerContent: "b. Sự kiện không có kế hoạch trước" },
    ],
  },
  {
    content: "Câu 70: Bạn thường có hành động:",
    answers: [
      { answerId: "139", answerContent: "a. Cân nhắc thận trọng" },
      { answerId: "140", answerContent: "b. Tự nhiên, tự phát" },
    ],
  },
];
module.exports = { questions };
