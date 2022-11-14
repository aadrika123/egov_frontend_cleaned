import { useState, useEffect } from "react";
import "./style.css";
import capImage from "./cap_image.jpg";
import { AiOutlineReload } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  captchInput: Yup.string().required("Enter Captcha")
});

const Captcha = (props) => {
  const [captcha, setCaptcha] = useState("7777");
  const [inputCaptch, setInputCaptch] = useState("");
  const [validationText, setvalidationText] = useState("");

  const formik = useFormik({
    initialValues: {
      captchInput: ""
    },
    onSubmit: (values) => {
      compareCaptch();
    },
    validationSchema
  });

  let allCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ];

  useEffect(() => {
    getCaptcha();
  }, []);

  function getCaptcha() {
    let captchaText = "";
    for (let i = 0; i < 4; i++) {
      //getting 6 random characters from the array
      let randomCharacter =
        allCharacters[Math.floor(Math.random() * allCharacters.length)];
      captchaText += `${randomCharacter}`;
    }
    setCaptcha(captchaText);
    captchaText = "";
  }

  const compareCaptch = () => {
    if (captcha === formik.values.captchInput) {
      setvalidationText("Captcha Matched");
    } else {
      setvalidationText("Wrong Captch");
    }
  };

  return (
    <>
   
      <div class="wrapper">
        <div class="captcha-area">
          <div class="captcha-img">
            <img src={capImage} alt="Captch Background" />
            <span class="captcha">{captcha}</span>
          </div>
          <button class="reload-btn" onClick={getCaptcha}>
            <AiOutlineReload />
          </button>
        </div>
        
        <div class="status-text" style={{ marginTop: "20px" }}>
          {validationText}
        </div>
      </div>
    </>
  );
};

export default Captcha;
