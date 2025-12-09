import { Outlet }   from "react-router-dom";
import { Wrapper }  from "./styles/Layout";

export default function Layout() {
  return (
    <Wrapper>
      <header>Header</header>  {/* TODO: add your header here */}
      
      <main>
        <Outlet /> 
      </main>

      <footer>Footer</footer> {/* TODO: create footer and add here*/}
    </Wrapper>
  );
}
