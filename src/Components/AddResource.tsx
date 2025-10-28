import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

interface AddResourceProps {
    t?: (key: string, fallback?: string) => string;
}

const AddResource = ({ t }: AddResourceProps) => {
    const translate = t || ((key: string, fallback?: string) => fallback || key);
    return (
        <div style={{ fontSize: '16px' }}>
            <AddResourceIcon /> {translate('admin_local.ui.addResource', 'Add Resource')}
        </div>
    );
};

export default AddResource;

const AddResourceIcon = styled(AddCircleOutlineIcon)`
    vertical-align: -6px;
    font-sze: 16px;
`;
