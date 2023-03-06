export const GetData = async () => {
  return await fetch(`http://localhost:8080/member`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((er) => er);
};
export const searchData = async (query) => {
  try {
    const res = await fetch(`http://localhost:8080/member?q=${query}`);
    let d = await res.json();
    return d;
  } catch (er) {
    return er;
  }
};
export const deleteData = async (id) => {
  console.log(id)
  try {
    const res = await fetch(`http://localhost:8080/member/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    let d = await res.json();
    return d;
  } catch (er) {
    return er;
  }
};
export const EditData = async (id, payload) => {
  try {
    return await fetch(`http://localhost:8080/member/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body:JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => res);
  } catch (er) {
    return er;
  }
};
export const PostData = async (payload) => {
  try {
    return await fetch(`http://localhost:8080/member/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body:JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => res);
  } catch (er) {
    return er;
  }
};
