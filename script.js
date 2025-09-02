// Quiz questions
const questions = [
  { question: "1. Bạn thích làm việc với con số và dữ liệu?", options: ["Rất thích", "Thỉnh thoảng", "Không thích lắm", "Hoàn toàn không"] },
  { question: "2. Bạn có khả năng thuyết phục người khác?", options: ["Rất tốt", "Khá tốt", "Bình thường", "Không giỏi lắm"] },
  { question: "3. Bạn thích giải quyết vấn đề phức tạp?", options: ["Rất thích", "Có hứng thú", "Không quan tâm lắm", "Không thích"] },
  { question: "4. Bạn có khả năng làm việc nhóm tốt?", options: ["Rất tốt", "Khá tốt", "Bình thường", "Không giỏi lắm"] },
  { question: "5. Bạn thích công việc sáng tạo, thiết kế?", options: ["Rất thích", "Thỉnh thoảng", "Không thích lắm", "Hoàn toàn không"] },
  { question: "6. Bạn có hứng thú với công nghệ mới?", options: ["Rất hứng thú", "Có chút hứng thú", "Không quan tâm lắm", "Không thích"] },
  { question: "7. Bạn thích làm việc với con người hơn hay máy móc?", options: ["Con người", "Cả hai", "Máy móc", "Không rõ"] },
  { question: "8. Bạn có khả năng chịu áp lực công việc cao?", options: ["Rất tốt", "Khá tốt", "Bình thường", "Không giỏi lắm"] },
  { question: "9. Bạn thích công việc ổn định hay thử thách?", options: ["Rất thích thử thách", "Thích cả hai", "Thích ổn định", "Không rõ"] },
  { question: "10. Bạn có hứng thú với kinh doanh?", options: ["Rất hứng thú", "Có chút hứng thú", "Không quan tâm lắm", "Không thích"] },
  { question: "11. Bạn giỏi phân tích hay sáng tạo hơn?", options: ["Phân tích", "Cả hai", "Sáng tạo", "Không rõ"] },
  { question: "12. Bạn thích làm việc độc lập hay theo nhóm?", options: ["Độc lập", "Cả hai", "Theo nhóm", "Không rõ"] },
  { question: "13. Bạn có hứng thú với các vấn đề xã hội?", options: ["Rất hứng thú", "Có chút hứng thú", "Không quan tâm lắm", "Không thích"] },
  { question: "14. Bạn thích công việc có nhiều di chuyển hay cố định?", options: ["Nhiều di chuyển", "Cả hai", "Cố định", "Không rõ"] },
  { question: "15. Bạn có khả năng lãnh đạo?", options: ["Rất tốt", "Khá tốt", "Bình thường", "Không giỏi lắm"] },
  { question: "16. Bạn thích công việc chi tiết hay tổng quan?", options: ["Chi tiết", "Cả hai", "Tổng quan", "Không rõ"] },
  { question: "17. Bạn có hứng thú với nghệ thuật?", options: ["Rất hứng thú", "Có chút hứng thú", "Không quan tâm lắm", "Không thích"] },
  { question: "18. Bạn thích môi trường làm việc năng động hay ổn định?", options: ["Rất năng động", "Cả hai", "Ổn định", "Không rõ"] },
  { question: "19. Bạn có khả năng giao tiếp tốt?", options: ["Rất tốt", "Khá tốt", "Bình thường", "Không giỏi lắm"] },
  { question: "20. Bạn quan tâm đến tiền lương hay ý nghĩa công việc hơn?", options: ["Tiền lương", "Cả hai", "Ý nghĩa công việc", "Không rõ"] }
];

