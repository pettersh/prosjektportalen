import { Web } from "sp-pnp-js";
import * as React from "react";
import {
    Spinner,
    SpinnerType,
} from "office-ui-fabric-react/lib/Spinner";
import { MessageBar } from "office-ui-fabric-react/lib/MessageBar";
import IProjectQuickLinksProps, { ProjectQuickLinksDefaultProps } from "./IProjectQuickLinksProps";
import IProjectQuickLinksState, { ProjectQuickLinksInitialState } from "./IProjectQuickLinksState";


export default class ProjectQuickLinks extends React.PureComponent<IProjectQuickLinksProps, IProjectQuickLinksState> {
    public static defaultProps = ProjectQuickLinksDefaultProps;

    /**
     * Constructor
     */
    constructor() {
        super();
        this.state = ProjectQuickLinksInitialState;
    }

    /**
     * Component did mount
     */
    public componentDidMount(): void {
        new Web(_spPageContextInfo.webAbsoluteUrl)
            .lists
            .getByTitle(__("Lists_ProjectQuickLinks_Title"))
            .items
            .top(this.props.itemsCount)
            .select("URL", "Comments", "GtDpIcon")
            .get().then(links => this.setState({ links: links, isLoading: false }));
    }

    /**
     * Renders the component
     */
    public render(): JSX.Element {
        return (
            <div>
                {this.renderItems(this.props, this.state)}
            </div>
        );
    }

    /**
     * Render items
     */
    private renderItems = ({ containerId, listClassName }: IProjectQuickLinksProps, { isLoading, links }: IProjectQuickLinksState) => {
        if (isLoading) {
            return (
                <Spinner type={SpinnerType.large} />
            );
        } else if (links.length > 0) {
            return (
                <div id={containerId}>
                    <ul className={listClassName}>
                        {links.map(({ URL: { Url, Description }, Comments, GtDpIcon }, idx) => (
                            <li className="project-link" key={idx}>
                                <a href={Url}>
                                    <i className={`ms-Icon ms-Icon--${GtDpIcon}`} aria-hidden="true"></i>
                                    {Description}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div id={containerId}>
                    <MessageBar>{__("WebPart_EmptyMessage")}</MessageBar>
                </div>
            );
        }
    }
}
