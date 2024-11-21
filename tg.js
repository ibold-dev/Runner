async function getTelegramUserData() {
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

  // If no user, return error
  if (!user) {
    return JSON.stringify({ error: "No user information available." });
  }

  try {
    // Send payload to the server for validation
    const response = await fetch(
      "https://runnercatserver.onrender.com/v1/web/validate/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    // Wait for server response
    const result = await response.json();

    // Check for success in the server response
    if (response.ok && result.success) {
      return JSON.stringify(result);
    } else {
      return JSON.stringify({ error: result.message || "Validation failed." });
    }
  } catch (error) {
    // Handle fetch or server errors
    return JSON.stringify({ error: error.message || "Server error occurred." });
  }
}
