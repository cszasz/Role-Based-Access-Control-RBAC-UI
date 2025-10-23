import React from 'react';
import { ButtonsInterfaceInternal, ComponentsInterfaceInternal, IconsInterfaceInternal, ResourcesItem } from '../types';
interface TreeBlockProps {
    resources: ResourcesItem;
    expandedItems: string[];
    setExpandedItems(expandItems: string[]): void;
    onChange(newData: ResourcesItem, isDelete?: boolean): void;
    resourceForbiddenCharsRegex: RegExp | undefined;
    buttons: ButtonsInterfaceInternal;
    icons: IconsInterfaceInternal;
    components: ComponentsInterfaceInternal;
}
declare const TreeBlock: ({ resources, expandedItems, setExpandedItems, onChange, resourceForbiddenCharsRegex, buttons: Buttons, icons: Icons, components: Components, }: TreeBlockProps) => React.JSX.Element;
export default TreeBlock;
