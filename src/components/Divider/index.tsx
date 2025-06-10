import React, { FC } from 'react';

type DividerProps = {
    children: React.ReactNode;
};

const Divider: FC<DividerProps> = ({ children }) => {
    return (
        <div className='divider text-3xl md:text-5xl font-extrabold'>
            {children}
        </div>
    );
};

export default Divider;

