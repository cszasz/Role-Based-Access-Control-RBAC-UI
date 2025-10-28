interface Translations {
    [key: string]: string;
}
export declare const I18n: {
    t: (key: string, fallback?: string | undefined) => string;
    setTranslations: (translations: Translations) => void;
    addTranslations: (translations: Translations) => void;
    getTranslations: () => Translations;
    reset: () => void;
};
export default I18n;
