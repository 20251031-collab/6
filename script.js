// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', () => {
    
    // 首頁的打招呼按鈕互動
    const greetBtn = document.getElementById('greetBtn');
    if (greetBtn) {
        greetBtn.addEventListener('click', () => {
            alert('嗨！謝謝你來參觀我的網站，希望你能更認識我！😊');
        });
    }

    // 聯絡表單送出互動
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // 阻止表單預設跳轉行為
            alert('訊息已成功送出！我會盡快回覆你。 (這是一個模擬提示)');
            contactForm.reset(); // 清空表單
        });
    }
});
