import AboutMe from "../AboutMe";
import Education from "../Education";
import JobsInterest from "../JobsInterest";
import Portfolios from "../Portfolios";
import Resume from "../Resume";
import Skills from "../Skills";
import WorkEperience from "../WorkExperience";
import styles from "./styles.module.scss";

export default function BodySection() {
    return (
        <div className={styles.container}>
            <AboutMe />
            <WorkEperience />
            <Education />
            <Skills />
            <JobsInterest />
            <Resume />
            <Portfolios />
        </div>
    );
}
