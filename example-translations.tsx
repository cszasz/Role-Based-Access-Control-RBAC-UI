// Example: Using RBAC with existing I18n system

import React from 'react';
import Rbac from '@build-security/react-rbac-ui-manager';
// Assuming you have an existing I18n system
import { I18n } from 'your-existing-i18n-library';

const MyApp = () => {
    const handleChange = (data: any) => {
        console.log('RBAC data changed:', data);
    };

    return (
        <Rbac
            onChange={handleChange}
            admin={true}
            i18nFunction={I18n.t} // Pass your existing I18n.t function
        />
    );
};

// Alternative: If you want to use translation object instead
const MyAppWithTranslations = () => {
    const hungarianTranslations = {
        'admin_local.ui.resource': 'Erőforrás',
        'admin_local.ui.description': 'Leírás',
        'admin_local.ui.permission': 'Jogosultság',
        'admin_local.ui.newResource': 'Új Erőforrás',
        'admin_local.ui.deleteResources': 'Erőforrások Törlése',
        'admin_local.ui.resourceName': 'Erőforrás Neve:',
        'admin_local.ui.descriptionLabel': 'Leírás:',
        'admin_local.ui.permissionName': 'Jogosultság neve:',
        'admin_local.ui.close': 'Bezárás',
        'admin_local.ui.save': 'Mentés',
        'admin_local.ui.delete': 'Törlés',
        'admin_local.ui.cancel': 'Mégse',
        'admin_local.ui.addResource': 'Erőforrás Hozzáadása',
        'admin_local.ui.addRole': 'Szerepkör Hozzáadása',
        'admin_local.ui.role': 'Szerepkör',
        'admin_local.ui.roleName': 'Szerepkör Neve:',
        'admin_local.error.permissionExists': 'A jogosultság neve már létezik',
        'admin_local.error.roleExists': 'A szerepkör neve már létezik',
        'admin_local.confirm.deleteResources': 'Biztosan törölni szeretné a következő erőforrásokat:',
        'admin_local.confirm.deleteRole': 'Biztosan törölni szeretné a szerepkört',
        'admin_local.confirm.undoAction': 'Ez a művelet nem vonható vissza.',
    };

    const handleChange = (data: any) => {
        console.log('RBAC data changed:', data);
    };

    return <Rbac onChange={handleChange} admin={true} translations={hungarianTranslations} />;
};

export default MyApp;
