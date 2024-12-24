// script.js

// 日付と曜日を表示する関数
function displayDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(-2);  // 月を2桁で表示
    const day = ("0" + now.getDate()).slice(-2);  // 日を2桁で表示
    const hours = ("0" + now.getHours()).slice(-2);  // 時を2桁で表示
    const minutes = ("0" + now.getMinutes()).slice(-2);  // 分を2桁で表示
    const seconds = ("0" + now.getSeconds()).slice(-2);  // 秒を2桁で表示

    // 曜日の配列
    const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
    const weekday = daysOfWeek[now.getDay()];

    // フォーマットした日付と曜日
    const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}:${seconds} (${weekday})`;

    // 画面に表示
    document.getElementById("datetime").textContent = formattedDate;
}

// ページがロードされた時に日付を表示
window.onload = function() {
    displayDateTime();  // 初期表示
    setInterval(displayDateTime, 1000);  // 1秒ごとに更新
};
