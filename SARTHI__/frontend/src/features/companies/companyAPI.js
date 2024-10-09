export function fetchAllCompanies() {
  return new Promise(async (resolve) => {
    const response = await fetch("/companyList");
    const data = await response.json();
    resolve({ data });
    //Todo - remov deleted company on backend
  });
}

export function fetchCompanyById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("/companyList/" + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function createCompany(company) {
  console.log(company);
  const formData = new FormData();
  if (company.compAttachs.length === 0) {
    formData.append("compAttachs", []);
  }
  if (company.compAttachs.length > 0) {
    for (let i = 0; i < company.compAttachs.length; i++) {
      formData.append("compAttachs", company.compAttachs[i]);
    }
  }
  formData.append("backlogs", company.backlogs);
  formData.append("cgpa", company.cgpa);
  formData.append("ctc", company.ctc);
  formData.append("description", company.description);
  formData.append("field", company.field);
  formData.append("name", company.name);
  formData.append("scheduled", company.scheduled);
  formData.append("ten", company.ten);
  formData.append("twelve", company.twelve);
  formData.append("type", company.type);
  formData.append("url", company.url);
  formData.append("vacancy", company.vacancy);
  console.log("fromd", ...formData);
  return new Promise(async (resolve) => {
    const response = await fetch("/companyList/", {
      method: "POST",
      body: formData,
    });
    console.log("res", response);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCompany(update) {
  const formData = new FormData();
  if (update.compAttachs.length > 0) {
    for (let i = 0; i < update.compAttachs.length; i++) {
      formData.append("compAttachs", update.compAttachs[i]);
    }
  }
  formData.append("backlogs", update["backlogs"]);
  formData.append("cgpa", update.cgpa);
  formData.append("ctc", update.ctc);
  formData.append("description", update.description);
  formData.append("field", update.field);
  formData.append("name", update.name);
  formData.append("scheduled", update.scheduled);
  formData.append("ten", update.ten);
  formData.append("twelve", update.twelve);
  formData.append("type", update.type);
  formData.append("url", update.url);
  formData.append("vacancy", update.vacancy);
  if (update.deleted) {
    formData.append("deleted", true);
  }
  return new Promise(async (resolve) => {
    const response = await fetch("/companyList/" + update.id, {
      method: "PATCH",
      body: formData,
    });
    const data = await response.json();
    console.log("Res", response);
    console.log("data", data);
    resolve({ data });
  });
  // On backend it will not store password
}
