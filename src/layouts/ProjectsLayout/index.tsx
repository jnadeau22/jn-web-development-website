import { useTranslation } from 'react-i18next';

import classes from './projectsLayout.module.scss';
import { thumbnail_lameuteamary } from '../../assets';
import { Card } from '../../components';

const PROJECTS = [
    {
        title: 'La Meute à Mary',
        link: 'https://lameuteamary.ca/',
        thumbnail: thumbnail_lameuteamary,
        stack: ['Vue JS', 'Typescript', 'Express JS', 'MongoDB'],
    },
];

const ProjectsLayout = () => {
    const { t } = useTranslation('projects');

    return (
        <section className={classes.projectsLayout}>
            <Card>
                <h2 className={classes.projectsLayout__title}>
                    <span className='bullet'></span>
                    {t('title')}
                </h2>
                <ul className={classes.projectsLayout__projects}>
                    {PROJECTS.map((project, index) => (
                        <li key={index}>
                            <a
                                href={project.link}
                                target='_blank'
                                rel='noreferrer'
                                className={classes.projectsLayout__project}>
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className={
                                        classes.projectsLayout__project_thumbnail
                                    }
                                />
                                <div
                                    className={
                                        classes.projectsLayout__project_content
                                    }>
                                    <h3
                                        className={
                                            classes.projectsLayout__project_title
                                        }>
                                        {project.title}
                                    </h3>
                                    <p
                                        className={
                                            classes.projectsLayout__project_stack_title
                                        }>
                                        {t('stack')}:
                                    </p>
                                    <p>{project.stack.join(', ')}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </Card>
        </section>
    );
};

export default ProjectsLayout;
