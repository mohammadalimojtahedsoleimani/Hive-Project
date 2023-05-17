import { useState } from "react";
import Image from "../../images/LandingPage/selected_posts_image_2.png";
import CreatePost from "../../images/DashboardPage/create_post.svg";
import Upload from "../../images/DashboardPage/upload.svg";
import Upload_ from "../../images/DashboardPage/upload_.svg";
const posts = [
  {
    id: 0,
    image: Image,
    name: "John Doe",
    date: "2022-01-01",
    title: "Project A",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    collected: 500,
    target: 1000,
  },
  {
    id: 1,
    image: Image,
    name: "Jane Smith",
    date: "2022-02-01",
    title: "Project B",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    collected: 750,
    target: 1500,
  },
  {
    id: 2,
    image: Image,
    name: "Bob Johnson",
    date: "2022-03-01",
    title: "Project C",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    collected: 1000,
    target: 2000,
  },
  {
    id: 3,
    image: Image,
    name: "Bob Johnson",
    date: "2022-03-01",
    title: "Project C",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    collected: 1000,
    target: 2000,
  },
  {
    id: 4,
    image: Image,
    name: "Bob Johnson",
    date: "2022-03-01",
    title: "Project C",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    collected: 1000,
    target: 2000,
  },
  {
    id: 5,
    image: Image,
    name: "Bob Johnson",
    date: "2022-03-01",
    title: "Project C",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    collected: 1000,
    target: 2000,
  },
  {
    id: 6,
    image: Image,
    name: "Bob sfdf",
    date: "2022-03-01",
    title: "Project C",
    description:
      "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    collected: 1000,
    target: 2000,
  },
  // Add more objects as needed
];
const Posts = () => {
  const [newPost, setNewPost] = useState(false);
  const [fileData, setFileData] = useState(null);
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Array.from(
    { length: Math.ceil(posts.length / pageSize) },
    (_, index) => index + 1
  );
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const postsTable = (posts) => {
    return (
      <table>
        <tr>
          <th>نام حامی</th>
          <th>وضعیت</th>
          <th>درصد کامل شده</th>
          <th>تعداد کمک</th>
          <th>مبلغ کمک شده</th>
        </tr>
        {posts
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
          .map((post) => (
            <tr>
              <th>{post.name}</th>
              <th>takmil</th>
              <th>93%</th>
              <th>{post.collected}</th>
              <th>{post.target}</th>
            </tr>
          ))}
      </table>
    );
  };
  const oldPosts = (
    <div>
      <div>
        <span>تمام آگهی های ثبت شده</span>
        <button
          onClick={() => {
            setNewPost(true);
          }}
        >
          ایجاد آگهی جدید
        </button>
      </div>
      <div>
        {postsTable(posts)}
        <div>
          {pages.map((page) => (
            <div onClick={() => handlePageClick(page)}>{page}</div>
          ))}
        </div>
      </div>
    </div>
  );
  const newPostsContainer = (
    <div>
      <div className="flex">
        <img src={CreatePost} alt="" />
        <h2>ایجاد آگهی جدید</h2>
      </div>
      <div className="flex">
        <div>
          <div>
            <label htmlFor="">عنوان آگهی </label>
            <input type="text" placeholder="کمک به کودکان ..." />
          </div>
          <div>
            <label htmlFor="">توضیحات</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <label htmlFor="">مبلغ</label>
            <input type="text" placeholder="10.000.000 ریال" />
          </div>
        </div>
        <div>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            className="input_field"
            hidden
            onChange={({ target: { files } }) => {
              if (files[0]) {
                setFileData(files[0]);
              }
            }}
          />
          <div
            className="rounded-[10px] border-dashed border-[#B5B5B5] border-[5px] p-[2rem] border-spacing-10 xxl:p-[4rem]"
            // style={{
            //   border: "1px solid transparent",
            //   borderImage:
            //     "linear-gradient(to bottom, black 5px, transparent 5px) 1",
            // }}
            onClick={() => document.querySelector(".input_field").click()}
          >
            <img className=" " src={Upload_} alt="upload button" />
            <span>انتخاب تصویر</span>
          </div>
        </div>
      </div>
      <button>ارسال جهت بررسی</button>
    </div>
  );
  return newPost ? newPostsContainer : oldPosts;
};

export default Posts;