// Career types and their descriptions
const careerTypes = {
  "Tư vấn chiến lược": {
    description: "Bạn có tư duy phân tích mạnh mẽ, khả năng giải quyết vấn đề phức tạp và hứng thú với các thử thách kinh doanh. Các vị trí trong lĩnh vực tư vấn chiến lược sẽ phù hợp với bạn.",
    traits: ["Phân tích", "Giải quyết vấn đề", "Tư duy chiến lược", "Làm việc nhóm"],
    jobs: ["Nhà tư vấn quản lý", "Chiến lược gia", "Nhà phân tích kinh doanh", "Quản lý dự án"]
  },
  "Kinh doanh/Marketing": {
    description: "Bạn có khả năng giao tiếp tốt, tinh thần cạnh tranh và hứng thú với thị trường. Các vị trí trong lĩnh vực kinh doanh và marketing sẽ phát huy thế mạnh của bạn.",
    traits: ["Giao tiếp", "Thuyết phục", "Sáng tạo", "Linh hoạt"],
    jobs: ["Quản lý kinh doanh", "Chuyên viên marketing", "Quan hệ công chúng", "Phát triển thị trường"]
  },
  "Công nghệ thông tin": {
    description: "Bạn có hứng thú với công nghệ, khả năng làm việc độc lập và tư duy logic. Các vị trí trong lĩnh vực công nghệ thông tin sẽ là lựa chọn lý tưởng.",
    traits: ["Kỹ thuật", "Logic", "Giải quyết vấn đề", "Tập trung"],
    jobs: ["Lập trình viên", "Kỹ sư phần mềm", "Nhà phân tích hệ thống", "Quản trị mạng"]
  },
  "Sáng tạo/Nghệ thuật": {
    description: "Bạn có óc sáng tạo phong phú, khả năng biểu đạt ý tưởng và hứng thú với nghệ thuật. Các ngành nghề sáng tạo sẽ giúp bạn tỏa sáng.",
    traits: ["Sáng tạo", "Trực giác", "Biểu đạt", "Độc lập"],
    jobs: ["Nhà thiết kế", "Nghệ sĩ", "Biên tập viên", "Đạo diễn"]
  },
  "Dịch vụ xã hội": {
    description: "Bạn có tinh thần nhân văn, khả năng thấu cảm và mong muốn giúp đỡ cộng đồng. Các công việc trong lĩnh vực dịch vụ xã hội sẽ mang lại ý nghĩa cho bạn.",
    traits: ["Đồng cảm", "Giao tiếp", "Kiên nhẫn", "Hợp tác"],
    jobs: ["Công tác xã hội", "Giáo dục", "Y tế", "Tư vấn tâm lý"]
  }
};

let currentQuestion = 0;
let answers = [];
let careerScores = {
  "Tư vấn chiến lược": 0,
  "Kinh doanh/Marketing": 0,
  "Công nghệ thông tin": 0,
  "Sáng tạo/Nghệ thuật": 0,
  "Dịch vụ xã hội": 0
};

// Show current question
function showQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const progressBar = document.getElementById('progress-bar');

  questionElement.textContent = questions[currentQuestion].question;
  optionsElement.innerHTML = '';

  // Update progress bar
  progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;

  // Show/hide previous button
  if (currentQuestion > 0) {
    document.getElementById('prev-btn').classList.remove('hidden');
  } else {
    document.getElementById('prev-btn').classList.add('hidden');
  }

  // Change next button text on last question
  if (currentQuestion === questions.length - 1) {
    document.getElementById('next-btn').innerHTML = 'Xem kết quả <i class="fas fa-poll ml-2"></i>';
  } else {
    document.getElementById('next-btn').innerHTML = 'Câu tiếp <i class="fas fa-arrow-right ml-2"></i>';
  }

  // Add options
  questions[currentQuestion].options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.classList.add(
      'flex', 'items-center', 'p-4', 'border', 'border-gray-200',
      'rounded-lg', 'cursor-pointer', 'hover:bg-blue-50', 'transition'
    );

    optionElement.innerHTML = `
      <div class="w-6 h-6 rounded-full border-2 border-blue-500 mr-3 flex items-center justify-center">
        <div class="w-4 h-4 rounded-full bg-blue-500 hidden"></div>
      </div>
      <span>${option}</span>
    `;

    // Select option
    optionElement.addEventListener('click', () => {
      document.querySelectorAll('#options > div').forEach(opt => {
        const inner = opt.querySelector('div > div');
        if (inner) inner.classList.add('hidden');
        opt.classList.remove('border-blue-500', 'bg-blue-50');
      });

      const innerThis = optionElement.querySelector('div > div');
      if (innerThis) innerThis.classList.remove('hidden');
      optionElement.classList.add('border-blue-500', 'bg-blue-50');

      answers[currentQuestion] = index;
    });

    // Preselect if already answered
    if (answers[currentQuestion] === index) {
      const innerThis = optionElement.querySelector('div > div');
      if (innerThis) innerThis.classList.remove('hidden');
      optionElement.classList.add('border-blue-500', 'bg-blue-50');
    }

    optionsElement.appendChild(optionElement);
  });
}

// Go to next question
function nextQuestion() {
  if (answers[currentQuestion] === undefined) {
    alert('Vui lòng chọn một đáp án trước khi tiếp tục!');
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    calculateResult();
  }
}

// Go to previous question
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

