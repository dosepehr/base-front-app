import Tooltip from '@/components/Tooltip';

export default function Home() {
    return (
        <div>
            <p className='text-white text-center'>خوش آمدید!</p>

            <br />
            <br />
            <br />
            <br />
            <Tooltip isOpen position='left' theme='info' content={'flfl'}>
                <p>kkff</p>
            </Tooltip>
        </div>
    );
}

