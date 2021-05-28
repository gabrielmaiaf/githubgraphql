import { gql, useQuery } from '@apollo/client';
import { Table as AntTable } from 'antd';
import { useEffect, useState } from 'react';

import { GithubSearch } from '../../types/github-search';
import Columns from './columns';
import { TableWrapper } from './style';

const REACT_QUERY = gql`
  {
    search(query: "react", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            url
            forkCount
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

export interface RepositoryFormatted {
  id: string;
  name: string;
  description: string;
  url: string;
  forkCount: number;
  stargazers: number;
}

const Table: React.FC = () => {
  const { data, loading } = useQuery<GithubSearch>(REACT_QUERY);
  const [formattedData, setFormattedData] = useState<RepositoryFormatted[]>([]);

  useEffect(() => {
    if (data) {
      const newData = data.search.edges.map((d) => {
        return {
          id: d.node.id,
          name: d.node.name,
          url: d.node.url,
          stargazers: d.node.stargazers.totalCount,
          forkCount: d.node.forkCount,
          description: d.node.description,
        };
      });

      setFormattedData(newData);
    }
  }, [data]);

  if (loading) return <div>loading...</div>;

  return (
    <TableWrapper>
      <AntTable
        rowKey={(record) => record.id}
        dataSource={formattedData}
        columns={Columns}
        bordered
        pagination={false}
      />
    </TableWrapper>
  );
};

export default Table;
