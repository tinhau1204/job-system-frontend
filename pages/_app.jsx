import Head from "next/head";
import { Provider } from "react-redux";
import { useState } from "react";
import store from "../redux";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import Layout from "@shards/Layout";
import { getCookie, setCookies } from "cookies-next";

export default function App(props) {
    const { Component, pageProps } = props;
    const [colorScheme, setColorScheme] = useState(props.colorScheme);

    const toggleColorScheme = (value) => {
        const nextColorScheme =
            value || (colorScheme === "dark" ? "light" : "dark");
        setColorScheme(nextColorScheme);

        // when color scheme is updated save it to cookie
        setCookies("mantine-color-scheme", nextColorScheme, {
            maxAge: 60 * 60 * 24 * 30,
        });
    };

    return (
        <>
            <Head>
                <title>Jobable</title>
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="https://talkbitz.com/wp-content/uploads/2020/04/Best-Free-Online-Logo-Maker-Sites.png"
                />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <Provider store={store}>
                <ColorSchemeProvider
                    colorScheme={colorScheme}
                    toggleColorScheme={toggleColorScheme}
                >
                    <MantineProvider
                        theme={{ colorScheme }}
                        withGlobalStyles
                        withNormalizeCSS
                    >
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </MantineProvider>
                </ColorSchemeProvider>
            </Provider>
        </>
    );
}

App.getInitialProps = ({ ctx }) => ({
    // get color scheme from cookie
    colorScheme: getCookie("mantine-color-scheme", ctx) || "dark",
});
