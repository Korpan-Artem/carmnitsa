import { StyledSelectWrapper } from "./style.js";

const CustomSelect = ({ prefix, ...props }) => {
  return (
    <StyledSelectWrapper
      {...props}
      prefix={prefix}
      dropdownMatchSelectWidth={false}
    />
  );
};

export default CustomSelect;
