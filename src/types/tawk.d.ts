type TawkAPIType = {
    maximize?: () => void;
    minimize?: () => void;
    toggle?: () => void;
    onLoad?: () => void;
    [key: string]: unknown;
};

declare global {
    interface Window {
        Tawk_API?: TawkAPIType;
        Tawk_LoadStart?: Date;
    }
}

export { };
