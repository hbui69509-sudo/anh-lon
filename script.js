// Cơ sở dữ liệu chứa đầy đủ nội dung 15 bài nói của bạn
const dataset = [
    {
        id: 1, unit: "Unit 6", title: "Emotion (Cảm xúc)",
        en: `Hello teacher. Today, I would like to talk about emotions, which play a huge role in our daily lives. Like everyone, I experience a wide range of feelings. Whenever I feel sad or stressed out, I usually look for a quiet space, listen to my favorite soft music, or go for a long walk to clear my mind.\n\nOn the other hand, simple things can instantly make me happy, such as spending quality time with my family, hanging out with friends, or achieving a good grade at university. If you ask about my happiest event, it was definitely the day I passed the university entrance exam. I felt extremely proud and joyful because all my hard work and sleepless nights finally paid off. It was an unforgettable moment that motivated me to work even harder today. Thank you for listening.`,
        vi: `Em chào thầy/cô. Hôm nay, em xin phép được nói về chủ đề cảm xúc. Giống như mọi người, em có nhiều cảm xúc khác nhau. Khi buồn hay căng thẳng, em thường nghe nhạc nhẹ hoặc đi dạo để giải tỏa đầu óc.\n\nMặt khác, những điều đơn giản cũng làm em hạnh phúc, chẳng hạn như dành thời gian cho gia đình, đi chơi với bạn bè hoặc đạt điểm cao ở trường. Sự kiện hạnh phúc nhất trong đời em là khi đỗ đại học. Em đã cảm thấy cực kỳ tự hào và vui sướng vì mọi nỗ lực và những đêm mất ngủ của mình đã được đền đáp. Đó là một khoảnh khắc không thể nào quên. Em xin cảm ơn thầy/cô đã lắng nghe.`,
        tips: ["Ý chính 1: Cách giải tỏa khi buồn (nhạc nhẹ, đi dạo).", "Ý chính 2: Niềm vui nhỏ (gia đình, bạn bè, điểm số).", "Ý chính 3: Sự kiện đỗ đại học đầy tự hào."]
    },
    {
        id: 2, unit: "Unit 7", title: "Making Excuse (Lời bào chữa)",
        en: `Hello teacher. Making excuses is quite common in our daily communication. Generally, people make excuses when they are late for an important meeting, miss a project deadline, or cannot attend a social event they promised to go to. In my opinion, a good excuse should always be polite and honest, rather than just a lie.\n\nFor instance, if I am late for your class, I would approach you and say: 'I'm really sorry for being late today, teacher. The traffic was absolutely terrible, and I got stuck in a long traffic jam. I understand the importance of punctuality, and I will try my best to wake up earlier and be on time in the future.' I believe that taking responsibility while giving a reasonable excuse is the best way to handle the situation.`,
        vi: `Em chào thầy/cô. Việc đưa ra lý do tương đối phổ biến trong giao tiếp hàng ngày. Mọi người thường đưa ra lý do khi đi muộn, lỡ hạn deadline bài tập hoặc không thể tham gia sự kiện. Theo em, một lời bào chữa tốt phải luôn lịch sự và thành thật chứ không phải một lời nói dối.\n\nVí dụ, nếu em đi học muộn, em sẽ nói với thầy cô: 'Em xin lỗi thầy/cô vì đi học muộn. Đường hôm nay tắc quá. Em hiểu tầm quan trọng của việc đúng giờ và em sẽ cố gắng dậy sớm hơn vào lần sau.' Chịu trách nhiệm kèm lý do hợp lý luôn là cách xử lý tốt nhất.`,
        tips: ["Ý chính 1: Hoàn cảnh thường phải xin lỗi.", "Ý chính 2: Tiêu chuẩn của lời xin lỗi (lịch sự, thành thật).", "Ý chính 3: Đoạn văn mẫu đóng vai khi đi học muộn."]
    },
    {
        id: 3, unit: "Unit 8", title: "Ticket (Vé & Xem phim)",
        en: `Hello teacher. I have a huge passion for movies, and it is my favorite way to unwind after stressful study hours. On average, I go to the cinema about once or twice a month, usually on weekends with my close friends to enjoy the lively atmosphere. My favorite movie genres are action and comedy because they are highly entertaining and keep me on the edge of my seat.\n\nWhen it comes to preferences, I strongly prefer watching movies at the cinema rather than at home. The cinema offers a massive screen, top-tier sound systems, and a dark room that completely eliminates distractions, making the cinematic experience much more immersive and exciting. Thank you.`,
        vi: `Em chào thầy/cô. Em có niềm đam mê lớn với phim ảnh, đây là cách thư giãn tốt nhất của em sau giờ học. Trung bình em đi xem phim 1-2 lần/tháng vào cuối tuần với bạn bè. Thể loại yêu thích là hành động và hài vì tính giải trí cao.\n\nVề sự lựa chọn, em thích xem phim ở rạp hơn ở nhà. Rạp phim có màn hình siêu lớn, âm thanh đỉnh cao giúp trải nghiệm xem phim chân thực hơn.`,
        tips: ["Ý chính 1: Tần suất đi xem phim (1-2 lần/tháng).", "Ý chính 2: Thể loại yêu thích (action, comedy).", "Ý chính 3: Lý do thích xem ở rạp hơn ở nhà."]
    },
    {
        id: 4, unit: "Unit 9", title: "Saving Energy (Tiết kiệm năng lượng)",
        en: `Hello teacher. Nowadays, saving energy is a crucial topic as it directly impacts our environment and future generations. In my daily life, I always make a conscious effort to save energy by turning off lights, fans, and air conditioners whenever I leave a room. I also try to cut down on plastic waste by carrying a reusable water bottle.\n\nFurthermore, I believe our country should invest heavily in renewable energy sources like solar power and wind power. These sources are clean, green, and completely infinite. They can significantly replace fossil fuels and reduce the carbon footprint, which helps effectively fight climate change. Thank you for listening.`,
        vi: `Em chào thầy/cô. Ngày nay tiết kiệm năng lượng là chủ đề sống còn. Trong đời sống, em luôn tắt đèn, quạt, điều hòa khi ra khỏi phòng và dùng bình nước cá nhân.\n\nHơn nữa, em nghĩ đất nước nên đầu tư vào năng lượng tái tạo (mặt trời, gió). Nguồn năng lượng này sạch và vô hạn, có thể thay thế nhiên liệu hóa thạch để chống biến đổi khí hậu.`,
        tips: ["Ý chính 1: Hành động cá nhân (tắt thiết bị điện).", "Ý chính 2: Tầm vĩ mô (năng lượng tái tạo: solar, wind power).", "Ý chính 3: Lợi ích (sạch, vô hạn)."]
    },
    {
        id: 5, unit: "Unit 10", title: "Knowing a Second Language (Ngoại ngữ thứ hai)",
        en: `Hello teacher. In today's globalized world, knowing a second language is a powerful tool. Besides English, I really want to learn Japanese or Korean in the near future because I love their tech industries. Learning a new language brings numerous benefits. It not only opens up fantastic career opportunities and higher salaries but also boosts our brainpower and expands our cultural horizons.\n\nFrom my experience, the best tip to master a language is daily immersion. You should practice every single day by watching foreign movies, listening to podcasts, and actively speaking with native speakers or peers. Consistency is the ultimate key to fluency.`,
        vi: `Em chào thầy/cô. Trong thế giới toàn cầu hóa, biết ngoại ngữ là công cụ mạnh mẽ. Ngoài tiếng Anh em muốn học thêm tiếng Nhật/Hàn. Học tiếng mới giúp tăng cơ hội việc làm, lương cao và phát triển tư duy.\n\nMẹo tốt nhất để làm chủ ngôn ngữ là luyện tập mỗi ngày qua phim ảnh, podcast.`,
        tips: ["Ý chính 1: Ngôn ngữ muốn học thêm.", "Ý chính 2: Lợi ích mang lại.", "Ý chính 3: Mẹo học tốt (Consistency - Kiên trì)."]
    },
    {
        id: 6, unit: "Unit 1", title: "Education (Giáo dục - Chuyên ngành AIoT)",
        en: `Hello teacher. Today, I would like to share with you about my academic journey. I am currently a student at university, and my major is AIoT, which stands for Artificial Intelligence of Things. This is a cutting-edge field that combines AI technology with connected smart devices.\n\nThis semester, I am studying several challenging but fascinating subjects, including Machine Learning, Embedded Systems, Microprocessors, and Advanced Calculus. Among them, I am most interested in Machine Learning because it allows me to build smart programming models.\n\nTo be honest, studying at university is quite demanding, but I really enjoy it. It gives me the opportunity to expand my technical knowledge, practice coding in the lab, and work on exciting projects with my classmates. In the future, I hope to become a skilled engineer who can develop smart applications to improve our daily lives.`,
        vi: `Em chào thầy/cô. Em đang là sinh viên chuyên ngành AIoT (Trí tuệ nhân tạo kết nối vạn vật)[cite: 20, 22, 23]. Lĩnh vực này kết hợp AI với các thiết bị thông minh.\n\nHọc kỳ này em học Học máy, Hệ thống nhúng, Vi xử lý và Giải tích nâng cao[cite: 24]. Em thích nhất môn Học máy.\n\nHọc đại học áp lực nhưng rất vui, cho em cơ hội thực hành trong phòng Lab và làm dự án với bạn bè[cite: 25]. Tương lai em mong trở thành kỹ sư giỏi.`,
        tips: ["Ý chính 1: Định nghĩa chuyên ngành (AIoT).", "Ý chính 2: Danh sách môn học kỹ thuật.", "Ý chính 3: Mục tiêu nghề nghiệp tương lai."]
    },
    {
        id: 7, unit: "Unit 2", title: "Away from Home (Sống xa nhà)",
        en: `Hello teacher. Moving away from home to pursue university education is a turning point in my life. My current student life is incredibly busy, as I have to balance my tight class schedule, heavy assignments, and personal chores. Living far from home brings quite a few difficulties, especially homesickness and financial management.\n\nFor the first time, I have to handle everything on my own, from cooking and cleaning to paying monthly bills. Whenever I feel overwhelmed or lonely, I often call my mother to talk about my day and receive her encouragement. Although it is tough, this independent lifestyle helps me grow up and become much more mature.`,
        vi: `Em chào thầy/cô. Sống xa nhà là bước ngoặt[cite: 26]. Cuộc sống sinh viên hiện tại rất bận rộn[cite: 28]. Khó khăn lớn nhất là nỗi nhớ nhà và tự quản lý tiền bạc [cite: 29].\n\nLần đầu tiên em phải tự nấu ăn, dọn dẹp, trả hóa đơn[cite: 29]. Những lúc cô đơn em thường gọi cho mẹ[cite: 27]. Lối sống tự lập này giúp em trưởng thành hơn nhiều.`,
        tips: ["Ý chính 1: Cuộc sống bận rộn ở đại học.", "Ý chính 2: Khó khăn lớn nhất (homesickness, finance).", "Ý chính 3: Cách giải quyết và sự trưởng thành."]
    },
    {
        id: 8, unit: "Unit 3", title: "Entertainment (Giải trí & Tết)",
        en: `Hello teacher. Entertainment is essential for maintaining a healthy work-life balance. In my free time, I love engaging in various hobbies like reading books, playing video games, and playing badminton to stay active. When talking about cultural entertainment, my absolute favorite festival is Tet, the Lunar New Year.\n\nIt is the most sacred and joyful time of the year in Vietnam. I love Tet because it is a wonderful opportunity to gather with my big family, enjoy traditional food like Banh Chung, receive lucky money, and wish everyone a prosperous new year. It always gives me a sense of peace and warmth.`,
        vi: `Em chào thầy/cô. Giải trí giúp cân bằng cuộc sống[cite: 30]. Lúc rảnh em thích đọc sách, chơi game và chơi cầu lông[cite: 32, 33]. Về văn hóa, em thích nhất là dịp Tết Nguyên Đán[cite: 31].\n\nEm yêu Tết vì được sum vầy bên gia đình, ăn bánh chưng, nhận lì xì và chúc nhau năm mới an khang thịnh vượng.`,
        tips: ["Ý chính 1: Sở thích cá nhân (reading, badminton).", "Ý chính 2: Lễ hội yêu thích (Tet holiday).", "Ý chính 3: Ý nghĩa ngày Tết đối với bản thân."]
    },
    {
        id: 9, unit: "Unit 4", title: "Weather (Thời tiết & Trận mưa lớn)",
        en: `Hello teacher. Vietnam has a tropical climate, so the weather varies from region to region, but it is generally hot and humid. My favorite weather is the cool, breezy, and pleasant weather of autumn, which makes me feel relaxed. However, I also have a memorable experience of being caught in bad weather.\n\nIt happened last summer when a sudden heavy downpour struck while I was riding home from school. The wind was strong, the roads were flooded, and I got completely soaked. I ended up catching a bad cold the next day, which taught me a lesson to always check the weather forecast and bring a raincoat.`,
        vi: `Em chào thầy/cô. Việt Nam khí hậu nhiệt đới nóng ẩm[cite: 37]. Em thích tiết trời mùa thu mát mẻ[cite: 36]. Tuy nhiên em cũng từng bị kẹt trong một trận mưa giông lớn mùa hè năm ngoái[cite: 35].\n\nGió mạnh, đường ngập và em ướt sũng rồi bị cảm nặng. Bài học là luôn xem dự báo thời tiết và mang áo mưa.`,
        tips: ["Ý chính 1: Kiểu thời tiết yêu thích (mùa thu).", "Ý chính 2: Trải nghiệm thời tiết xấu (trận mưa lớn).", "Ý chính 3: Bài học rút ra (mang áo mưa, xem dự báo)."]
    },
    {
        id: 10, unit: "Unit 5", title: "Arts & Entertainment (Triển lãm nghệ thuật)",
        en: `Hello teacher. I have a great appreciation for arts and creative works. Last month, I had the chance to attend a modern art exhibition held in the city center. The exhibition displayed a wide range of beautiful oil paintings and unique modern sculptures from various talented artists. It was an eye-opening experience that inspired me a lot.\n\nOn a side note, if a friend invites me to a birthday party but I cannot make it, I will write a polite message to refuse: 'Thank you so much for inviting me! I’d love to come, but I have an important exam the next morning, so I must stay home to study. Let's hang out and celebrate together next week!'`,
        vi: `Em chào thầy/cô. Tháng trước em có đi xem triển lãm nghệ thuật hiện đại ở trung tâm thành phố với nhiều tranh sơn dầu và tượng điêu khắc độc đáo[cite: 38, 40].\n\nNgoài ra, nếu từ chối tiệc sinh nhật bạn, em sẽ nói lịch sự: 'Cảm ơn đã mời mình! Mình rất muốn đi nhưng sáng mai có bài kiểm tra quan trọng nên phải ở nhà học bài.' [cite: 39]`,
        tips: ["Ý chính 1: Đi xem triển lãm tranh hiện đại.", "Ý chính 2: Cách từ chối lời mời khéo léo.", "Ý chính 3: Lý do bận thi cử hợp lý."]
    },
    {
        id: 11, unit: "Unit 6", title: "At Work (Công việc làm thêm)",
        en: `Hello teacher. Currently, I am a full-time student, but I also work part-time as a technology tutor or a freelancer. In my opinion, university students should definitely take up a part-time job if they can manage their time. It not only helps us earn extra pocket money to cover expenses but also teaches us soft skills like time management, teamwork, and communication.\n\nLooking ahead, I am highly interested in working for a major software company. I would love to write a professional application letter to introduce my skills and apply for a technical position there. Working in a professional environment is my ultimate career goal.`,
        vi: `Em chào thầy/cô. Hiện em là sinh viên [cite: 41] và làm gia sư công nghệ/freelancer[cite: 44]. Sinh viên nên đi làm thêm nếu cân bằng được thời gian để kiếm thêm thu nhập và học các kỹ năng mềm [cite: 45].\n\nTương lai, mục tiêu cuối cùng của em là ứng tuyển vào một công ty phần mềm lớn[cite: 42, 46, 47].`,
        tips: ["Ý chính 1: Công việc làm thêm hiện tại.", "Ý chính 2: Lợi ích làm thêm (kỹ năng mềm, tài chính).", "Ý chính 3: Định hướng công việc tương lai."]
    },
    {
        id: 12, unit: "Unit 7", title: "Sending a Package (Gửi hàng bưu kiện)",
        en: `Hello teacher. Today, I am going to talk about logistics, specifically sending a package. Nowadays, there are many convenient ways to send a package, such as using traditional post offices or modern express delivery apps. To prepare a package properly, we should wrap the items securely with bubble wrap, place them in a sturdy box, and write the recipient's name, phone number, and address very clearly on top.\n\nHowever, some common problems can occur, including delayed delivery, lost items, or damaged goods. To solve these issues, we should always choose reputable delivery brands, track our order status online, and buy shipping insurance for highly valuable goods.`,
        vi: `Em chào thầy/cô. Để gửi bưu kiện, ta có thể dùng bưu điện hoặc app ship nhanh[cite: 52, 53]. Cần gói hàng kỹ bằng xốp bong bóng, đặt trong hộp và ghi rõ địa chỉ [cite: 54].\n\nNếu gặp sự cố giao chậm hoặc hỏng đồ, giải pháp là chọn hãng uy tín và mua bảo hiểm hàng hóa[cite: 55].`,
        tips: ["Ý chính 1: Các phương thức gửi hàng.", "Ý chính 2: Các bước đóng gói an toàn.", "Ý chính 3: Rủi ro thường gặp và cách xử lý."]
    },
    {
        id: 13, unit: "Unit 8", title: "Emergency (Trường hợp khẩn cấp)",
        en: `Hello teacher. Emergencies and accidents are unpredictable events that can happen anytime, anywhere. I once witnessed a scary motorbike accident on my way home from university. Two motorbikes collided at a crossroads because one rider ran a red light, and they both fell down, heavily injured.\n\nIn such critical situations, the most important thing to do is to stay perfectly calm. We should immediately call the local emergency number for an ambulance, avoid moving the injured people incorrectly, and help direct traffic to prevent further accidents until professional help arrives on the scene.`,
        vi: `Em chào thầy/cô. Em từng chứng kiến một vụ tai nạn xe máy ở ngã tư do vượt đèn đỏ, hai người bị thương nặng [cite: 56, 57].\n\nKhi gặp sự cố khẩn cấp, việc cần làm là giữ bình tĩnh, gọi cứu thương ngay lập tức và điều tiết giao thông tránh tai nạn liên hoàn[cite: 58].`,
        tips: ["Ý chính 1: Vụ tai nạn chứng kiến.", "Ý chính 2: Hành động sơ cứu khẩn cấp.", "Ý chính 3: Điều tiết giao thông chờ cứu thương."]
    },
    {
        id: 14, unit: "Unit 9", title: "Banking (Ngân hàng & Sự cố ATM)",
        en: `Hello teacher. Banking services have evolved dramatically thanks to the rise of technology. Internet banking has become an essential part of my life because of its convenience. It allows us to transfer money, pay utility bills, and check balances instantly from anywhere without visiting a physical bank.\n\nHowever, it also comes with drawbacks, such as the risk of cyber fraud, phishing scams, and occasional system maintenance downtime. If I ever face a stressful situation where my bank card gets stuck inside an ATM, I will stay calm, immediately call the bank’s emergency hotline printed on the machine, or send an urgent email to request a temporary card lock for security purposes.`,
        vi: `Em chào thầy/cô. Internet banking rất tiện để chuyển tiền, trả hóa đơn nhưng có rủi ro lừa đảo mạng [cite: 59, 60, 61, 62, 63].\n\nNếu bị nuốt thẻ tại cây ATM, em sẽ bình tĩnh gọi ngay số hotline in trên máy hoặc viết email khẩn cấp yêu cầu khóa thẻ bảo mật[cite: 64].`,
        tips: ["Ý chính 1: Tiện ích của Internet Banking.", "Ý chính 2: Rủi ro bảo mật.", "Ý chính 3: Cách xử lý khi bị nuốt thẻ ATM."]
    },
    {
        id: 15, unit: "Unit 10", title: "Gadgets (Thiết bị gia đình thông minh)",
        en: `Hello teacher. My absolute favorite smart object is my smartphone, which acts like a personal assistant. It is sleek, compact, and capable of executing multiple tasks like browsing the internet, coding via apps, and managing my daily schedule. In modern families, smart devices like robotic vacuums and voice-controlled ovens greatly assist housewives by automating time-consuming chores.\n\nHowever, a major disadvantage is that children might become addicted to screens, which negatively impacts their physical health and social development. I recently visited a high-tech gadget expo where I saw advanced smart home devices, and it truly opened my eyes to the future of technology. Thank you for your time.`,
        vi: `Em chào thầy/cô. Smartphone là thiết bị yêu thích của em[cite: 65, 66, 67, 68]. Trong nhà hiện đại, robot hút bụi giúp nội trợ giải phóng sức lao động [cite: 69, 70, 71].\n\nTác hại là trẻ em dễ nghiện màn hình[cite: 72]. Gần đây em đi triển lãm công nghệ, chứng kiến hệ thống nhà thông minh rất hiện đại[cite: 73].`,
        tips: ["Ý chính 1: Thiết bị yêu thích (smartphone).", "Ý chính 2: Thiết bị nhà thông minh hỗ trợ việc nhà.", "Ý chính 3: Tác hại của công nghệ với trẻ nhỏ."]
    }
];

