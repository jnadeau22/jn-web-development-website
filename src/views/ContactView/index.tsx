import classes from './contactView.module.scss';
import { ContactFormLayout } from '../../layouts';

const ContactView = () => {
    return (
        <div className={classes.contactView}>
            <ContactFormLayout />
        </div>
    );
};

export default ContactView;
