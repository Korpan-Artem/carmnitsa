import { SearchOutlined } from "@ant-design/icons";
import { Select, Input } from "antd";
import { useEffect, useState, useRef } from "react";
import { SearchWrapper, StyledSelect, StyledInput } from "./styles";

const { Option } = Select;

const placeholderOptions = [
  "Тормозні колодки",
  "Передній бампер",
  "Решітка радіатора"
];

function SearchInput() {
  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [active, setActive] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const timeout = setTimeout(() => {
      if (charIndex < placeholderOptions[index].length) {
        setPlaceholder((prev) => prev + placeholderOptions[index][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setPlaceholder("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % placeholderOptions.length);
        }, 1500);
      }
    }, 120);

    return () => clearTimeout(timeout);
  }, [charIndex, index, active]);

  const handleFocus = () => {
    setActive(false);
    setPlaceholder("");
  };

  const handleBlur = () => {
    if (!inputRef.current.value) {
      setActive(true);
      setCharIndex(0);
      setPlaceholder("");
    }
  };

  return (
    <SearchWrapper>
      <StyledSelect defaultValue="all" dropdownMatchSelectWidth={false}>
        <Option value="all">All</Option>
        <Option value="engine">Engine</Option>
        <Option value="brakes">Brakes</Option>
        <Option value="suspension">Suspension</Option>
      </StyledSelect>

      <StyledInput
        ref={inputRef}
        placeholder={placeholder}
        suffix={<SearchOutlined />}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </SearchWrapper>
  );
}

export default SearchInput;
