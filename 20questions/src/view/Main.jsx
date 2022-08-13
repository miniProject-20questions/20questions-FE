import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "../components/Pagination"

import { RESP } from "../Mock_API/respons";

function Main() {
    const ingLists = RESP.data
    const [limit] = useState(6);
    const [page, setPage] = useState(1);
    console.log(ingLists)

    const indexOfLastPost = page * limit;
    const indexOfFirstPost = indexOfLastPost - limit;
    const currentCountings = ingLists.slice(
        indexOfFirstPost,
        indexOfLastPost
    );

    
    return (
        <MainBox>
            <Select>
                <div>
                    문제 카테고리 선택
                </div>
                <select>
                    <option>인물</option>
                    <option>동물</option>
                    <option>영화</option>
                    <option>음악</option>
                    <option>가전제품</option>
                    <option>기타</option>
                    <option>완료된 문제</option>
                </select>
            </Select>
            <IngList>
                {currentCountings.map((count) => (
                    count.category === 7 ?
                        '' :
                        <div key={count.id}>
                                {count.id}
                        </div>
                ))}
            </IngList>
            <footer>
                <Pagination
                    total={ingLists.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </footer>
        </MainBox>
    );
}

export default Main;

let MainBox = styled.div`
    background-color: red;
    height: 578px;
    width: 90%;
    margin: 10px auto;
`

let Select = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    padding: 10px;
    background-color: purple;
    div {
        margin-right: 10px;
    }
    select {
        padding: 2px;
        text-align: center;
        width: 30%;
    }
`

let IngList = styled.div`
    height:500px;
    background-color: yellow;
    margin: 20px;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div { 
        width: 350px;
        height: 230px;
        margin: 5px;
        background-color: red;
        border-radius: 10px;
        box-shadow: 6px 6px 6px 6px #0000ff19;
    }
    `
