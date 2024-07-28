import React from "react";
import styled from "styled-components";
import { StyleLayout } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq ref={element} variants={scrollReveal} animate={controls} initial="hidden">
      <h2>
        Mọi Câu Hỏi Thường Gặp <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Làm Thế Nào Để Bắt Đầu?">
          <div className="answer">
            <p>Lorem, ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique cumque, explicabo libero nesciunt.
            </p>
          </div>
        </Toggle>
        <Toggle title="Hàng Ngày Của Lập Trình Viên Như Thế Nào?">
          <div className="answer">
            <p>Lorem, ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique cumque, explicabo libero nesciunt.
            </p>
          </div>
        </Toggle>
        <Toggle title="Front-End và Back-End Developer Là Gì?">
          <div className="answer">
            <p>Lorem, ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique cumque, explicabo libero nesciunt.
            </p>
          </div>
        </Toggle>
        <Toggle title="Muốn Theo Mảng Website Thì Học Gì?">
          <div className="answer">
            <p>Lorem, ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique cumque, explicabo libero nesciunt.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(StyleLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.15rem;
    margin: 1rem 0;
    width: 100%;
  }
  .question {
    padding: 1rem 0;
    cursor: pointer;
    h4 {
      font-size: 1.4rem;
    }
  }
  .answer {
    padding: 1rem 0;
    p {
      padding: 0.5rem 0;
    }
  }
`;

export default FaqSection;
