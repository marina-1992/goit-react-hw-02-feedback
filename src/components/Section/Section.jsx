import { SectionStyled, TitleStyled } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <SectionStyled >
      <TitleStyled >
       {title}
      </TitleStyled>
       {children}
    </SectionStyled>
  )
};