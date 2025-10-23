import React from 'react';
import { ButtonsInterfaceInternal, ComponentsInterfaceInternal, IconsInterfaceInternal, PermissionsObject } from '../types';
interface CheckboxBlockProps {
    permissionsTable: PermissionsObject;
    onChange(data: PermissionsObject): void;
    expandedItems: string[];
    nodesWithChildren: string[];
    buttons: ButtonsInterfaceInternal;
    icons: IconsInterfaceInternal;
    components: ComponentsInterfaceInternal;
}
declare const CheckboxBlock: ({ permissionsTable, onChange, expandedItems, nodesWithChildren, buttons: Buttons, icons: Icons, components: Components, }: CheckboxBlockProps) => React.JSX.Element;
export default CheckboxBlock;
