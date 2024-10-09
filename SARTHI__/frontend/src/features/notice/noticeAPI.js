export function fetchAllNotices() {
  return new Promise(async (resolve) => {
    const response = await fetch("/notices");
    const data = await response.json();
    resolve({ data });
    //Todo - remove deleted notices from backend
  });
}

export function fetchNoticeById(noticeId) {
  return new Promise(async (resolve) => {
    const response = await fetch("/notices/" + noticeId);
    const data = await response.json();
    resolve({ data });
  });
}

export function createNotice(notice) {
  console.log("no", notice, notice.noticeAttachs);
  const formData = new FormData();
  if (notice.noticeAttachs.length === 0) {
    formData.append("noticeAttachs", []);
  }
  if (notice.noticeAttachs.length > 0) {
    for (let i = 0; i < notice.noticeAttachs.length; i++) {
      console.log("chal");
      formData.append("noticeAttachs", notice.noticeAttachs[i]);
    }
  }
  console.log("hehehe");
  formData.append("description", notice.description);
  formData.append("noticeMsg", notice.noticeMsg);
  console.log(notice);
  return new Promise(async (resolve) => {
    const response = await fetch("/notices/", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateNotice(update) {
  console.log(update);
  const formData = new FormData();
  if (update.noticeAttachs.length > 0) {
    for (let i = 0; i < update.noticeAttachs.length; i++) {
      console.log("chal");
      formData.append("noticeAttachs", update.noticeAttachs[i]);
    }
  }
  formData.append("description", update.description);
  formData.append("noticeMsg", update.noticeMsg);
  if (update.deleted) {
    formData.append("deleted", update.deleted);
  }
  return new Promise(async (resolve) => {
    const response = await fetch("/notices/" + update.id, {
      method: "PATCH",
      body: formData,
    });
    const data = await response.json();
    resolve({ data });
  });
}
