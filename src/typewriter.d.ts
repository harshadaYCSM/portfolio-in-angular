declare module 'typewriter-effect' {
    class Typewriter {
        constructor(element: Element, options: TypewriterOptions);
        start(): Typewriter;
    }

    interface TypewriterOptions {
        strings: string[];
        autoStart: boolean;
        loop: boolean;
        deleteSpeed: number;
    }

    export = Typewriter;
}
