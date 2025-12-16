import { SearchOutlined } from "@ant-design/icons";
import { Select, Input } from "antd";
import { SearchWrapper, StyledSelect, StyledInput } from "./styles";

const { Option } = Select;

function SearchInput() {
  return (
    <SearchWrapper>
      <StyledSelect defaultValue="all" dropdownMatchSelectWidth={false}>
        <Option value="all">All</Option>
        <Option value="engine">Engine</Option>
        <Option value="brakes">Brakes</Option>
        <Option value="suspension">Suspension</Option>
      </StyledSelect>

      <StyledInput placeholder="Search for products, brands, services" suffix={<SearchOutlined />} />
    </SearchWrapper>
  );
}

export default SearchInput;
