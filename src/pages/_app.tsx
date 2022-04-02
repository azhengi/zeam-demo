import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import Layout from '../features/Layout';
import "antd/dist/antd.css";
import store from "../app/store";

import "../styles/globals.css";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #2a2e33;

        padding-top: 58px;
    }
`;

const theme = {
    colors: {
        primary: "#0070f3",
    },
};

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </Provider>
        </>
    );
}
