function getTelegramUserData() {
  const initData = window.Telegram.WebApp.initData;
  if (initData) {
    return initData;
  } else {
    return null;
  }
}
