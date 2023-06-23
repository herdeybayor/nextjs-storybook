import React from "react";

export interface IBaseTemplate {
  sampleTextProps: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProps }) => {
  return <div className="text-black">{sampleTextProps}</div>;
};

export default BaseTemplate;
