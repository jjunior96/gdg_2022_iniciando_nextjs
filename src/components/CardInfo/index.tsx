import { IconBaseProps } from 'react-icons/lib';

import * as S from './styles';

export type CardInfoProps = {
  href: string;
  title?: string;
  description?: string;
  variant?: 'primary' | 'secundary';
  icon?: React.ComponentType<IconBaseProps>;
};

const CardInfo = ({
  href = '#',
  title,
  icon: Icon,
  description,
  variant
}: CardInfoProps) => {
  return (
    <S.Container variant={variant} aria-label={`${title} card info`}>
      <S.ContainerLink href={href}>
        <a>
          <S.Content>
            <S.CardHeader>
              <p>{title}</p>
              {Icon && <Icon size={20} aria-label={`${title} icon`} />}
            </S.CardHeader>

            <strong>{description}</strong>
          </S.Content>
        </a>
      </S.ContainerLink>
    </S.Container>
  );
};

export default CardInfo;
