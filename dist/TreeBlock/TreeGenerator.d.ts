import React from 'react';
import { FnTreeBlockHandleOpenModal, IconsInterfaceInternal, ResourcesItem } from '../types';
interface TreeGeneratorProps {
    resources: ResourcesItem['_resources'];
    handleOpenModal: FnTreeBlockHandleOpenModal;
    icons: IconsInterfaceInternal;
}
declare const TreeGenerator: ({ resources, handleOpenModal, icons: Icons }: TreeGeneratorProps) => React.JSX.Element;
export default TreeGenerator;
export declare const ActionsContainer: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const ItemResource: React.ComponentType<Pick<{
    [x: string]: any;
    [x: number]: any;
} & {
    theme?: any;
} & {
    as?: string | React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined;
    forwardedAs?: string | React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined;
}, string | number | symbol> & import("@material-ui/core/styles/withTheme").ThemedComponentProps>;
export declare const TreeItemContent: React.ComponentType<Pick<{
    [x: string]: any;
    [x: number]: any;
} & {
    theme?: any;
} & {
    as?: string | React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined;
    forwardedAs?: string | React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined;
}, string | number | symbol> & import("@material-ui/core/styles/withTheme").ThemedComponentProps>;
