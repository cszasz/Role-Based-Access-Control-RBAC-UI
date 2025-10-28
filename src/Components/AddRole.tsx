import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import styled from "styled-components";
import { I18n } from "../i18n";

const AddRole = () => {
    return (
        <>
            {I18n.t('admin_local.ui.addRole', 'Add Role')} <AddRoleIcon fontSize='small' />
        </>
    );
};

export default AddRole;

const AddRoleIcon = styled(AddCircleOutlineIcon)`
    vertical-align: -4px;
`;
