import classes from './stackLayout.module.scss';
import {
    logo_css,
    logo_html,
    logo_javascript,
    logo_mongodb,
    logo_mysql,
    logo_nodejs,
    logo_react,
    logo_redux,
    logo_sass,
    logo_tailwindcss,
    logo_typescript,
    logo_vue,
} from '../../assets';
import { Card } from '../../components';

const LOGOS = [
    {
        src: logo_css,
        alt: 'CSS',
    },
    {
        src: logo_html,
        alt: 'HTML',
    },
    {
        src: logo_javascript,
        alt: 'JavaScript',
    },
    {
        src: logo_mongodb,
        alt: 'MongoDB',
    },
    {
        src: logo_mysql,
        alt: 'MySQL',
    },
    {
        src: logo_nodejs,
        alt: 'Node.js',
    },
    {
        src: logo_react,
        alt: 'React',
    },
    {
        src: logo_redux,
        alt: 'Redux',
    },
    {
        src: logo_sass,
        alt: 'Sass',
    },
    {
        src: logo_tailwindcss,
        alt: 'Tailwind CSS',
    },
    {
        src: logo_typescript,
        alt: 'TypeScript',
    },
    {
        src: logo_vue,
        alt: 'Vue.js',
    },
];
const StackLayout = () => {
    return (
        <section className={classes.stackLayout}>
            <Card>
                <div className={classes.stackLayout__content}>
                    {LOGOS.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                        />
                    ))}
                </div>
            </Card>
        </section>
    );
};

export default StackLayout;
