import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark as highlightTheme } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function MdViewer({ children, theme, programmingLanguage }) {
    return (
        <ReactMarkdown
            remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            components={{
                code({ node, inline, children }) {
                    return <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={theme || highlightTheme}
                        language={programmingLanguage || "js"}
                        PreTag="div"
                    />

                }
            }}
        >
            {children}
        </ReactMarkdown>
    );
}

export default MdViewer;