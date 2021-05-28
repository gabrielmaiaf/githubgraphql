import RepoLink from '../repo-link';
import type { RepositoryFormatted } from './index';

const Columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (value: string, repo: RepositoryFormatted): JSX.Element => {
      return <RepoLink text={value} tooltip={repo.description} url={repo.url} />;
    },
  },
  {
    title: 'Forks',
    dataIndex: 'forkCount',
    key: 'forkCount',
  },
  {
    title: 'Stargazers',
    dataIndex: 'stargazers',
    key: 'stargazers',
  },
];

export default Columns;
