import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_DESCRIPTION = '대덕소프트웨어마이스터고등학교 프로젝트 집합소';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <link rel='icon' type='image/x-icon' href='https://avatars.githubusercontent.com/u/26157097?s=400&v=4' />
          <link rel='shortcut icon' type='image/x-icon' href='https://avatars.githubusercontent.com/u/26157097?s=400&v=4' />
          <link href='https://fonts.googleapis.com/earlyaccess/notosanskr.css' rel='stylesheet' />
          <meta name='description' content={APP_DESCRIPTION} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
