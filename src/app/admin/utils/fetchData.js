const baseURL = "http://localhost:8080/api";
export const getData = async (url) => {
  try {
    const response = await fetch(`${baseURL}/${url}/all`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deleteData = async (url, field, id) => {
  try {
    const response = await fetch(`${baseURL}/${url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [field]: id }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getDataById = async (url, field, id) => {
  try {
    const response = await fetch(`${baseURL}/${url}?${field}=${id}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (bodyData) => {
  try {
    const response = await fetch(`${baseURL}/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (bodyData) => {
  try {
    const response = await fetch(`${baseURL}/menu`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
