import Navbar from '../../components/common/Navbar/Navbar'
import { useContext , useEffect  , useState } from 'react';
import Menu from '../../components/PostsPage/Menu';
import Posts from '../../components/PostsPage/Posts';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { CharityContext } from "../../context/CharityContext";
import { PageContext } from "../../context/PageProvider"
import Paging from '../../components/PostsPage/Paging';
import { SearchContext } from "../../context/SearchContext";
import { CatidContext } from "../../context/CatidContext";
import BASE_URL, { CHARITY } from '../../Config/ApiConfig';
import adBlockerHandler from "../../helper/adBlockerHandler";
import Search from '../../components/PostsPage/Search';

const PostsPage = () => {

    // variables
    const [ itemsInfo , setItemsInfo ] = useState ( { total_objects : 0 , total_pages : 0 } )
    const { catid , setCatid } = useContext ( CatidContext );
    const categories = [
        {
            id: 6,
            name: "حوادث طبیعی"
        },
        {
            id: 7,
            name: "کسب و کار"
        },
        {
            id: 8,
            name: "ازدواج"
        },
        {
            id : 1 ,
            name : "حیوانات"
        } ,
        {
            id : 2 ,
            name : "آموزشی"
        } ,
        {
            id : 4 ,
            name : "پزشکی"
        } ,
        {
            id : 5 ,
            name : "محیط زیست"
        } ,
        {
            id : 3 ,
            name : "سایر"
        } ,
    ];
    const [ type , setType ] = useState ( "default" );
    const [ isMenuOpen , setIsMenuOpen ] = useState ( false );

    const { charity , setCharity } = useContext ( CharityContext );
    const { search , setSearch } = useContext ( SearchContext );
    const { pageNumber , setPageNumber } = useContext ( PageContext )
    let number = useParams ();
    const navigate = useNavigate()
    
    useEffect ( (e) => {
        let pNumber = 0
        console.log('useEffect', e);
        
        if ( Number ( number.page ) === 1 ) {
            pNumber = 1
        } else {
            pNumber = Number ( number.page )
        }
        setPageNumber ( pNumber )
        
    } , [ number.page] )

    useEffect(() => {
        
        let url;
        url = BASE_URL + CHARITY.ADS
        if ( search ) {
            url = url + `?search=${ search }&page=${pageNumber}`
        } else if ( catid ) {
            url = url + `?category=${catid}&page=${pageNumber}`
        } else {
            url = url + `?page=${ pageNumber }`
        }
        
        
        axios ( {
            method : "get" ,
            url : url ,
        } )
            .then ( function ( response ) {
                setCharity ( response.data.results )
                setItemsInfo ( {
                    total_objects : response.data.total_objects ,
                    total_pages : response.data.total_pages
                } )
            } )
            .catch ( function ( error ) {
                adBlockerHandler(error)

            } );
    }, [pageNumber, catid, search])

    useEffect(() => {
        
                if (!search && !catid) {
                    navigate('/posts/1')
                }
                if (catid) {
                    setSearch("")
                    navigate("/posts/1")
                    }

    }, [catid ])


    useEffect(() => {
        console.log('in search use effect');
        if (!search && !catid) {
            console.log('goging to page1');
            navigate('/posts/1')
        }
        if ( search ) {
            setCatid("")
            navigate('/posts/1')
        }
        
    }, [search])
    return (
        <>
            <Navbar dark={ true }/>
            <Search
                type={ type }
                setIsMenuOpen={ setIsMenuOpen }
            />
            <Menu
                isMenuOpen={ isMenuOpen }
                setIsMenuOpen={ setIsMenuOpen }
                categories={ categories }
            />

            <div className='flex justify-center'> <Posts posts={ charity } page={ pageNumber }/> </div>
            <Paging total_pages={ itemsInfo.total_pages }
                    page={ pageNumber }
                    total_objects={ itemsInfo.total_objects }/>


        </>
    )
};


export default PostsPage;
