'use client';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Collapse from '@/components/Collapse';
import Divider from '@/components/Divider';
import Dropzone from '@/components/Dropzone';
export default function Home() {
    return (
        <div>
            <Checkbox defaultChecked />
            <Button>fk</Button>
            <Collapse content='ff' key={'d'} title='lldlld' />
            <Divider>ckkck</Divider>
            <Dropzone onChange={() => {}} title='' />
        </div>
    );
}

