import React from "react";
import AwardHero from "../components/Award & Publication/AwardHero";
import AwardHighlight from "../components/Award & Publication/AwardHighlight";
import AwardsRecognition from "../components/Award & Publication/AwardsRecognition";
import JourneyOfExcellence from "../components/Award & Publication/JourneyOfExcellence";
import AwardWinningProjects from "../components/Award & Publication/AwardWinningProjects";

const AwardPublication = () => {
    return (
        <div>
            <AwardHero />
            <AwardHighlight />
            <AwardsRecognition />
            <JourneyOfExcellence />
            <AwardWinningProjects />
        </div>
    )
}

export default AwardPublication;