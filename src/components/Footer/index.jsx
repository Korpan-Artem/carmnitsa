import {
  StyledBoxMain,
  StyledBoxUp,
  StyledBoxDown,
  StyledBoxL,
  StyledBoxR,
  StyledBoxRU,
  StyledBoxRD,
  StyledText,
  LineUD,
  LineRL,
  StyledImage,
} from "./styles";
// import Telephones from "./components/Telephones";

function Footer() {
  return (
    <StyledBoxMain>
      <StyledBoxUp>
        <StyledBoxL>
          <StyledText>
            Сайт розроблено ARTtoDOC та ReSiVe. Далі пишу просто рандомний текст
            для наповнення. Тост: Бажаю щоб ти був завди перший, завжди була
            двуга половинка, був на третьому небі від щастя, мав свої чотири
            кута, все в житті було на п'ять, мав шосте чуття, щоб ти був сьомим
            чудом світу, а далі я забув. Тому дякую за увагу.
          </StyledText>
        </StyledBoxL>

        <StyledBoxR>
          <StyledBoxRU>
            <StyledText>
              Copyright © 2025 Carmnitsa. All rights reserved
            </StyledText>
          </StyledBoxRU>
          <LineRL />
          <StyledBoxRD>
            <StyledText>
              Copyright © 2025 Carmnitsa. All rights reserved
            </StyledText>
          </StyledBoxRD>
        </StyledBoxR>
      </StyledBoxUp>
      <LineRL />
      <StyledBoxDown>
        <StyledText>Copyright © 2025 Carmnitsa. All rights reserved</StyledText>
      </StyledBoxDown>
    </StyledBoxMain>
  );
}

export default Footer;
