import { FC } from "react";

import { HtmlRendererProps } from "./HtmlRenderer.types";

const HtmlRenderer: FC<HtmlRendererProps> = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HtmlRenderer;
