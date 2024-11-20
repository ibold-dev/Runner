function getTelegramUserData() {
  const telegram = window.Telegram.WebApp;
  const user = telegram.initDataUnsafe.user;

  if (user) {
    return JSON.stringify({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      photo_url: user.photo_url,
    });
  } else {
    return JSON.stringify({ error: "No user information available." });
  }
}
