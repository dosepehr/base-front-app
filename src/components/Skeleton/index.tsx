import classNames from 'classnames';
import React, { FC } from 'react';
import { SkeletonProps } from './skeleton.type';

const Skeleton: FC<SkeletonProps> = ({ width, height, classname }) => {
    const classes = classNames('skeleton', width, height, classname);
    return <div className={classes}></div>;
};

export default Skeleton;

