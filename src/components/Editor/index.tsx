import { useState } from "react";


function Editor({
    defaultContent = '',
    onChange,
    ...rest
}: {
    defaultContent?: string;
    onChange?: (val: string) => void;
}) {
    const [content, setContent] = useState(defaultContent);

    const onValueChange = (value: string) => {
        setContent(value);
        onChange?.(value); // 🔁 Send to parent
    };

    return (
        <main
            style={{
                padding: '0 20px',
            }}
        >
            <div
                style={{
                    maxWidth: 1024,
                    margin: '88px auto 120px',
                }}
            >
 {/* editor */}
            </div>
        </main>
    );
}

export default Editor;

