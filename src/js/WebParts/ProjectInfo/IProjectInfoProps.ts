import * as React from "react";
import ProjectInfoRenderMode from "./ProjectInfoRenderMode";
import IProjectInfoModalOptions from "./IProjectInfoModalOptions";
import { IModalLinkProps } from "../@Components/ModalLink";
import ProjectInfoDefaultActionLinks from "./ProjectInfoDefaultActionLinks";

interface IProjectInfoProps {
    showActionLinks?: boolean;
    showMissingPropsWarning?: boolean;
    filterField?: string;
    labelSize?: "mi" | "xs" | "s" | "s-plus" | "m" | "m-plus" | "l" | "xl" | "xxl";
    valueSize?: "mi" | "xs" | "s" | "s-plus" | "m" | "m-plus" | "l" | "xl" | "xxl";
    hideChrome?: boolean;
    webUrl?: string;
    rootSiteUrl?: string;
    welcomePageId?: number;
    renderMode?: ProjectInfoRenderMode;
    modalOptions?: IProjectInfoModalOptions;
    containerClassName?: string;
    errorIconProps?: {
        iconName?: string;
        style?: React.CSSProperties;
    };
    infoIconProps?: {
        iconName?: string;
        style?: React.CSSProperties;
    };
    actionLinks?: IModalLinkProps[];
}

export const ProjectInfoDefaultProps: Partial<IProjectInfoProps> = {
    hideChrome: false,
    showActionLinks: true,
    showMissingPropsWarning: true,
    webUrl: _spPageContextInfo.webAbsoluteUrl,
    rootSiteUrl: _spPageContextInfo.siteAbsoluteUrl,
    welcomePageId: 3,
    renderMode: ProjectInfoRenderMode.Normal,
    containerClassName: "pp-projectInfo",
    actionLinks: ProjectInfoDefaultActionLinks,
};

export default IProjectInfoProps;
