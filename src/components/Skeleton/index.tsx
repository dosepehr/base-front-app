import classNames from 'classnames';
import React, { FC } from 'react';
import { SkeletonProps } from './skeleton.type';

const Skeleton: FC<SkeletonProps> = ({ width, height }) => {
    const classes = classNames('skeleton', width, height);
    return <div className={classes}></div>;
};

export default Skeleton;

