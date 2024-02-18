import classes from './headerLayout.module.scss';
import { Card } from '../../components';

const HeaderLayout = () => {
    return (
        <header className={classes.headerLayout}>
            <Card>
                <div>
                    <h1>Header Layout</h1>
                </div>
            </Card>
        </header>
    );
};

export default HeaderLayout;
