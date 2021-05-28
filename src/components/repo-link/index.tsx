import { Tooltip, Typography } from 'antd';

interface RepoLinkProps {
  tooltip: string;
  url: string;
  text: string;
}

const RepoLink: React.FC<RepoLinkProps> = ({ text, tooltip, url }) => (
  <Tooltip title={tooltip}>
    <Typography.Link href={url} target="_blank">
      {text}
    </Typography.Link>
  </Tooltip>
);

export default RepoLink;
