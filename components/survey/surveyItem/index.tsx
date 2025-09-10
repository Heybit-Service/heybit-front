import { FC, PropsWithChildren } from 'react';
import { Wrapper } from './styles';
import CheckCircle from '@/assets/survey/check_circle.svg'

interface SurveyItemProps extends PropsWithChildren {
    selected?: boolean;
    onClick?: () => void;
}

const SurveyItem: FC<SurveyItemProps> = ({ children, selected, onClick }) => {
    return (
        <Wrapper selected={selected} onClick={() => onClick?.()}>
            {children}
            {selected && <CheckCircle />}
        </Wrapper>
    );
}

export default SurveyItem;