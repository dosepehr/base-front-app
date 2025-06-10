import { DropzoneOptions } from 'react-dropzone';

export type DropzoneProps = DropzoneOptions & {
    onChange: (file: File | null) => void;
    showDetails?: boolean;
    title: string;
};

