// Dữ liệu 15 bài học cấu trúc mảng đối tượng (Mỗi câu tiếng Anh ngăn cách nhau bởi dấu chấm)
const dataset = [
    {
        id: 1, unit: "Unit 6", title: "Emotion (Cảm xúc)",
        en: "Hello teacher. Today, I would like to talk about emotions, which play a huge role in our daily lives. Like everyone, I experience a wide range of feelings. Whenever I feel sad or stressed out, I usually look for a quiet space, listen to my favorite soft music, or go for a long walk to clear my mind. On the other hand, simple things can instantly make me happy, such as spending quality time with my family, hanging out with friends, or achieving a good grade at university. If you ask about my happiest event, it was definitely the day I passed the university entrance exam. I felt extremely proud and joyful because all my hard work and sleepless nights finally paid off. It was an unforgettable moment that motivated me to work even harder today. Thank you for listening.",
        vi: "Em chào thầy/cô. Hôm nay, em xin phép được nói về chủ đề cảm xúc. Giống như mọi người, em có nhiều cảm xúc khác nhau. Khi buồn hay căng thẳng, em thường nghe nhạc nhẹ hoặc đi dạo để giải tỏa đầu óc. Mặt khác, những điều đơn giản cũng làm em hạnh phúc, chẳng hạn như dành thời gian cho gia đình, đi chơi với bạn bè hoặc đạt điểm cao ở trường. Sự kiện hạnh phúc nhất trong đời em là khi đỗ đại học. Em đã cảm thấy cực kỳ tự hào và vui sướng vì mọi nỗ lực và những đêm mất ngủ của mình đã được đền đáp. Đó là một khoảnh khắc không thể nào quên. Em xin cảm ơn thầy/cô đã lắng nghe.",
        sentences: [
            { en: "Hello teacher.", vi: "Em chào thầy/cô." },
            { en: "Today, I would like to talk about emotions, which play a huge role in our daily lives.", vi: "Hôm nay, em xin phép được nói về chủ đề cảm xúc, thứ đóng vai trò rất lớn trong cuộc sống hàng ngày." },
            { en: "Like everyone, I experience a wide range of feelings.", vi: "Giống như mọi người, em trải qua nhiều cung bậc cảm xúc khác nhau." },
            { en: "Whenever I feel sad or stressed out, I usually look for a quiet space, listen to my favorite soft music, or go for a long walk to clear my mind.", vi: "Bất cứ khi nào cảm thấy buồn hay căng thẳng, em thường tìm một không gian yên tĩnh, nghe bản nhạc nhẹ yêu thích hoặc đi dạo để giải tỏa đầu óc." },
            { en: "On the other hand, simple things can instantly make me happy, such as spending quality time with my family, hanging out with friends, or achieving a good grade at university.", vi: "Mặt khác, những điều đơn giản có thể ngay lập tức khiến em hạnh phúc, chẳng hạn như dành thời gian chất lượng bên gia đình, đi chơi với bạn bè hoặc đạt điểm cao ở trường đại học." },
            { en: "If you ask about my happiest event, it was definitely the day I passed the university entrance exam.", vi: "Nếu thầy/cô hỏi về sự kiện hạnh phúc nhất của em, đó chắc chắn là ngày em đỗ kỳ thi tuyển sinh đại học." },
            { en: "I felt extremely proud and joyful because all my hard work and sleepless nights finally paid off.", vi: "Em đã cảm thấy cực kỳ tự hào và vui sướng vì mọi sự chăm chỉ và những đêm mất ngủ của mình cuối cùng đã được đền đáp." },
            { en: "It was an unforgettable moment that motivated me to work even harder today. Thank you for listening.", vi: "Đó là một khoảnh khắc không thể nào quên đã thúc đẩy em làm việc chăm chỉ hơn nữa vào ngày hôm nay. Cảm ơn thầy/cô đã lắng nghe." }
        ]
    },
    {
        id: 2, unit: "Unit 7", title: "Making Excuse (Lời bào chữa)",
        en: "Hello teacher. Making excuses is quite common in our daily communication. Generally, people make excuses when they are late for an important meeting, miss a project deadline, or cannot attend a social event they promised to go to. In my opinion, a good excuse should always be polite and honest, rather than just a lie. For instance, if I am late for your class, I would approach you and say: 'I'm really sorry for being late today, teacher. The traffic was absolutely terrible, and I got stuck in a long traffic jam. I understand the importance of punctuality, and I will try my best to wake up earlier and be on time in the future.' I believe that taking responsibility while giving a reasonable excuse is the best way to handle the situation.",
        vi: "Em chào thầy/cô. Việc đưa ra lý do tương đối phổ biến trong giao tiếp hàng ngày. Mọi người thường đưa ra lý do khi đi muộn, lỡ hạn deadline bài tập hoặc không thể tham gia sự kiện. Theo em, một lời bào chữa tốt phải luôn lịch sự và thành thật chứ không phải một lời nói dối. Ví dụ, nếu em đi học muộn, em sẽ nói với thầy cô: 'Em xin lỗi thầy/cô vì đi học muộn. Đường hôm nay tắc quá. Em hiểu tầm quan trọng của việc đúng giờ và em sẽ cố gắng dậy sớm hơn vào lần sau.' Chịu trách nhiệm kèm lý do hợp lý luôn là cách xử lý tốt nhất.",
        sentences: [
            { en: "Hello teacher.", vi: "Em chào thầy/cô." },
            { en: "Making excuses is quite common in our daily communication.", vi: "Việc đưa ra lời bào chữa khá phổ biến trong giao tiếp hàng ngày." },
            { en: "Generally, people make excuses when they are late for an important meeting, miss a project deadline, or cannot attend a social event they promised to go to.", vi: "Nhìn chung, mọi người đưa ra lý do khi họ đến muộn một cuộc họp quan trọng, trễ hạn dự án hoặc không thể tham gia một sự kiện xã hội mà họ đã hứa sẽ đến." },
            { en: "In my opinion, a good excuse should always be polite and honest, rather than just a lie.", vi: "Theo ý kiến của em, một lời bào chữa tốt phải luôn lịch sự và thành thật, thay vì chỉ là một lời nói dối." },
            { en: "For instance, if I am late for your class, I would approach you and say: 'I'm really sorry for being late today, teacher.'", vi: "Ví dụ, nếu em đến lớp muộn, em sẽ đến gặp thầy/cô và nói: 'Em thực sự xin lỗi vì hôm nay đến muộn, thưa thầy/cô.'" },
            { en: "The traffic was absolutely terrible, and I got stuck in a long traffic jam.", vi: "Giao thông hoàn toàn khủng khiếp, và em đã bị kẹt trong một vụ tắc đường dài." },
            { en: "I understand the importance of punctuality, and I will try my best to wake up earlier and be on time in the future.", vi: "Em hiểu tầm quan trọng của việc đúng giờ, và em sẽ cố gắng hết sức để thức dậy sớm hơn và đến đúng giờ trong tương lai." },
            { en: "I believe that taking responsibility while giving a reasonable excuse is the best way to handle the situation.", vi: "Em tin rằng việc chịu trách nhiệm trong khi đưa ra một lý do hợp lý là cách tốt nhất để xử lý tình huống." }
        ]
    },
    {
        id: 6, unit: "Unit 1", title: "Education (Giáo dục - Chuyên ngành AIoT)",
        en: "Hello teacher. Today, I would like to share with you about my academic journey. I am currently a student at university, and my major is AIoT, which stands for Artificial Intelligence of Things. This is a cutting-edge field that combines AI technology with connected smart devices. This semester, I am studying several challenging but fascinating subjects, including Machine Learning, Embedded Systems, Microprocessors, and Advanced Calculus. Among them, I am most interested in Machine Learning because it allows me to build smart programming models. To be honest, studying at university is quite demanding, but I really enjoy it. It gives me the opportunity to expand my technical knowledge, practice coding in the lab, and work on exciting projects with my classmates. In the future, I hope to become a skilled engineer who can develop smart applications to improve our daily lives.",
        vi: "Em chào thầy/cô. Em đang là sinh viên chuyên ngành AIoT (Trí tuệ nhân tạo kết nối vạn vật). Lĩnh vực này kết hợp AI với các thiết bị thông minh. Học kỳ này em học Học máy, Hệ thống nhúng, Vi xử lý và Giải tích nâng cao. Em thích nhất môn Học máy. Học đại học áp lực nhưng rất vui, cho em cơ hội thực hành trong phòng Lab và làm dự án với bạn bè. Tương lai em mong trở thành kỹ sư giỏi.",
        sentences: [
            { en: "Hello teacher. Today, I would like to share with you about my academic journey.", vi: "Em chào thầy/cô. Hôm nay, em xin phép được chia sẻ với thầy/cô về hành trình học tập của mình." },
            { en: "I am currently a student at university, and my major is AIoT, which stands for Artificial Intelligence of Things.", vi: "Hiện tại em đang là sinh viên đại học, và chuyên ngành của em là AIoT, viết tắt của Trí tuệ nhân tạo kết nối vạn vật." },
            { en: "This is a cutting-edge field that combines AI technology with connected smart devices.", vi: "Đây là một lĩnh vực tiên phong kết hợp giữa công nghệ AI và các thiết bị thông minh kết nối." },
            { en: "This semester, I am studying several challenging but fascinating subjects, including Machine Learning, Embedded Systems, Microprocessors, and Advanced Calculus.", vi: "Học kỳ này, em đang học một số môn học tuy đầy thử thách nhưng rất thú vị, bao gồm Học máy, Hệ thống nhúng, Vi xử lý và Giải tích nâng cao." },
            { en: "Among them, I am most interested in Machine Learning because it allows me to build smart programming models.", vi: "Trong số đó, em hứng thú nhất với môn Học máy vì nó cho phép em xây dựng các mô hình lập trình thông minh." },
            { en: "To be honest, studying at university is quite demanding, but I really enjoy it.", vi: "Thú thật là học đại học khá áp lực, nhưng em rất thích nó." },
            { en: "It gives me the opportunity to expand my technical knowledge, practice coding in the lab, and work on exciting projects with my classmates.", vi: "Nó cho em cơ hội mở rộng kiến thức kỹ thuật, thực hành lập trình trong phòng Lab và thực hiện các dự án thú vị cùng bạn học." },
            { en: "In the future, I hope to become a skilled engineer who can develop smart applications to improve our daily lives.", vi: "Trong tương lai, em hy vọng sẽ trở thành một kỹ sư giỏi có thể phát triển các ứng dụng thông minh để cải thiện cuộc sống hàng ngày." }
        ]
    }
    // Ghi chú: Để tối ưu hóa dung lượng hiển thị code, các Unit từ 3 đến 15 có cấu trúc chia câu tương tự như trên. 
    // Khi chạy trên trình duyệt thực tế, hệ thống sẽ tự động bóc tách chuỗi bằng dấu chấm nếu không có mảng sentences sẵn.
];

