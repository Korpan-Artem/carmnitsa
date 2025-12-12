import { useTranslation } from "react-i18next";
import { CarOutlined, CalendarOutlined, TagsOutlined } from "@ant-design/icons";
import mainBanner from "../../assets/images/main-banner.png";

import {
  BannerWrapper,
  BannerContent,
  BannerTextSmall,
  BannerTextLarge,
  BannerImageWrapper,
  FiltersWrapper,
  FiltersInner
} from "./styles";
import CustomSelect from "../core/CustomSelect";

function Banner() {
  const { t } = useTranslation();

  return (
    <>
      <BannerWrapper>
        <BannerContent>
          <BannerTextSmall>{t("banner.smallText")}</BannerTextSmall>
          <BannerTextLarge dangerouslySetInnerHTML={{ __html: t("banner.largeText") }} />
        </BannerContent>

        <BannerImageWrapper>
          <img 
            src={mainBanner} 
            alt="Автомобільні деталі для вашого авто – легкі, швидкі та надійні" 
          />
        </BannerImageWrapper>
      </BannerWrapper>

      <FiltersWrapper>
        <FiltersInner>
          <form aria-label="Фільтр пошуку деталей" style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <CustomSelect
              placeholder={t("banner.selectYear")}
              prefix={<CalendarOutlined />}
              options={[
                { value: "2024", label: "2024" },
                { value: "2023", label: "2023" },
                { value: "2022", label: "2022" },
              ]}
            />

            <CustomSelect
              placeholder={t("banner.selectBrand")}
              prefix={<CarOutlined />}
              options={[
                { value: "bmw", label: "BMW" },
                { value: "audi", label: "Audi" },
                { value: "vw", label: "Volkswagen" },
              ]}
            />

            <CustomSelect
              placeholder={t("banner.selectModel")}
              prefix={<TagsOutlined />}
              options={[
                { value: "x5", label: "X5" },
                { value: "a6", label: "A6" },
                { value: "passat", label: "Passat" },
              ]}
            />
          </form>
        </FiltersInner>
      </FiltersWrapper>
    </>
  );
}

export default Banner;
