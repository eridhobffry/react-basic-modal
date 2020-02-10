import styled from "styled-components";

export const BackgroundModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 1;
  display: ${props => (props.open ? "block" : "none")};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: relative;
  width: 500px;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  margin: 40px auto;
  border-radius: 3px;
  z-index: 2;
  text-align: left;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
`;
