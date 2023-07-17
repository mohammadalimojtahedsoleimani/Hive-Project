import Navbar from '../components/common/Navbar/Navbar'
import { useContext , useEffect  , useState } from 'react';
import Filter from '../components/PostsPage/Filter';
import Menu from '../components/PostsPage/Menu';
import Posts from '../components/PostsPage/Posts';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { CharityContext } from "../context/CharityContext";
import { PageContext } from "../context/PageProvider"
import Paging from '../components/PostsPage/Paging';
import { SearchContext } from "../context/SearchContext";
import { CatidContext } from "../context/CatidContext";
import BASE_URL, { CHARITY } from '../Config/ApiConfig';

const PostsPage = ( props ) => {

    // variables
    // const [ page , setPage ] = useState ( 1 )
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
    

    // useEffect(() => {
    //     url = url + `?page=${ 1 }`
        
        
    //     axios ( {
    //         method : "get" ,
    //         url : url ,
    //     } )
    //         .then ( function ( response ) {
    //             //   setSheetNumber(response.data["id"]);
    //             setCharity ( response.data.results )
    //             setPage ( response.data.current_page )
    //             setPageNumber ( Number ( number.page ) )
    //             setItemsInfo ( {
    //                 total_objects : response.data.total_objects ,
    //                 total_pages : response.data.total_pages
    //             } )
    //             //   toast.success("!آپلود شد", {
    //             //     position: toast.POSITION.TOP_LEFT,
    //             //   });
    //             //   navigate("/words");
    //         } )
    //         .catch ( function ( error ) {
    //             console.log ( error )
    //             //   const response = error.request.responseText;
    //             //   toast.error(response === "" ? error.message : response, {
    //             //     position: toast.POSITION.TOP_LEFT,
    //             //   });
    //         } );
    // },[])
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
                //   setSheetNumber(response.data["id"]);
                setCharity ( response.data.results )
                // setPage ( response.data.current_page )
                // setPageNumber ( Number ( number.page ) )
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
                console.log ( error )
                //   const response = error.request.responseText;
                //   toast.error(response === "" ? error.message : response, {
                //     position: toast.POSITION.TOP_LEFT,
                //   });
            } );
    }, [pageNumber, catid, search])

    useEffect(() => {
        
                if (!search && !catid) {
                    navigate('/posts/1')
                    // window.location.href = "/posts/1"
                }
                let pNumber = 1
                // navigate(BASE_URL + CHARITY.ADS + `?category=${catid}&page=${pNumber}`)
                let url = BASE_URL + CHARITY.ADS
                if (catid) {
                    setSearch("")
                    url += `?category=${catid}&page=${pNumber}`
                    navigate("/posts/1")
                // axios ( {
                //         method : "get" ,
                //         url :  url,

                //     } )
                //         .then ( function ( response ) {
                //             //   setSheetNumber(response.data["id"]);
                //             setCharity ( response.data.results )
                //             setPage ( response.data.current_page )
                //             setPageNumber ( pNumber )
                //             setItemsInfo ( {
                //                 total_objects : response.data.total_objects ,
                //                 total_pages : response.data.total_pages
                //             } )

                //         } )
                //         .catch ( function ( error ) {
                //             console.log ( error )

                //         } );
                    }                
                
                
            

            


    }, [catid ])


    useEffect(() => {
        console.log('in search use effect');
        if (!search && !catid) {
            console.log('goging to page1');
            navigate('/posts/1')
            // window.location.href = "/posts/1"
        }
        let pNumber = 1

        let url = BASE_URL + CHARITY.ADS
        if ( search ) {
            setCatid("")
            url = url + `?search=${ search }&page=${pNumber}`
            navigate('/posts/1')
        // axios ( {
        //     method : "get" ,
        //     url :  url,

        // } )
        //     .then ( function ( response ) {
        //         //   setSheetNumber(response.data["id"]);
        //         setCharity ( response.data.results )
        //         setPage ( response.data.current_page )
        //         setPageNumber ( pNumber )
        //         setItemsInfo ( {
        //             total_objects : response.data.total_objects ,
        //             total_pages : response.data.total_pages
        //         } )

        //     } )
        //     .catch ( function ( error ) {
        //         console.log ( error )

        //     } );
        }
        
    }, [search])
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

            <div className='flex justify-center'> <Posts posts={ charity } page={ pageNumber } onNextPage={ handleNextPage }/> </div>
            <Paging total_pages={ itemsInfo.total_pages }
                    page={ pageNumber }
                    total_objects={ itemsInfo.total_objects }/>


        </>
    )
};


export default PostsPage;
