export interface RepositoryType {
  id: string;
  name: string;
  description: string;
  url: string;
  forkCount: number;
  stargazers: {
    totalCount: number;
  };
}

export interface RepositoryNode {
  node: RepositoryType;
}

export interface GithubSearch {
  search: {
    edges: RepositoryNode[];
  };
}
