import React, { useCallback, useEffect, useRef, useState } from "react";
import { Input, Label, Container } from "./styles";
import Dropdown from "./Dropdown";

export default function SearchSelect({
  label,
  items = [],
  setInputJson,
  setInput,
  onChange,
  ...rest
}) {
  label = label || "";

  const [dropdown, setDropdown] = useState(true);
  const ref = useRef(null);
  const [search, setSearch] = useState(items);

  const searchHandler = useCallback(
    (value) => {
      if (value) {
        const searchedItems = items.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        setSearch(searchedItems);
      } else {
        setSearch(items);
      }
    },
    [items]
  );
  function hideDropdown(state) {
    setDropdown(state);
    searchHandler();
  }

  useEffect(() => {
    searchHandler();
    const input = ref.current;
    function outsideClickListener(event) {
      if (!input.contains(event.target)) {
        hideDropdown(true);
      }
    }

    document.addEventListener("click", outsideClickListener);

    return () => {
      document.removeEventListener("click", outsideClickListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input
        autoComplete="off"
        {...rest}
        ref={ref}
        onChange={(event) => {
          onChange && onChange(event);
          searchHandler(event.target.value);
        }}
        onClick={() => hideDropdown(false)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.stopPropagation();
            document.activeElement.blur();
            hideDropdown(true);
          }
        }}
      />

      <Dropdown
        items={search}
        setInputJson={setInputJson}
        setInput={setInput}
        dropdown={dropdown}
        hideDropdown={hideDropdown}
      />
    </Container>
  );
}
