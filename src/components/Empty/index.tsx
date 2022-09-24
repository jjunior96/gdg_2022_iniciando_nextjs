import { FiInbox as EmptyIcon } from 'react-icons/fi';

import Button from 'components/Button';

import * as S from './styles';

export type EmptyProps = {
  title?: string;
  description?: string;
  hasLink?: boolean;
  icon?: boolean;
};

const Empty = ({
  title,
  description,
  icon = true,
  hasLink = false
}: EmptyProps) => {
  return (
    <S.Container>
      <S.Content>
        {icon && <EmptyIcon data-testid="empty-icon" />}

        <S.Title>{title ? title : 'No data'}</S.Title>
        {description && <S.Description>{description}</S.Description>}

        {hasLink && (
          <Button href="/home" as="a">
            Go to home
          </Button>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Empty;
