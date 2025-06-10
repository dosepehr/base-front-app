'use client';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { DropzoneProps } from './dropzone.type';

const Dropzone: React.FC<DropzoneProps> = ({
    onChange,
    showDetails = false,
    title,
    ...rest
}) => {
    const [files, setFiles] = useState<Array<File & { index: number }>>([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'application/pdf': ['.pdf'],
        },
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file, index) =>
                    Object.assign(file, { index })
                )
            );
            onChange(acceptedFiles[0]); // Update the value with the first accepted file
        },
        ...rest,
    });

    const uploadedFiles = files.map((file, i) => ({
        index: i,
        name: file.name,
        size: file.size / 1000, // Convert size to KB
        file: file,
    }));

    const deleteFile = (id: number) => {
        setFiles(files.filter((_, i) => i !== id));
        onChange(null); // Clear the value on delete
    };

    const downloadFile = (id: number) => {
        const fileToDownload = files[id];
        if (fileToDownload) {
            const url = URL.createObjectURL(fileToDownload);
            const link = document.createElement('a');
            link.href = url;
            link.download = fileToDownload.name;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(url);
        }
    };

    return (
        <section className='cursor-pointer'>
            <div
                {...getRootProps({ className: 'dropzone' })}
                className='bg-primary text-white border-2 border-white rounded-10 border-dashed h-24 flex items-center justify-center gap-x-4 px-4 text-center leading-7'
            >
                <input {...getInputProps()} />
                <p>{title}</p>
            </div>
            {showDetails && uploadedFiles.length ? (
                <aside className='mt-5'>
                    {uploadedFiles.map((file) => (
                        <div
                            key={file.name}
                            className='bg-white py-3 px-4 rounded-10 flex items-center justify-between'
                            dir='ltr'
                        >
                            <div className='flex items-center gap-2.5'>
                                <div className='flex flex-col'>
                                    <p className='text-primary font-bold'>
                                        {file.name}
                                    </p>
                                    <p className='text-gray-3 text-xs font-bold'>
                                        {file.size.toFixed(2)}KB
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2.5'>
                                <div
                                    onClick={() => deleteFile(file.index)}
                                    className='p-2 rounded-full border border-primary cursor-pointer'
                                >
                                    delete
                                </div>
                                <div
                                    onClick={() => downloadFile(file.index)}
                                    className='p-2.5 rounded-full border border-primary cursor-pointer flex items-center justify-center'
                                >
                                    download
                                </div>
                            </div>
                        </div>
                    ))}
                </aside>
            ) : (
                ''
            )}
        </section>
    );
};

export default Dropzone;

