import {
  HeartOutlined,
  ShoppingCartOutlined,
}                       from "@ant-design/icons";
import SearchInput      from "../core/SearchInput";

import logo             from "../../assets/images/logo.png";

import {
  HeaderWrapper,
  TopBar,
  LogoBlock,
  IconsBlock,
  IconItem,
  BottomNav,
  NavItem,
  LogoImage,
} from "./styles";


function Header({ items }) {
  const HeaderItems = items.map((item, index) => (
    <NavItem key={index}>{item}</NavItem>
  ));

  return (
    <HeaderWrapper>
      <TopBar>
        <LogoBlock>
          <LogoImage src={logo} alt="AutozPro logo" />
        </LogoBlock>

        <SearchInput />

        <IconsBlock>
          <IconItem>
            <HeartOutlined />
            <span className="badge">0</span>
          </IconItem>

          <IconItem>
            <ShoppingCartOutlined />
            <span className="badge">0</span>
            <span className="price">$0.00</span>
          </IconItem>
        </IconsBlock>
      </TopBar>

      <BottomNav>
        {HeaderItems}
      </BottomNav>
    </HeaderWrapper>
  );
}

export default Header;
