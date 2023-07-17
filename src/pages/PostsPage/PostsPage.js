import Navbar from '../../components/common/Navbar/Navbar'
import { useContext , useEffect  , useState } from 'react';
import Filter from '../../components/PostsPage/Filter';
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

const PostsPage = ( props ) => {

    // variables
    const [ page , setPage ] = useState ( 1 )
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
    let pNumber = 0

    useEffect ( (e) => {
        console.log('useEffect', e);
        let url;
        if ( Number ( number.page ) === 1 ) {
            pNumber = 1
        } else {
            pNumber = Number ( number.page )
        }
       
        url = BASE_URL + CHARITY.ADS
        if ( search ) {
            if (catid) {
                setCatid("")
            }
            url = url + `?search=${ search }`
        } else if ( catid ) {
            url = url + `?category=${catid}&page=${pNumber}`
        } else {
            url = url + `?page=${ pNumber }`
        }
        
        
        axios ( {
            method : "get" ,
            url : url ,
        } )
            .then ( function ( response ) {
                //   setSheetNumber(response.data["id"]);
                setCharity ( response.data.results )
                setPage ( response.data.current_page )
                setPageNumber ( Number ( number.page ) )
                setItemsInfo ( {
                    total_objects : response.data.total_objects ,
                    total_pages : response.data.total_pages
                } )
                //   toast.success("!آپلود شد", {
                //     position: toast.POSITION.TOP_LEFT,
                //   });
                //   navigate("/words");
            } )
            .catch ( function ( error ) {
                adBlockerHandler(error)
                console.log('this is error: ' ,error)
                //   const response = error.request.responseText;
                //   toast.error(response === "" ? error.message : response, {
                //     position: toast.POSITION.TOP_LEFT,
                //   });
            } );


    } , [ number.page, search  ] )

    useEffect(() => {
        
            pNumber = 1
            
                // navigate(BASE_URL + CHARITY.ADS + `?category=${catid}&page=${pNumber}`)
                let url = BASE_URL + CHARITY.ADS
                if (catid !== "") {
                    url += `?category=${catid}&page=${pNumber}`
                } else {

                    if ( search ) {
                        url = url + `?search=${ search }`
                    }
                    else{
                        navigate('/posts/1')
                    }
                    
                }
                
            axios ( {
                        method : "get" ,
                        url :  url,

                    } )
                        .then ( function ( response ) {
                            //   setSheetNumber(response.data["id"]);
                            setCharity ( response.data.results )
                            setPage ( response.data.current_page )
                            setPageNumber ( Number ( number.page ) )
                            setItemsInfo ( {
                                total_objects : response.data.total_objects ,
                                total_pages : response.data.total_pages
                            } )

                        } )
                        .catch ( function ( error ) {
                            console.log ( error )

                        } );

            


    }, [catid])
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
                categories={ categories }
            />

            <div className='flex justify-center'> <Posts posts={ charity } page={ page } onNextPage={ handleNextPage }/> </div>
            <Paging total_pages={ itemsInfo.total_pages }
                    page={ page }
                    total_objects={ itemsInfo.total_objects }/>


        </>
    )
};


export default PostsPage;