// Calculate career match
function calculateResult() {
  for (let career in careerScores) {
    careerScores[career] = 0;
  }

  // ======= Scoring Logic =======
  careerScores["Tư vấn chiến lược"] += (answers[0] === 0 ? 3 : answers[0] === 1 ? 2 : answers[0] === 2 ? 1 : 0);
  careerScores["Tư vấn chiến lược"] += (answers[1] === 0 ? 2 : answers[1] === 1 ? 1 : 0);
  careerScores["Tư vấn chiến lược"] += (answers[2] === 0 ? 3 : answers[2] === 1 ? 2 : 0);
  careerScores["Tư vấn chiến lược"] += (answers[3] === 0 ? 2 : answers[3] === 1 ? 1 : 0);

  careerScores["Kinh doanh/Marketing"] += (answers[4] === 0 ? 2 : answers[4] === 1 ? 1 : 0);
  careerScores["Kinh doanh/Marketing"] += (answers[5] === 0 ? 1 : answers[5] === 1 ? 1 : 0);
  careerScores["Kinh doanh/Marketing"] += (answers[6] === 0 ? 2 : answers[6] === 2 ? 0 : 1);
  careerScores["Kinh doanh/Marketing"] += (answers[7] === 0 ? 3 : answers[7] === 1 ? 2 : 0);

  careerScores["Công nghệ thông tin"] += (answers[8] === 2 ? 2 : answers[8] === 3 ? 3 : 0);
  careerScores["Công nghệ thông tin"] += (answers[9] === 0 ? 1 : answers[9] === 1 ? 1 : 0);
  careerScores["Công nghệ thông tin"] += (answers[10] === 0 ? 3 : answers[10] === 1 ? 2 : 0);
  careerScores["Công nghệ thông tin"] += (answers[11] === 0 ? 3 : answers[11] === 1 ? 2 : 0);

  careerScores["Sáng tạo/Nghệ thuật"] += (answers[12] === 0 ? 1 : answers[12] === 1 ? 1 : 0);
  careerScores["Sáng tạo/Nghệ thuật"] += (answers[13] === 0 ? 1 : answers[13] === 2 ? 0 : 1);
  careerScores["Sáng tạo/Nghệ thuật"] += (answers[14] === 0 ? 1 : answers[14] === 1 ? 1 : 0);
  careerScores["Sáng tạo/Nghệ thuật"] += (answers[15] === 2 ? 3 : answers[15] === 1 ? 2 : 0);

  careerScores["Dịch vụ xã hội"] += (answers[16] === 0 ? 3 : answers[16] === 1 ? 2 : 0);
  careerScores["Dịch vụ xã hội"] += (answers[17] === 2 ? 2 : answers[17] === 3 ? 3 : 0);
  careerScores["Dịch vụ xã hội"] += (answers[18] === 0 ? 3 : answers[18] === 1 ? 2 : 0);
  careerScores["Dịch vụ xã hội"] += (answers[19] === 2 ? 3 : answers[19] === 1 ? 2 : 0);

  let topCareer = "";
  let maxScore = -1;
  for (let career in careerScores) {
    if (careerScores[career] > maxScore) {
      maxScore = careerScores[career];
      topCareer = career;
    }
  }

  showResult(topCareer);
}

// Show result
function showResult(career) {
  document.querySelector('#quiz-section').classList.add('hidden');
  const resultSection = document.querySelector('#results-section');
  resultSection.classList.remove('hidden');

  const resultContent = document.getElementById('result-content');
  const careerInfo = careerTypes[career];

  resultContent.innerHTML = `
    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="gradient-bg p-6 text-blue-600">
        <h3 class="text-2xl font-bold">${career}</h3>
        <p class="mt-2">Thiên hướng nghề nghiệp phù hợp nhất với bạn</p>
      </div>
      <div class="p-6">
        <p class="text-gray-700 mb-6 text-lg">${careerInfo.description}</p>
        <div class="mb-6">
          <h4 class="font-bold text-gray-800 mb-3">Điểm mạnh phù hợp:</h4>
          <div class="flex flex-wrap gap-2">
            ${careerInfo.traits.map(trait => `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${trait}</span>`).join('')}
          </div>
        </div>
        <div>
          <h4 class="font-bold text-gray-800 mb-3">Gợi ý nghề nghiệp:</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${careerInfo.jobs.map(job => `
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <i class="fas fa-briefcase text-blue-500 mr-2"></i> <span>${job}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h4 class="text-xl font-bold text-gray-800 mb-4">Các lĩnh vực khác bạn có thể quan tâm:</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${Object.entries(careerTypes)
          .filter(([key]) => key !== career)
          .map(([key, value]) => `
            <div class="result-card bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md cursor-pointer" onclick="showResult('${key}')">
              <h5 class="font-bold text-gray-800">${key}</h5>
              <p class="text-gray-600 text-sm mt-1">${value.description.substring(0, 100)}...</p>
            </div>
          `).join('')}
      </div>
    </div>
  `;

  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  showQuestion();
});