let currentUtterance = null; // Biến quản lý giọng đọc

// Hàm tạo danh sách menu ở bên trái
function renderMenu(data) {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.innerHTML = '';
    
    if(data.length === 0) {
        menuContainer.innerHTML = '<p style="color:var(--text-muted); text-align:center;">Không tìm thấy chủ đề...</p>';
        return;
    }

    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'topic-item';
        div.id = `item-${item.id}`;
        div.innerHTML = `<small style="color:var(--primary-color); display:block;">${item.unit}</small> ${item.title}`;
        div.onclick = () => selectTopic(item.id);
        menuContainer.appendChild(div);
    });
}

// Hàm render nội dung chi tiết bài học bên phải khi người dùng click
function selectTopic(id) {
    stopSpeaking(); // Dừng đọc bài cũ ngay lập tức nếu đổi bài

    document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('active'));
    const selectedEl = document.getElementById(`item-${id}`);
    if(selectedEl) selectedEl.classList.add('active');

    const topic = dataset.find(item => item.id === id);
    const contentContainer = document.getElementById('contentContainer');
    
    let tipsHtml = '';
    topic.tips.forEach(tip => { tipsHtml += `<li>${tip}</li>`; });

    contentContainer.innerHTML = `
        <div class="topic-title">[${topic.unit}] ${topic.title}</div>
        
        <div class="section-label">
            <span>🗣️ BÀI NÓI TIẾNG ANH</span>
            <div class="tts-controls">
                <div class="speed-control">
                    <label for="speedRange">Tốc độ:</label>
                    <input type="range" id="speedRange" min="0.5" max="1.5" step="0.1" value="0.9" style="width:70px;">
                    <span id="speedVal">0.9x</span>
                </div>
                <button class="btn-speak" onclick="startSpeaking(\`${topic.en.replace(/`/g, '\\`').replace(/'/g, "\\'")}\`)">▶ Nghe mẫu</button>
                <button class="btn-stop" onclick="stopSpeaking()">⏹ Dừng</button>
            </div>
        </div>
        <div class="english-box" id="textToRead">${topic.en}</div>
        
        <div class="section-label">🇻🇳 BẢN DỊCH TIẾNG VIỆT</div>
        <div class="vietnamese-box">${topic.vi}</div>
        
        <div class="section-label">💡 MẸO PHẢN XẠ - 3 Ý CHÍNH CẦN NHỚ</div>
        <div class="tips-box"><ul>${tipsHtml}</ul></div>
    `;

    // Lắng nghe sự thay đổi tốc độ đọc trên thanh trượt slider
    const speedRange = document.getElementById('speedRange');
    const speedVal = document.getElementById('speedVal');
    speedRange.oninput = function() {
        speedVal.innerText = this.value + 'x';
    };
}

// --- HÀM TÍNH NĂNG PHÁT ÂM VĂN BẢN (TEXT TO SPEECH) ---
function startSpeaking(text) {
    window.speechSynthesis.cancel(); // Tắt các luồng âm thanh cũ nếu có lỗi kẹt

    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'en-US'; // Ép trình duyệt đọc giọng chuẩn Anh-Mỹ

    const speedValue = document.getElementById('speedRange').value;
    currentUtterance.rate = parseFloat(speedValue); // Định dạng tốc độ đọc từ slider

    window.speechSynthesis.speak(currentUtterance);
}

function stopSpeaking() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
}

// --- HÀM LỌC TÌM KIẾM CHỦ ĐỀ CHẠY REAL-TIME ---
function filterTopics() {
    const keyword = document.getElementById('searchInp').value.toLowerCase();
    const filtered = dataset.filter(item => 
        item.title.toLowerCase().includes(keyword) || 
        item.unit.toLowerCase().includes(keyword) ||
        item.en.toLowerCase().includes(keyword)
    );
    renderMenu(filtered);
}

// Khởi chạy ứng dụng ngay khi trang web load thành công
window.onload = () => {
    renderMenu(dataset);
    if(dataset.length > 0) selectTopic(dataset[0].id); // Tự động mở bài đầu tiên
}
