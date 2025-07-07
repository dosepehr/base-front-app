import Table from '@/components/Table';
import TCell from '@/components/Table/TCell';
export default function Home() {
    return (
        <div className='px-10'>
            <Table headData={['#', 'name']}>
                <tbody>
                    <TCell>1</TCell>
                    <TCell>Sepehr</TCell>
                </tbody>
                <tbody>
                    <TCell>1</TCell>
                    <TCell>Ali</TCell>
                </tbody>
            </Table>
        </div>
    );
}

