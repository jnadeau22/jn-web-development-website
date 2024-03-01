import classes from './homeView.module.scss';
import {
    ExperiencesLayout,
    HeaderLayout,
    ProjectsLayout,
    StackLayout,
} from '../../layouts';

const HomeView = () => {
    return (
        <div className={classes.homeView}>
            <div className={classes.homeView__twoCols}>
                <HeaderLayout />
            </div>
            <ExperiencesLayout />
            <StackLayout />
            <div className={classes.homeView__twoCols}>
                <ProjectsLayout />
            </div>
        </div>
    );
};

export default HomeView;
