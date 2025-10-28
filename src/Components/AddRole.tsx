import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import styled from 'styled-components';

interface AddRoleProps {
    t?: (key: string, fallback?: string) => string;
}

const AddRole = ({ t }: AddRoleProps) => {
    const translate = t || ((key: string, fallback?: string) => fallback || key);
    return (
        <>
            {translate('admin_local.ui.addRole', 'Add Role')} <AddRoleIcon fontSize="small" />
        </>
    );
};

export default AddRole;

const AddRoleIcon = styled(AddCircleOutlineIcon)`
    vertical-align: -4px;
`;
