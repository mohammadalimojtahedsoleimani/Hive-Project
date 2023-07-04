import { useEffect , useState } from "react";
import Image from "../../images/LandingPage/selected_posts_image_2.png";
import CreatePost from "../../images/DashboardPage/create_post.svg";
import Upload from "../../images/DashboardPage/upload.svg";
import Upload_ from "../../images/DashboardPage/upload_.svg";
import Avatar1 from "../../images/common/avatars/avatar_1.svg";
import Avatar2 from "../../images/common/avatars/avatar_2.svg";
import Avatar3 from "../../images/common/avatars/avatar_3.svg";
import axios from "axios";
import Table from "./common/Table";

const nameFont = ( value ) => {
    if ( value.length <= 15 ) {
        return " text-[10px] xxl:text-[12px]";
    }
    return " text-[8px] xxl:text-[10px]";
};
const posts = [
    {
        id : 0 ,
        image : Image ,
        name : "John Doe" ,
        date : "2022-01-01" ,
        title : "Project A" ,
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,
        collected : 500 ,
        target : 1000 ,
    } ,
    {
        id : 1 ,
        image : Image ,
        name : "Jane Smith" ,
        date : "2022-02-01" ,
        title : "Project B" ,
        description :
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,
        collected : 750 ,
        target : 1500 ,
    } ,
    {
        id : 2 ,
        image : Image ,
        name : "Bob Johnson" ,
        date : "2022-03-01" ,
        title : "Project C" ,
        description :
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ,
        collected : 1000 ,
        target : 2000 ,
    } ,
    {
        id : 3 ,
        image : Image ,
        name : "Bob Johnson" ,
        date : "2022-03-01" ,
        title : "Project C" ,
        description :
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ,
        collected : 1000 ,
        target : 2000 ,
    } ,
    {
        id : 4 ,
        image : Image ,
        name : "Bob Johnson" ,
        date : "2022-03-01" ,
        title : "Project C" ,
        description :
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ,
        collected : 1000 ,
        target : 2000 ,
    } ,
    {
        id : 5 ,
        image : Image ,
        name : "Bob Johnson" ,
        date : "2022-03-01" ,
        title : "Project C" ,
        description :
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ,
        collected : 1000 ,
        target : 2000 ,
    } ,
    {
        id : 6 ,
        image : Image ,
        name : "Bob sfdf" ,
        date : "2022-03-01" ,
        title : "Project C" ,
        description :
            "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ,
        collected : 1000 ,
        target : 2000 ,
    } ,
    // Add more objects as needed
];
const Posts = () => {
    // variables
    const [ newPost , setNewPost ] = useState ( false );
    const [ fileData , setFileData ] = useState ( null );
    const pageSize = 5;
    const [ currentPage , setCurrentPage ] = useState ( 1 );
    const [ date , setDate ] = useState ( new Date () );
    const [ image , setImage ] = useState ( "" );
    let imagePath = "http://127.0.0.1:8000/media/ads/";
    let formData = new FormData ();
    let value = ""
    const [ data , setData ] = useState ( {
        image : null ,
        title : '' ,
        content : '' ,
        category : '2' ,
        status : 'true' ,
        estimated_amount : '' ,
        collected_amount : '0' ,
        published_date : '2023-07-02T17:55:06.379Z' ,
    } );

    // functions
    const pages = Array.from (
        { length : Math.ceil ( posts.length / pageSize ) } ,
        ( _ , index ) => index + 1
    );
    useEffect ( () => {
        value = localStorage.getItem ( "token" );
    } , [] )
    const handlePageClick = ( page ) => {
        setCurrentPage ( page );
    };

    const changeHandler = ( event ) => {
        // setData()
        setData ( { ... data , [ event.target.name ] : event.target.value } );
        // console.log ( event.target.name )
    };
    const handleImageChange = ( event ) => {
        setData ( { ... data , [ event.target.name ] : event.target.files[ 0 ] } );
        formData.append ( "file" , event.target.files[ 0 ] );
        imagePath += image;
    };
    const handleDateChange = ( e ) => {
        e.preventDefault ();
        setDate ( new Date () );
        const formData = new FormData ()
        formData.append ( 'image' , data.image , data.image.name )
        formData.append ( 'title' , data.title )
        formData.append ( 'content' , data.content )
        formData.append ( 'category' , data.category )
        formData.append ( 'status' , data.status )
        formData.append ( 'estimated_amount' , data.estimated_amount )
        formData.append ( 'collected_amount' , data.collected_amount )
        formData.append ( 'published_date' , data.published_date )
        let df = JSON.stringify ( data )
        axios
            .post (
                "http://127.0.0.1:8000/charity/api/v1/ads/" , formData ,
                {
                    headers : {
                        'Authorization' : `Bearer ${ value }` ,
                        "Content-Type" : "multipart/form-data"
                    } ,
                }
            )
            .then ( ( response ) => {
                console.log ( response );
            } )
            .catch ( ( error ) => {
                console.log ( "the error: " , error.response );
            } );
        console.log ( value )
        // console.log ( data.title );
        // console.log ( data.content );
        // console.log ( data.image );
        // console.log ( data.estimated_amount );
        // console.log ( data.category );
        console.log ( df )
        console.log ( data.image )
        console.log ( formData )
    };

    // api-call

    const postsTable = () => {
        return (
            <Table
                titlesArr={ [
                    { name : "نام حامی" , value : "supporter" } ,
                    { name : "وضعیت" , value : "status" } ,
                    { name : "درصد کامل شده" , value : "percent" } ,
                    { name : "تاریخ ثبت" , value : "date" } ,
                    { name : "مبلغ کمک شده" , value : "money" } ,
                ] }
                dataArr={ [
                    {
                        supporter : (
                            <div
                                className={
                                    nameFont ( "زهرا نوروزی" ) +
                                    " flex items-center text-[#808080] gap-2"
                                }
                            >
                                <img
                                    src={ Avatar1 }
                                    alt=""
                                    className="rounded-[50%] border-[5px] border-[#ECECEC]"
                                />
                                زهرا نوروزی{ " " }
                            </div>
                        ) ,
                        status : (
                            <div
                                className=" p-[5px] xxl:p-[10px] text-[10px] xxl:text-[12px] text-[#427A5B] bg-[#DEEDE5] rounded-[2px]">
                                تکمیل شده
                            </div>
                        ) ,
                        percent : 40 ,
                        date : "1398/11/22" ,
                        money : 400000 ,
                    } ,
                    {
                        supporter : (
                            <div
                                className={
                                    nameFont ( "سید امیررضا قربانی زرین کلایی اصل" ) +
                                    " flex items-center text-[#808080] gap-2"
                                }
                            >
                                <img
                                    src={ Avatar3 }
                                    alt=""
                                    className="rounded-[50%] border-[5px] border-[#ECECEC]"
                                />
                                سید امیررضا قربانی زرین کلایی اصل{ " " }
                            </div>
                        ) ,
                        status : (
                            <div
                                className=" p-[5px] xxl:p-[10px] text-[10px] xxl:text-[12px] text-[#427A5B] bg-[#DEEDE5] rounded-[2px]">
                                تکمیل شده
                            </div>
                        ) ,
                        percent : 60 ,
                        date : "1398/11/22" ,
                        money : 6500000 ,
                    } ,
                ] }
                minHeight="70"
            />
        );
    };
    const oldPosts = (
        <div className=" h-full pt-[4rem] xxl:pt-[6rem]  mr-[1rem] xxl:mr-[3rem]">
            <div className="flex gap-4 ">
        <span className="font-medium text-[20px] xxl:text-[25px]">
          تمام آگهی های ثبت شده
        </span>
                <button
                    onClick={ () => {
                        setNewPost ( true );
                    } }
                    className="font-[600] text-[14px] text-white rounded-md bg-[#4D7AD2] p-[0.4rem] xxl:p-[0.8rem]"
                >
                    ایجاد آگهی جدید
                </button>
            </div>
            <div className="h-full mt-[1.5rem] xxl:mt-[2rem]">{ postsTable () }</div>
        </div>
    );
    // my work
    const newPostsContainer = (
        <div
            style={ { boxShadow : "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" } }
            className="mt-[5rem] xxl:mt-[7rem] mr-[2.5rem] xxl:mr-[4rem] ml-[1rem] xxl:ml-[2rem]  p-[2rem] xxl:p-[3rem] bg-[#f9f9f9bb]"
        >
            <div className="flex gap-3">
                <img src={ CreatePost } className="w-[1rem] xxl:w-[2rem]" alt=""/>
                <h2 className=" font-[700] text-[29px] xxl:text-[34px]">
                    ایجاد آگهی جدید
                </h2>
            </div>
            <div className="flex mt-[1.5rem] xxl:mt-[3rem]">
                <div className="flex-[3] pl-[1.5rem] xxl:pl-[2.5rem]">
                    <div className="flex flex-col">
                        <label
                            htmlFor=""
                            className=" font-[700] text-[20px] xxl:text-[24px] mb-[0.2rem] xxl:mb-[0.4rem]"
                        >
                            عنوان آگهی{ " " }
                        </label>
                        <input
                            type="text"
                            placeholder="کمک به کودکان ..."
                            value={ data.title }
                            onChange={ changeHandler }
                            name="title"
                            id="title"
                            style={ { border : "solid #B5B5B5 2px" } }
                            className=" rounded-lg text-[13px] xxl:text-[16px] text-[#ABABAB] px-[4px] py-[5px]"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor=""
                            className=" font-[700] text-[20px] xxl:text-[24px] mt-[0.7rem] xxl:mt-[1.4rem] mb-[0.2rem] xxl:mb-[0.4rem]"
                        >
                            دسته بندی آگهی
                        </label>
                        <select
                            className="w-full flex justify-start rounded-lg text-[13px] xxl:text-[16px] text-[#ABABAB] px-[4px] py-[5px]"
                            id="mySelect"
                            style={ { border : "solid #B5B5B5 2px" } }
                        >
                            <option
                                value="option1"
                                className=" flex justify-start px-[0.3rem] xxl:px-[0.5rem] text-[13px] xxl:text-[16px]"
                            >
                                Option 1
                            </option>
                            <option
                                value="option2"
                                className=" flex justify-start px-[0.3rem] xxl:px-[0.5rem] text-[13px] xxl:text-[16px]"
                            >
                                Option 2
                            </option>
                            <option
                                value="option3"
                                className=" flex justify-start px-[0.3rem] xxl:px-[0.5rem] text-[13px] xxl:text-[16px]"
                            >
                                Option 3
                            </option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor=""
                            className=" font-[700] text-[20px] xxl:text-[24px] mt-[0.7rem] xxl:mt-[1.4rem] mb-[0.2rem] xxl:mb-[0.4rem]"
                        >
                            توضیحات
                        </label>
                        <textarea
                            name="content"
                            id="content"
                            cols="30"
                            rows="10"
                            value={ data.content }
                            onChange={ changeHandler }
                            style={ { border : "solid #B5B5B5 2px" , resize : "none" } }
                            className=" rounded-lg text-[13px] xxl:text-[16px] text-[#ABABAB] px-[4px] py-[5px]"
                        ></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor=""
                            className=" font-[700] text-[20px] xxl:text-[24px] mt-[0.7rem] xxl:mt-[1.4rem] mb-[0.2rem] xxl:mb-[0.4rem]"
                        >
                            مبلغ
                        </label>
                        <input
                            type="number"
                            placeholder="10.000.000 ریال"
                            value={ data.estimated_amount }
                            onChange={ changeHandler }
                            name="estimated_amount"
                            style={ { border : "solid #B5B5B5 2px" } }
                            className=" rounded-lg text-[13px] xxl:text-[16px] text-[#ABABAB] px-[4px] py-[5px]"
                        />
                    </div>
                </div>
                <div className="flex-[1.3] flex items-start justify-center mt-[1rem] xxl:mt-[2rem]">
                    <input
                        type="file"
                        accept=".png, .JPG, .jpeg"
                        className="input_field"
                        hidden
                        onChange={ handleImageChange }
                        name="image"

                        // onChange={ ( { target : { files } } ) => {
                        //     if ( files[ 0 ] ) {
                        //         setFileData ( files[ 0 ] );
                        //     }
                        // } }
                    />
                    <div
                        className="rounded-[10px] border-dashed border-[#B5B5B5] border-[5px] p-[3rem] border-spacing-10 xxl:p-[5.5rem]"
                        // style={{
                        //   border: "1px solid transparent",
                        //   borderImage:
                        //     "linear-gradient(to bottom, black 5px, transparent 5px) 1",
                        // }}
                        onClick={ () => document.querySelector ( ".input_field" ).click () }
                    >
                        <img className="" src={ Upload_ } alt="upload button"/>
                        <span className="text-[10px] xxl:text-[14px]">انتخاب تصویر</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-end pl-1 xxl:pl-3">
                <button
                    onClick={ handleDateChange }
                    className="px-3 py-2 bg-[#4D7AD2] text-white rounded-lg font-[700] text-[20px] xxl:text-[24px]"
                >
                    ارسال جهت بررسی
                </button>
            </div>
        </div>
    );
    return newPost ? newPostsContainer : oldPosts;
};
// end
export default Posts;
