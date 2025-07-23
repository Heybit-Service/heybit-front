import styled from 'styled-components';
import { BLACK, GRAY } from '@/constant/color';

export const TitleWrapper = styled.div`
    width: 100%;
    margin: 28px 0 24px;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const Title = styled.div`
 font-size: 22px;
 line-height: 130%;
 font-weight: 700;
 color: ${BLACK};
`;

export const Description = styled.div`
    font-size: 16px;
 line-height: 140%;
 color: ${GRAY[400]};
`;