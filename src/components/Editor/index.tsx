'use client';

import { useState } from 'react';

import RichTextEditor, { BaseKit } from 'reactjs-tiptap-editor';

import {
    BubbleMenuTwitter,
    BubbleMenuKatex,
    BubbleMenuExcalidraw,
    BubbleMenuMermaid,
    BubbleMenuDrawer,
} from 'reactjs-tiptap-editor/bubble-extra';

import { Attachment } from 'reactjs-tiptap-editor/attachment';
import { Blockquote } from 'reactjs-tiptap-editor/blockquote';
import { Bold } from 'reactjs-tiptap-editor/bold';
import { BulletList } from 'reactjs-tiptap-editor/bulletlist';
import { Clear } from 'reactjs-tiptap-editor/clear';
import { Code } from 'reactjs-tiptap-editor/code';
import { CodeBlock } from 'reactjs-tiptap-editor/codeblock';
import { Color } from 'reactjs-tiptap-editor/color';
import { ColumnActionButton } from 'reactjs-tiptap-editor/multicolumn';
import { Emoji } from 'reactjs-tiptap-editor/emoji';
import { ExportPdf } from 'reactjs-tiptap-editor/exportpdf';
import { ExportWord } from 'reactjs-tiptap-editor/exportword';
import { FontFamily } from 'reactjs-tiptap-editor/fontfamily';
import { FontSize } from 'reactjs-tiptap-editor/fontsize';
import { FormatPainter } from 'reactjs-tiptap-editor/formatpainter';
import { Heading } from 'reactjs-tiptap-editor/heading';
import { Highlight } from 'reactjs-tiptap-editor/highlight';
import { History } from 'reactjs-tiptap-editor/history';
import { HorizontalRule } from 'reactjs-tiptap-editor/horizontalrule';
import { Iframe } from 'reactjs-tiptap-editor/iframe';
import { Image } from 'reactjs-tiptap-editor/image';
import { ImageGif } from 'reactjs-tiptap-editor/imagegif';
import { ImportWord } from 'reactjs-tiptap-editor/importword';
import { Indent } from 'reactjs-tiptap-editor/indent';
import { Italic } from 'reactjs-tiptap-editor/italic';
import { LineHeight } from 'reactjs-tiptap-editor/lineheight';
import { Link } from 'reactjs-tiptap-editor/link';
import { Mention } from 'reactjs-tiptap-editor/mention';
import { MoreMark } from 'reactjs-tiptap-editor/moremark';
import { OrderedList } from 'reactjs-tiptap-editor/orderedlist';
import { SearchAndReplace } from 'reactjs-tiptap-editor/searchandreplace';
import { SlashCommand } from 'reactjs-tiptap-editor/slashcommand';
import { Strike } from 'reactjs-tiptap-editor/strike';
import { Table } from 'reactjs-tiptap-editor/table';
import { TableOfContents } from 'reactjs-tiptap-editor/tableofcontent';
import { TaskList } from 'reactjs-tiptap-editor/tasklist';
import { TextAlign } from 'reactjs-tiptap-editor/textalign';
import { TextUnderline } from 'reactjs-tiptap-editor/textunderline';
import { Video } from 'reactjs-tiptap-editor/video';
import { TextDirection } from 'reactjs-tiptap-editor/textdirection';
import { Katex } from 'reactjs-tiptap-editor/katex';
import { Drawer } from 'reactjs-tiptap-editor/drawer';
import { Excalidraw } from 'reactjs-tiptap-editor/excalidraw';
import { Twitter } from 'reactjs-tiptap-editor/twitter';
import { Mermaid } from 'reactjs-tiptap-editor/mermaid';

import 'reactjs-tiptap-editor/style.css';
import 'prism-code-editor-lightweight/layout.css';
import 'prism-code-editor-lightweight/themes/github-dark.css';

import 'katex/dist/katex.min.css';
import 'easydrawer/styles.css';
import 'react-image-crop/dist/ReactCrop.css';

