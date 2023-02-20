import React, {useContext, useEffect, useState} from "react";
import styles from './style.module.css';
import SmallHero from '../../Components/SmallHero';
import Button from "../../Components/Button";
import language from '../../localization';
import {IoCloudDownload as Download} from 'react-icons/io5';
import MaterialInput from '../../Components/MaterialInput'
import SweetAlert from "../../Components/SweetAlert";
import serverPath from "../../utils/serverPath";
import useStore from "../../store/store";
import Loader from '../../Components/Loader';
import {AuthContext} from '../../authContext';
import { useNavigate } from "react-router-dom";
const Library = (props) =>
{

  const [globalState] = useStore();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate()

  const {
    token,
    loading,
    login,
    student
  } = authContext;

  const {heros} = globalState;

  const isRTL = (language.getLanguage() === 'ps');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(loading);
  const [findBook, setFindBook] = useState({
    searchBy: "id",
    searchBook: "",
  })

  const onChange = (type, value) => 
    setFindBook(prev => ({...prev, [type]: value}));
    
    const myHero = new URL(serverPath(heros?.find(hero => hero.type === "library")?.imagePath || "")).href;

  const searchHandler = async () =>
  {
    if(isLoading || books.find(book => book[findBook.searchBy] === findBook.searchBook) || !login || !token || !student?._id)
      return;
    if(findBook.searchBook.length <= "" || findBook.searchBy.length <= 0)
      return SweetAlert("info", "Please Fill All The inputs");
    if(['id', 'name'].findIndex((per => per === findBook.searchBy)) < 0)
      return SweetAlert("info", "You only can search by book id or it's name");

    try {
      setIsLoading(true)
      const response = await(await fetch(serverPath('/library/find'), {
        method: "POST",
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify(findBook)
      })).json();


      if(response.status === "failure")
        SweetAlert("info", response.message);

      if(response.status === "success")
        setBooks(response.data)

      setIsLoading(false);
      
    } catch (error) {
      setIsLoading(false);
        SweetAlert("error", error.message);
    }
  }


  return (
    <div className={styles.library}>
      <SmallHero title={language.online_library} image={myHero} style={{backgroundPosition: "bottom", textShadow: "1px 1px 3px black"}} bgAnimation={true}/>
      <div className={[styles.libraryWrapper, "w-controller"].join(" ")}>
        {isLoading && (
          <Loader message="Fetching Books..." className={styles.loader} />
        )}
        <div className={styles.libraryTitle}>
          {login && token && student?._id
          ?
          <p>You can search Book by it's name or id</p>
          :
          <p>Please Login To Your Portal Account</p>
        }
        </div>
        {login && token && student?._id ?
        <div className={styles.libraryContent}>
          <div className={styles.libraryInputs}>
              <MaterialInput
                  label={"Search By *"}
                  placeholder={"SearchBy(ID or NAME)"}
                  id="id"
                  type="select"
                  options={['id', 'name']}
                  select={findBook.searchBy}
                  onChange={(e) => {
                    onChange("searchBy", e.target.value)
                  }}
                  value={findBook.searchBy}
                  />
              <MaterialInput
                    label={"Search Book *"}
                    placeholder={"SearchBook *"}
                    id="searchBook"
                    onChange={(e) => {
                      onChange("searchBook", e.target.value)
                    }}
                    value={findBook.searchBook}
                    />
            <div className={styles.inputGroupBtn}>
              <Button label="Search" onClick={searchHandler} />
            </div>
          </div>
          <div className={styles.booksList}>
          {books.length <= 0 ?
            <p className="msg" style={{color: "#0080d6"}}>{language.nothing_to_show}</p>
            :
            books.map(book => (
            <div className={[styles.book, (isRTL && styles.rtlBook)].join(" ")} key={book._id}>
              <div className={styles.bookImage}>
                <img src={serverPath(book.imagePath)} alt="book image" />
              </div>
              <div className={styles.bookContent}>
                <div className={styles.bookId}>
                  <p>ID: </p>
                  <p>{book.id}</p>
                </div>
                <div className={styles.bookName}>
                  <p>Book Name: </p>
                  <p>{isRTL ? book.pName: book.name}</p>
                </div>
                <div className={styles.bookAuthor}>
                  <p>Author: </p>
                  <p>{isRTL ? book.pAuthor: book.author}</p>
                </div>
              </div>
              <div className={[styles.downloadLink, (isRTL && styles.rtlLink)].join(' ')}>
                <div className={styles.linkContent}>
                  <p><Download /></p>
                  <a href={serverPath(book.filePath)} download={book.name + book.pName + ".pdf"}>Download</a>
                </div>
              </div>
            </div>
            ))
          }
          </div>
        </div>
        :
        <div className={styles.inputGroupBtn}>
          <Button label="Login To Portal" onClick={() => {
            navigate('/students/student_portal')
          }} 
            style={{maxWidth: '400px' , margin: "20px auto", justifySelf: "center", display: "block"}}
          />
        </div>
        }
        
      </div>
    </div>
  )
} 



export default Library;