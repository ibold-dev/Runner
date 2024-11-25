function getTelegramUserData() {
  const initData = window.Telegram.WebApp.initData;
  const urlParams = new URLSearchParams(window.location.search);
  const ref = urlParams.get("ref");

  if (initData) {
    return JSON.stringify({ data: initData, referredBy: ref || null });
  } else {
    return null;
  }
}
