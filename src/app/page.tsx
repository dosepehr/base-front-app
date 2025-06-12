import Button from '@/components/Button';

export default function Home() {
    return (
        <div>
            <p className='text-white text-center'>خوش آمدید!</p>
            <Button shape='default' size='md' theme='secondary' variant='dash'>
                Default Button
            </Button>
        </div>
    );
}

