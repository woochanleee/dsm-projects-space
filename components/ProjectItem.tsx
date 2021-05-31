import { css, keyframes } from '@emotion/react';
import { useState } from 'react';

import { AiFillGithub } from 'react-icons/ai';
import { IoEarth } from 'react-icons/io5';

import { Project } from '../model/Project';

export function ProjectItem({
  user,
  repo,
  project_name,
  description,
  play_link,
  thumbnail_url,
  owner,
  stars,
}: Project & { stars: number }) {
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <div
      css={[
        styles.projectItem,
        thumbnail_url
          ? css`
              background-image: url(${thumbnail_url});
            `
          : undefined,
      ]}
      onMouseEnter={(_) => setDetailOpen(true)}
      onMouseLeave={(_) => setDetailOpen(false)}>
      <div>
        <p>{project_name}</p>
        <a href={`https://github.com/${user}/${repo}/stargazers`} target='_blank'>
          <div>
            {stars}
            {stars > 100 ? '+' : ''}
          </div>
        </a>
      </div>
      {owner && <span>제작자 - {owner}</span>}
      {detailOpen && (
        <div className='detail'>
          {description && (
            <span>
              {description}
              <div />
            </span>
          )}
          <ul>
            {play_link && (
              <li>
                <a href={play_link} target='_blank'>
                  <IoEarth />
                  <span>서비스 이용하기</span>
                </a>
              </li>
            )}
            <li>
              <a href={`https://github.com/${user}/${repo}`} target='_blank'>
                <AiFillGithub />
                <span>깃허브 코드 보기</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

const zoomIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const styles = {
  projectItem: css`
    position: relative;
    width: 300px;
    height: 220px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
    background-image: url(./images/no_image.jpeg);
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;

    > span {
      display: block;
      position: absolute;
      top: 8px;
      left: 8px;
      border: 1px solid black;
      background-color: white;
      border-radius: 14px;
      padding: 2px 8px;
      font-size: 12px;
    }

    > div {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #1775ac;
      color: #ffffff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

      > p {
        margin: 0;
        text-align: center;
        padding: 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-bottom-left-radius: 4px;
      }

      > a {
        display: blok;
        text-decoration: none;
        position: absolute;
        bottom: 0;
        right: 0;
        color: #ffffff;
        background-color: #01bb01;
        padding: 6px;
        border-bottom-right-radius: 4px;
      }

      &.detail {
        background-color: rgba(0, 0, 0, 0.75);
        width: 100%;
        height: 100%;
        padding: 18px;
        position: relative;
        animation: ${zoomIn} 0.3s ease-in 1;

        > span {
          > div {
            width: 30%;
            height: 1px;
            background-color: white;
            margin-top: 0.8rem;
          }
        }

        > ul {
          position: absolute;
          bottom: 18px;

          > li {
            border: 1px solid #ffffff;
            padding: 2px 8px;
            list-style: none;

            &:hover {
              background-color: #ffffff;
              border-color: #ffffff;
              color: #000000;
            }

            > a {
              text-decoration: none;
              color: inherit;
              display: flex;
              align-items: center;

              > svg {
                margin-right: 4px;
              }

              > span {
                font-weight: bold;
              }
            }

            & + li {
              margin-top: 4px;
            }
          }
        }
      }
    }
  `,
};
