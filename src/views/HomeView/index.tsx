import classes from './homeView.module.scss';
import { ExperiencesLayout, HeaderLayout } from '../../layouts';

const HomeView = () => {
    return (
        <div className={classes.homeView}>
            <HeaderLayout />
            <ExperiencesLayout />
        </div>
    );
};

export default HomeView;
