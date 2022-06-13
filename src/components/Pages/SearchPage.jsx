import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components/macro";
import StartPage from "../Account/StartPage";
import bookCoverImg from "../../assets/book.png";
import { TiHeartOutline } from "react-icons/ti";

const SearchPage = () => {
  let API_URL = `https://gutendex.com/books/`;

  const [searchBook, setSearchBook] = useState("");
  const onInputChange = (e) => {
    setSearchBook(e.target.value);
  };

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}${searchBook}`);
    console.log(result.data.results);

    const filteredBooks = result.data.results.map((book) => {
      const [{ name: authorName }] = book.authors; // const author = book.authors[0]
      const cover = book.formats["image/jpeg"];
      const fileHtml = book.formats["text/html"];
      const subjects = book.subjects
        .map((subject) => {
          return <ParagraphSubjects>{subject}</ParagraphSubjects>;
        })
        .slice(0, 4);
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
        <span>Search for books</span>
        <input
          type="search"
          placeholder="title or author"
          value={searchBook}
          onChange={onInputChange}
        />
        <div>
          <button type="submit">Search</button>
        </div>
      </label>
    </SearchForm>
  );
  const theme = {
    main: "auto",
  };

  const themeLinkPurple = {
    mainBackground: "var(--purple)",
    mainColor: "var(--white)",
    mainBorder: "2px solid var(--purple);",
  };

  const themeLinkBrown = {
    mainBackground: "var(--brown)",
    mainColor: "var(--white)",
    mainBorder: "2px solid var(--brown);",
  };

  const themeDivOrder1 = {
    mainOrder: "1",
    mainWidth: "110%",
  };

  const themeDivOrder2 = {
    mainOrder: "2",
  };

  const themeDivOrder3 = {
    mainOrder: "3",
  };
  return (
    <>
      <StartPage
        spanStyled=""
        paragraph=""
        action={actionLogin}
        form={formLogin}
        formGoogle=""
        option=""
        theme={theme}
      />
      <UlStyled>
        {books.map((book) => {
          console.log(book);
          return (
            <LiStyled key={book.id}>
              <Link to={`/book/${book.id}`}>
                <LinkStyled>{book.title}</LinkStyled>
              </Link>
              <Grid>
                <DivOrder theme={themeDivOrder1}>
                  {(book.author && <h4>{book.author}</h4>) || (
                    <h4>Author unknown</h4>
                  )}
                  <p>
                    Language:
                    <span className="secondColor">{book.languages}</span>
                  </p>
                  <p>
                    Downloaded:
                    <span className="secondColor">{book.downloads} times.</span>
                  </p>
                </DivOrder>
                <DivOrder theme={themeDivOrder3}>
                  <SubjectsContainer className="order-small-3">
                    Main categories: <span>{book.subjects}</span>
                  </SubjectsContainer>
                </DivOrder>
                <DivOrder theme={themeDivOrder2}>
                  <ImgContainer>
                    {(book.cover && <img srcSet={book.cover} alt="" />) || (
                      <img srcSet={bookCoverImg} alt="" />
                    )}
                  </ImgContainer>
                </DivOrder>
              </Grid>
              <LinksContainer>
                <MyLink className="start" href={book.fileHtml}>
                  Read now!
                </MyLink>
                <MyLink theme={themeLinkPurple} href="/">
                  Add to fav
                  <TiHeartOutline />
                </MyLink>
                <MyLink theme={themeLinkBrown} href="/">
                  Download zip
                </MyLink>
              </LinksContainer>
            </LiStyled>
          );
        })}
      </UlStyled>
    </>
  );
};

export default SearchPage;

const fontFamily = css`
  font-family: "Pacifico", cursive;
`;
const DivOrder = styled.div`
  @media screen and (max-width: 599px) {
    order: ${(props) => props.theme.mainOrder};
    width: ${(props) => props.theme.mainWidth};
  }
`;

DivOrder.defaultProps = {
  theme: {
    mainOrder: "1",
    mainWidth: "auto",
  },
};

const SearchForm = styled.form`
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    ${fontFamily};
    flex-direction: column;

    @media screen and (min-width: 992px) {
      flex-direction: row;
    }

    input {
      padding: 0.6rem;
      border-radius: 50px;
      border: 2px solid var(--brown);
      width: 200px;
      margin: 1rem;

      @media screen and (min-width: 992px) {
        width: 400px;
      }
    }
    button[type="submit"] {
      padding: 0.6rem;
      border-radius: 50px;
      background-color: var(--main-color);
      border-color: var(--main-color);

      font-family: "Pacifico", cursive;
      color: var(--brown);
      font-size: 1.2rem;
      width: 100px;
      cursor: pointer;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-gap: 10px;

  @media screen and (min-width: 510px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
  @media screen and (min-width: 599px) {
    & div {
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    margin: 1rem 0;
  }
`;

const LiStyled = styled.li`
  border: 2px solid var(--brown);
  background-color: var(--white);
  border-radius: 20px;
  padding: 1rem;
  margin: 2rem;
  width: auto;
  font-family: "Pacifico", cursive;
  list-style-type: none;
  box-shadow: var(--shadow);

  @media screen and (min-width: 567px) {
    flex-direction: row;
    text-align: left;
  }

  h4 {
    color: var(--main-color);
    margin: 1rem 0;
    font-size: 1.4rem;
    font-family: "Baloo 2", cursive;
    font-weight: 500;
  }

  span {
    color: var(--light-brown);
    font-family: "Baloo 2", cursive;
    font-weight: 500;
    font-size: 0.9rem;

    &.secondColor {
      padding: 0.4rem;
      color: var(--purple);
    }
  }
`;

const ImgContainer = styled.div`
  width: 100px;
  height: 150px;
  margin: 2rem 0 0 2rem;

  @media screen and (min-width: 1200px) {
    margin: 0 2rem 0 6rem;
    width: 180px;
    height: 260px;
  }
  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const LinkStyled = styled.h3`
  color: var(--brown);
  font-size: 1.6rem;
  margin: 0;
`;

const ParagraphSubjects = styled.p`
  font-size: 0.9rem;
  color: var(--brown);
`;

const SubjectsContainer = styled.div`
  color: var(--black);
  @media screen and (max-width: 509px) {
    width: calc(100vw - 6rem);
  }

  @media screen and (min-width: 992px) {
    margin-top: 2rem;
  }
`;

const UlStyled = styled.ul`
  padding: 0;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const MyLink = styled.a`
  padding: 0.6rem 0.4rem;
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.mainColor};
  border: ${(props) => props.theme.mainBorder};
  font-size: 0.8rem;
  border-radius: 50px;
  margin: 0.2rem;
  font-family: "Pacifico", cursive;
  box-shadow: var(--shadow);
  width: 180px;
  text-align: center;
  cursor: pointer;

  @media screen and (min-width: 992px) {
    font-size: 1rem;
    margin: 0.5rem 0.5rem 1.5rem 0.5rem;
  }
`;
MyLink.defaultProps = {
  theme: {
    mainBackground: "var(--main-color)",
    mainColor: "var(--brown)",
    mainBorder: "2px solid var(--mainColor);",
  },
};
