import { FC } from "react";

interface HtmlRendererProps {
  htmlContent: string;
}

const HtmlRenderer: FC<HtmlRendererProps> = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HtmlRenderer;
