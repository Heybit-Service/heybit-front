import styled from 'styled-components'
import { GRAY, BLACK } from '@/constant/color';

export const VoteLayoutWrapper = styled.div`
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 84px;
    display: flex;
    flex-direction: column;
    background-color: ${GRAY[100]};
    
    @media (min-width: 768px) {
        max-width: 430px;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const TabWrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    display: flex;
    flex-shrink: 0;

    .item {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 18px;
        font-weight: 600;
        color: ${GRAY[300]};
        position: relative;
    }

    .active {
        color: ${BLACK};

        &:after {
            content: "";
            width: 100%;
            height: 2px;
            background-color: ${BLACK};
            bottom: 0;
            left: 0;
            position: absolute;
        }
    }
`

export const ContentWrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 24px 16px;
`