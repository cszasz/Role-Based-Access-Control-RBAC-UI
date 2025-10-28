import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { I18n } from "../i18n";

const AddResource = () => {
    return (
        <>
            <AddResourceIcon /> {I18n.t('admin_local.ui.addResource', 'Add Resource')}
        </>
    );
};

export default AddResource;

const AddResourceIcon = styled(AddCircleOutlineIcon)`
    vertical-align: -6px;
`;
