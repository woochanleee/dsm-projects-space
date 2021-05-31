import { css } from '@emotion/react';

export function Header() {
  return (
    <>
      <header css={styles.header}>
        <h1>DSM_PROJECTS.SPACE</h1>
      </header>
    </>
  );
}

const styles = {
  header: css`
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
    padding: 20px;

    > h1 {
      text-align: center;
    }
  `,
};
