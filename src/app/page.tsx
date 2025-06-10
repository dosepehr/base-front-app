import Arrow from '%/arrow.svg';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
export default function Home() {
    return (
        <div>
            <p>متن فارسی</p>
            <p lang='en'>en content</p>
            <Arrow />{' '}
            <Button variant='soft' theme='primary' size='lg' isLoading>
                Soft Primary Large
            </Button>
            <Badge>lldld</Badge>
        </div>
    );
}

