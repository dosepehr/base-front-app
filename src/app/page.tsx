import Select from '@/components/Select';
import { OptionsType } from '@/components/Select/select.type';
export default function Home() {
    const s: OptionsType = {
        options: [
            {
                title: '1',
                value: '',
            },
            {
                title: '2',
                value: '2',
            },
        ],
        title: 'pick',
    };
    return (
        <div>
            <p className='text-white text-center'>خوش آمدید!</p>
            {/* <Input placeholder='ff' isAnimated /> */}
            <Select options={s} />
        </div>
    );
}

