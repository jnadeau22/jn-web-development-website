import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import classes from './header.module.scss';
import { Badge, Button, Card } from '../../components';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

const Header = () => {
    const { t } = useTranslation('header');
    const { copyToClipboard, isCopied } = useCopyToClipboard({
        isCopiedTimeout: 2000,
    });
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
                            onClick={() =>
                                copyToClipboard('jonathannadeau.jn@gmail.com')
                            }
                        />
                        <FontAwesomeIcon
                            icon={faCheck}
                            className={
                                isCopied
                                    ? classes.headerLayout__checkIcon_copied
                                    : classes.headerLayout__checkIcon
                            }
                        />
                    </div>
                </div>
            </Card>
        </header>
    );
};

export default Header;