function convertBase64ToBlob(base64: string) {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

const extensions = [
    BaseKit.configure({
        placeholder: {
            showOnlyCurrent: true,
        },
        characterCount: {
            limit: 50_000,
        },
    }),
    History,
    SearchAndReplace,
    TableOfContents,
    FormatPainter.configure({ spacer: true }),
    Clear,
    FontFamily,
    Heading.configure({ spacer: true }),
    FontSize,
    Bold,
    Italic,
    TextUnderline,
    Strike,
    MoreMark,
    Emoji,
    Color.configure({ spacer: true }),
    Highlight,
    BulletList,
    OrderedList,
    TextAlign.configure({ types: ['heading', 'paragraph'], spacer: true }),
    Indent,
    LineHeight,
    TaskList.configure({
        spacer: true,
        taskItem: {
            nested: true,
        },
    }),
    Link,
    Image.configure({
        upload: (files: File) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(URL.createObjectURL(files));
                }, 500);
            });
        },
    }),
    Video.configure({
        upload: (files: File) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(URL.createObjectURL(files));
                }, 500);
            });
        },
    }),
    ImageGif.configure({
        GIPHY_API_KEY: process.env.NEXT_PUBLIC_GIPHY_API_KEY as string,
    }),
    Blockquote,
    SlashCommand,
    HorizontalRule,
    Code.configure({
        toolbar: false,
    }),
    CodeBlock,
    ColumnActionButton,
    Table,
    Iframe,
    ExportPdf.configure({ spacer: true }),
    ImportWord.configure({
        upload: (files: File[]) => {
            const f = files.map((file) => ({
                src: URL.createObjectURL(file),
                alt: file.name,
            }));
            return Promise.resolve(f);
        },
    }),
    ExportWord,
    TextDirection,
    Mention,
    Attachment.configure({
        upload: (file: File) => {
            // fake upload return base 64
            const reader = new FileReader();
            reader.readAsDataURL(file);

            return new Promise((resolve) => {
                setTimeout(() => {
                    const blob = convertBase64ToBlob(reader.result as string);
                    resolve(URL.createObjectURL(blob));
                }, 300);
            });
        },
    }),

    Katex,
    Excalidraw,
    Mermaid.configure({
        upload: (file: File) => {
            // fake upload return base 64
            const reader = new FileReader();
            reader.readAsDataURL(file);

            return new Promise((resolve) => {
                setTimeout(() => {
                    const blob = convertBase64ToBlob(reader.result as string);
                    resolve(URL.createObjectURL(blob));
                }, 300);
            });
        },
    }),
    Drawer.configure({
        upload: (file: File) => {
            // fake upload return base 64
            const reader = new FileReader();
            reader.readAsDataURL(file);

            return new Promise((resolve) => {
                setTimeout(() => {
                    const blob = convertBase64ToBlob(reader.result as string);
                    resolve(URL.createObjectURL(blob));
                }, 300);
            });
        },
    }),
    Twitter,
];

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
                <RichTextEditor
                    output='html'
                    content={content}
                    onChangeContent={onValueChange}
                    extensions={extensions}
                    bubbleMenu={{
                        render(
                            { extensionsNames, editor, disabled },
                            bubbleDefaultDom
                        ) {
                            return (
                                <>
                                    {bubbleDefaultDom}

                                    {extensionsNames.includes('twitter') ? (
                                        <BubbleMenuTwitter
                                            disabled={disabled}
                                            editor={editor}
                                            key='twitter'
                                        />
                                    ) : null}
                                    {extensionsNames.includes('katex') ? (
                                        <BubbleMenuKatex
                                            disabled={disabled}
                                            editor={editor}
                                            key='katex'
                                        />
                                    ) : null}
                                    {extensionsNames.includes('excalidraw') ? (
                                        <BubbleMenuExcalidraw
                                            disabled={disabled}
                                            editor={editor}
                                            key='excalidraw'
                                        />
                                    ) : null}
                                    {extensionsNames.includes('mermaid') ? (
                                        <BubbleMenuMermaid
                                            disabled={disabled}
                                            editor={editor}
                                            key='mermaid'
                                        />
                                    ) : null}
                                    {extensionsNames.includes('drawer') ? (
                                        <BubbleMenuDrawer
                                            disabled={disabled}
                                            editor={editor}
                                            key='drawer'
                                        />
                                    ) : null}
                                </>
                            );
                        },
                    }}
                    {...rest}
                />

                {/* {typeof content === 'string' && (
                    <textarea
                        className='textarea'
                        style={{
                            marginTop: 20,
                            height: 500,
                            width: '100%',
                            borderRadius: 4,
                            padding: 10,
                        }}
                        value={content}
                    />
                )} */}
            </div>
        </main>
    );
}

export default Editor;

