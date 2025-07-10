import Divider from '@/components/Divider';
import { baseURL } from '@/utils/constants/global';

export default async function Home() {
    const res = await fetch(`${baseURL}/posts`);
    const data = await res.json();
    console.log(data);
    return (
        <div className='px-10'>
            <Divider classname='text-red-500'>Welcome!</Divider>
        </div>
    );
}
