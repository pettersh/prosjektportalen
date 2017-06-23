interface IProjectQuickLinksState {
    links?: any[];
    isLoading?: boolean;
}

export const ProjectQuickLinksInitialState: Partial<IProjectQuickLinksState> = {
    links: null,
    isLoading: true,
};

export default IProjectQuickLinksState;
