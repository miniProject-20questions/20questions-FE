import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { GuestComments } from "./GuestComments"
import { HostComments } from "./HostComments"
import { __Posting } from "../redux/modules/PostingQuiz"


function DetailModal() {
 
  return (
    <ModalBody>
       {/* {TokenNickname === NowNickname ? <HostComments/> : <GuestComments/>} */}
    </ModalBody>
  );
}

export default DetailModal;

let ModalBody = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: rgba( 0, 0, 0, 0.6);
  display: flex;
  margin: auto;
`
