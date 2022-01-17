import React from "react";
import { Container, Item } from "./styles";

export default function SearchInputDropdown({
  items,
  setInput,
  setInputJson,
  dropdown,
  hideDropdown,
}) {
  return (
    <Container className={dropdown ? "hide" : null}>
      {items &&
        items.map((item) => {
          return (
            <Item
              onClick={() => {
                setInput(item.name);
                setInputJson(item);
                hideDropdown(true);
              }}
              key={item.id}
            >
              {" "}
              {item.name}
            </Item>
          );
        })}
    </Container>
  );
}
