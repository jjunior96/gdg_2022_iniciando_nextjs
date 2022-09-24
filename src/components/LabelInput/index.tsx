import * as S from './styles';

export type LabelColorType = 'white' | 'black';

export type LabelInputProps = {
  label?: string;
  htmlFor: string | undefined;
  children: React.ReactNode;
  isRequired?: boolean;
  isDisabled?: boolean;
  error?: boolean;
  labelColor?: LabelColorType;
};

const LabelInput = ({
  children,
  htmlFor = '',
  labelColor = 'black',
  isRequired,
  isDisabled,
  error = false
}: LabelInputProps) => {
  return (
    <S.LabelContainer
      htmlFor={htmlFor}
      isRequired={isRequired}
      isDisabled={isDisabled}
      labelColor={labelColor}
      error={error}
    >
      {children} <span>*</span>
    </S.LabelContainer>
  );
};

export default LabelInput;
