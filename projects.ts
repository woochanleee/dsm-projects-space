import { Project } from './model/Project';

export const projects: Project[] = [
  {
    id: 1,
    user: 'woochanleee',
    repo: 'project-tree-generator',
    play_link: 'https://woochanleee.github.io/project-tree-generator',
    owner: '이우찬',
    description: '폴더 구조 제너레이터',
    project_name: '프로젝트 트리 제너레이터',
    thumbnail_url: 'https://user-images.githubusercontent.com/48552260/114111695-99e1b100-9915-11eb-8396-8b6e9344a9b9.gif',
    created_at: 'Mon May 31 2021 20:13:38 GMT+0900 (Korean Standard Time)',
  },
  {
    id: 2,
    project_name: '엔트리 인잇',
    description: '대덕소프트웨어마이스터고등학교 커뮤니티입니다.',
    owner: 'EntryDSM',
    thumbnail_url: 'https://avatars.githubusercontent.com/u/38097893?s=200&v=4',
    play_link: 'https://init.entrydsm.hs.kr',
    user: 'EntryDSM',
    repo: 'Persian',
    created_at: 'Mon May 31 2021 21:39:06 GMT+0900 (Korean Standard Time)',
  },
];
