import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components/macro";
import { TiBookmark, TiChevronLeft } from "react-icons/ti";
import { IoBookmark, IoShareSocialSharp } from "react-icons/io5";

import { GrLanguage, GrDocumentDownload } from "react-icons/gr";
import Meta, { MetaGroup } from "../Meta";
import {
  MEDIUM_UP,
  EXTRA_SMALL_UP,
  SMALL_UP,
  SMALL_DOWN,
} from "../../constants";

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
      const downloads = result.data.download_count;
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
        downloads,
        fileHtml,
        fileEpub,
        fileRdf,
        fileMobipocket,
        img,
      });
    };

    choosenBook();
  });

  return (
    <>
      <Main>
        <BookContainer>
          <Navigation>
            <Icon>
              <TiChevronLeft />
            </Icon>
            <SpanLogo>-booksilla-</SpanLogo>
            <Icon>
              <IoBookmark />
            </Icon>
            <Icon>
              <IoShareSocialSharp />
            </Icon>
          </Navigation>

          <ImgContainer>
            <img src={book.img} alt="img"></img>
          </ImgContainer>
          <div>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
          </div>
          <DivContainer>
            <Meta desc="pages">404</Meta>
            <Meta desc="hours">5-7</Meta>
            <Meta desc="rating">5.0</Meta>
          </DivContainer>

          <div>
            <h3>About book</h3>
            <p>
              Ut tristique mauris elit, vitae mattis neque elementum non.
              Quisque vitae bibendum mi. Donec auctor, lectus quis aliquam
              consectetur, nulla odio sodales dolor, pretium convallis purus
              felis euismod est. Phasellus mollis nibh id nibh pharetra
              ultrices. Quisque id ornare diam. Suspendisse potenti. Maecenas
              tristique diam vel libero fermentum tincidunt. Fusce aliquam
              viverra velit, a commodo lacus tincidunt ultricies. Nunc mattis,
              tortor quis luctus bibendum, risus nunc vestibulum ipsum, eget
              fermentum turpis ante vel metus.
            </p>
            <MetaGroup>
              <Meta small>
                <span>
                  <GrLanguage />
                </span>
                {book.languages}
              </Meta>
              <Meta small>
                <span>
                  <GrDocumentDownload />
                </span>
                {book.downloads} times
              </Meta>
            </MetaGroup>

            <h4>Categories: </h4>
            {book.subjects?.map((subject) => (
              <p key={subject} className="subjects">
                {subject}
              </p>
            ))}
          </div>

          <DivCenter>
            <h4>Available formats:</h4>
            <BadgesContainer>
              <Badge href={book.fileHtml}>html</Badge>
              <Badge href={book.fileEpub}>epub</Badge>
              <Badge href={book.fileMobipocket}>mobi</Badge>
              <Badge href={book.fileRdf}>rdf</Badge>
            </BadgesContainer>
          </DivCenter>
        </BookContainer>
      </Main>
    </>
  );
};

const DivContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  width: 100%;
  justify-content: space-evenly;
  text-align: center;
  margin: 0 auto;

  ${EXTRA_SMALL_UP} {
    width: 50%;
  }
`;

const SpanLogo = styled.div`
  font-size: 1.2rem;
  margin: 0 auto;
  width: 100%;
  display: inline-block;
  text-align: center;
  font-family: "Pacifico", cursive; ;
`;

const Main = styled.main`
  background-color: var(--white-gray);
  height: calc(100vh - 6rem);
  padding: 0.1rem;
`;

const BookContainer = styled.div`
  margin: 1rem;
  padding: 2rem;
  border-radius: 50px;

  background-color: var(--white);
  box-shadow: var(--shadow);

  ${MEDIUM_UP} {
    min-height: 640px;
    max-width: 500px;
    margin: 0 auto;
  }

  & .alignCenter {
    align-self: center;
  }

  h1 {
    font-family: "Noto Sans", sans-serif;
    color: var(--brown);
    text-align: center;
    font-size: 1.6rem;
    ${SMALL_UP} {
      font-size: 2rem;
    }
  }

  h2 {
    color: var(--main-color);
    font-size: 1rem;
    font-family: "Noto Sans", sans-serif;
    font-weight: 500;
    text-align: center;

    ${SMALL_UP} {
      font-size: 1.5rem;
    }
  }
  h3 {
    color: var(--brown);
    text-align: center;
  }
  h4 {
    color: var(--brown);
  }

  & .subjects {
    font-family: "Noto Sans", sans-serif;
    font-weight: 300;

    ${SMALL_UP} {
      padding-left: 2rem;
    }
  }

  p {
    margin: 0.2rem;
    color: var(--light-brown);
    font-size: 0.725rem;
    padding-right: 8px;
    ${SMALL_UP} {
      font-size: 1rem;
    }

    &.light {
      padding-right: 8px;
      display: inline-flex;
      color: #aaa69a;
      font-weight: 600;
      align-items: center;
      margin-top: 1rem;
    }
    span {
      margin-right: 4px;

      color: #aaa69a;
    }
  }
  path {
    stroke: #aaa69a;
  }
`;

const Icon = styled.span`
  color: #aaa69a;
  font-weight: 600;
  font-size: 1.4rem;
  margin: 0 0.4rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--main-color);
  }
`;

const DivCenter = styled.div`
  display: flex;
  justify-content: center;

  ${SMALL_DOWN} {
    margin-top: 1rem;
    flex-direction: column;
  }
`;

const BadgesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 420px;
  margin: 0 auto;
  ${SMALL_DOWN} {
    flex-wrap: wrap;
  }
`;

const Badge = styled.a`
  background-color: var(--main-light);
  padding: 0.4rem 0.6rem;
  border: 1px solid var(--main-light);
  border-radius: 50px;
  color: var(--brown);
  box-shadow: var(--shadow);
  margin: 0.2rem;
  align-self: center;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: var(--main-color);
  }
`;
const ImgContainer = styled.div`
  width: 200px;
  height: auto;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  ${SMALL_UP} {
    width: 200px;
  }

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;
const Navigation = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 1.2rem;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  color: var(--brown);
  & div {
    margin: 0.2rem;
  }
`;

export default SingleBook;
