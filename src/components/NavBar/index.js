import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerMenu,
  ContainerMenuItem,
  Logo,
  LogoImg,
  LinkMenu,
  Span,
} from "./styles";
import { HiOutlineLocationMarker } from "react-icons/hi";
import LogoPNG from "../../assets/logo_l.png";

const NavBar = ({ pages }) => {
  const [cityData, setCityData] = useState();
  const executeScroll = (page) => pages[page].current.scrollIntoView();
  function removeCity() {
    localStorage.removeItem("city");
  }
  useEffect(() => {
    const cityStorage = JSON.parse(localStorage.getItem("city"));
    setCityData(cityStorage);
  }, []);

  return (
    <Container>
      <ContainerMenu>
        <Logo>
          <LogoImg src={LogoPNG} onClick={() => executeScroll("startPage")} />
        </Logo>
        <ContainerMenuItem>
          <LinkMenu to="/suacidade" onClick={removeCity}>
            <HiOutlineLocationMarker className="icon" />
            <Span>{cityData && cityData.name + ", " + cityData.state}</Span>
          </LinkMenu>
        </ContainerMenuItem>
      </ContainerMenu>
    </Container>
  );
};
export default NavBar;
