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
  sendInitDataToServer(payload);
}

function sendInitDataToServer(data) {
  const serverUrl = "https://runnercatserver.onrender.com/v1/web/validate"; // Replace with your actual server URL

  fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        return null;
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Data from server:", responseData);
      return JSON.stringify(responseData.data);
    })
    .catch((error) => {
      console.error("Error sending data to server:", error);
    });
}

// DEPRECATED

/**
 * 
 *   if (user) {
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
 */
