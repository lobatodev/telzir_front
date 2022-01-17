import React, { useEffect, useState, useCallback } from "react";
import {
  Container,
  ControlsContainer,
  Input,
  Button,
  BoxQtd,
  Label,
  SubLabel,
} from "./styles";
import { GoPlus, GoDash } from "react-icons/go";

const InputNumber = ({ label, setValue, subLabel, ...rest }) => {
  const [inputValue, setInputValue] = useState(rest.value);

  const incrementInput = useCallback(() => {
    const newValue = inputValue + 1;
    setInputValue(newValue);
  }, [inputValue]);

  const reduceInput = useCallback(() => {
    const newValue = inputValue - 1;
    if (newValue > 0) setInputValue(newValue);
  }, [inputValue]);

  useEffect(() => {
    function listenerAdd(event) {
      if (event.key === "ArrowRight") {
        incrementInput();
      }
    }
    function listenerRemove(event) {
      if (event.key === "ArrowLeft") {
        reduceInput();
      }
    }

    document.addEventListener("keydown", listenerRemove);
    document.addEventListener("keydown", listenerAdd);

    return () => {
      document.removeEventListener("keydown", listenerRemove);
      document.removeEventListener("keydown", listenerAdd);
    };
  }, [incrementInput, reduceInput]);

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue, setValue]);

  return (
    <Container {...rest}>
      <BoxQtd>
        <ControlsContainer>
          {label && <Label>{label}</Label>}
          <Button
            onClick={reduceInput}
            style={{
              cursor: "pointer",
            }}
          >
            <GoDash
              style={{
                width: "20px",
                height: "20px",
                transform: "translateY(3px)",
                color: "#e86400",
                ...(inputValue === 1 && { color: "#ccc", cursor: "default" }),
              }}
            />
          </Button>
          <Input
            disabled={false}
            type="number"
            value={inputValue}
            style={{ width: "60px" }}
            onChange={(event) =>
              setInputValue(
                event.target.value ? Number(event.target.value) : ""
              )
            }
          />
          <Button
            onClick={incrementInput}
            style={{
              cursor: "pointer",
            }}
          >
            <GoPlus
              style={{
                width: "15px",
                height: "15px",
                transform: "translateY(3px)",
                color: "#e86400",
              }}
            />
          </Button>
          {subLabel && <SubLabel>{subLabel}</SubLabel>}
        </ControlsContainer>
      </BoxQtd>
    </Container>
  );
};

export default InputNumber;
