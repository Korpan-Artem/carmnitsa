import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import logo from '../../assets/images/logo.png';

import {
  HeaderWrapper,
  TopBar,
  LogoBlock,
  SearchBlock,
  CategorySelect,
  SearchInput,
  IconsBlock,
  IconItem,
  BottomNav,
  NavItem,
  LogoImage
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

        <SearchBlock>
          <CategorySelect>
            All Categories
          </CategorySelect>

          <SearchInput placeholder="Search for products, brands, services" />

          <SearchOutlined />
        </SearchBlock>

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
