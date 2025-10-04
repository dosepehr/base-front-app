import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAntenna = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        className='antenna_svg__lucide antenna_svg__lucide-antenna-icon antenna_svg__lucide-antenna'
        viewBox='0 0 24 24'
        {...props}
    >
        <path d='M2 12 7 2M7 12l5-10M12 12l5-10M17 12l5-10M4.5 7h15M12 16v6' />
    </svg>
);
export default SvgAntenna;
