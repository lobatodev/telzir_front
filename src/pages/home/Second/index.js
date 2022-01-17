import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Content,
  Title,
  Form,
  ContentCard,
  Result,
  ContentPlan,
  ContentPrice,
  ContentError,
} from "./styles";

import { HiXCircle } from "react-icons/hi";

import Card from "../../../components/Card";
import Button from "../../../components/Button";
import SelectOption from "../../../components/SelectOption";
import InputNumber from "../../../components/InputNumber";

const Home = ({ simulate }) => {
  const cityStorage = JSON.parse(localStorage.getItem("city"));
  const [dddOrigin, setDDDOrigin] = useState(cityStorage.ddd);
  const [dddDestiny, setDDDDestiny] = useState(11);
  const [minutes, setMinutes] = useState(1);
  const [plan, setPlan] = useState(null);
  const [prices, setPrices] = useState(null);

  const [dddDestinyData, setDDDDestinyData] = useState(null);
  const [optDDDOrigin, setOptDDDOrigin] = useState([]);
  const [optDDDDestiny, setOptDDDDestiny] = useState([]);
  const [error, setError] = useState();

  function clearInputs() {
    setDDDOrigin(cityStorage.ddd);
    setDDDDestiny(11);
    setMinutes(1);
    setPlan(null);
    setPrices(null);
    setError(null);
  }

  useEffect(() => {
    axios.get("/ddds").then((response) => setOptDDDOrigin(response.data));
    axios.get("/ddds").then((response) => setDDDDestinyData(response.data));
    setPlan(simulate);
  }, [simulate]);

  function simulatePlan() {
    if (!dddOrigin || !dddDestiny || !minutes || !plan) {
      clearInputs();
      return setError({ msg: "Preencha todos os campos" });
    }
    axios
      .post("/simulate", {
        dddOrigin: parseInt(dddOrigin),
        dddDestiny: parseInt(dddDestiny),
        minutes: parseInt(minutes),
        plan: parseInt(plan),
      })
      .then((response) => {
        setError(null);
        setPrices(response.data);
      })
      .catch((error) => {
        clearInputs();
        setError(error.response.data);
      });
  }

  useEffect(() => {
    if (dddOrigin === 11) {
      dddDestinyData &&
        setOptDDDDestiny(dddDestinyData.filter((item) => item.ddd !== 11));
    } else {
      dddDestinyData &&
        setOptDDDDestiny(dddDestinyData.filter((item) => item.ddd === 11));
    }
  }, [dddOrigin, dddDestiny, dddDestinyData]);
  return (
    <Container>
      <Content>
        <Card>
          <ContentCard>
            <Title>
              <h2>Simulador</h2>
              <h1>FaleMais</h1>
            </Title>
            <Form>
              <SelectOption
                label="DDD de Origem"
                width={100}
                height={50}
                placeholder="DDD"
                value={dddOrigin || cityStorage.ddd}
                onChange={(event) => setDDDOrigin(parseInt(event.target.value))}
                options={optDDDOrigin}
                className="simulator"
              />
              <SelectOption
                label="DDD de Destino"
                width={100}
                height={50}
                placeholder="DDD"
                value={dddDestiny}
                onChange={(event) =>
                  setDDDDestiny(parseInt(event.target.value))
                }
                options={optDDDDestiny}
                className="simulator"
              />
              <InputNumber
                label="Tempo de Ligação"
                subLabel="minutos"
                setValue={setMinutes}
                value={minutes}
                onChange={(event) => setMinutes(parseInt(event.target.value))}
              />
            </Form>
            <Form
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "row",
              }}
            >
              <label>
                Fale+ 30
                <input
                  type="radio"
                  name="plan"
                  value={30}
                  onClick={() => setPlan(30)}
                  checked={plan === 30}
                />
                <span className="checkmark"></span>
              </label>
              <label>
                Fale+ 60
                <input
                  type="radio"
                  name="plan"
                  value={60}
                  onClick={() => setPlan(60)}
                  checked={plan === 60}
                />
                <span className="checkmark"></span>
              </label>
              <label>
                Fale+ 120
                <input
                  type="radio"
                  name="plan"
                  value={120}
                  onClick={() => setPlan(120)}
                  checked={plan === 120}
                />
                <span className="checkmark"></span>
              </label>
            </Form>
            {error && (
              <ContentError>
                <span>{error.msg}</span>
                <HiXCircle className="icon" onClick={() => setError(null)} />
              </ContentError>
            )}
            <Button onClick={() => simulatePlan()}>Simular</Button>
          </ContentCard>
          {prices && (
            <Result>
              <ContentPlan>
                <span>com</span>
                <h2>Fale+ {plan}</h2>
              </ContentPlan>
              <ContentPrice>
                <span>R$</span>
                <h2>
                  {prices &&
                    prices.withPlan.toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 3,
                    })}
                </h2>
                {prices && prices.discount > 1 && (
                  <p>{Math.round(prices.discount) + "% de desconto"}</p>
                )}
              </ContentPrice>
              <ContentPlan></ContentPlan>
              <ContentPrice>
                <span>sem FaleMais</span>
                <h1>
                  {prices &&
                    prices.withoutPlan.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </h1>
              </ContentPrice>
            </Result>
          )}
        </Card>
      </Content>
    </Container>
  );
};

export default Home;
