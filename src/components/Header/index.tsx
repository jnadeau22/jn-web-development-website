import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import classes from './header.module.scss';
import { Badge, Button, Card } from '..';

const Header = () => {
    const { t } = useTranslation('header');
    return (
        <header className={classes.headerLayout}>
            <Card>
                <div className={classes.headerLayout__content}>
                    <div className={classes.headerLayout__badge}>
                        <Badge text={t('available')} />
                    </div>
                    <h2 className={classes.headerLayout__title}>
                        {t('webDeveloper')}
                    </h2>
                    <p className={classes.headerLayout__iAm}>{t('iAm')}</p>
                    <p className={classes.headerLayout__description}>
                        {t('description')}
                    </p>
                    <div className={classes.headerLayout__buttons}>
                        <Button
                            endIcon={<FontAwesomeIcon icon={faPlus} />}
                            text={t('hireMe')}
                            variant='contained'
                        />
                        <Button
                            endIcon={<FontAwesomeIcon icon={faCopy} />}
                            text={t('copyEmail')}
                            variant='outlined'
                        />
                    </div>
                </div>
            </Card>
        </header>
    );
};

export default Header;
