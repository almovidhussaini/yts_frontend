import React, {useState,useEffect} from 'react';
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';

import '../../pages/browseMovies/BrowseMovies.css';
import ShowSingleMovie from '../../components/browseMovies/ShowSingleMovie.js';
import { getBrowseMovies }  from  '../../reduxSlice/MoviesSlice';
import { useSelector , useDispatch } from 'react-redux';


const BrowseMovies = () => {

    const [searchInput,setSearchInput] = useState('');
    const [ limitPagination , setLimitPagination ] = useState(1)
    const [visitedPagination , setVisitedPagination ] = useState(0);

    


         const dispatch = useDispatch();
         const search = useLocation().search;
         const myPageNumber = parseInt(new URLSearchParams(search).get("page"));


    useEffect(() => {
       
        dispatch(getBrowseMovies(myPageNumber))
     
      myPageNumber < 8 ? setLimitPagination(1) : setLimitPagination(myPageNumber-3)
      setVisitedPagination(parseInt(new URLSearchParams(search).get("page"))) //copying page number into a state 
    },[])

    
    var myMovies = useSelector((state) => state.movies.browseMovieData);


    const qualityOptions = [
        { 
            value:480,
             label:'480px'
         },

         { 
            value:720,
             label:'720px'
         },
         { 
            value:1080,
             label:'1080px'
         }

    ]

    const handleChange = () => {
        console.log('hanldeChange')
    }

    const handleSearchButton = (e) => {
        e.preventDefault();
        console.log('handle button')

    }

    return (
    <div className="mainBody">

         <h4 style={{paddingTop:'2rem',marginLeft:'14rem', color:'#5a5a5a' }} >Search Term: </h4>
         <div style={{display: 'flex',justifyContent: 'center',gap:'2rem', margin:'1rem'}} >
         
             <Form  
                      onChange={e=>setSearchInput(e.target.value)} value={searchInput}>
                      <Form.Group className="mb -3" controlId="formBasicEmail">
                      <Form.Control type="text" size="lg" style={{border:'none' ,width:'50rem', backgroundColor:'#282828'}} />
                      </Form.Group>
             </Form>
                 <Button variant="success" type="submit" onClick={handleSearchButton}>
        Search
      </Button>
         </div>

         <div id='selectButtons' style={{ display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent:'center', gap:'1.5rem', marginBottom:'3rem', marginRight:'5rem' }} >
            <div className="form_control" >
                <p style={{color:'#5a5a5a'}} >Quality</p>
                <select name="quality" >
                        <option value="all">All</option>
                        <option value="480p">480p</option>
                        <option value="720p">720p</option>
                        <option value="1080p">1080p</option>
                        <option value="2160p">2160p</option>
                        <option value="3D">3D</option>
                   </select>

            </div> 
            <div className="form_control">
               <p style={{color:'#5a5a5a'}}>Genrey</p>
                                 <select name="genre">
                                <option value="all">All</option>
                                <option value="action">Action</option>
                                <option value="adventure">Adventure</option>
                                <option value="animation">Animation</option>
                                <option value="biography">Biography</option>
                                <option value="comedy">Comedy</option>
                               <option value="crime">Crime</option>
                                  <option value="documentary">Documentary</option>
                                <option value="drama">Drama</option>
                                <option value="history">History</option>
                                <option value="family">Family</option>
                                <option value="fantasy">Fantasy</option>
                               <option value="film-noir">Film-Noir</option>
                               <option value="game-show">Game-Show</option>
                             <option value="horror">Horror</option> 
                              <option value="music">Music</option>
                              <option value="musical">Musical</option>
                             <option value="mystery">Mystery</option>
                             <option value="news">News</option>
                             <option value="reality-tv">Reality-TV</option>
                             <option value="romance">Romance</option>
                             <option value="sci-fi">Sci-Fi</option>
                             <option value="sport">Sport</option>
                             <option value="talk-show">Talk-Show</option>
                             <option value="thriller">Thriller</option>

                             <option value="war">War</option>
                             <option value="western">Western</option>
                    </select>
                
            </div>
              
              <div className="form_control">
                <p style={{color:'#5a5a5a'}} >Rating</p>
                <select name="rating">
                          <option value="9">9+</option>
                          <option value="8">8+</option>
                          <option value="0">All</option>
                          <option value="7">7+</option>
                          <option value="6">6+</option>
                          <option value="5">5+</option>
                          <option value="4">4+</option>
                          <option value="3">3+</option>
                          <option value="2">2+</option>
                          <option value="1">1+</option>
                          </select>
             </div>

             <div className="form_control">
                <p style={{color:'#5a5a5a'}}>Yearly</p>
                <select name="year">
                                     <option value="2023">2023</option>
                                     <option value="2022">2022</option>
                                     <option value="0">All</option>
                                     <option value="2021">2021</option>
                                     <option value="2020">2020</option>
                                     <option value="2019">2019</option>
                                     <option value="2015-2018">2015-2018</option>
                                     <option value="2010-2014">2010-2014</option>
                                     <option value="2000-2009">2000-2009</option>
                                     <option value="1990-1999">1990-1999</option>
                                     <option value="1980-1989">1980-1989</option>
                                     <option value="1970-1979">1970-1979</option>
                                     <option value="1950-1969">1950-1969</option>
                                     <option value="1900-1949">1900-1949</option>
                                     </select>                                     
             </div>

                         <div className="form_control">
                                             <p style={{color:'#5a5a5a'}}>Languages:</p>
                                                    <select name="language">
                                    <option value="en">English</option>
                                    <option value="foreign">Foreign</option>
                                    <option value="all" selected="selected">All</option>
                                    <option value="fr">French (2410)</option>
                                    <option value="ja">Japanese (2189)</option>
                                    <option value="es">Spanish (1266)</option>
                                    <option value="it">Italian (1151)</option>
                                    <option value="de">German (927)</option>
                                    <option value="zh">Chinese (794)</option>
                                    <option value="ko">Korean (758)</option>
                                    <option value="cn">Cantonese (661)</option>
                                    <option value="hi">Hindi (493)</option>
                                    <option value="sv">Swedish (317)</option>
                                    <option value="ru">Russian (314)</option>
                                    <option value="pt">Portuguese (304)</option>
                                    <option value="pl">Polish (252)</option>
                                    <option value="th">Thai (195)</option>
                                    <option value="da">Danish (171)</option>
                                    <option value="nl">Dutch (154)</option>
                                    <option value="tr">Turkish (126)</option>
                                    <option value="no">Norwegian (122)</option>
                                    <option value="ar">Arabic (111)</option>
                                    <option value="vi">Vietnamese (106)</option>
                                    <option value="fi">Finnish (95)</option>
                                    <option value="ta">Tamil (91)</option>
                                    <option value="hu">Hungarian (80)</option>
                                    <option value="cs">Czech (78)</option>
                                    <option value="te">Telugu (75)</option>
                                    <option value="fa">Persian (62)</option>
                                    <option value="id">Indonesian (59)</option>
                                    <option value="tl">Tagalog (42)</option>
                                    <option value="he">Hebrew (37)</option>
                                    <option value="el">Greek (36)</option>
                                    <option value="et">Estonian (35)</option>
                                    <option value="uk">Ukrainian (33)</option>
                                    <option value="ro">Romanian (27)</option>
                                    <option value="bn">Bangla (19)</option>
                                    <option value="ca">Catalan (19)</option>
                                    <option value="ur">Urdu (19)</option>
                                    <option value="ml">Malayalam (18)</option>
                                    <option value="ms">Malay (17)</option>
                                    <option value="is">Icelandic (13)</option>
                                    <option value="sk">Slovak (12)</option>
                                    <option value="sr">Serbian (10)</option>
                                    <option value="xx">xx (9)</option>
                                    <option value="lv">Latvian (8)</option>
                                    <option value="pa">Punjabi (7)</option>
                                    <option value="af">Afrikaans (6)</option>
                                    <option value="eu">Basque (6)</option>
                                    <option value="kn">Kannada (6)</option>
                                    <option value="ka">Georgian (6)</option>
                                    <option value="gl">Galician (6)</option>
                                    <option value="wo">Wolof (6)</option>
                                    <option value="lt">Lithuanian (6)</option>
                                    <option value="mk">Macedonian (5)</option>
                                    <option value="mr">Marathi (5)</option>
                                    <option value="am">Amharic (5)</option>
                                    <option value="bo">Tibetan (5)</option>
                                    <option value="hr">Croatian (5)</option>
                                    <option value="ga">Irish (4)</option>
                                    <option value="sh">Serbo-Croatian (4)</option>
                                    <option value="sl">Slovenian (4)</option>
                                    <option value="bs">Bosnian (3)</option>
                                    <option value="km">Khmer (3)</option>
                                    <option value="sw">Swahili (3)</option>
                                    <option value="ps">Pashto (3)</option>
                                    <option value="st">Southern Sotho (3)</option>
                                    <option value="hy">Armenian (3)</option>
                                    <option value="ku">Kurdish (3)</option>
                                    <option value="yo">Yoruba (3)</option>
                                    <option value="yue">Cantonese (3)</option>
                                    <option value="la">Latin (2)</option>
                                    <option value="mn">Mongolian (2)</option>
                                    <option value="yi">Yiddish (2)</option>
                                    <option value="ak">Akan (2)</option>
                                    <option value="az">Azerbaijani (2)</option>
                                    <option value="zu">Zulu (2)</option>
                                    <option value="mt">Maltese (2)</option>
                                    <option value="kk">Kazakh (2)</option>
                                    <option value="sq">Albanian (2)</option>
                                    <option value="cmn">cmn (2)</option>
                                    <option value="zxx">No linguistic content (2)</option>
                                    <option value="gu">Gujarati (2)</option>
                                    <option value="my">Burmese (2)</option>
                                    <option value="bg">Bulgarian (2)</option>
                                    <option value="ab">Abkhazian (1)</option>
                                    <option value="nb">Norwegian Bokmål (1)</option>
                                    <option value="os">Ossetic (1)</option>
                                    <option value="aa">Afar (1)</option>
                                    <option value="mi">Maori (1)</option>
                                    <option value="lb">Luxembourgish (1)</option>
                                    <option value="ky">Kyrgyz (1)</option>
                                    <option value="ht">Haitian Creole (1)</option>
                                    <option value="so">Somali (1)</option>
                                    <option value="iu">Inuktitut (1)</option>
                                    <option value="lg">Ganda (1)</option>
                                    <option value="be">Belarusian (1)</option>
                                    <option value="ig">Igbo (1)</option>
                                    <option value="cy">Welsh (1)</option>
                                    <option value="fil">Filipino (1)</option>
                                    <option value="xh">Xhosa (1)</option>
                                    <option value="tw">Twi (1)</option>
                                    <option value="rw">Kinyarwanda (1)</option>
                                    <option value="or">Odia (1)</option>
                                    <option value="ase">American Sign Language (1)</option>
                                    <option value="nan">Min Nan Chinese (1)</option>
                                    <option value="ber">ber (1)</option>
                                    <option value="qag">qag (1)</option>
                                    <option value="gsw">Swiss German (1)</option>
                                    <option value="ne">Nepali (1)</option>
                                    <option value="ln">Lingala (1)</option>
                                    <option value="iba">Iban (1)</option>
                                    <option value="cr">Cree (1)</option>
                                    </select>
            </div>
            <div className="form_control"> 
                <p style={{color:'#5a5a5a'}}>  Order By: </p>
                <select name="order_by">
                     <option value="latest">Latest</option>
                     <option value="oldest">Oldest</option>
                     <option value="featured">Featured</option>
                     <option value="seeds">Seeds</option>
                     <option value="peers">Peers</option>
                     <option value="year">Year</option>
                     <option value="rating">IMDb Rating</option>
                     <option value="likes">YTS Likes</option>
                     <option value="rt_audience">RT Audience</option>
                     <option value="alphabetical">Alphabetical</option>
                     <option value="downloads">Downloads</option>
                     </select>
            </div>
         </div>
         
         <div id="YIFY_MOVIES">
            <label   style ={{ color: '#6ac045' ,fontSize:'1.4em'}}> YIFY Movies - page { myPageNumber }</label>
            <div className="hidden-sm hidden-xs">
                <ul className="tsc_pagination">
                   <li className="hidden"><a href="">«</a></li>
                   <li><a href={`/browse-movies?page=${limitPagination}`} className={visitedPagination === limitPagination?'active':'' } > {limitPagination } </a></li>
                   <li><a href={`/browse-movies?page=${limitPagination+1}`}  className={visitedPagination === limitPagination+1 ? 'active':'' } > {limitPagination+1 } </a></li>
                   <li><a href={`/browse-movies?page=${limitPagination+2}`}   className={visitedPagination === limitPagination+2 ? 'active':'' } > {limitPagination+2 } </a></li>
                   <li><a href={`/browse-movies?page=${limitPagination+3}`}  className={visitedPagination === limitPagination+3 ? 'active':'' } > {limitPagination+3 }</a></li>
                   <li><a href={`/browse-movies?page=${limitPagination+4}`}  className={visitedPagination === limitPagination+4 ? 'active':'' } > {limitPagination+4 }</a></li>
                   <li><a href={`/browse-movies?page=${limitPagination+5}`}   className={visitedPagination === limitPagination + 5 ? 'active':'' } > {limitPagination+5 }</a></li>
                   <li><a href={`/browse-movies?page=${limitPagination+6}`}   className={visitedPagination === limitPagination + 6 ? 'active':'' } > {limitPagination+6 }</a></li>
                   <li><a href={`/browse-movies?page=${limitPagination+7}`}  className={visitedPagination === limitPagination +7 ?'active':'' }  > {limitPagination+7 }</a></li>
                   <li className="unavailable">...</li>
                   <li><a href={`/browse-movies?page=${visitedPagination+1}`} > Next »</a></li>
                </ul>
            </div>
        </div>
        <div className="showSingleMovie">
        {
            myMovies.map((movie, index)=>{
                return <ShowSingleMovie movie = {movie} />
            })
        }
        </div>
      </div>
    )
}

export default BrowseMovies