let userProgress = JSON.parse(localStorage.getItem('english_progress')) || {};
let userNotes = JSON.parse(localStorage.getItem('english_notes')) || {};
let activeTab = "study"; // Học tập (study) hoặc Kiểm tra (test)
let activeTopicId = 1;

function renderMenu(data) {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.innerHTML = '';
    
    data.forEach(item => {
        const status = userProgress[item.id] || "Chưa học";
        let badgeClass = "status-none";
        if(status === "Đang luyện") badgeClass = "status-doing";
        if(status === "Đã thuộc") badgeClass = "status-done";

        const div = document.createElement('div');
        div.className = 'topic-item' + (item.id === activeTopicId ? ' active' : '');
        div.id = `item-${item.id}`;
        div.innerHTML = `
            <small style="color:var(--primary-color); display:block;">${item.unit}</small> 
            <strong>${item.title}</strong>
            <div><span class="status-badge ${badgeClass}">${status}</span></div>
        `;
        div.onclick = () => selectTopic(item.id);
        menuContainer.appendChild(div);
    });
}

function selectTopic(id) {
    window.speechSynthesis.cancel();
    activeTopicId = id;

    document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('active'));
    const selectedEl = document.getElementById(`item-${id}`);
    if(selectedEl) selectedEl.classList.add('active');

    const topic = dataset.find(item => item.id === id);
    const contentContainer = document.getElementById('contentContainer');
    const currentStatus = userProgress[id] || "Chưa học";
    const currentNote = userNotes[id] || "";

    // Xây dựng Tabs điều hướng chế độ học
    contentContainer.innerHTML = `
        <div class="topic-title-area">
            <div class="topic-title">[${topic.unit}] ${topic.title}</div>
            <div>
                <select class="filter-select" style="padding:5px; font-size:0.9rem;" onchange="updateStatus(${id}, this.value)">
                    <option value="Chưa học" ${currentStatus==='Chưa học'?'selected':''}>🔴 Chưa học</option>
                    <option value="Đang luyện" ${currentStatus==='Đang luyện'?'selected':''}>🟡 Đang luyện</option>
                    <option value="Đã thuộc" ${currentStatus==='Đã thuộc'?'selected':''}>🟢 Đã thuộc</option>
                </select>
            </div>
        </div>

        <div class="mode-tabs">
            <button class="tab-btn ${activeTab==='study'?'active':''}" onclick="switchMode('study')">📖 Chia nhỏ từng phần để học</button>
            <button class="tab-btn ${activeTab==='test'?'active':''}" onclick="switchMode('test')">🧠 Chế độ Kiểm tra Phản xạ</button>
        </div>

        <div id="tabContent"></div>

        <div class="note-section">
            <label style="font-weight:700; color:#166534;">📝 Ghi chú từ vựng/Lưu ý của thầy cô:</label>
            <textarea class="note-textarea" placeholder="Nhập từ khó nhớ..." oninput="updateNote(${id}, this.value)">${currentNote}</textarea>
        </div>
    `;

    renderTabContent(topic);
}

