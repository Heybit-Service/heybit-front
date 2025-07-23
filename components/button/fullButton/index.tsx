import React, { FC, PropsWithChildren, CSSProperties } from 'react';
import { Button } from './styles';

interface FullButtonProps extends PropsWithChildren {
  style?: CSSProperties;
  onClick?: () => void;
}

const FullButton: FC<FullButtonProps> = ({ children, style, onClick }) => {
    return (
        <Button style={style} onClick={() => onClick?.()}>
            {children}
        </Button>
    );
}

export default FullButton;