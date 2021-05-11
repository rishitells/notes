import styled from "styled-components/macro";

const Flex = styled.div`
  display: flex;
  justify-content: ${({spaceBetween, spaceAround}) => {
      if (spaceBetween) return 'space-between';
      if (spaceAround) return 'space-around';
      return 'flex-start'
  }};
`;

export default Flex;