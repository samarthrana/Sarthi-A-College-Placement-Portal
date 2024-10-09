export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("/users/" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
  // On backend it will not store password
}
