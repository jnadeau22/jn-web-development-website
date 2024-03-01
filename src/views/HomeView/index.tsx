import classes from './homeView.module.scss';
import { ExperiencesLayout, HeaderLayout, StackLayout } from '../../layouts';

const HomeView = () => {
    return (
        <div className={classes.homeView}>
            <div className={classes.homeView__headerLayoutContainer}>
                <HeaderLayout />
            </div>
            <ExperiencesLayout />
            <StackLayout />
        </div>
    );
};

export default HomeView;
