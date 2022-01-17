import React from "react";
import Button from "../../../components/Button";
import { HiOutlineCheckCircle } from "react-icons/hi";
import {
  Container,
  Content,
  Title,
  SubTitle,
  Cards,
  Card,
  CardHeader,
  CardContent,
} from "./styles";

const First = ({ pages, setSimulate }) => {
  const executeScroll = (page) => pages[page].current.scrollIntoView();
  function simulatePlan(plan) {
    setSimulate(plan);
    executeScroll("planPage");
  }
  return (
    <Container>
      <Content>
        <Title>Conheça o FaleMais</Title>
        <SubTitle>
          Com o FaleMais da telZir você pode falar de graça de acordo com seu
          plano e só paga pelos minutos excedentes*.
          <span>
            *Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal
            do minuto.
          </span>
        </SubTitle>
        <Cards>
          <Card>
            <CardHeader>
              <Title className="plan">Fale+ 30</Title>
              <SubTitle className="minutes">
                30 Minutos<span>por mês</span>
              </SubTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  <HiOutlineCheckCircle />
                  Ligações em até 30 minutos gratuitas
                </li>
                <li>
                  <HiOutlineCheckCircle />
                  Roaming Nacional;
                </li>
                <li>
                  <HiOutlineCheckCircle />
                  Aplicativos exclusivos telZir.
                </li>
                <li>
                  <HiOutlineCheckCircle />
                  Redes sociais à vontade.
                </li>
              </ul>
              <Button onClick={() => simulatePlan(30)}>Simular</Button>
            </CardContent>
          </Card>
          <Card main>
            <CardHeader>
              <Title className="plan">Fale+ 60</Title>
              <SubTitle className="minutes">
                60 Minutos<span>por mês</span>
              </SubTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  <HiOutlineCheckCircle />
                  Ligações em até 60 minutos gratuitas
                </li>
                <li>
                  <HiOutlineCheckCircle />
                  Roaming Nacional;
                </li>
                <li>
                  <HiOutlineCheckCircle />
                  Aplicativos exclusivos telZir.
                </li>
                <li>
                  <HiOutlineCheckCircle />
                  Redes sociais à vontade.
                </li>
              </ul>
              <Button onClick={() => simulatePlan(60)}>Simular</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Title className="plan">Fale+ 120</Title>
              <SubTitle className="minutes">
                120 Minutos<span>por mês</span>
              </SubTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  <HiOutlineCheckCircle />
                  Ligações em até 120 minutos gratuitas
                </li>
                <li>
                  <HiOutlineCheckCircle />
                  Roaming Nacional;
                </li>
                <li>
                  <HiOutlineCheckCircle />
                  Aplicativos exclusivos telZir.
                </li>
                <li>
                  <HiOutlineCheckCircle />
                  Redes sociais à vontade.
                </li>
              </ul>
              <Button onClick={() => simulatePlan(120)}>Simular</Button>
            </CardContent>
          </Card>
        </Cards>
      </Content>
    </Container>
  );
};
export default First;
