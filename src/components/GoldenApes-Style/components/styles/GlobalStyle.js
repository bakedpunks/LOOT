// the problem is that it is a CSS file and hence, we cannot use a JS variable in it.
// The solution is to create a new file. In /components/styles create GlobalStyle.js.
// Here, import createGlobalStyle from styled-components.
// Also, import themes from ColorStyles.js here.

import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.dark.backgroundColor};

    @media (prefers-color-scheme: dark) {
	background: ${themes.dark.backgroundColor};
}
  }
`
