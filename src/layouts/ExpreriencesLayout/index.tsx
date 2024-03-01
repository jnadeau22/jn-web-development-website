import { useTranslation } from 'react-i18next';

import classes from './experiences.module.scss';
import { Card } from '../../components';

const EXPERIENCES = [
    {
        title: 'Frontend Developer',
        company: 'Iconnek',
        startDate: '2023-11-06',
        endDate: '2024-02-06',
        companyLink: 'https://www.iconnek.io/',
    },
    {
        title: 'Frontend Developer',
        company: 'Comunik',
        startDate: '2022-09-06',
        endDate: '2023-09-06',
        companyLink: 'https://comunik.ca/',
    },
    {
        title: 'AEC Développement Web Frontend',
        company: 'Cégep de Trois-Rivières',
        startDate: '2021-10-01',
        endDate: '2022-06-01',
        companyLink: 'https://www.cegeptr.qc.ca/',
    },
];

const ExperiencesLayout = () => {
    const {
        t,
        i18n: { language },
    } = useTranslation('experiences');

    const getDate = (date: string) => {
        return new Date(date).toLocaleString(language, {
            year: 'numeric',
            month: 'long',
        });
    };
    return (
        <section className={classes.experiencesLayout}>
            <Card>
                <h2 className={classes.experiencesLayout__title}>
                    <span className={classes.experiencesLayout__bullet}></span>
                    {t('title')}
                </h2>
                <ul className={classes.experiencesLayout__experiences}>
                    {EXPERIENCES.map((experience, index) => (
                        <li key={index}>
                            <a
                                href={experience.companyLink}
                                target='_blank'
                                rel='noreferrer'
                                className={
                                    classes.experiencesLayout__experience
                                }>
                                <h3
                                    className={
                                        classes.experiencesLayout__experience_title
                                    }>
                                    {experience.title}
                                </h3>
                                <p
                                    className={
                                        classes.experiencesLayout__experience_company
                                    }>
                                    {experience.company}
                                </p>
                                <p
                                    className={
                                        classes.experiencesLayout__experience_dates
                                    }>
                                    {getDate(experience.startDate)} -{' '}
                                    {getDate(experience.endDate)}
                                </p>
                            </a>
                        </li>
                    ))}
                </ul>
            </Card>
        </section>
    );
};

export default ExperiencesLayout;
