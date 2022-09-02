import styled from "styled-components/macro";

const Meta = ({ children, desc, small }) => {
  return (
    <StyledMeta small={small}>
      {children}
      <span>{desc}</span>
    </StyledMeta>
  );
};
export default Meta;

const StyledMeta = styled.span`
  color: #aaa69a;
  font-weight: 600;
  font-size: ${(props) => (props.small ? "1rem" : "1.8rem")};
  margin: 0 0.4rem;
  text-transform: ${(props) => (props.small ? "none" : "uppercase")};
  display: flex;
  flex-direction: ${(props) => (props.small ? "row" : "column")};
  gap: 0.4rem;
  & span {
    color: #aaa69a;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1rem;
  }
`;

export const MetaGroup = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 0.1rem;
`;
