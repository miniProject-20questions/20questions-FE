import React, { useState } from "react";
import styled from "styled-components";

import Pagination from "../components/Pagination"
import PostingModal from "../components/PostingModal";

import { RESP } from "../Mock_API/respons";

function Main() {
    const ingLists = RESP.data
    const [limit] = useState(6);
    const [page, setPage] = useState(1);

    const [cateCount, setCateCount] = useState(2);
    const handleChange = (e) => {
        setCateCount(e.target.value)
      }

    const indexOfLastPost = page * limit;
    const indexOfFirstPost = indexOfLastPost - limit;
    const currentCountings = ingLists.slice(
        indexOfFirstPost,
        indexOfLastPost
    );

    let [modal, setModal] = useState(false);

    return (
        <MainBox>
            <Select>
                <select onChange={(e) => handleChange(e)}>
                    <option value={2}>--- 카테고리 선택 ---</option>
                    <option value={1}>인물</option>
                    <option value={2}>동물</option>
                    <option value={3}>영화</option>
                    <option value={4}>음악</option>
                    <option value={5}>가전제품</option>
                    <option value={6}>기타</option>
                    <option value={7}>완료된 문제</option>
                </select>
            </Select>
            <IngList>
                {currentCountings.map((count) => (
                    count.category === +cateCount ?
                        <div key={count.id}>
                            {count.title}({count.id})
                        </div> :
                        ''
                ))}
            </IngList>
            <PostBtn onClick={() => {
                setModal(true);
            }}>글쓰기</PostBtn>
            <footer>
                <Pagination
                    total={ingLists.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </footer>
            {modal === true ? <PostingModal /> : ''}
        </MainBox>
    );
}

export default Main;

let MainBox = styled.div`
    height: 530px;
    width: 90%;
    margin: 10px auto;
`

let Select = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    div {
        margin-right: 10px;
    }
    select {
        padding: 2px;
        text-align: center;
        width: 30%;
        border-radius: 5px;
    }
`

let IngList = styled.div`
    height:455px;
    background-color: #c4c41127;
    margin: 8px auto 8px auto;
    border-radius: 10px;
    border: solid 3px gray;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-shadow: 6px 6px 6px 6px #0000ff19;
    padding: 5px;
    div { 
        width: 30%;
        height: 215px;
        margin: 3px;
        background-color: #00000031;
        border-radius: 10px;
        border: solid 3px gray;
        box-shadow: 6px 6px 6px 6px #0000ff19;
    }
    `

let PostBtn = styled.button`
    margin: auto 0 0 auto;
    height: 30px;
    display : flex;
    justify-content : center;
    align-items : center;
    
    min-width: 80px;
    margin-right: 3px;
    padding: 3px;
    border: 1px solid #ff00668d;
    border-radius: 4px;
    background-color: #ff00668a;
    color: white;
`
