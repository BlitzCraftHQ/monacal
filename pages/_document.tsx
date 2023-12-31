import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="MonaCle - Create events in mona space">
        <meta
          name="description"
          content="A meetup product that allows users to choose a Mona space link, pick a date and time, and schedule a meeting or event"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
