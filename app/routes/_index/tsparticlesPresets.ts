import { ISourceOptions } from '@tsparticles/engine';

export const DESKTOP_OPTIONS: ISourceOptions = {
    background: {
        color: {
            value: '#000',
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push',
            },
            onHover: {
                enable: true,
                mode: 'repulse',
            },
            resize: true as any,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: '#ffffff',
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'bounce',
            },
            random: false,
            speed: 0.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                // @ts-expect-error This is actually valid
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    detectRetina: true,
};

export const MOBILE_OPTIONS: ISourceOptions = {
    background: {
        color: {
            value: '#000',
        },
    },
    fpsLimit: 120,
    particles: {
        color: {
            value: '#ffffff',
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'bounce',
            },
            random: false,
            speed: 0.25,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                // @ts-expect-error This is actually valid
                area: 800,
            },
            value: 150,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    detectRetina: true,
};
