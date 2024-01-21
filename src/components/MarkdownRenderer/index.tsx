import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import '~/styles/markdown.css'

export type MarkdownRendererProps = {
  children: string
}

export const MarkdownRenderer = ({ children }: MarkdownRendererProps) => (
  <ReactMarkdown
    className="markdown-wrapper"
    components={{
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      code({ className, children, node, ref, ...props }) {
        const match = /language-(\w+)/.exec(className || '')

        return match ? (
          <SyntaxHighlighter
            {...props}
            PreTag="div"
            language={match[1]}
            style={oneLight}>
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}>
    {children}
  </ReactMarkdown>
)
