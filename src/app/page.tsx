import Button from '@/components/Button';
import Progress from '@/components/Progress';
import Skeleton from '@/components/Skeleton';

export default function Home() {
    return (
        <div>
            <p className='text-white text-center'>خوش آمدید!</p>
            <Button shape='default' size='md' theme='secondary' variant='dash'>
                Default Button
            </Button>
            <Progress value={10} classname='w-40 block mt-10' />
            <Skeleton width='w-20' height='h-5' />
        </div>
    );
}

