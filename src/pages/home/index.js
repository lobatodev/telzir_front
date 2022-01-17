import React, { useRef, useEffect, useState } from "react";

import NavBar from "../../components/NavBar";
import First from "./First";
import Second from "./Second";

import { Container, Content } from "./styles";

const Home = () => {
  const startPage = useRef(null);
  const planPage = useRef(null);
  const [simulate, setSimulate] = useState(null);

  useEffect(() => {
    startPage.current.scrollIntoView();
  }, []);
  return (
    <Container>
      <div ref={startPage} />
      <NavBar pages={{ startPage, planPage }} />
      <Content>
        <First pages={{ planPage }} setSimulate={setSimulate} />
        <div ref={planPage} />
        <Second simulate={simulate} />
      </Content>
    </Container>
  );
};
export default Home;
