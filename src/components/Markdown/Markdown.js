import React from "react";
import ReactMarkdown from "react-markdown/with-html";
import MarkdownInlineCodeRender from "./helpers/markdownInlineCodeRender";
import MarkdownHeadingRender from "./helpers/markdownHeadingRender";
import MarkdownParagraphRender from "./helpers/markdownParagraphRender";
import MarkdownListRender from "./helpers/markdownListRender";
import MarkdownBlockquoteRender from "./helpers/markdownBlockquoteRender";
import MarkdownLinkRender from "./helpers/markdownLinkRender";
import MarkdownImageRender from "./helpers/markdownImageRender";

const Markdown = ({ source, escapeHtml = false }) => {
  return (
    <ReactMarkdown
      source={source}
      escapeHtml={escapeHtml}
      renderers={{
        inlineCode: MarkdownInlineCodeRender,
        heading: MarkdownHeadingRender,
        paragraph: MarkdownParagraphRender,
        list: MarkdownListRender,
        blockquote: MarkdownBlockquoteRender,
        link: MarkdownLinkRender,
        image: MarkdownImageRender,
      }}
    />
  );
};

export default Markdown;
