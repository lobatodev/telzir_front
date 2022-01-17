import React from "react";
import { Select, Label, Container, Option } from "./styles";

const SelectOption = ({
  label,
  width,
  height,
  placeholder,
  outline,
  options = [],
  ...rest
}) => {
  label = label || "";
  placeholder =
    placeholder || `Selecione ${label.toLowerCase?.() || "uma opção"}`;

  return (
    <Container width={width} height={height} outline={outline}>
      <Label outline={outline}>{label}</Label>
      <Select height={height} {...rest}>
        {placeholder && (
          <Option key={-1} value={-1}>
            {placeholder}
          </Option>
        )}
        {options.map((option) => (
          <Option key={option.ddd} value={option.ddd}>
            {option.ddd}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default SelectOption;
