/// <reference types="react" />
declare const RoleTag: import("react").ComponentType<Pick<{
    [x: string]: any;
    [x: number]: any;
} & {
    theme?: any;
} & {
    as?: string | import("react").ComponentClass<any, any> | import("react").FunctionComponent<any> | undefined;
    forwardedAs?: string | import("react").ComponentClass<any, any> | import("react").FunctionComponent<any> | undefined;
}, string | number | symbol> & import("@material-ui/core/styles/withTheme").ThemedComponentProps>;
export default RoleTag;