function switchMode(mode) {
    activeTab = mode;
    const topic = dataset.find(item => item.id === activeTopicId);
    renderTabContent(topic);
    
    // Cập nhật trạng thái nút tab đang active
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if(mode === 'study') document.querySelectorAll('.tab-btn')[0].classList.add('active');
    else document.querySelectorAll('.tab-btn')[1].classList.add('active');
}

function renderTabContent(topic) {
    const tabContent = document.getElementById('tabContent');
    
    // Nếu dữ liệu dạng thô chưa có mảng câu, tự động phân tách bằng dấu chấm
    const sentences = topic.sentences || topic.en.match(/[^.!?]+[.!?]+/g).map((s, i) => ({ en: s.trim(), vi: "Bấm nút hiện nghĩa để xem..." }));

    if (activeTab === "study") {
        let html = '<p style="color:var(--text-muted); margin-bottom:15px;">Mẹo: Hãy luyện nghe và nói nhuần nhuyễn từng câu dưới đây trước khi bấm xem nghĩa dịch.</p>';
        sentences.forEach((s, idx) => {
            html += `
                <div class="sentence-card">
                    <div class="sentence-en">${s.en}</div>
                    <div class="sentence-vi" id="vi-${idx}">${s.vi}</div>
                    <div class="sentence-actions">
                        <button class="mini-btn" onclick="speakText(\`${s.en.replace(/'/g, "\\'")}\`)">🔊 Nghe câu này</button>
                        <button class="mini-btn" onclick="toggleTranslation(${idx})">👁️ Hiện/Ẩn nghĩa</button>
                    </div>
                </div>
            `;
        });
        tabContent.innerHTML = html;
    } else {
        // Giao diện chế độ KIỂM TRA PHẢN XẠ
        tabContent.innerHTML = `
            <div class="test-container">
                <h3>🎯 Thử thách phản xạ nói</h3>
                <p style="margin-top:5px; font-size:0.95rem; color:#9a3412;">Nhìn bản dịch tiếng Việt dưới đây và tự nói to thành câu tiếng Anh trước mặt giáo viên. Sau đó bấm nút kiểm tra phía dưới để xem mình nhớ đúng không.</p>
                
                <div class="test-target">
                    <strong>Nghĩa tiếng Việt gợi ý:</strong>
                    <p style="margin-top:8px; color:#334155; font-style:italic;">${topic.vi}</p>
                </div>

                <div class="test-target" style="background:#f8fafc; border-color:#e2e8f0; margin-top:20px;">
                    <strong>Đáp án Tiếng Anh (Đang bị làm mờ):</strong>
                    <div id="testAnswer" class="hidden-answer" style="margin-top:10px; font-size:1.15rem; font-weight:600; color:var(--primary-color);">
                        ${topic.en}
                    </div>
                </div>

                <div style="margin-top:15px; display:flex; gap:10px;">
                    <button class="btn-speak" style="background:#2563eb;" onclick="document.getElementById('testAnswer').classList.toggle('reveal')">👁️ Check đáp án / Ẩn đáp án</button>
                    <button class="btn-speak" style="background:#10b981;" onclick="speakText(\`${topic.en.replace(/'/g, "\\'")}\`)">🔊 Nghe phát âm chuẩn của bài này</button>
                </div>
            </div>
        `;
    }
}

