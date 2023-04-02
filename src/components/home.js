import Sidebardata from "../data/sidebardata";
import { useRef, useState } from "react";
import "../styles/home.css";
import "../styles/costbreak.css";

const Home = () => {
  const ref = useRef();
  const ref1 = useRef();
  const ref2 = useRef();

  const sndref = useRef();
  const sndref1 = useRef();
  const sndref2 = useRef();

  const trdref = useRef();
  const trdref1 = useRef();
  const trdref2 = useRef();

  const frthref = useRef();
  const frthref1 = useRef();
  const frthref2 = useRef();

  const fthref = useRef();
  const fthref1 = useRef();
  const fthref2 = useRef();

  const [btnbg, setBtnbg] = useState("#ccc");
  const [btn2bg, setBtn2bg] = useState("#ccc");
  const [btn3bg, setBtn3bg] = useState("#ccc");
  const [btn4bg, setBtn4bg] = useState("#ccc");
  const [btn5bg, setBtn5bg] = useState("#ccc");
  const [btn6bg, setBtn6bg] = useState("#ccc");
  const [btn7bg, setBtn7bg] = useState("#ccc");
  const [btn8bg, setBtn8bg] = useState("#ccc");
  const [btn9bg, setBtn9bg] = useState("#ccc");
  const [btn10bg, setBtn10bg] = useState("#ccc");
  const [btn11bg, setBtn11bg] = useState("#ccc");
  const [btn12bg, setBtn12bg] = useState("#ccc");
  const [btn13bg, setBtn13bg] = useState("#ccc");
  const [btn14bg, setBtn14bg] = useState("#ccc");
  const [btn15bg, setBtn15bg] = useState("#ccc");




  const [bgwidth, setBgwidth] = useState(80);
  const [bgwidth2, setBgwidth2] = useState(80);
  const [bgwidth3, setBgwidth3] = useState(80);
  const [bgwidth4, setBgwidth4] = useState(80);
  const [bgwidth5, setBgwidth5] = useState(80);
  const [bgwidth6, setBgwidth6] = useState(80);
  const [bgwidth7, setBgwidth7] = useState(80);
  const [bgwidth8, setBgwidth8] = useState(80);
  const [bgwidth9, setBgwidth9] = useState(80);
  const [bgwidth10, setBgwidth10] = useState(80);
  const [bgwidth11, setBgwidth11] = useState(80);
  const [bgwidth12, setBgwidth12] = useState(80);
  const [bgwidth13, setBgwidth13] = useState(80);
  const [bgwidth14, setBgwidth14] = useState(80);
  const [bgwidth15, setBgwidth15] = useState(80);


  const [costArr, setCostArr] = useState(0);
  const [costArr1, setCostArr1] = useState(0);
  const [costArr2, setCostArr2] = useState(0);

  const [sndCst, setSndCst] = useState(0);
  const [sndCst1, setSndCst1] = useState(0);
  const [sndCst2, setSndCst2] = useState(0);

  const [trdCst, setTrdCst] = useState(0);
  const [trdCst1, setTrdCst1] = useState(0);
  const [trdCst2, setTrdCst2] = useState(0);

  const [frthCst, setFrthCst] = useState(0);
  const [frthCst1, setFrthCst1] = useState(0);
  const [frthCst2, setFrthCst2] = useState(0);

  const [fthCst, setFthCst] = useState(0);
  const [fthCst1, setFthCst1] = useState(0);
  const [fthCst2, setFthCst2] = useState(0);

  let sum = costArr + costArr1 + costArr2;
  let sum1 = sndCst + sndCst1 + sndCst2;
  let sum2 = trdCst + trdCst1 + trdCst2;
  let sum3 = frthCst + frthCst1 + frthCst2;
  let sum4 = fthCst + fthCst1 + fthCst2;

  let designSum = costArr + sndCst + trdCst + frthCst + fthCst;
  let IASum = costArr1 + sndCst1 + trdCst1 + frthCst1 + fthCst1;
  let CMSsum = costArr2 + sndCst2 + trdCst2 + frthCst2 + fthCst2;
  let total = designSum + IASum + CMSsum;

  //buttons 1 function start
  function increement() {
    if (ref.current.innerText === "None") {
      ref.current.innerText = "Basic";
      setCostArr(100);
      setBtnbg("#91D4A8");
      setBgwidth(120);
    } else if (ref.current.innerText === "Basic") {
      ref.current.innerText = "Advanced";
      setCostArr(200);
      setBtnbg("#E9BE74");
      setBgwidth(160);
    } else if (ref.current.innerText === "Advanced") {
      ref.current.innerText = "Complex";
      setCostArr(300);
      setBtnbg("#F57F6C");
      setBgwidth(200);
    }
  }

  function decreement() {
    if (ref.current.innerText === "Complex") {
      ref.current.innerText = "Advanced";
      setCostArr(200);
      setBtnbg("#E9BE74");
      setBgwidth(160);
    } else if (ref.current.innerText === "Advanced") {
      ref.current.innerText = "Basic";
      setCostArr(100);
      setBtnbg("#91D4A8");
      setBgwidth(120);
    } else if (ref.current.innerText === "Basic") {
      ref.current.innerText = "None";
      setCostArr(0);
      setBtnbg("#ccc");
      setBgwidth(80);
    }
  }

  function increement1() {
    if (ref1.current.innerText === "None") {
      ref1.current.innerText = "Basic";
      setCostArr1(100);
      setBtn2bg("#91D4A8")
      setBgwidth2(120)

    } else if (ref1.current.innerText === "Basic") {
      ref1.current.innerText = "Advanced";
      setCostArr1(200);
      setBtn2bg("#E9BE74")
      setBgwidth2(160)

    } else if (ref1.current.innerText === "Advanced") {
      ref1.current.innerText = "Complex";
      setCostArr1(300);
      setBtn2bg("#F57F6C")
      setBgwidth2(200)
    }
  }

  function decreement1() {
    if (ref1.current.innerText === "Complex") {
      ref1.current.innerText = "Advanced";
      setCostArr1(200);
      setBtn2bg("#E9BE74")
      setBgwidth2(160)
    } else if (ref1.current.innerText === "Advanced") {
      ref1.current.innerText = "Basic";
      setCostArr1(100);
      setBtn2bg("#91D4A8")
      setBgwidth2(120)
    } else if (ref1.current.innerText === "Basic") {
      ref1.current.innerText = "None";
      setCostArr1(0);
      setBtn2bg("#ccc")
      setBgwidth2(80)
    }
  }

  function increement2() {
    if (ref2.current.innerText === "None") {
      ref2.current.innerText = "Basic";
      setCostArr2(100);
      setBtn3bg("#91D4A8")
      setBgwidth3(120)
    } else if (ref2.current.innerText === "Basic") {
      ref2.current.innerText = "Advanced";
      setCostArr2(200);
      setBtn3bg("#E9BE74")
      setBgwidth3(160)
    } else if (ref2.current.innerText === "Advanced") {
      ref2.current.innerText = "Complex";
      setCostArr2(300);
      setBtn3bg("#F57F6C")
      setBgwidth3(200)
    }
  }

  function decreement2() {
    if (ref2.current.innerText === "Complex") {
      ref2.current.innerText = "Advanced";
      setCostArr2(200);
      setBtn3bg("#E9BE74")
      setBgwidth3(160)
    } else if (ref2.current.innerText === "Advanced") {
      ref2.current.innerText = "Basic";
      setCostArr2(100);
      setBtn3bg("#91D4A8")
      setBgwidth3(120)
    } else if (ref2.current.innerText === "Basic") {
      ref2.current.innerText = "None";
      setCostArr2(0);
      setBtn3bg("#ccc")
      setBgwidth3(80)
    }
  }

  //buttons 1 function end

  //buttons 2 function start

  function sndincreement() {
    if (sndref.current.innerText === "None") {
      sndref.current.innerText = "Basic";
      setSndCst(100);
      setBtn4bg("#91D4A8")
      setBgwidth4(120)
    } else if (sndref.current.innerText === "Basic") {
      sndref.current.innerText = "Advanced";
      setSndCst(200);
      setBtn4bg("#E9BE74")
      setBgwidth4(160)
    } else if (sndref.current.innerText === "Advanced") {
      sndref.current.innerText = "Complex";
      setSndCst(300);
      setBtn4bg("#F57F6C")
      setBgwidth4(200)
    }
  }

  function snddecreement() {
    if (sndref.current.innerText === "Complex") {
      sndref.current.innerText = "Advanced";
      setSndCst(200);
      setBtn4bg("#E9BE74")
      setBgwidth4(160)
    } else if (sndref.current.innerText === "Advanced") {
      sndref.current.innerText = "Basic";
      setSndCst(100);
      setBtn4bg("#91D4A8")
      setBgwidth4(120)
    } else if (sndref.current.innerText === "Basic") {
      sndref.current.innerText = "None";
      setSndCst(0);
      setBtn4bg("#ccc")
      setBgwidth4(80)
    }
  }

  function sndincreement1() {
    if (sndref1.current.innerText === "None") {
      sndref1.current.innerText = "Basic";
      setSndCst1(100);
      setBtn5bg("#91D4A8")
      setBgwidth5(120)
    } else if (sndref1.current.innerText === "Basic") {
      sndref1.current.innerText = "Advanced";
      setSndCst1(200);
      setBtn5bg("#E9BE74")
      setBgwidth5(160)
    } else if (sndref1.current.innerText === "Advanced") {
      sndref1.current.innerText = "Complex";
      setSndCst1(300);
      setBtn5bg("#F57F6C")
      setBgwidth5(200)
    }
  }

  function snddecreement1() {
    if (sndref1.current.innerText === "Complex") {
      sndref1.current.innerText = "Advanced";
      setSndCst1(200);
      setBtn5bg("#E9BE74")
      setBgwidth5(160)
    } else if (sndref1.current.innerText === "Advanced") {
      sndref1.current.innerText = "Basic";
      setSndCst1(100);
      setBtn5bg("#91D4A8")
      setBgwidth5(120)
    } else if (sndref1.current.innerText === "Basic") {
      sndref1.current.innerText = "None";
      setSndCst1(0);
      setBtn5bg("#ccc")
      setBgwidth5(80)
    }
  }

  function sndincreement2() {
    if (sndref2.current.innerText === "None") {
      sndref2.current.innerText = "Basic";
      setSndCst2(100);
      setBtn6bg("#91D4A8")
      setBgwidth6(120)
    } else if (sndref2.current.innerText === "Basic") {
      sndref2.current.innerText = "Advanced";
      setSndCst2(200);
      setBtn6bg("#E9BE74")
      setBgwidth6(160)
    } else if (sndref2.current.innerText === "Advanced") {
      sndref2.current.innerText = "Complex";
      setSndCst2(300);
      setBtn6bg("#F57F6C")
      setBgwidth6(200)
    }
  }

  function snddecreement2() {
    if (sndref2.current.innerText === "Complex") {
      sndref2.current.innerText = "Advanced";
      setSndCst2(200);
      setBtn6bg("#E9BE74")
      setBgwidth6(160)
    } else if (sndref2.current.innerText === "Advanced") {
      sndref2.current.innerText = "Basic";
      setSndCst2(100);
      setBtn6bg("#91D4A8")
      setBgwidth6(120)
    } else if (sndref2.current.innerText === "Basic") {
      sndref2.current.innerText = "None";
      setSndCst2(0);
      setBtn6bg("#ccc")
      setBgwidth6(80)
    }
  }
  //buttons 2 function end

  //buttons 3 function start
  function triincreement() {
    if (trdref.current.innerText === "None") {
      trdref.current.innerText = "Basic";
      setTrdCst(100);
      setBtn7bg("#91D4A8")
      setBgwidth7(120)

    } else if (trdref.current.innerText === "Basic") {
      trdref.current.innerText = "Advanced";
      setTrdCst(200);
      setBtn7bg("#E9BE74")
      setBgwidth7(160)
    } else if (trdref.current.innerText === "Advanced") {
      trdref.current.innerText = "Complex";
      setTrdCst(300);
      setBtn7bg("#F57F6C")
      setBgwidth7(200)
    }
  }

  function tridecreement() {
    if (trdref.current.innerText === "Complex") {
      trdref.current.innerText = "Advanced";
      setTrdCst(200);
      setBtn7bg("#E9BE74")
      setBgwidth7(160)
    } else if (trdref.current.innerText === "Advanced") {
      trdref.current.innerText = "Basic";
      setTrdCst(100);
      setBtn7bg("#91D4A8")
      setBgwidth7(120)
    } else if (trdref.current.innerText === "Basic") {
      trdref.current.innerText = "None";
      setTrdCst(0);
      setBtn7bg("#ccc")
      setBgwidth7(80)
    }
  }

  function triincreement1() {
    if (trdref1.current.innerText === "None") {
      trdref1.current.innerText = "Basic";
      setTrdCst1(100);
      setBtn8bg("#91D4A8")
      setBgwidth8(120)
    } else if (trdref1.current.innerText === "Basic") {
      trdref1.current.innerText = "Advanced";
      setTrdCst1(200);
      setBtn8bg("#E9BE74")
      setBgwidth8(160)
    } else if (trdref1.current.innerText === "Advanced") {
      trdref1.current.innerText = "Complex";
      setTrdCst1(300);
      setBtn8bg("#F57F6C")
      setBgwidth8(200)
    }
  }

  function tridecreement1() {
    if (trdref1.current.innerText === "Complex") {
      trdref1.current.innerText = "Advanced";
      setTrdCst1(200);
      setBtn8bg("#E9BE74")
      setBgwidth8(160)
    } else if (trdref1.current.innerText === "Advanced") {
      trdref1.current.innerText = "Basic";
      setTrdCst1(100);
      setBtn8bg("#91D4A8")
      setBgwidth8(120)
    } else if (trdref1.current.innerText === "Basic") {
      trdref1.current.innerText = "None";
      setTrdCst1(0);
      setBtn8bg("#ccc")
      setBgwidth8(80)
    }
  }

  function triincreement2() {
    if (trdref2.current.innerText === "None") {
      trdref2.current.innerText = "Basic";
      setTrdCst2(100);
      setBtn9bg("#91D4A8")
      setBgwidth9(120)
    } else if (trdref2.current.innerText === "Basic") {
      trdref2.current.innerText = "Advanced";
      setTrdCst2(200);
      setBtn9bg("#E9BE74")
      setBgwidth9(160)

    } else if (trdref2.current.innerText === "Advanced") {
      trdref2.current.innerText = "Complex";
      setTrdCst2(300);
      setBtn9bg("#F57F6C")
      setBgwidth9(200)
    }
  }

  function tridecreement2() {
    if (trdref2.current.innerText === "Complex") {
      trdref2.current.innerText = "Advanced";
      setTrdCst2(200);
      setBtn9bg("#E9BE74")
      setBgwidth9(160)
    } else if (trdref2.current.innerText === "Advanced") {
      trdref2.current.innerText = "Basic";
      setTrdCst2(100);
      setBtn9bg("#91D4A8")
      setBgwidth9(120)
    } else if (trdref2.current.innerText === "Basic") {
      trdref2.current.innerText = "None";
      setTrdCst2(0);
      setBtn9bg("#ccc")
      setBgwidth9(80)
    }
  }

  //buttons  function3 end

  //buttons 4 function start

  function frthincreement() {
    if (frthref.current.innerText === "None") {
      frthref.current.innerText = "Basic";
      setFrthCst(100);
      setBtn10bg("#91D4A8")
      setBgwidth10(120)
    } else if (frthref.current.innerText === "Basic") {
      frthref.current.innerText = "Advanced";
      setFrthCst(200);
      setBtn10bg("#E9BE74")
      setBgwidth10(160)
    } else if (frthref.current.innerText === "Advanced") {
      frthref.current.innerText = "Complex";
      setFrthCst(300);
      setBtn10bg("#F57F6C")
      setBgwidth10(200)
    }
  }

  function frthdecreement() {
    if (frthref.current.innerText === "Complex") {
      frthref.current.innerText = "Advanced";
      setFrthCst(200);
      setBtn10bg("#E9BE74")
      setBgwidth10(160)
    } else if (frthref.current.innerText === "Advanced") {
      frthref.current.innerText = "Basic";
      setFrthCst(100);
      setBtn10bg("#91D4A8")
      setBgwidth10(120)
    } else if (frthref.current.innerText === "Basic") {
      frthref.current.innerText = "None";
      setFrthCst(0);
      setBtn10bg("#ccc")
      setBgwidth10(80)
    }
  }

  function frthincreement1() {
    if (frthref1.current.innerText === "None") {
      frthref1.current.innerText = "Basic";
      setFrthCst1(100);
      setBtn11bg("#91D4A8")
      setBgwidth11(120)
    } else if (frthref1.current.innerText === "Basic") {
      frthref1.current.innerText = "Advanced";
      setFrthCst1(200);
      setBtn11bg("#E9BE74")
      setBgwidth11(160)
    } else if (frthref1.current.innerText === "Advanced") {
      frthref1.current.innerText = "Complex";
      setFrthCst1(300);
      setBtn11bg("#F57F6C")
      setBgwidth11(200)
    }
  }

  function frthdecreement1() {
    if (frthref1.current.innerText === "Complex") {
      frthref1.current.innerText = "Advanced";
      setFrthCst1(200);
      setBtn11bg("#E9BE74")
      setBgwidth11(160)
    } else if (frthref1.current.innerText === "Advanced") {
      frthref1.current.innerText = "Basic";
      setFrthCst1(100);
      setBtn11bg("#91D4A8")
      setBgwidth11(120)
    } else if (frthref1.current.innerText === "Basic") {
      frthref1.current.innerText = "None";
      setFrthCst1(0);
      setBtn11bg("#ccc")
      setBgwidth11(80)
    }
  }

  function frthincreement2() {
    if (frthref2.current.innerText === "None") {
      frthref2.current.innerText = "Basic";
      setFrthCst2(100);
      setBtn12bg("#91D4A8")
      setBgwidth12(120)
    } else if (frthref2.current.innerText === "Basic") {
      frthref2.current.innerText = "Advanced";
      setFrthCst2(200);
      setBtn12bg("#E9BE74")
      setBgwidth12(160)
    } else if (frthref2.current.innerText === "Advanced") {
      frthref2.current.innerText = "Complex";
      setFrthCst2(300);
      setBtn12bg("#F57F6C")
      setBgwidth12(200)
    }
  }

  function frthdecreement2() {
    if (frthref2.current.innerText === "Complex") {
      frthref2.current.innerText = "Advanced";
      setFrthCst2(200);
      setBtn12bg("#E9BE74")
      setBgwidth12(160)
    } else if (frthref2.current.innerText === "Advanced") {
      frthref2.current.innerText = "Basic";
      setFrthCst2(100);
      setBtn12bg("#91D4A8")
      setBgwidth12(120)
    } else if (frthref2.current.innerText === "Basic") {
      frthref2.current.innerText = "None";
      setFrthCst2(0);
      setBtn12bg("#ccc")
      setBgwidth12(80)
    }
  }

  //buttons 4 function end

  //buttons 5 function start

  function fthincreement() {
    if (fthref.current.innerText === "None") {
      fthref.current.innerText = "Basic";
      setFthCst(100);
      setBtn13bg("#91D4A8")
      setBgwidth13(120)
    } else if (fthref.current.innerText === "Basic") {
      fthref.current.innerText = "Advanced";
      setFthCst(200);
      setBtn13bg("#E9BE74")
      setBgwidth13(160)
    } else if (fthref.current.innerText === "Advanced") {
      fthref.current.innerText = "Complex";
      setFthCst(300);
      setBtn13bg("#F57F6C")
      setBgwidth13(200)
    }
  }

  function fthdecreement() {
    if (fthref.current.innerText === "Complex") {
      fthref.current.innerText = "Advanced";
      setFthCst(200);
      setBtn13bg("#E9BE74")
      setBgwidth13(160)
    } else if (fthref.current.innerText === "Advanced") {
      fthref.current.innerText = "Basic";
      setFthCst(100);
      setBtn13bg("#91D4A8")
      setBgwidth13(120)
    } else if (fthref.current.innerText === "Basic") {
      fthref.current.innerText = "None";
      setFthCst(0);
      setBtn13bg("#ccc")
      setBgwidth13(80)
    }
  }

  function fthincreement1() {
    if (fthref1.current.innerText === "None") {
      fthref1.current.innerText = "Basic";
      setFthCst1(100);
      setBtn14bg("#91D4A8")
      setBgwidth14(120)
    } else if (fthref1.current.innerText === "Basic") {
      fthref1.current.innerText = "Advanced";
      setFthCst1(200);
      setBtn14bg("#E9BE74")
      setBgwidth14(160)
    } else if (fthref1.current.innerText === "Advanced") {
      fthref1.current.innerText = "Complex";
      setFthCst1(300);
      setBtn14bg("#F57F6C")
      setBgwidth14(200)
    }
  }

  function fthdecreement1() {
    if (fthref1.current.innerText === "Complex") {
      fthref1.current.innerText = "Advanced";
      setFthCst1(200);
      setBtn14bg("#E9BE74")
      setBgwidth14(160)
    } else if (fthref1.current.innerText === "Advanced") {
      fthref1.current.innerText = "Basic";
      setFthCst1(100);
      setBtn14bg("#91D4A8")
      setBgwidth14(120)
    } else if (fthref1.current.innerText === "Basic") {
      fthref1.current.innerText = "None";
      setFthCst1(0);
      setBtn14bg("#ccc")
      setBgwidth14(80)
    }
  }

  function fthincreement2() {
    if (fthref2.current.innerText === "None") {
      fthref2.current.innerText = "Basic";
      setFthCst2(100);
      setBtn15bg("#91D4A8")
      setBgwidth15(120)
    } else if (fthref2.current.innerText === "Basic") {
      fthref2.current.innerText = "Advanced";
      setFthCst2(200);
      setBtn15bg("#E9BE74")
      setBgwidth15(160)
    } else if (fthref2.current.innerText === "Advanced") {
      fthref2.current.innerText = "Complex";
      setFthCst2(300);
      setBtn15bg("#F57F6C")
      setBgwidth15(200)
    }
  }

  function fthdecreement2() {
    if (fthref2.current.innerText === "Complex") {
      fthref2.current.innerText = "Advanced";
      setFthCst2(200);
      setBtn15bg("#E9BE74")
      setBgwidth15(160)
    } else if (fthref2.current.innerText === "Advanced") {
      fthref2.current.innerText = "Basic";
      setFthCst2(100);
      setBtn15bg("#91D4A8")
      setBgwidth15(120)
    } else if (fthref2.current.innerText === "Basic") {
      fthref2.current.innerText = "None";
      setFthCst2(0);
      setBtn15bg("#ccc")
      setBgwidth15(80)
    }
  }

  return (
    <div className="pageHome">
      <div className="nav">
        <div className="pageCount">
          <h1 id="Pagecnt"> {Sidebardata.length} </h1>
          <p>Pages </p>
        </div>

        <div id="page">
          <h1 id="Pagecnt"> {designSum} $ </h1>
          <p>Page Design </p>
        </div>

        <div id="page1">
          <h1 id="Pagecnt"> {IASum} $ </h1>
          <p>Interactions & Animations</p>
        </div>

        <div id="page2">
          <h1 id="Pagecnt"> {CMSsum} $ </h1>
          <p>CMS/ Dynamic Data/ Intagrations </p>
        </div>

        <div className="pagetot">
          <p>Sub Total</p>
          <h1 id="Pagecnt"> {total} $ </h1>
        </div>
      </div>
      <div className="line"></div>
      <div id="header">
        <h1>Pages</h1>
        <h1 id="D">Design</h1>

        <h1 id="I">Integration</h1>
        <h1 id="C">cost</h1>
      </div>
      <span id="IA"> Interactions & Animations</span>
      <div className="pageList">
        <ul>
          {Sidebardata.map((item) => {
            return (
              <li key={item.id}>
                <div className="pageList__item">
                  <div className="pageList__item__slno">
                    <p>{item.slno}</p>
                  </div>
                  <div className="pageList__item__label">
                    <p id="pageitm">{item.label}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="butons">
        <div className="cost-break-down">
          <div className="decrement">
            <button onClick={decreement}>-</button>
          </div>
          <div className="main">
            <div className="opn" style={{ width: bgwidth, background: btnbg }}>
              <h1 ref={ref}>None</h1>
            </div>
          </div>
          <div className="increement">
            <button onClick={increement}>+</button>
          </div>
        </div>

        <div className="cost-break-down1">
          <div className="decrement">
            <button onClick={decreement1}>-</button>
          </div>
          <div className="main">
            <div className="opn" style={{ width: bgwidth2, background: btn2bg }}>
              <h1 ref={ref1}>None</h1>
            </div>
          </div>
          <div className="increement">
            <button onClick={increement1}>+</button>
          </div>
        </div>

        <div className="cost-break-down2">
          <div className="decrement">
            <button onClick={decreement2}>-</button>
          </div>
          <div className="main">
            <div className="opn" 
            style={{ width: bgwidth3, background: btn3bg }}
            >
              <h1 ref={ref2}>None</h1>
            </div>
          </div>
          <div className="increement">
            <button onClick={increement2}>+</button>
          </div>
        </div>

        <div className="buttons2">
          <div className="cost-break-down">
            <div className="decrement">
              <button onClick={snddecreement}>-</button>
            </div>
            <div className="main">
              <div
                className="opn"
                style={{ width: bgwidth4, background: btn4bg }}
              >
                <h1 ref={sndref}>None</h1>
              </div>
            </div>
            <div className="increement">
              <button onClick={sndincreement}>+</button>
            </div>
          </div>

          <div className="cost-break-down1">
            <div className="decrement">
              <button onClick={snddecreement1}>-</button>
            </div>
            <div className="main">
              <div
                className="opn"
                style={{ width: bgwidth5, background: btn5bg }}
              >
                <h1 ref={sndref1}>None</h1>
              </div>
            </div>
            <div className="increement">
              <button onClick={sndincreement1}>+</button>
            </div>
          </div>

          <div className="cost-break-down2">
            <div className="decrement">
              <button onClick={snddecreement2}>-</button>
            </div>
            <div className="main">
              <div
                className="opn"
                style={{ width: bgwidth6, background: btn6bg }}
              >
                <h1 ref={sndref2}>None</h1>
              </div>
            </div>
            <div className="increement">
              <button onClick={sndincreement2}>+</button>
            </div>
          </div>
        </div>

        <div className="buttons3">
          <div className="cost-break-down">
            <div className="decrement">
              <button onClick={tridecreement}>-</button>
            </div>
            <div className="main">
              <div
                className="opn"
                style={{ width: bgwidth7, background: btn7bg }}
              >
                <h1 ref={trdref}>None</h1>
              </div>
            </div>
            <div className="increement">
              <button onClick={triincreement}>+</button>
            </div>
          </div>

          <div className="cost-break-down1">
            <div className="decrement">
              <button onClick={tridecreement1}>-</button>
            </div>
            <div className="main">
              <div
                className="opn"
                style={{ width: bgwidth8, background: btn8bg }}
              >
                <h1 ref={trdref1}>None</h1>
              </div>
            </div>
            <div className="increement">
              <button onClick={triincreement1}>+</button>
            </div>
          </div>

          <div className="cost-break-down2">
            <div className="decrement">
              <button onClick={tridecreement2}>-</button>
            </div>
            <div className="main">
              <div
                className="opn"
                style={{ width: bgwidth9, background: btn9bg }}
              >
                <h1 ref={trdref2}>None</h1>
              </div>
            </div>
            <div className="increement">
              <button onClick={triincreement2}>+</button>
            </div>
          </div>
        </div>

        <div className="buttons4">
          <div className="cost-break-down">
            <div className="decrement">
              <button onClick={frthdecreement}>-</button>
            </div>
            <div className="main">
              <div
                className="opn"
                style={{ width: bgwidth10, background: btn10bg }}
              >
                <h1 ref={frthref}>None</h1>
              </div>
            </div>
            <div className="increement">
              <button onClick={frthincreement}>+</button>
            </div>
          </div>

          <div className="cost-break-down1">
            <div className="decrement">
              <button onClick={frthdecreement1}>-</button>
            </div>
            <div className="main">
              <div
                className="opn"
                style={{ width: bgwidth11, background: btn11bg }}
              >
                <h1 ref={frthref1}>None</h1>
              </div>
            </div>
            <div className="increement">
              <button onClick={frthincreement1}>+</button>
            </div>
          </div>

          <div className="cost-break-down2">
            <div className="decrement">
              <button onClick={frthdecreement2}>-</button>
            </div>
            <div className="main">
              <div
                className="opn"
                style={{ width: bgwidth12, background: btn12bg }}
              >
                <h1 ref={frthref2}>None</h1>
              </div>
            </div>
            <div className="increement">
              <button onClick={frthincreement2}>+</button>
            </div>
          </div>
        </div>

        <div className="buttons5">
          <div className="cost-break-down">
            <div className="decrement">
              <button onClick={fthdecreement}>-</button>
            </div>
            <div className="main">
              <div
                className="opn"
                style={{ width: bgwidth13, background: btn13bg }}
              >
                <h1 ref={fthref}>None</h1>
              </div>
            </div>
            <div className="increement">
              <button onClick={fthincreement}>+</button>
            </div>
          </div>

          <div className="cost-break-down1">
            <div className="decrement">
              <button onClick={fthdecreement1}>-</button>
            </div>
            <div className="main">
              <div
                className="opn"
                style={{ width: bgwidth14, background: btn14bg }}
              >
                <h1 ref={fthref1}>None</h1>
              </div>
            </div>
            <div className="increement">
              <button onClick={fthincreement1}>+</button>
            </div>
          </div>

          <div className="cost-break-down2">
            <div className="decrement">
              <button onClick={fthdecreement2}>-</button>
            </div>
            <div className="main">
              <div
                className="opn"
                style={{ width: bgwidth15, background: btn15bg }}
              >
                <h1 ref={fthref2}>None</h1>
              </div>
            </div>
            <div className="increement">
              <button onClick={fthincreement2}>+</button>
            </div>
          </div>
        </div>
      </div>
      <div className="costPrice">
        <h1>{sum} $</h1>
        <h1>{sum1} $</h1>
        <h1>{sum2} $</h1>
        <h1>{sum3} $</h1>
        <h1>{sum4} $</h1>
      </div>
    </div>
  );
};

export default Home;
