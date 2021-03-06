import * as React from "react";

const ProjectPhaseIcon = ({ phase, classList }) => {
    let phaseLetter = phase[0];
    return (<div className={["phaseIcon", ...classList].join(" ")}>
        <span className="phaseLetter">{phaseLetter}</span>
        <span className="projectPhase">{phase}</span>
        <span className="phaseSubText"></span>
    </div>);
};

export default ProjectPhaseIcon;
