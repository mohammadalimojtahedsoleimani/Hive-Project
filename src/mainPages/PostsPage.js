import Navbar from '../components/common/Navbar/Navbar'
import { forwardRef , useContext , useEffect , useImperativeHandle , useState } from 'react';
import Filter from '../components/PostsPage/Filter';
import Menu from '../components/PostsPage/Menu';
import Posts from '../components/PostsPage/Posts';
import Image from '../images/LandingPage/selected_posts_image_2.png'
import axios from "axios";
import { getCharity } from "../services/api";
import CharityPost from "./charityPost";
import PostCard from "../components/common/PostCard/PostCard";
import { useParams } from "react-router-dom";
import { CharityContext } from "../context/CharityContext";
import { PageContext } from "../context/PageProvider"
import { PropagateLoader } from "react-spinners";
import { Bars } from "react-loader-spinner";
import Paging from '../components/PostsPage/Paging';

const posts = [
    {
        id : 0 ,
        image : Image ,
        name : 'John Doe' ,
        date : '2022-01-01' ,
        title : 'Project A' ,
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ,
        collected : 500 ,
        target : 1000 ,
    } ,
    {
        id : 1 ,
        image : Image ,
        name : 'Jane Smith' ,
        date : '2022-02-01' ,
        title : 'Project B' ,
        description : 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' ,
        collected : 750 ,
        target : 1500 ,
    } ,
    {
        id : 2 ,
        image : Image ,
        name : 'Bob Johnson' ,
        date : '2022-03-01' ,
        title : 'Project C' ,
        description : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,
        collected : 1000 ,
        target : 2000 ,
    } ,
    {
        id : 3 ,
        image : Image ,
        name : 'Bob Johnson' ,
        date : '2022-03-01' ,
        title : 'Project C' ,
        description : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,
        collected : 1000 ,
        target : 2000 ,
    } ,
    {
        id : 4 ,
        image : Image ,
        name : 'Bob Johnson' ,
        date : '2022-03-01' ,
        title : 'Project C' ,
        description : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,
        collected : 1000 ,
        target : 2000 ,
    } ,
    {
        id : 5 ,
        image : Image ,
        name : 'Bob Johnson' ,
        date : '2022-03-01' ,
        title : 'Project C' ,
        description : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' ,
        collected : 1000 ,
        target : 2000 ,
    } ,
    // Add more objects as needed
];
const PostsPage = ( props ) => {

    // variables
    const [ page , setPage ] = useState ( 1 )
    const [itemsInfo , setItemsInfo] = useState({total_objects: 0, total_pages:0})

    const types = [
        "default" ,
        "search" ,
        "عام المنفعه" ,
        "آموزشی" ,
        "حیوانات" ,
        "محیط زیست" ,
        "کسب و کار" ,
        "پزشکی" ,
        "مراسم ختم" ,
        "اورژانسی" ,
        "عوام" ,
        "رقابتی" ,
        "خلاقانه" ,
        "آرزو ها" ,
        "ایمان" ,
        "سفر" ,
        "سایر" ,
    ];
    const [ type , setType ] = useState ( "default" );
    const [ isMenuOpen , setIsMenuOpen ] = useState ( false );
    // const [ data , setData ] = useState ( {
    //     id : 1 ,
    //     image : "" ,
    //     title : "" ,
    //     raiser : 1 ,
    //     snippet : "" ,
    //     content : "" ,
    //     category : 1 ,
    //     status : true ,
    //     relative_url : "" ,
    //     absolute_url : "" ,
    //     estimated_amount : 0 ,
    //     collected_amount : 0 ,
    //     published_date : ""
    // } )
    const { charity , setCharity } = useContext ( CharityContext )
    const { pageNumber , setPageNumber } = useContext ( PageContext )
    let number = useParams ();
    let pNumber = 0
    // functions
    useEffect ( () => {
        let url;
        if ( Number ( number.page ) === 1 ) {
            pNumber = 1
        } else {
            pNumber = Number ( number.page )
        }
        url = `http://127.0.0.1:8000/charity/api/v1/ads/?page=${ pNumber }`;
        // axios.get ( url )
        //     .then ( ( response ) => {
        //         console.log ( response.data.results )
        //         setCharity ( response.data.results )
        //         console.log ( number )
        //         console.log ( response )
        //     } )




            axios({
                method: "get",
                url: `http://127.0.0.1:8000/charity/api/v1/ads/?page=${ pNumber }`,
                // data: fileData,
                // headers: {
                //   "Content-Type": "multipart/form-data",
                // },
            })
                .then(function (response) {
                console.log(response.data)
                //   setSheetNumber(response.data["id"]);
                setCharity ( response.data.results )
                setPage(response.data.current_page)
                setPageNumber ( Number ( number.page ) )
                setItemsInfo({total_objects:response.data.total_objects, total_pages:response.data.total_pages})
                //   toast.success("!آپلود شد", {
                //     position: toast.POSITION.TOP_LEFT,
                //   });
                console.log ( response )
                //   navigate("/words");
                })
                .catch(function (error) {
                    console.log(error)
                //   const response = error.request.responseText;
                //   toast.error(response === "" ? error.message : response, {
                //     position: toast.POSITION.TOP_LEFT,
                //   });
                });







        
        console.log ( typeof number.page )

        console.log ( charity )
    } , [ charity , page ] )

    const handleType = () => {
    }
    const handleNextPage = () => {
    }
    return (
        <>
            <Navbar dark={ true }/>
            {/*<div>*/}

            {/*    {*/}
            {/*        charity.length === 0 && <Bars*/}
            {/*            height="80"*/}
            {/*            width="80"*/}
            {/*            color="#4fa94d"*/}
            {/*            ariaLabel="bars-loading"*/}
            {/*            wrapperStyle={{}}*/}
            {/*            wrapperClass=""*/}
            {/*            visible={true}*/}
            {/*        />*/}

            {/*    }*/}
            {/*</div>*/}
            <Filter
                type={ type }
                handleType={ handleType }
                setIsMenuOpen={ setIsMenuOpen }
            />
            <Menu
                isMenuOpen={ isMenuOpen }
                setIsMenuOpen={ setIsMenuOpen }
                types={ types }
            />
            {/* { charity.map ( ( item ) =>
                <PostCard posts={ item } key={ item.id }/>
            ) } */}
            {charity && <Posts posts={ charity } page={ page } onNextPage={ handleNextPage }/>}
            <Paging total_pages={itemsInfo.total_pages}
  page={page}
  total_objects={itemsInfo.total_objects}/>


        </>
    )
};


export default PostsPage;
