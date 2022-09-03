import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components/macro";
import StartPage from "../Account/StartPage";
import bookCoverImg from "../../assets/book.png";
import { TiHeartOutline, TiZoom } from "react-icons/ti";
import { BsDownload } from "react-icons/bs";
import { GrLanguage, GrDocumentDownload } from "react-icons/gr";
import { Link } from "react-router-dom";

const SearchPage = () => {
  let API_URL = `https://gutendex.com/books`;

  const [searchBook, setSearchBook] = useState("");
  const onInputChange = (e) => {
    setSearchBook(e.target.value);
  };

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const searchURL = new URL(`?search=${searchBook}`, API_URL);
    const result = await axios.get(searchURL);
    console.log(result.data.results);

    const filteredBooks = result.data.results.map((book) => {
      const [{ name: authorName }] = book.authors;
      const cover = book.formats["image/jpeg"];
      const fileHtml = book.formats["text/html"];
      const subjects = book.subjects
        .map((subject) => {
          return <ParagraphSubjects>{subject}</ParagraphSubjects>;
        })
        .slice(0, 3);
      const downloads = book.download_count;
      const languages = book.languages;
      console.log(fileHtml);

      return {
        id: book.id,
        title: book.title,
        author: authorName,
        cover,
        fileHtml,
        subjects,
        downloads,
        languages,
      };
    });

    console.log(filteredBooks);
    setBooks(filteredBooks);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  const actionLogin = "Find a book!";
  const formLogin = (
    <SearchForm onSubmit={onSubmitHandler}>
      <label>
        <input
          type="search"
          placeholder="Search for book - title or author"
          value={searchBook}
          onChange={onInputChange}
        />
        <button type="submit">
          <TiZoom />
        </button>
      </label>
    </SearchForm>
  );

  return (
    <main>
      <StartPage paragraph="" action={actionLogin} form={formLogin} />
      <UlStyled>
        {books.map((book) => {
          console.log(book);
          return (
            <LiStyled key={book.id}>
              <ImgContainer>
                {(book.cover && <img srcSet={book.cover} alt="" />) || (
                  <img srcSet={bookCoverImg} alt="" />
                )}
              </ImgContainer>
              <DivMax>
                <div>
                  <h2>
                    <LinkStyled to={`/book/${book.id}`} title={book.title}>
                      {book.title}
                    </LinkStyled>
                  </h2>
                  {book.author && <h3>{book.author || `Author unknown`}</h3>}

                  <p className="light">
                    <span>
                      <GrLanguage />
                    </span>
                    {book.languages}
                  </p>
                  <p className="light">
                    <span>
                      <GrDocumentDownload />
                    </span>
                    {book.downloads} times
                  </p>
                  {book.subjects}
                </div>

                <div className="linksContainer">
                  <ExternalLink className="start" href={book.fileHtml}>
                    Read now!
                  </ExternalLink>
                  <ExternalLink brown href="/">
                    <BsDownload />
                  </ExternalLink>
                </div>
              </DivMax>
            </LiStyled>
          );
        })}
      </UlStyled>
    </main>
  );
};

export default SearchPage;

const DivMax = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0.4rem 1rem;
  display: flex;
  position: relative;
  flex-direction: column;

  div:first-of-type {
    margin-bottom: 80px;
  }

  h2 {
    margin: 0;
  }

  a {
    text-decoration: none;
  }
  @media screen and (max-width: 576px) {
    margin: 0 auto;
  }
  p {
    margin: 0.2rem;
    font-size: 0.725rem;
    padding-right: 8px;
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }

    &.light {
      padding-right: 8px;
      display: inline-flex;
      color: #aaa69a;
      font-weight: 600;
      align-items: center;
    }
    span {
      margin-right: 4px;

      color: #aaa69a;
    }
  }
  path {
    stroke: #aaa69a;
  }

  .linksContainer {
    display: flex;
    margin: 0.4rem 0;
    position: absolute;
    bottom: 0;
    right: 0;
    a {
      margin: 0.2rem;
      padding: 0.6rem;
      /* min-width: 30px; */
      font-size: 0.8rem;

      @media screen and (min-width: 786px) {
        font-size: 1rem;
      }
    }
  }
`;

const SearchForm = styled.form`
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    flex-direction: column;
    position: relative;

    @media screen and (min-width: 992px) {
      flex-direction: row;
    }

    input {
      position: relative;
      padding: 0.6rem;
      border-radius: 50px;
      border: 2px solid var(--brown);
      width: 200px;
      width: 100%;

      @media screen and (min-width: 992px) {
        width: 400px;
      }
      &::placeholder {
        font-family: "Noto Sans", sans-serif;
        color: var(--brown);
      }
    }
    button[type="submit"] {
      position: absolute;
      right: 0;
      bottom: 0;
      border-radius: 0 50px 50px 0;
      background-color: var(--main-light);
      font-family: "Pacifico", cursive;
      color: var(--brown);
      font-size: 1.2rem;
      cursor: pointer;
      border-right: 2px solid var(--brown);
      border-top: 2px solid var(--brown);
      border-bottom: 2px solid var(--brown);
      border-left: none;
      text-align: center;
      width: 47px;
    }
  }
`;

const LiStyled = styled.li`
  display: flex;
  background-color: var(--white);
  border-radius: 20px;
  padding: 1rem;
  width: auto;
  list-style-type: none;
  box-shadow: var(--shadow);
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 0px;
  margin-bottom: 1rem;

  @media screen and (min-width: 567px) {
    flex-direction: row;
    text-align: left;
  }

  h3 {
    color: var(--main-color);
    margin: 0.2rem 0;
    font-size: 1rem;
    font-family: "Noto Sans", sans-serif;
    font-weight: 500;

    @media screen and (min-width: 786px) {
      font-size: 1.5rem;
    }
  }

  span {
    color: var(--light-brown);
    font-family: "Noto Sans", sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  width: 40%;
  margin: 0;

  & img {
    object-fit: fill;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    @media screen and (max-width: 576px) {
      max-height: 240px;
    }
  }
`;
const LinkStyled = styled(Link)`
  color: var(--brown);
  font-size: 1.2rem;
  margin: 0;
  font-family: "Noto Sans", sans-serif;
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  width: 100%;
  overflow: hidden;
  -webkit-box-orient: vertical;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 786px) {
    font-size: 2rem;
  }
`;

const ParagraphSubjects = styled.p`
  color: var(--light-brown);
  font-size: 0.9rem;
  font-weight: 400;
`;

const UlStyled = styled.ul`
  padding: 1rem;
  margin: 0;
`;

const ExternalLink = styled.a`
  padding: 0.4rem;
  background-color: ${(props) =>
    props.brown ? "var(--brown)" : "var(--main-color)"};
  color: ${(props) => (props.brown ? "var(--white)" : "var(--brown)")};
  border: ${(props) =>
    props.brown ? "2px solid var(--brown)" : "2px solid var(--main-color)"};
  font-size: 1rem;
  border-radius: 50px;
  box-shadow: var(--shadow);
  text-align: center;
  cursor: pointer;
  /* min-width: 20px; */
  text-decoration: none;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.brown ? "var(--light-brown)" : "var(--main-light)"};
    color: ${(props) => (props.brown ? "var(--white)" : "var(--brown)")};
    border: ${(props) =>
      props.brown
        ? "2px solid var(--light-brown)"
        : "2px solid var(--main-light)"};
  }

  @media screen and (min-width: 992px) {
    font-size: 1rem;
    margin: 0.5rem 0.5rem 1.5rem 0.5rem;
  }
`;
