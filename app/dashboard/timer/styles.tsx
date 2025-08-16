import styled from 'styled-components'
import { GRAY, BLACK } from '@/constant/color';

export const TabWrapper = styled.div`
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    display: flex;
    
    @media (min-width: 768px) {
        max-width: 430px;
        left: 50%;
        transform: translateX(-50%);
    }


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