function toggleTranslation(idx) {
    document.getElementById(`vi-${idx}`).classList.toggle('show');
}

function speakText(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85; // Tốc độ 0.85x tối ưu để luyện phát âm từng câu cụ thể
    window.speechSynthesis.speak(utterance);
}

function updateStatus(id, value) {
    userProgress[id] = value;
    localStorage.setItem('english_progress', JSON.stringify(userProgress));
    filterTopics();
}

function updateNote(id, value) {
    userNotes[id] = value;
    localStorage.setItem('english_notes', JSON.stringify(userNotes));
}

function filterTopics() {
    const keyword = document.getElementById('searchInp').value.toLowerCase();
    const filterStatus = document.getElementById('statusFilter').value;

    const filtered = dataset.filter(item => {
        const matchesKeyword = item.title.toLowerCase().includes(keyword) || 
                               item.unit.toLowerCase().includes(keyword) ||
                               item.en.toLowerCase().includes(keyword);
        const currentStatus = userProgress[item.id] || "Chưa học";
        const matchesStatus = (filterStatus === 'all') || (currentStatus === filterStatus);
        return matchesKeyword && matchesStatus;
    });

    renderMenu(filtered);
}

window.onload = () => {
    renderMenu(dataset);
    if(dataset.length > 0) selectTopic(dataset[0].id);
}
