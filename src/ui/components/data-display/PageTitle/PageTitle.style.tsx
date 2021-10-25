import { styled } from "@mui/material/styles";

export const PageTitleContainer = styled("div")`
  /* margin: 40px 0; */
  margin: ${({ theme }) => theme.spacing(5)} 0; //  8 * 5 = 40px 0
  text-align: center;
`;

export const PageTitleStyled = styled("h2")`
  margin: 0;
  /* color: #6b2aee; */
  /* color: ${(props) => props.theme.palette.primary.main}; */
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const PageSubTitleStyled = styled("h3")`
  /* margin: 12px 0; */
  margin: ${({ theme }) => theme.spacing(1.5)} 0; //  8 * 1.5 = 12
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
