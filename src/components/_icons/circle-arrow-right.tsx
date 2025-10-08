import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCircleArrowRight = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        className='circle-arrow-right_svg__lucide circle-arrow-right_svg__lucide-circle-arrow-right-icon circle-arrow-right_svg__lucide-circle-arrow-right'
        viewBox='0 0 24 24'
        {...props}
    >
        <circle cx={12} cy={12} r={10} />
        <path d='m12 16 4-4-4-4M8 12h8' />
    </svg>
);
export default SvgCircleArrowRight;
