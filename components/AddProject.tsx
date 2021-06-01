import { css, keyframes } from '@emotion/react';
import { ChangeEvent, useState } from 'react';

export function AddProject() {
  const [opened, setOpened] = useState(false);
  const [input, setInput] = useState({
    project_name: '',
    description: '',
    owner: '',
    thumbnail_url: '',
    play_link: '',
    user: '',
    repo: '',
    created_at: new Date().toString(),
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onClickAddProject = () => {
    if ([input.project_name, input.owner, input.user, input.repo].includes('')) {
      return alert('필수 항목은 빈칸일 수 없습니다.');
    }
    fetch('https://api.github.com/repos/woochanleee/dsm-projects-space/issues', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
      method: 'POST',
      body: JSON.stringify({
        title: `${input.project_name} 프로젝트 등록`,
        body: JSON.stringify(input),
      }),
    }).then(({ status }) => {
      if (status === 201) {
        alert('등록 요청하였습니다. \n개발자가 확인후 빠른 시일내에 추가할 것입니다.');
      } else {
        alert('등록 요청에 실패하였습니다.');
      }
    });
  };

  return (
    <div css={styles.addProject}>
      {opened ? (
        <div key='add_content' css={styles.addProjectContent}>
          <div>
            <p>프로젝트 추가</p>
            <div onClick={(_) => setOpened(false)}>x</div>
          </div>
          <main>
            <div>
              <input type='text' placeholder='(필수)프로젝트명' name='project_name' onChange={onChangeInput} />
              <input type='text' placeholder='프로젝트 소개글' name='description' onChange={onChangeInput} />
              <input type='text' placeholder='(필수)제작자' name='owner' onChange={onChangeInput} />
              <input type='text' placeholder='썸네일 링크(http 포함)' name='thumbnail_url' onChange={onChangeInput} />
              <input type='text' placeholder='서비스 링크(http 포함)' name='play_link' onChange={onChangeInput} />
              <label>프로젝트 레포 (형식 - user/repo)</label>
              <div>
                <input type='text' placeholder='(필수)깃허브 유저' name='user' onChange={onChangeInput} />
                <input type='text' placeholder='(필수)깃허브 레포' name='repo' onChange={onChangeInput} />
              </div>
            </div>
            <button onClick={onClickAddProject}>등록하기</button>
          </main>
        </div>
      ) : (
        <div key='plus_button' css={styles.addProjectButton} onClick={(_) => setOpened(true)}>
          +
        </div>
      )}
    </div>
  );
}

const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const styles = {
  addProject: css`
    right: 30px;
    bottom: 30px;
    position: absolute;
    z-index: 9999;
  `,
  addProjectButton: css`
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: 9999;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background-color: #ff8a3d;
    color: #ffffff;
    font-size: 30px;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 6px 0px;
    animation: 0.5s ${zoomIn} ease-in-out;
  `,
  addProjectContent: css`
    max-width: calc(100vw - 60px);
    width: 360px;
    height: 400px;
    border-radius: 14px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 6px 0px;
    animation: 0.5s ${zoomIn} ease-in-out;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;

    > div {
      background-color: #ff8a3d;
      border-top-left-radius: 14px;
      border-top-right-radius: 14px;
      position: relative;

      > p {
        padding: 8px;
        color: #ffffff;
        text-align: center;
      }

      > div {
        padding: 8px;
        top: 0;
        right: 8px;
        position: absolute;
        color: #ffffff;
        cursor: pointer;
      }
    }

    > main {
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        > label {
          font-size: 12px;
          margin-bottom: 2px;
        }

        > div {
          width: 100%;
          display: flex;
          justify-content: space-between;

          > input {
            width: 50%;
          }
        }

        > input {
          width: 100%;
          padding: 4px;
          margin-bottom: 8px;
        }
      }

      > button {
        cursor: pointer;
        background-color: #484042;
        border: none;
        color: #ffffff;
        border-radius: 4px;
        padding: 8px;
      }
    }
  `,
};
