import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Content,
  Logo,
  BG,
  ElemOne,
  ElemTwo,
  ElemThree,
} from "./styles";
import LogoImg from "../../assets/logo_b.png";
import ElemTLBG from "../../assets/elem_tl_bg.svg";
import ElemBTLBG from "../../assets/elem_btl_bg.svg";
import ElemBTRBG from "../../assets/elem_btr_bg.svg";
import SearchSelect from "../../components/SearchSelect";
import Button from "../../components/Button";
const YourCity = () => {
  const [cityData, setCityData] = useState([]);
  const [city, setCity] = useState(null);
  const [cityJson, setCityJson] = useState(null);

  useEffect(() => {
    axios.get("/cities").then((response) => setCityData(response.data));

    const cityStorage = localStorage.getItem("city");
    if (cityStorage && !city && !cityJson) {
      return (window.location.pathname = "/");
    } else if (city && cityJson) {
      return localStorage.setItem("city", JSON.stringify(cityJson));
    }
  }, [city, cityJson]);
  return (
    <Container>
      <Content>
        <Logo src={LogoImg} alt="logo" />
        <SearchSelect
          placeholder="Escolha um método de pagamento"
          value={city}
          items={cityData}
          onChange={(event) => setCity(event.target.value)}
          setInput={setCity}
          setInputJson={setCityJson}
        />
        <Button outline onClick={() => (window.location.pathname = "/")}>
          Confirmar
        </Button>
      </Content>
      <BG>
        <ElemOne src={ElemTLBG} />
        <ElemTwo src={ElemBTLBG} />
        <ElemThree src={ElemBTRBG} />
      </BG>
    </Container>
  );
};

export default YourCity;
