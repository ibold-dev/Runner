function getTelegramUserData() {
  const initData = window.Telegram.WebApp.initData;
  const currentUrl = window.location.href;

  if (initData) {
    return JSON.stringify({ data: initData, referredBy: currentUrl || null });
  } else {
    return null;
  }
}
