import Table from '@/components/Table';
import TCell from '@/components/Table/TCell';
import Tr from '@/components/Table/Tr';
import { baseURL } from '@/utils/constants/global';

export default async function Home() {
    const res = await fetch(`${baseURL}/posts`);
    const data = await res.json();
    console.log(data);
    return (
        <div className='px-10'>
            <Table headData={['#', 'name']}>
                <Tr>
                    <TCell>1</TCell>
                    <TCell>sepehr</TCell>
                </Tr>
                <Tr>
                    <TCell>2</TCell>
                    <TCell>ali</TCell>
                </Tr>
            </Table>
        </div>
    );
}
