import React from "react";
import styled from "styled-components";

function PostinModal() {
  return (
    <ModalBody>
      <div>
        dd
      </div>
    </ModalBody>
  );
}

export default PostinModal;

let ModalBody = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: rgba( 0, 0, 0, 0.6);
  display: flex;
  div {
    background-color: white;
    border-radius: 10px;
    border: solid 3px black;
    padding: 5px;
    margin: auto;
    width: 80%;
    height: 80%;
  }
`