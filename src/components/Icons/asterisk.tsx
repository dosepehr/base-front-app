import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAsterisk = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        className='asterisk_svg__lucide asterisk_svg__lucide-asterisk-icon asterisk_svg__lucide-asterisk'
        viewBox='0 0 24 24'
        {...props}
    >
        <path d='M12 6v12M17.196 9 6.804 15M6.804 9l10.392 6' />
    </svg>
);
export default SvgAsterisk;
