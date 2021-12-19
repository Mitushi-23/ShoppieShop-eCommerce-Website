import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};

export const ipad = (props) => {
  return css`
    @media only screen and (max-width: 840px) {
      ${props}
    }
  `;
};

export const ipad2 = (props) => {
  return css`
    @media only screen and (max-width: 1140px) {
      ${props}
    }
  `;
};