export function addToApply(company) {
  return new Promise(async (resolve) => {
    const response = await fetch("/applied", {
      method: "POST",
      body: JSON.stringify(company),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
  // On backend it will not store password
}

export function fetchCompaniesByUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("/applied?user=" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchCompaniesByCompId(compId) {
  return new Promise(async (resolve) => {
    const response = await fetch("/applied/comp?user=" + compId);
    const data = await response.json();
    console.log(data);
    resolve({ data });
  });
}
