import Button from '@/components/Button';
import Progress from '@/components/Progress';

export default function Home() {
    return (
        <div>
            <p className='text-white text-center'>خوش آمدید!</p>
            <Button shape='default' size='md' theme='secondary' variant='dash'>
                Default Button
            </Button>
            <Progress value={10} classname='w-40 block mt-10' />
        </div>
    );
}

