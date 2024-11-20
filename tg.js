function getTelegramUserData() {
  const telegram = window.Telegram.WebApp;
  // Retrieve user information
  const user = telegram.initDataUnsafe.user;
  const initData = telegram.initData;

  const payload = {
    user: user
      ? {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          photo_url: user.photo_url,
        }
      : null,
    initData: initData,
  };

  if (user) {
    return JSON.stringify({
      payload,
    });
  } else {
    return JSON.stringify({ error: "No user information available." });
  }
}
