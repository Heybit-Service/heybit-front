import { FC, PropsWithChildren } from 'react';

const TimerPage: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <h1>타이머 페이지</h1>
            {children}
        </div>
    );
}

export default TimerPage;
