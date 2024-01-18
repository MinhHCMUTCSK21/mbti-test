import "./App.css";
import Card from "./Card";
import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Panel from "./Panel";

function App() {
  const question = require("./data");
  const list = question.questions;
  const perlist = require("./mbti");
  const [per, setPer] = useState({});
  const Elist = ["1", "15", "29", "41", "57", "71", "85", "99", "113", "127"];
  const Ilist = ["2", "16", "30", "42", "58", "72", "86", "100", "114", "128"];
  const Slist = [
    "3",
    "17",
    "31",
    "45",
    "59",
    "73",
    "87",
    "101",
    "115",
    "129",
    "5",
    "19",
    "33",
    "47",
    "61",
    "75",
    "89",
    "103",
    "117",
    "131",
  ];
  const Nlist = [
    "4",
    "18",
    "32",
    "46",
    "60",
    "74",
    "88",
    "102",
    "116",
    "130",
    "6",
    "20",
    "34",
    "48",
    "62",
    "76",
    "90",
    "104",
    "118",
    "132",
  ];
  const Tlist = [
    "7",
    "21",
    "35",
    "49",
    "63",
    "77",
    "91",
    "105",
    "119",
    "133",
    "9",
    "23",
    "37",
    "51",
    "65",
    "79",
    "93",
    "107",
    "121",
    "135",
  ];
  const Flist = [
    "8",
    "22",
    "36",
    "50",
    "64",
    "78",
    "92",
    "106",
    "120",
    "134",
    "10",
    "24",
    "38",
    "52",
    "66",
    "80",
    "94",
    "108",
    "122",
    "136",
  ];
  const Jlist = [
    "11",
    "25",
    "39",
    "53",
    "67",
    "81",
    "95",
    "109",
    "123",
    "137",
    "13",
    "27",
    "41",
    "55",
    "69",
    "83",
    "97",
    "111",
    "125",
    "139",
  ];
  const Plist = [
    "12",
    "26",
    "40",
    "54",
    "68",
    "82",
    "96",
    "110",
    "124",
    "138",
    "14",
    "28",
    "42",
    "56",
    "70",
    "84",
    "98",
    "112",
    "126",
    "140",
  ];

  const result = () => {
    let listAnswer = document.querySelectorAll('input[type="radio"]');
    let count = 0;
    let e = 0;
    let ii = 0;
    let s = 0;
    let n = 0;
    let t = 0;
    let f = 0;
    let j = 0;
    let p = 0;
    for (let i = 0; i < listAnswer.length; i++) {
      if (listAnswer[i].checked === true) {
        count++;
        if (listAnswer[i].id === "42") {
          p = p + 1;
        } else if (listAnswer[i].id === "41") {
          j = j + 1;
        }
        if (Elist.includes(listAnswer[i].id)) {
          e = e + 1;
        } else if (Ilist.includes(listAnswer[i].id)) {
          ii = ii + 1;
        } else if (Slist.includes(listAnswer[i].id)) {
          s = s + 1;
        } else if (Nlist.includes(listAnswer[i].id)) {
          n = n + 1;
        } else if (Tlist.includes(listAnswer[i].id)) {
          t = t + 1;
        } else if (Flist.includes(listAnswer[i].id)) {
          f = f + 1;
        } else if (Jlist.includes(listAnswer[i].id)) {
          j = j + 1;
        } else if (Plist.includes(listAnswer[i].id)) {
          p = p + 1;
        }
      }
    }
    let data = "";
    if (count < 70) {
      alert("Bạn chưa hoàn thành bài test");
      return;
    } else {
      if (e > ii) {
        data = data + "E";
      } else if (e <= ii) {
        data = data + "I";
      }
      if (s > n) {
        data = data + "S";
      } else if (s <= n) {
        data = data + "N";
      }
      if (t > f) {
        data = data + "T";
      } else if (t <= f) {
        data = data + "F";
      }
      if (j > p) {
        data = data + "J";
      } else if (j <= p) {
        data = data + "P";
      }
      const re = perlist.getdata(data);
      setPer(re);
      document.querySelector(".Panel").style.display = "flex";
    }
  };
  return (
    <>
      <div className="navbar">
        <h1>MBTI test</h1>
      </div>
      <div className="main">
        {list.map((item) => (
          <Card Ques={item} key={item.content} />
        ))}
        <div className="button_container">
          <button onClick={result}>Hoàn tất</button>
        </div>
      </div>
      <div className="footer">
        <span>Nguyễn Quang Minh - ĐH Bách Khoa, TPHCM - HCMUT</span>
        <span>Email : minh.nguyenquang@hcmut.edu.vn</span>
        <span>Đồ án chuyên ngành: HK231</span>
        <span>
          Câu trả lời của bạn có thể được sử dụng cho mục đích nghiên cứu
        </span>
      </div>
      <Panel Data={per} />
    </>
  );
}

export default App;
