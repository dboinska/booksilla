import React, { useState } from "react";
import axios from "axios";
import styled, { css } from "styled-components/macro";
import StartPage from "../Account/StartPage";
import bookCoverImg from "../../assets/book.png";
const SearchPage = () => {
  let API_URL = `https://gnikdroy.pythonanywhere.com/api/book/?search=`;

  const [searchBook, setSearchBook] = useState("");
  const onInputChange = (e) => {
    setSearchBook(e.target.value);
  };

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}${searchBook}`);
    console.log(result.data);

    const filteredBooks = result.data.results.map((book) => {
      const author = book.agents.find(
        (agent) => agent.type.toLowerCase() === "author"
      );
      const cover = book.resources.find((resource) =>
        resource.type.startsWith("image")
      );

      const subjects = book.subjects
        .map((subject) => {
          return <ParagraphSubjects>{subject}</ParagraphSubjects>;
        })
        .slice(0, 4);
      return {
        id: book.id,
        title: book.title,
        author: author?.person,
        cover: cover?.uri,
        downloads: book.downloads,
        languages: book.languages,
        subjects: subjects,
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
          placeholder="microservice, restful design, etc.,"
          value={searchBook}
          onChange={onInputChange}
        />
        <div>
          <button type="submit">Search</button>
          <CategoryButton>Filters</CategoryButton>
        </div>
      </label>
    </SearchForm>
  );
  const theme = {
    main: "auto",
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
          return (
            <LiStyled key={book.id}>
              <div>
                <LinkStyled href="/">{book.title}</LinkStyled>
                <div>
                  {(book.author && <h4>{book.author}</h4>) || (
                    <h4>Author unknown</h4>
                  )}
                  <p>Language: {book.languages}</p>
                  <p>Downloaded {book.downloads} times.</p>
                </div>
              </div>
              <SubjectsContainer className="marginTop">
                Main categories: {book.subjects}
              </SubjectsContainer>
              <div>
                {(book.cover && <img srcSet={book.cover} alt="" />) || (
                  <img srcSet={bookCoverImg} alt="" />
                )}
              </div>
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
      /* width: 100%; */
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

const LiStyled = styled.li`
  border: 2px solid var(--brown);
  border-radius: 20px;
  padding: 1rem;
  margin: 2rem;
  width: auto;
  font-family: "Pacifico", cursive;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;

  div {
    width: 87%;

    @media screen and (min-width: 992px) {
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 567px) {
    flex-direction: row;
    text-align: left;
  }

  h4 {
    color: var(--main-color);
    margin: 1rem 0;
    font-size: 1.2rem;
  }

  img {
    margin-top: 2rem;
    width: 96px;

    @media screen and (min-width: 992px) {
      margin: 2rem 2rem 2rem 6rem;
    }
  }
`;
const LinkStyled = styled.a`
  color: var(--brown);
  font-size: 1.4rem;
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
`;

const ParagraphSubjects = styled.p`
  margin: 0.6rem;
  font-size: 1rem;
  color: var(--brown);
`;

const SubjectsContainer = styled.div`
  margin-top: 2rem;
  color: var(--black);

  &.marginTop {
    @media screen and (min-width: 992px) {
      margin-top: 2rem;
    }
  }
`;

const UlStyled = styled.ul`
  padding: 0;
`;

const CategoryButton = styled.button`
  padding: 0.6rem 1rem;
  background-color: var(--brown);
  border: 2px solid var(--brown);
  font-family: "Pacifico", cursive;
  color: var(--white);
  border-radius: 50px;
  font-size: 1.2rem;
  margin: 1rem;
`;
