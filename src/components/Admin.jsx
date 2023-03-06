import React, { useEffect, useState } from "react";
import AddData from "./AddData";
import { deleteData, EditData, GetData, PostData, searchData } from "./Api";
import Pagination from "./Pagination";
import style from "./Styles.module.css";

import Table from "./Table";

const Admin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [query, setQuery] = useState("");

  const handleGetData = () => {
    setLoading(true);
    GetData()
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((er) => {
        console.log(er);
        setLoading(false);
      });
  };
  useEffect(() => {
    handleGetData();
  }, []);
  // Post data
  const handleSubmit = (formData) => {
    PostData(formData).then((res) => handleGetData());
  };

  useEffect(() => {
    if (query.length === 0 || query.length > 1)
      searchData(query).then((res) => setData(res));
  }, [query]);

  const handleDelete = (id) => {
    // let newArr = data.filter((el) => el.id !== id);
    // setData(newArr);
    // or
    deleteData(id).then((res) => handleGetData());
  };

  const multipleDelete = (payload) => {
    console.log(payload);
  };
  const handleEditDone = (id, payload) => {
    EditData(id, payload).then((res) => handleGetData());
  };
  if (loading) {
    return <h1>Loading.....</h1>;
  }

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  // Seacrhing
  // const keys = ["name", "role", "email"];
  // const search = (data) => {
  //   let a = data.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   );

  //   return a;
  // };

  // hello world

  return (
    <div>
      <AddData handleSubmit={handleSubmit} />
      <div className={style.main}>
        <input
          type="text"
          placeholder="search by name, email, and role"
          className={style.search}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <Table
          // data={search(currentPosts)}
          data={currentPosts}
          handleDelete={handleDelete}
          handleEditDone={handleEditDone}
          multipleDelete={multipleDelete}
          handleGetData={handleGetData}
        />
        <Pagination
          postsPerPage={postsPerPage}
          currentPage={page}
          totalPage={data.length}
          // totalPage={search(data).length}
          paginate={(prev) => setPage(prev)}
        />
      </div>
    </div>
  );
};

export default Admin;
