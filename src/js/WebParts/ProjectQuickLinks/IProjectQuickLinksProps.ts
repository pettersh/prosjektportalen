import * as uuid_v1 from "uuid/v1";

export interface IProjectQuickLinksProps {
    itemsCount?: number;
    listClassName?: string;
    containerId?: string;
}

export const ProjectQuickLinksDefaultProps: Partial<IProjectQuickLinksProps> = {
    itemsCount: 10,
    listClassName: "pp-project-quicklinks spacing-m",
    containerId: uuid_v1(),
};

export default IProjectQuickLinksProps;
