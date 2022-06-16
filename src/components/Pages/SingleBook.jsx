import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components/macro";
import Links from "./Links";

const SingleBook = () => {
  const API_URL = `https://gutendex.com/books/`;
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const choosenBook = async () => {
      const result = await axios.get(`${API_URL}${id}`);

      console.log(result.data);
      const title = result.data.title;
      const [author] = result.data.authors;
      const subjects = result.data.subjects;
      const languages = result.data.languages;
      console.log(title);
      console.log(subjects);
      const img = result.data.formats["image/jpeg"];
      const fileHtml = result.data.formats["text/html"];
      const fileEpub = result.data.formats["application/epub+zip"];
      const fileRdf = result.data.formats["application/rdf+xml"];
      const fileMobipocket =
        result.data.formats["application/x-mobipocket-ebook"];

      setBook({
        title,
        author: author.name,
        subjects,
        languages,
        fileHtml,
        fileEpub,
        fileRdf,
        fileMobipocket,
        img,
      });
    };

    choosenBook();
  }, []);

  return (
    <>
      <Main>
        <BookContainer>
          <div>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
          </div>
          <Container>
            <div>
              <h3>
                Languages: <span>{book.languages}</span>
              </h3>
              <h3>Categories: </h3>
              {book.subjects?.map((subject) => (
                <p key={subject} className="subjects">
                  {subject}
                </p>
              ))}
            </div>
            <div>
              <ImgContainer>
                <img src={book.img} alt="img"></img>
              </ImgContainer>
              <Links />
            </div>
          </Container>
          <DivCenter>
            <h3>Available formats:</h3>
            <DownloadContainer>
              <a href={book.fileHtml}>html</a>
              <a href={book.fileEpub}>epub</a>
              <a href={book.fileMobipocket}>mobi</a>
              <a href={book.fileRdf}>rdf</a>
            </DownloadContainer>
          </DivCenter>
        </BookContainer>
      </Main>
    </>
  );
};
const Main = styled.main`
  background-color: var(--white-gray);
  height: calc(100vh - 6rem);
  padding: 0.1rem;
`;

const BookContainer = styled.div`
  margin: 1rem;
  padding: 2rem;
  border: 2px solid var(--brown);
  border-radius: 50px;

  background-color: var(--white);
  box-shadow: var(--shadow);

  @media screen and (min-width: 992px) {
    min-height: 640px;
    height: 99%;
  }

  & .alignCenter {
    align-self: center;
  }

  h1 {
    color: var(--brown);
    margin: 0;
    font-size: 1.6rem;
    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    color: var(--main-color);
    font-family: "Baloo 2", cursive;
    margin: 0;
    font-size: 1.6rem;
    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }
  }

  span {
    font-family: "Baloo 2", cursive;
    color: var(--purple);
  }
  & .subjects {
    font-family: "Baloo 2", cursive;

    color: var(--light-brown);

    @media screen and (min-width: 768px) {
      padding-left: 2rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const DivCenter = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    flex-direction: column;
  }
`;

const DownloadContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 420px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  a {
    background-color: var(--main-color);
    padding: 0.6rem 1.8rem;
    border: 2px solid var(--main-color);
    border-radius: 50px;
    color: var(--brown);
    box-shadow: var(--shadow);
    margin: 0.2rem;
    align-self: center;

    @media screen and (min-width: 769px) {
      margin: 0.6rem;
    }
  }
`;

const ImgContainer = styled.div`
  width: 200px;
  height: auto;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px) {
    width: 200px;
  }

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export default SingleBook;
