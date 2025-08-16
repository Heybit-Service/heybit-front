import React, { FC, PropsWithChildren, CSSProperties } from 'react';
import { Button } from './styles';

interface FullButtonProps extends PropsWithChildren {
  style?: CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}

const FullButton: FC<FullButtonProps> = ({ children, style, onClick, disabled }) => {
    return (
        <Button style={style} onClick={() => onClick?.()} disabled={disabled}>
            {children}
        </Button>
    );
}

export default FullButton;