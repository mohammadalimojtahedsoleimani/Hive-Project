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
import { CharityContext } from "../context/CharityProvider";
import { PageContext } from "../context/PageProvider"

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
    const BASE_URL = "http://127.0.0.1:8000/charity/api/v1/ads/?page=1";

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
    const [ charity , setCharity ] = useState ( [] );
    let number = useParams ();
    let pNumber = 0
    // functions
    useEffect ( () => {
        let url;
        if ( Number(number.page) === 1 ) {
            pNumber = 1
        } else {
            pNumber = Number(number.page)
        }
        url = `http://127.0.0.1:8000/charity/api/v1/ads/?page=${ pNumber }`;
        axios.get ( url )
            .then ( ( response ) => {
                console.log ( response.data.results )
                setCharity ( response.data.results )
                console.log ( number )
            } )
    } , [] )

    const handleType = () => {
    }
    const handleNextPage = () => {
    }
    return (
        <>
            <Navbar dark={ true }/>
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
            { charity.map ( ( item ) =>
                <PostCard posts={ item } key={ item.id }/>
            ) }
            <Posts posts={ posts } page={ page } onNextPage={ handleNextPage }/>


        </>
    )
};


export default PostsPage;
