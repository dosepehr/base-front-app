import Arrow from '@/../public/icons/arrow.svg';
import Button from '@/components/Button';
export default function Home() {
    return (
        <div>
            <p>متن فارسی</p>
            <p lang='en'>en content</p>
            <Arrow />{' '}
            <Button variant='soft' theme='primary' size='lg'>
                Soft Primary Large
            </Button>
        </div>
    );
}

