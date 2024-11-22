function getTelegramUserData() {
  const initData = window.Telegram.WebApp.initData;
  if (initData) {
    return JSON.stringify({ data: initData });
  } else {
    return null;
  }
}
