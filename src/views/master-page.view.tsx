import { renderToString } from "react-dom/server";
import React = require("react");
import { IViewConstructor } from "../shared";

const scripts: { [script: string]: number } = {};

export interface IMasterProps {
    title: string;
    children?: any;
}

export const MasterPageView: IViewConstructor<IMasterProps> = ({ title, children }) =>
    <html>
        <head>
            <title>{title}</title>
            <link rel="stylesheet" href="/css/semantic.min.css" />
            <script src="/js/jquery.min.js"></script>
            <script src="/js/semantic.min.js"></script>
            {Object.keys(scripts).map(s =>
                <script key={s} src={s}></script>
            )}
        </head>
        <body>{children}</body>
    </html>;

export function addScriptFile(...files: string[]) {
    files.forEach(f => {
        if (!f.startsWith("http") && !f.startsWith("js/") && !f.startsWith("/")) {
            f = "/js/" + f;
        }

        scripts[f] = 1;
    });
}

export function jsxToString<T>(elemConstructor: { (props: T): JSX.Element }, props: T): string {
  return renderToString(elemConstructor(props));
}

export default MasterPageView;