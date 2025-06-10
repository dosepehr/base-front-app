'use client';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Collapse from '@/components/Collapse';
import Divider from '@/components/Divider';
import Dropzone from '@/components/Dropzone';
import Editor from '@/components/Editor';
import Input from '@/components/Input';
import Table from '@/components/Table';
import TCell from '@/components/Table/TCell';
import Video from '@/components/Video';

export default function Home() {
    return (
        <div>
            <Checkbox defaultChecked />
            <Button>fk</Button>
            <Collapse content='ff' key={'d'} title='lldlld' />
            <Divider>ckkck</Divider>
            <Dropzone onChange={() => {}} title='' />
            <Editor defaultContent={''} onChange={() => {}} />
            <Input placeholder='f' />
            <Video
                src='/images/video.mp4'
                poster='/images/poster.png'
                className='mt-10 rounded-4xl max-w-sm mx-auto'
            />
            <Table headData={['1', '3']}>
                <TCell>1</TCell>
                <TCell>2</TCell>
            </Table>
        </div>
    );
}

