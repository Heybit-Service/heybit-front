import { FC, PropsWithChildren } from 'react';
import { TabWrapper } from './styles';

const TimerPage: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <TabWrapper>
                
            </TabWrapper>  
            {children}
        </>
    );
}

export default TimerPage;
