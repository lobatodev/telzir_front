import React, { useEffect } from "react";
import {
  Container,
  Loader,
  LoadSVG,
  BG,
  ElemOne,
  ElemTwo,
  ElemThree,
} from "./styles";
import Loading from "../../assets/logo_load.svg";
import ElemTLBG from "../../assets/elem_tl_bg.svg";
import ElemBTLBG from "../../assets/elem_btl_bg.svg";
import ElemBTRBG from "../../assets/elem_btr_bg.svg";
const SplashScreen = () => {
  useEffect(() => {
    const city = localStorage.getItem("city");
    const route = window.location.pathname;

    if (!city && route !== "/suacidade") {
      return (window.location.pathname = "/suacidade");
    }
  }, []);
  return (
    <Container>
      <Loader>
        <LoadSVG type="image/svg" data={Loading}>
          <img src={Loading} alt="loading" className="loading" />
        </LoadSVG>
      </Loader>
      <BG>
        <ElemOne src={ElemTLBG} />
        <ElemTwo src={ElemBTLBG} />
        <ElemThree src={ElemBTRBG} />
      </BG>
    </Container>
  );
};

export default SplashScreen;
