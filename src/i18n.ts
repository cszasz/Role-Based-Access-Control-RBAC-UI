// Simple i18n implementation for RBAC UI
interface Translations {
    [key: string]: string;
}

// Default translations - can be extended or replaced
const defaultTranslations: Translations = {
    // UI Labels
    'admin_local.ui.resource': 'Resource',
    'admin_local.ui.description': 'Description',
    'admin_local.ui.permission': 'Permission',
    'admin_local.ui.newResource': 'New Resource',
    'admin_local.ui.deleteResources': 'Delete Resources',
    'admin_local.ui.resourceName': 'Resource Name:',
    'admin_local.ui.descriptionLabel': 'Description:',
    'admin_local.ui.permissionName': 'Permission name:',
    'admin_local.ui.close': 'Close',
    'admin_local.ui.save': 'Save',
    'admin_local.ui.delete': 'Delete',
    'admin_local.ui.cancel': 'Cancel',
    'admin_local.ui.addResource': 'Add Resource',
    'admin_local.ui.addRole': 'Add Role',
    'admin_local.ui.role': 'Role',
    'admin_local.ui.roleName': 'Role Name:',
    
    // Error messages
    'admin_local.error.permissionExists': 'Permission name already exists',
    'admin_local.error.roleExists': 'Role name already exists',
    
    // Confirmation messages
    'admin_local.confirm.deleteResources': 'Are you sure you want to delete the following resources:',
    'admin_local.confirm.deleteRole': 'Are you sure you want to delete the role',
    'admin_local.confirm.undoAction': 'This action cannot be undone.',
};

let currentTranslations: Translations = { ...defaultTranslations };

// Translation function
export const I18n = {
    // Main translation function
    t: (key: string, fallback?: string): string => {
        return currentTranslations[key] || fallback || key;
    },
    
    // Set custom translations
    setTranslations: (translations: Translations): void => {
        currentTranslations = { ...defaultTranslations, ...translations };
    },
    
    // Add translations without replacing existing ones
    addTranslations: (translations: Translations): void => {
        currentTranslations = { ...currentTranslations, ...translations };
    },
    
    // Get all current translations
    getTranslations: (): Translations => {
        return { ...currentTranslations };
    },
    
    // Reset to default translations
    reset: (): void => {
        currentTranslations = { ...defaultTranslations };
    }
};

export default I18n;