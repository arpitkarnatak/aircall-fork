import styled, {keyframes} from "styled-components";
import { MdCircle } from "react-icons/md";
import dayjs from "dayjs";
import { ICall } from "../../types/call";

const loadingAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

// Styled components
const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;

const CallDivStyleMain = styled.a`
  all: unset;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  border-radius: 8px;
  text-align: left;
  background: aliceblue;
  text-decoration: none;
  color: inherit;
`;

const CardIcons = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
`;

const Height30 = styled.div`
  width: 100%;
  height: 30px;
  background: #ccc; /* Grey background */
  border-radius: 4px;
  animation: ${loadingAnimation} 1.5s infinite; /* Apply the animation */
`;

const PlaceholderCircle = styled.div`
  width: 16px;
  height: 16px;
  background: #ccc;
  border-radius: 50%;
  animation: ${loadingAnimation} 1.5s infinite; /* Apply the animation */
`;

// Example usage
const Card = () => {
  return (
    <CallDivStyleMain>
      <CardIcons>
        <PlaceholderCircle />
        <PlaceholderCircle />
      </CardIcons>
      <Height30 />
      <div>
      </div>
    </CallDivStyleMain>
  );
};

const CardListScreenSkeletal = () => {
  return (
    <CardListContainer>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <Card key={index} />
        ))}
    </CardListContainer>
  );
};

export default CardListScreenSkeletal;
