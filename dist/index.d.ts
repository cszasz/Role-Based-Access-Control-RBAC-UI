import React, { ComponentType } from 'react';
import { PermissionsObject } from './types';
export interface ButtonsInterface {
    cancelButton?: ComponentType;
    closeButton?: ComponentType;
    saveButton?: ComponentType;
    deleteButton?: ComponentType;
}
export interface IconsInterface {
    editIcon?: ComponentType;
    deleteIcon?: ComponentType;
    treeAddIcon?: ComponentType;
    treeDeleteIcon?: ComponentType;
    treeEditIcon?: ComponentType;
    treeNodeIcon?: ComponentType;
    treeParentIcon?: ComponentType;
    treeCollapseIcon?: ComponentType;
    treeExpandIcon?: ComponentType;
}
export interface ComponentsInterface {
    addResource?: ComponentType;
    addRole?: ComponentType;
    roleTag?: ComponentType;
    checkboxTableContainer?: ComponentType;
}
interface RbacProps {
    defaultValue?: PermissionsObject;
    onChange(data: {
        [index: string]: any;
    }): void;
    resourceForbiddenCharsRegex?: RegExp;
    buttons?: ButtonsInterface;
    icons?: IconsInterface;
    components?: ComponentsInterface;
    admin: boolean;
}
declare const Rbac: ({ defaultValue, onChange, resourceForbiddenCharsRegex, buttons, icons, components, admin, }: RbacProps) => React.JSX.Element;
export default Rbac;
