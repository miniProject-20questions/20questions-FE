import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import Pagination from "../components/Pagination/Pagination"
import PostingModal from "../components/QuizPostingModal/PostingModal";
import { __getList } from "../redux/modules/QuizList";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ingLists = useSelector((state) => state.getlist.data);

  useEffect(() => {
    dispatch(__getList());
  }, []);

  // const [limit] = useState(6);
  // const [page, setPage] = useState(1);
  // const [total, setTotal] = useState(0);
  // const num = 0;
  const [category, setCategory] = useState(0);
  const handleChange = (e) => {
    setCategory(e.target.value)
  };

  // const indexOfLastPost = page * limit;
  // const indexOfFirstPost = indexOfLastPost - limit;
  // const currentCountings = ingLists.slice(
  //     indexOfFirstPost,
  //     indexOfLastPost
  // );

  let [postingmodal, setPostingModal] = useState(false);

  return (
    <MainBox>
      <Select>
        <select onChange={(e) => handleChange(e)}>
          <option value={0}>--- 카테고리 선택 ---</option>
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
        {ingLists.map((count) =>
          count.category === +category ? (
            <div
              key={count.quizId}
              onClick={() => {
                navigate(`/detail/${count.quizId}`);
              }}
            >
              <Img
                style={{
                  width: "95%",
                  height: "100px",
                  backgroundImage: `url(${count.category === 1
                      ? "http://i0.wp.com/slownews.kr/wp-content/uploads/2015/12/22645A505663F2BF10F9AE_compressed.jpg?resize=480%2C660"
                      : count.category === 2
                        ? "https://t1.daumcdn.net/cfile/tistory/2507993B576C7E9D15"
                        : count.category === 3
                          ? "https://tse1.mm.bing.net/th?id=OIP.Cl-Mt1nq47N-IBw-mbxDdgHaEP&pid=Api&P=0"
                          : count.category === 4
                            ? "https://tse2.explicit.bing.net/th?id=OIP.yq0cA69DKC1ebkSlX8WLDQHaIb&pid=Api&P=0"
                            : count.category === 5
                              ? "https://tse4.mm.bing.net/th?id=OIP.8Bc2bWiC-Y1xYuW4T7RKLQHaGh&pid=Api&P=0"
                              : count.category === 6
                                ? "https://tse3.mm.bing.net/th?id=OIP.psf5KqaxgvcoMw0jkofWEwHaEK&pid=Api&P=0"
                                : count.category === 7
                                  ? "https://tse1.mm.bing.net/th?id=OIP.lsS51m_5rahwebwTyqu2YQHaF_&pid=Api&P=0"
                                  : ""
                    })`,
                }}
              ></Img>
              <p style={{ fontWeight: "bold" }}>제목 {count.title}</p>
              <p>작성자 {count.nickname}</p>
              <p>
                댓글<span style={{ marginLeft: "10px" }}>{count.count}</span>/20
              </p>
              <p>작성일자 {count.createdAt.split("T")[0]}</p>
            </div>
          ) : category === 0 ? (
            <div
              key={count.quizId}
              onClick={() => {
                navigate(`/detail/${count.quizId}`);
              }}
            >
              <Img
                style={{
                  width: "95%",
                  height: "100px",
                  backgroundImage: `url(${count.category === 1
                      ? "http://i0.wp.com/slownews.kr/wp-content/uploads/2015/12/22645A505663F2BF10F9AE_compressed.jpg?resize=480%2C660"
                      : count.category === 2
                        ? "https://t1.daumcdn.net/cfile/tistory/2507993B576C7E9D15"
                        : count.category === 3
                          ? "https://tse1.mm.bing.net/th?id=OIP.Cl-Mt1nq47N-IBw-mbxDdgHaEP&pid=Api&P=0"
                          : count.category === 4
                            ? "https://tse2.explicit.bing.net/th?id=OIP.yq0cA69DKC1ebkSlX8WLDQHaIb&pid=Api&P=0"
                            : count.category === 5
                              ? "https://tse4.mm.bing.net/th?id=OIP.8Bc2bWiC-Y1xYuW4T7RKLQHaGh&pid=Api&P=0"
                              : count.category === 6
                                ? "https://tse3.mm.bing.net/th?id=OIP.psf5KqaxgvcoMw0jkofWEwHaEK&pid=Api&P=0"
                                : count.category === 7
                                  ? "https://tse1.mm.bing.net/th?id=OIP.lsS51m_5rahwebwTyqu2YQHaF_&pid=Api&P=0"
                                  : ""
                    })`,
                }}
              ></Img>
              <p style={{ fontWeight: "bold" }}>제목 {count.title}</p>
              <p>작성자 {count.nickname}</p>
              <p>
                댓글<span style={{ marginLeft: "10px" }}>{count.count}</span>/20
              </p>
              <p>작성일자 {count.createdAt.split("T")[0]}</p>
            </div>
          ) : (
            ""
          )
        )}
      </IngList>
      <PostBtn
        onClick={() => {
          setPostingModal(true);
        }}
      >
        글쓰기
      </PostBtn>
      {/* <footer>
                {ingLists.map((count) => (
                    count.category === +category ? console.log(count.category) : ''
                ))}
                <Pagination
                    total={ingLists.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </footer> */}
      {postingmodal === true ? <PostingModal /> : ""}
    </MainBox>
  );
}

export default Main;

let MainBox = styled.div`
  height: 530px;
  width: 90%;
  margin: 10px auto;
`;

let Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-right: 10px;
  }
  select {
    padding: 2px;
    text-align: center;
    width: 30%;
    border-radius: 5px;
  }
`;

let IngList = styled.div`
  height: 455px;
  background-color: #c4c41127;
  margin: 8px auto 8px auto;
  border-radius: 10px;
  border: solid 3px gray;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 6px 6px 6px 6px #0000ff19;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  overflow-y: scroll;
  div {
    width: 30%;
    height: 215px;
    margin: 3px;
    background-color: #00000031;
    border-radius: 10px;
    border: solid 3px gray;
    box-shadow: 6px 6px 6px 6px #0000ff19;
    white-space: nowrap;
    p {
      margin: 5px auto auto 5px;
    }
  }
`;

let PostBtn = styled.button`
  margin: auto 0 0 auto;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 80px;
  margin-right: 3px;
  padding: 3px;
  border: 1px solid #ff00668d;
  border-radius: 4px;
  background-color: #ff00668a;
  color: white;
`;

const Img = styled.p`
  margin: auto;
  width: 95%;
  height: 100px;
  background-size: cover;
  background-color: transparent;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
`;
