import Alert from '@/components/Alert';
import { FiSearch } from 'react-icons/fi';

export default function Home() {
    return (
        <div className='px-10'>
            <Alert icon={<FiSearch />} theme='info' variant='dash'>
                <span>we use cookies for no reason.</span>
                <div className='space-x-2'>
                    <button className='btn btn-sm'>Deny</button>
                    <button className='btn btn-sm btn-primary'>Accept</button>
                </div>
            </Alert>
        </div>
    );
}

