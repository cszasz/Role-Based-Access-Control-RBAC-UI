import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Block';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowRight from '@material-ui/icons/ArrowRight';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import MenuIcon from '@material-ui/icons/Menu';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import TreeView from '@material-ui/lab/TreeView';
import TableContainer from '@material-ui/core/TableContainer';
import TreeItem from '@material-ui/lab/TreeItem';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Checkbox from '@material-ui/core/Checkbox';

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _taggedTemplateLiteralLoose(e, t) {
  return t || (t = e.slice(0)), e.raw = t, e;
}

var getAllResources = function getAllResources(data) {
  var _recurse = function recurse(resource) {
    var ret = [];
    if (!resource.hasOwnProperty('_resources')) {
      return ret;
    }
    Object.keys(resource._resources).forEach(function (item) {
      ret.push(item);
      ret = [].concat(ret, _recurse(resource._resources[item]));
    });
    return ret;
  };
  return _recurse(data);
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var _TreeGenerator = function TreeGenerator(_ref) {
  var resources = _ref.resources,
    handleOpenModal = _ref.handleOpenModal,
    Icons = _ref.icons,
    admin = _ref.admin,
    displayDescription = _ref.displayDescription,
    t = _ref.t;
  var items = resources || {};
  var handleAdd = function handleAdd(e, resource) {
    e.stopPropagation();
    handleOpenModal(items[resource], resources, resource);
  };
  var handleEdit = function handleEdit(e, resource) {
    e.stopPropagation();
    handleOpenModal(items[resource], resources, resource, false, true);
  };
  var handleDelete = function handleDelete(e, resource) {
    e.stopPropagation();
    handleOpenModal(items[resource], resources, resource, true);
  };
  return React.createElement(TreeBlockContainer, null, Object.keys(items).map(function (resource) {
    var hasChildren = Object.keys(items[resource]._resources).length > 0;
    return React.createElement(StyledTreeItem, {
      key: resource,
      nodeId: resource,
      label: React.createElement(TreeItemContent, {
        "$hasChildren": hasChildren
      }, hasChildren ? React.createElement(Icons.TreeParentIcon, {
        color: "primary"
      }) : React.createElement(Icons.TreeNodeIcon, {
        color: "primary",
        style: {
          fontSize: '11px'
        }
      }), React.createElement(ItemResourceName, {
        "$hasChildren": hasChildren
      }, t("admin_local.resource." + resource + ".name", items[resource].name)), displayDescription ? React.createElement(ItemResource, null, items[resource].description ? React.createElement(React.Fragment, null, t("admin_local.resource." + resource + ".description", items[resource].description), admin && React.createElement("span", {
        style: {
          color: '#888',
          marginLeft: '10px'
        }
      }, "(", resource, ")")) : admin ? resource : '') : React.createElement(ItemResource, null, admin ? resource : ''), admin && React.createElement(ActionsContainer, null, React.createElement(Icons.TreeAddIcon, {
        style: {
          fontSize: '16px'
        },
        onClick: function onClick(e) {
          handleAdd(e, resource);
        }
      }), React.createElement(Icons.TreeEditIcon, {
        style: {
          fontSize: '16px'
        },
        onClick: function onClick(e) {
          handleEdit(e, resource);
        }
      }), React.createElement(Icons.TreeDeleteIcon, {
        style: {
          fontSize: '16px'
        },
        color: "error",
        onClick: function onClick(e) {
          handleDelete(e, resource);
        }
      })))
    }, Object.keys(items[resource]._resources).length > 0 && React.createElement(_TreeGenerator, {
      resources: items[resource]._resources,
      handleOpenModal: handleOpenModal,
      icons: Icons,
      admin: admin,
      displayDescription: displayDescription,
      t: t
    }));
  }));
};
var StyledTreeItem = /*#__PURE__*/styled(TreeItem)(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose([""])));
var TreeBlockContainer = /*#__PURE__*/styled.div(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    & .MuiTreeItem-content,\n    & .MuiTreeItem-label {\n        position: initial;\n    }\n"])));
var ActionsContainer = /*#__PURE__*/styled.span(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    display: none;\n    margin-left: auto;\n    z-index: 1;\n\n    svg {\n        vertical-align: middle;\n    }\n"])));
var ItemResourceName = /*#__PURE__*/styled.span(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    font-weight: ", ";\n    font-size: ", ";\n    padding-left: 5px;\n"])), function (_ref2) {
  var $hasChildren = _ref2.$hasChildren;
  return $hasChildren ? 'bold' : 'normal';
}, function (_ref3) {
  var $hasChildren = _ref3.$hasChildren;
  return $hasChildren ? '16px' : '14px';
});
var ItemResource = /*#__PURE__*/withTheme(/*#__PURE__*/styled.span(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    position: absolute;\n    left: max(15%, 250px);\n    color: ", ";\n"])), function (props) {
  return props.theme.palette.text.disabled;
}));
var TreeItemContent = /*#__PURE__*/withTheme(/*#__PURE__*/styled.div(_templateObject6 || (_templateObject6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    display: flex;\n    line-height: 31px;\n    border-width: 0 0 1px 0;\n    border-style: solid;\n    border-color: ", ";\n    align-items: center;\n\n    &:hover ", " {\n        display: block;\n    }\n"])), function (props) {
  return props['$hasChildren'] ? props.theme.palette.text.disabled : 'transparent';
}, ActionsContainer));

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7, _templateObject8;
console.log('React version2:', React.version);
var DEFAULT_FORBIDDEN_CHARS_REGEX = /[^A-Za-z0-9]/g;
var TreeBlock = function TreeBlock(_ref) {
  var _resources;
  var resources = _ref.resources,
    expandedItems = _ref.expandedItems,
    setExpandedItems = _ref.setExpandedItems,
    onChange = _ref.onChange,
    resourceForbiddenCharsRegex = _ref.resourceForbiddenCharsRegex,
    Buttons = _ref.buttons,
    Icons = _ref.icons,
    Components = _ref.components,
    admin = _ref.admin,
    t = _ref.t;
  var _React$useState = React.useState(false),
    modalIsOpen = _React$useState[0],
    setModalIsOpen = _React$useState[1];
  var _React$useState2 = React.useState(false),
    modalDeleteIsOpen = _React$useState2[0],
    setModalDeleteIsOpen = _React$useState2[1];
  var _React$useState3 = React.useState(''),
    currentModalResourceKey = _React$useState3[0],
    setCurrentModalResourceKey = _React$useState3[1];
  var _React$useState4 = React.useState(),
    currentModalResourceRef = _React$useState4[0],
    setCurrentModalResourceRef = _React$useState4[1];
  var _React$useState5 = React.useState(),
    currentModalParentResourceRef = _React$useState5[0],
    setCurrentModalParentResourceRef = _React$useState5[1];
  var _React$useState6 = React.useState(false),
    modalInEditMode = _React$useState6[0],
    setModalInEditMode = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    permissionNameFirstFocus = _React$useState7[0],
    setPermissionNameFirstFocus = _React$useState7[1];
  var _React$useState8 = React.useState(false),
    errorInPermission = _React$useState8[0],
    setErrorInPermission = _React$useState8[1];
  var _React$useState9 = React.useState(''),
    errorHelperText = _React$useState9[0],
    setErrorHelperText = _React$useState9[1];
  var nameEl = React.useRef(null);
  var permissionEl = React.useRef(null);
  var descriptionEl = React.useRef(null);
  var handleResource = function handleResource() {
    var _nameEl$current, _descriptionEl$curren, _permissionEl$current;
    var name = nameEl == null || (_nameEl$current = nameEl.current) == null ? void 0 : _nameEl$current.value;
    var description = descriptionEl == null || (_descriptionEl$curren = descriptionEl.current) == null ? void 0 : _descriptionEl$curren.value;
    var permission = "" + (currentModalResourceKey ? currentModalResourceKey + "." : '') + (permissionEl == null || (_permissionEl$current = permissionEl.current) == null ? void 0 : _permissionEl$current.value);
    var parent = currentModalResourceRef;
    if (parent && permission in parent._resources) {
      setErrorHelperText(t('admin_local.error.permissionExists', 'Permission name already exists'));
      setErrorInPermission(true);
      return;
    }
    if (modalInEditMode && currentModalResourceRef) {
      // @ts-ignore
      currentModalResourceRef.name = name;
      // @ts-ignore
      currentModalResourceRef.description = description;
    } else {
      if (parent) {
        // @ts-ignore
        parent._resources[permission] = {
          name: name,
          description: description,
          _resources: {}
        };
      }
    }
    onChange(Object.assign({}, resources));
    setExpandedItems(expandedItems.concat([permission]));
    handleCloseModal();
  };
  var handleDeleteResources = function handleDeleteResources() {
    if (currentModalParentResourceRef) {
      // @ts-ignore
      delete currentModalParentResourceRef[currentModalResourceKey];
    }
    onChange(Object.assign({}, resources), true);
    handleCloseModal(true);
  };
  var handleOpenModal = function handleOpenModal(resourceRef, parentResourceRef, resourceKey, isDeleteModal, isEditModal) {
    if (resourceKey === void 0) {
      resourceKey = '';
    }
    if (isDeleteModal === void 0) {
      isDeleteModal = false;
    }
    if (isEditModal === void 0) {
      isEditModal = false;
    }
    setCurrentModalResourceRef(resourceRef);
    setCurrentModalParentResourceRef(parentResourceRef || resources);
    setCurrentModalResourceKey(resourceKey);
    setPermissionNameFirstFocus(true);
    setModalInEditMode(isEditModal);
    resetErrors();
    if (isDeleteModal) {
      return setModalDeleteIsOpen(true);
    }
    setModalIsOpen(true);
  };
  var handleCloseModal = function handleCloseModal(isDeleteModal) {
    if (isDeleteModal === void 0) {
      isDeleteModal = false;
    }
    isDeleteModal ? setModalDeleteIsOpen(false) : setModalIsOpen(false);
  };
  var handleExpand = function handleExpand(_event, ids) {
    setExpandedItems(ids);
  };
  var resetErrors = function resetErrors() {
    setErrorHelperText('');
    setErrorInPermission(false);
  };
  return React.createElement(TableContainer, null, React.createElement(Dialog, {
    open: modalIsOpen,
    onClose: function onClose() {
      handleCloseModal(false);
    },
    disableBackdropClick: true
  }, React.createElement(DialogContainer, null, React.createElement(DialogTitle, null, t('admin_local.ui.newResource', 'New Resource')), React.createElement(DialogContent, null, React.createElement(InputRowContainer, null, React.createElement(InputLabel, {
    htmlFor: "name"
  }, t('admin_local.ui.resourceName', 'Resource Name:')), React.createElement(PermissionStyledInput, {
    id: "name",
    onChange: function onChange(e) {
      var val = e.target.value.replace(resourceForbiddenCharsRegex || DEFAULT_FORBIDDEN_CHARS_REGEX, '').toLowerCase();
      if (permissionNameFirstFocus && !modalInEditMode && permissionEl.current) {
        permissionEl.current.value = val;
      }
    },
    onBlur: function onBlur() {
      setPermissionNameFirstFocus(false);
    },
    type: "text",
    inputRef: nameEl,
    defaultValue: modalInEditMode ? currentModalResourceRef.name : undefined,
    autoFocus: true
  })), React.createElement(InputRowContainer, null, React.createElement(InputLabel, {
    htmlFor: "description"
  }, t('admin_local.ui.descriptionLabel', 'Description:')), React.createElement(PermissionStyledInput, {
    id: "description",
    type: "text",
    inputRef: descriptionEl,
    defaultValue: modalInEditMode ? currentModalResourceRef.description : undefined
  })), React.createElement(InputRowContainer, null, React.createElement(InputLabel, {
    htmlFor: "permission"
  }, t('admin_local.ui.permissionName', 'Permission name:')), React.createElement(PermissionStyledInput, {
    id: "permission",
    type: "text",
    inputRef: permissionEl,
    InputProps: {
      startAdornment: modalInEditMode ? '' : currentModalResourceKey ? currentModalResourceKey + "." : ''
    },
    inputProps: {
      readOnly: modalInEditMode
    },
    defaultValue: modalInEditMode ? currentModalResourceKey : '',
    disabled: modalInEditMode,
    helperText: errorHelperText,
    error: errorInPermission
  }))), React.createElement(DialogActions, null, React.createElement(Buttons.CloseButton, {
    variant: "outlined",
    onClick: function onClick() {
      handleCloseModal(false);
    }
  }, t('admin_local.ui.close', 'Close')), React.createElement(Buttons.SaveButton, {
    variant: "contained",
    color: "primary",
    onClick: handleResource
  }, t('admin_local.ui.save', 'Save'))))), React.createElement(Dialog, {
    open: modalDeleteIsOpen,
    onClose: function onClose() {
      return handleCloseModal(true);
    },
    disableBackdropClick: true
  }, React.createElement(DialogContainer, null, React.createElement(DialogTitle, null, t('admin_local.ui.deleteResources', 'Delete Resources')), React.createElement(DialogContent, null, React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, React.createElement(Typography, null, t('admin_local.confirm.deleteResources', 'Are you sure you want to delete the following resources:'))), React.createElement(TreeView, {
    defaultCollapseIcon: React.createElement(Icons.TreeCollapseIcon, null),
    defaultExpandIcon: React.createElement(Icons.TreeExpandIcon, null),
    defaultExpanded: expandedItems,
    disableSelection: true
  }, React.createElement(_TreeGenerator, {
    resources: (_resources = {}, _resources[currentModalResourceKey] = currentModalResourceRef, _resources),
    handleOpenModal: handleOpenModal,
    icons: Icons,
    admin: admin,
    t: t
  }))), React.createElement(DialogActions, null, React.createElement(Buttons.CloseButton, {
    variant: "outlined",
    onClick: function onClick() {
      return handleCloseModal(true);
    }
  }, t('admin_local.ui.close', 'Close')), React.createElement(Buttons.DeleteButton, {
    variant: "contained",
    color: "secondary",
    onClick: handleDeleteResources
  }, t('admin_local.ui.delete', 'Delete'))))), React.createElement(TreeHeaderContainer, null, React.createElement(ResourceTitle, null, t('admin_local.ui.resource', 'Resource')), React.createElement(PermissionTitle, null, admin ? t('admin_local.ui.description', 'Description') + ' (' + t('admin_local.ui.permission', 'Permission') + ')' : t('admin_local.ui.description', 'Description'))), React.createElement(StyledTreeView, {
    defaultCollapseIcon: React.createElement(Icons.TreeCollapseIcon, null),
    defaultExpandIcon: React.createElement(Icons.TreeExpandIcon, null),
    expanded: expandedItems,
    disableSelection: true,
    onNodeToggle: handleExpand
  }, React.createElement(_TreeGenerator, {
    resources: resources._resources,
    handleOpenModal: handleOpenModal,
    icons: Icons,
    admin: admin,
    displayDescription: true,
    t: t
  })), admin && React.createElement(AddResourceBlock, {
    onClick: function onClick() {
      handleOpenModal(resources);
    }
  }, React.createElement(Components.AddResource, null)));
};
var TreeHeaderContainer = /*#__PURE__*/withTheme(/*#__PURE__*/styled.div(_templateObject$1 || (_templateObject$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    display: flex;\n    font-size: 18px;\n    height: 86px;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: ", ";\n    margin-left: 22px;\n\n    div {\n        padding-bottom: 5px;\n        margin-top: auto;\n    }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.disabled;
}));
var ResourceTitle = /*#__PURE__*/styled.div(_templateObject2$1 || (_templateObject2$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    width: 15%;\n    min-width: 250px;\n"])));
var PermissionTitle = /*#__PURE__*/styled.div(_templateObject3$1 || (_templateObject3$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    flex-grow: 1;\n    margin-left: -22px;\n"])));
var AddResourceBlock = /*#__PURE__*/styled.span(_templateObject4$1 || (_templateObject4$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    cursor: pointer;\n"])));
var StyledTreeView = /*#__PURE__*/styled(TreeView)(_templateObject5$1 || (_templateObject5$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    position: relative;\n    *,\n    *::before,\n    *::after {\n        transition: none !important;\n        animation: none !important;\n    }\n\n    li > ul {\n        display: none;\n    }\n\n    li.Mui-expanded > ul {\n        display: block;\n    }\n"])));
var DialogContainer = /*#__PURE__*/styled.div(_templateObject6$1 || (_templateObject6$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    padding: 15px;\n    min-width: 450px;\n\n    ", " {\n        position: initial;\n        padding-left: 10px;\n    }\n\n    ", ":hover ", " {\n        display: none;\n    }\n"])),
// @ts-ignore
ItemResource, TreeItemContent, ActionsContainer);
var PermissionStyledInput = /*#__PURE__*/withTheme(/*#__PURE__*/styled(TextField)(_templateObject7 || (_templateObject7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    flex-grow: 1;\n\n    .MuiInputBase-root {\n        color: ", ";\n    }\n\n    & input {\n        color: ", ";\n        &.Mui-disabled {\n            color: ", ";\n            cursor: not-allowed;\n        }\n    }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.text.disabled;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.text.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.text.disabled;
}));
var InputRowContainer = /*#__PURE__*/styled.div(_templateObject8 || (_templateObject8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    display: flex;\n\n    .MuiFormLabel-root {\n        padding-top: 8px;\n    }\n"])));

var _templateObject$2;
var AddResource = function AddResource(_ref) {
  var t = _ref.t;
  var translate = t || function (key, fallback) {
    return fallback || key;
  };
  return React.createElement(React.Fragment, null, React.createElement(AddResourceIcon, null), " ", translate('admin_local.ui.addResource', 'Add Resource'));
};
var AddResourceIcon = /*#__PURE__*/styled(AddCircleOutlineIcon)(_templateObject$2 || (_templateObject$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    vertical-align: -6px;\n"])));

var _templateObject$3;
var AddRole = function AddRole(_ref) {
  var t = _ref.t;
  var translate = t || function (key, fallback) {
    return fallback || key;
  };
  return React.createElement(React.Fragment, null, translate('admin_local.ui.addRole', 'Add Role'), " ", React.createElement(AddRoleIcon, {
    fontSize: "small"
  }));
};
var AddRoleIcon = /*#__PURE__*/styled(AddCircleOutlineIcon)(_templateObject$3 || (_templateObject$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    vertical-align: -4px;\n"])));

var _templateObject$4;
var RoleTag = /*#__PURE__*/withTheme(/*#__PURE__*/styled.span(_templateObject$4 || (_templateObject$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    text-transform: uppercase;\n    color: ", ";\n    background: ", ";\n    padding: 4px;\n    white-space: nowrap;\n"])), function (props) {
  return props.theme.palette.primary.light;
}, function (props) {
  return props.theme.palette.info.main;
}));

var _templateObject$5;
var CheckboxTableContainer = /*#__PURE__*/styled(TableContainer)(_templateObject$5 || (_templateObject$5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    background: rgba(214, 235, 255, 0.4);\n"])));

var _templateObject$6, _templateObject2$2, _templateObject3$2, _templateObject4$2, _templateObject5$2, _templateObject6$2, _templateObject7$1, _templateObject8$1, _templateObject9;
var CheckboxBlock = function CheckboxBlock(_ref) {
  var permissionsTable = _ref.permissionsTable,
    onChange = _ref.onChange,
    expandedItems = _ref.expandedItems,
    nodesWithChildren = _ref.nodesWithChildren,
    Buttons = _ref.buttons,
    Icons = _ref.icons,
    Components = _ref.components,
    t = _ref.t;
  var _React$useState = React.useState(false),
    modalIsOpen = _React$useState[0],
    setModalIsOpen = _React$useState[1];
  var _React$useState2 = React.useState(''),
    currentModalRole = _React$useState2[0],
    setCurrentModalRole = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    modalDeleteIsOpen = _React$useState3[0],
    setModalDeleteIsOpen = _React$useState3[1];
  var _React$useState4 = React.useState(false),
    modalInEditMode = _React$useState4[0],
    setModalInEditMode = _React$useState4[1];
  var _React$useState5 = React.useState([]),
    rolesOrdered = _React$useState5[0],
    setRolesOrdered = _React$useState5[1];
  var _React$useState6 = React.useState([]),
    displayedRows = _React$useState6[0],
    setDisplayedRows = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    errorInRoleName = _React$useState7[0],
    setErrorInRoleName = _React$useState7[1];
  var _React$useState8 = React.useState(''),
    errorHelperText = _React$useState8[0],
    setErrorHelperText = _React$useState8[1];
  var roleNameEl = React.useRef(null);
  useEffect(function () {
    var roles = Object.keys(permissionsTable._roles);
    setRolesOrdered(roles);
  }, []);
  useEffect(function () {
    setDisplayedRows(_generatedDisplayedRowsList({
      _resources: permissionsTable._resources
    }));
  }, [permissionsTable, expandedItems]);
  var _generatedDisplayedRowsList = function generatedDisplayedRowsList(data) {
    var ret = [];
    Object.keys(data._resources).forEach(function (item) {
      ret.push(item);
      if (expandedItems.indexOf(item) > -1) {
        ret = ret.concat(_generatedDisplayedRowsList(data._resources[item]));
      }
    });
    return ret;
  };
  var isChecked = function isChecked(role, perm) {
    var _permissionsTable$_ro;
    return !!((_permissionsTable$_ro = permissionsTable._roles[role]['permissions']) != null && _permissionsTable$_ro.includes(perm));
  };
  var isCheckedByParent = function isCheckedByParent(role, perm) {
    var found = false;
    nodesWithChildren.every(function (item) {
      var _permissionsTable$_ro2;
      if (perm.startsWith(item + ".") && (_permissionsTable$_ro2 = permissionsTable._roles[role]['permissions']) != null && _permissionsTable$_ro2.includes(item)) {
        found = true;
        return false;
      }
      return true;
    });
    return found;
  };
  var isReadOnly = function isReadOnly(role) {
    return permissionsTable._roles[role].readonly;
  };
  var handleCheckboxChange = function handleCheckboxChange(checked, role, perm) {
    if (checked) {
      [].concat(permissionsTable._roles[role]['permissions']).forEach(function (item) {
        if (!item.startsWith(perm + ".")) {
          return;
        }
        var pos = permissionsTable._roles[role]['permissions'].indexOf(item);
        if (pos > -1) {
          permissionsTable._roles[role]['permissions'].splice(pos, 1);
        }
      });
      permissionsTable._roles[role]['permissions'].push(perm);
    } else {
      var pos = permissionsTable._roles[role]['permissions'].indexOf(perm);
      permissionsTable._roles[role]['permissions'].splice(pos, 1);
    }
    onChange(_extends({}, permissionsTable));
  };
  var handleOpenModal = function handleOpenModal(role, isDeleteModal, isEditModal) {
    if (isDeleteModal === void 0) {
      isDeleteModal = false;
    }
    if (isEditModal === void 0) {
      isEditModal = false;
    }
    setCurrentModalRole(role);
    setModalInEditMode(isEditModal);
    resetErrors();
    if (isDeleteModal) {
      return setModalDeleteIsOpen(true);
    }
    setModalIsOpen(true);
  };
  var handleCloseModal = function handleCloseModal(isDeleteModal) {
    if (isDeleteModal === void 0) {
      isDeleteModal = false;
    }
    if (isDeleteModal) {
      return setModalDeleteIsOpen(false);
    }
    setModalIsOpen(false);
  };
  var handleDeleteRole = function handleDeleteRole() {
    delete permissionsTable._roles[currentModalRole];
    onChange(Object.assign({}, permissionsTable));
    setRolesOrdered(rolesOrdered.filter(function (item) {
      return item !== currentModalRole;
    }));
    handleCloseModal(true);
  };
  var handleRole = function handleRole() {
    var _roleNameEl$current;
    var roleName = (roleNameEl == null || (_roleNameEl$current = roleNameEl.current) == null ? void 0 : _roleNameEl$current.value) || '';
    if (roleName === currentModalRole) {
      handleCloseModal();
      return false;
    }
    if (roleName in permissionsTable._roles) {
      setErrorHelperText(t('admin_local.error.roleExists', 'Role name already exists'));
      setErrorInRoleName(true);
      return false;
    }
    if (modalInEditMode && currentModalRole) {
      permissionsTable._roles[roleName] = permissionsTable._roles[currentModalRole];
      delete permissionsTable._roles[currentModalRole];
      rolesOrdered[rolesOrdered.indexOf(currentModalRole)] = roleName;
      setRolesOrdered([].concat(rolesOrdered));
    } else {
      permissionsTable._roles[roleName] = {
        permissions: [],
        readonly: false
      };
      rolesOrdered.push(roleName);
      setRolesOrdered([].concat(rolesOrdered));
    }
    onChange(Object.assign({}, permissionsTable));
    handleCloseModal();
    return false;
  };
  var resetErrors = function resetErrors() {
    setErrorHelperText('');
    setErrorInRoleName(false);
  };
  return React.createElement(Components.CheckboxTableContainer, null, React.createElement(Dialog, {
    open: modalIsOpen,
    onClose: function onClose() {
      handleCloseModal(false);
    },
    disableBackdropClick: true
  }, React.createElement(DialogContainer$1, null, React.createElement(DialogTitle, null, t('admin_local.ui.role', 'Role')), React.createElement(DialogContent, null, React.createElement(InputRowContainer$1, null, React.createElement(InputLabel, {
    htmlFor: "name"
  }, t('admin_local.ui.roleName', 'Role Name:')), React.createElement(TextField, {
    id: "name",
    type: "text",
    inputRef: roleNameEl,
    style: {
      flexGrow: 1
    },
    defaultValue: modalInEditMode ? currentModalRole : undefined,
    helperText: errorHelperText,
    error: errorInRoleName,
    autoFocus: true
  }))), React.createElement(DialogActions, null, React.createElement(Buttons.CancelButton, {
    variant: "outlined",
    onClick: function onClick() {
      handleCloseModal(false);
    }
  }, t('admin_local.ui.cancel', 'Cancel')), React.createElement(Buttons.SaveButton, {
    variant: "contained",
    color: "primary",
    onClick: handleRole
  }, t('admin_local.ui.save', 'Save'))))), React.createElement(Dialog, {
    open: modalDeleteIsOpen,
    onClose: function onClose() {
      return handleCloseModal(true);
    },
    disableBackdropClick: true
  }, React.createElement(DialogContainer$1, null, React.createElement(DialogTitle, null, t('admin_local.ui.deleteResources', 'Delete Resources')), React.createElement(DialogContent, null, React.createElement(Typography, null, t('admin_local.confirm.deleteRole', 'Are you sure you want to delete the role'), ' ', React.createElement("b", null, currentModalRole), "?"), React.createElement(Typography, null, t('admin_local.confirm.undoAction', 'This action cannot be undone.'))), React.createElement(DialogActions, null, React.createElement(Buttons.CancelButton, {
    variant: "outlined",
    onClick: function onClick() {
      return handleCloseModal(true);
    }
  }, t('admin_local.ui.cancel', 'Cancel')), React.createElement(Buttons.DeleteButton, {
    variant: "contained",
    onClick: handleDeleteRole
  }, t('admin_local.ui.delete', 'Delete'))))), React.createElement(AddRoleBlock, null, React.createElement("span", {
    onClick: function onClick() {
      handleOpenModal('');
    }
  }, React.createElement(Components.AddRole, null))), React.createElement(StyledTable, null, React.createElement(StyledTHead, null, React.createElement(TableRow, null, rolesOrdered.map(function (row) {
    return React.createElement(StyledCell, {
      key: row
    }, React.createElement(Components.RoleTag, null, t("admin_local.role." + row, row)), isReadOnly(row) ? null : React.createElement(RoleActions, null, React.createElement(Icons.EditIcon, {
      fontSize: "small",
      onClick: function onClick() {
        handleOpenModal(row, false, true);
      }
    }), React.createElement(Icons.DeleteIcon, {
      fontSize: "small",
      color: "error",
      onClick: function onClick() {
        handleOpenModal(row, true);
      }
    })));
  }), React.createElement(TableCell, null, "\xA0"))), React.createElement(TableBody, null, displayedRows.map(function (perm) {
    return React.createElement(StyledRow, {
      key: perm
    }, rolesOrdered.map(function (role) {
      var itemChecked = isChecked(role, perm);
      var itemCheckedByParent = isCheckedByParent(role, perm);
      return React.createElement(StyledCell, {
        key: role + "-" + perm
      }, React.createElement(StyledCheckbox, {
        onChange: function onChange(e) {
          var checked = e.target.checked;
          handleCheckboxChange(checked, role, perm);
        },
        checked: itemChecked || itemCheckedByParent,
        disabled: itemCheckedByParent,
        color: "primary",
        size: "small"
      }));
    }), React.createElement(TableCell, null, "\xA0"));
  }))));
};
var StyledCheckbox = /*#__PURE__*/styled(Checkbox)(_templateObject$6 || (_templateObject$6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    &.MuiCheckbox-root {\n        padding: 0;\n    }\n\n    svg {\n        font-size: 17px;\n    }\n"])));
var StyledTable = /*#__PURE__*/styled(Table)(_templateObject2$2 || (_templateObject2$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    &.MuiTable-root {\n        width: auto;\n    }\n"])));
var StyledTHead = /*#__PURE__*/styled(TableHead)(_templateObject3$2 || (_templateObject3$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    th {\n        height: 34px;\n    }\n    .MuiTableCell-root {\n        padding: 0 15px;\n        border-bottom: 0;\n    }\n"])));
var StyledRow = /*#__PURE__*/styled(TableRow)(_templateObject4$2 || (_templateObject4$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    border: 1px solid transparent;\n\n    .MuiTableCell-root {\n        line-height: 21px;\n        font-size: 14px;\n        padding: 5px 15px;\n        border-bottom: 0;\n    }\n"])));
var StyledCell = /*#__PURE__*/styled(TableCell)(_templateObject5$2 || (_templateObject5$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    padding: 0 15px;\n    min-width: 100px;\n    max-width: 150px;\n\n    &.MuiTableCell-root {\n        text-align: center;\n    }\n"])));
var RoleActions = /*#__PURE__*/styled.div(_templateObject6$2 || (_templateObject6$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    margin-top: 4px;\n\n    & svg {\n        cursor: pointer;\n        opacity: 0.3;\n    }\n    &:hover svg {\n        opacity: 0.7;\n    }\n    &:hover svg:hover {\n        opacity: 1;\n    }\n"])));
var DialogContainer$1 = /*#__PURE__*/styled.div(_templateObject7$1 || (_templateObject7$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    padding: 15px;\n    min-width: 450px;\n"])));
var AddRoleBlock = /*#__PURE__*/styled(Typography)(_templateObject8$1 || (_templateObject8$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    height: 27px;\n    padding-left: 14px;\n    padding-top: 5px;\n    position: sticky;\n    left: 0;\n\n    span {\n        cursor: pointer;\n    }\n"])));
var InputRowContainer$1 = /*#__PURE__*/styled.div(_templateObject9 || (_templateObject9 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    display: flex;\n\n    .MuiFormLabel-root {\n        padding-top: 8px;\n    }\n"])));

var _templateObject$7;
var EMPTY_RBAC_OBJECT = {
  _resources: {},
  _roles: {}
};
// Default translation function that returns fallback or key
var defaultTranslate = function defaultTranslate(key, fallback) {
  return fallback || key;
};
var Rbac = function Rbac(_ref) {
  var _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? EMPTY_RBAC_OBJECT : _ref$defaultValue,
    onChange = _ref.onChange,
    resourceForbiddenCharsRegex = _ref.resourceForbiddenCharsRegex,
    _ref$buttons = _ref.buttons,
    buttons = _ref$buttons === void 0 ? {} : _ref$buttons,
    _ref$icons = _ref.icons,
    icons = _ref$icons === void 0 ? {} : _ref$icons,
    _ref$components = _ref.components,
    components = _ref$components === void 0 ? {} : _ref$components,
    admin = _ref.admin,
    translations = _ref.translations,
    i18nFunction = _ref.i18nFunction;
  var _React$useState = React.useState(defaultValue),
    permissionsTable = _React$useState[0],
    setPermissionsTable = _React$useState[1];
  var _React$useState2 = React.useState([]),
    expandedItems = _React$useState2[0],
    setExpandedItems = _React$useState2[1];
  var _React$useState3 = React.useState([]),
    nodesWithChildren = _React$useState3[0],
    setNodesWithChildren = _React$useState3[1];
  // Set translations when component mounts or translations change
  React.useEffect(function () {
    // The translations and i18nFunction are used directly in components
    // No need for internal state management since each component receives the translation function
  }, [translations, i18nFunction]);
  useEffect(function () {
    setExpandedItems(getAllResources(permissionsTable));
  }, []);
  useEffect(function () {
    if (!permissionsTable) {
      return;
    }
    setNodesWithChildren(getAllNodesWithChildren());
  }, [permissionsTable]);
  var getAllNodesWithChildren = function getAllNodesWithChildren() {
    var _recurse = function recurse(resource) {
      var ret = [];
      if (!resource.hasOwnProperty('_resources')) {
        return ret;
      }
      Object.keys(resource._resources).forEach(function (item) {
        if (Object.keys(resource._resources[item]._resources).length > 0) {
          ret.push(item);
        }
        ret = [].concat(ret, _recurse(resource._resources[item]));
      });
      return ret;
    };
    return _recurse(permissionsTable);
  };
  var handleCheckboxChanges = function handleCheckboxChanges(newData) {
    setPermissionsTable(newData);
    var ret = {
      _resources: {},
      _roles: {}
    };
    Object.keys(newData._roles).forEach(function (item) {
      ret._roles[item] = newData._roles[item];
    });
    ret._resources = newData._resources;
    onChange(ret);
  };
  var handleResourceChanges = function handleResourceChanges(newResources, isDelete) {
    var newPermissions = Object.assign({}, permissionsTable, newResources);
    if (isDelete) {
      var allAvailableResources = getAllResources(newPermissions);
      Object.keys(newPermissions._roles).forEach(function (item) {
        newPermissions._roles[item].permissions = newPermissions._roles[item].permissions.filter(function (t) {
          return allAvailableResources.includes(t);
        });
      });
    }
    setPermissionsTable(newPermissions);
    onChange(newPermissions);
  };
  var memoizedButtons = React.useMemo(function () {
    return {
      CancelButton: buttons.cancelButton || Button,
      CloseButton: buttons.closeButton || Button,
      DeleteButton: buttons.deleteButton || Button,
      SaveButton: buttons.saveButton || Button
    };
  }, [buttons]);
  var memoizedIcons = React.useMemo(function () {
    return {
      EditIcon: icons.editIcon || EditIcon,
      DeleteIcon: icons.deleteIcon || DeleteIcon,
      TreeAddIcon: icons.treeAddIcon || AddCircleOutlineIcon,
      TreeEditIcon: icons.treeEditIcon || EditIcon,
      TreeDeleteIcon: icons.treeDeleteIcon || DeleteIcon,
      TreeNodeIcon: icons.treeNodeIcon || FiberManualRecord,
      TreeParentIcon: icons.treeParentIcon || MenuIcon,
      TreeCollapseIcon: icons.treeCollapseIcon || ArrowDropDown,
      TreeExpandIcon: icons.treeExpandIcon || ArrowRight
    };
  }, [icons]);
  var memoizedComponents = React.useMemo(function () {
    var translate = i18nFunction || defaultTranslate;
    return {
      AddResource: function AddResource$1(props) {
        return components.addResource ? React.createElement(components.addResource, props) : React.createElement(AddResource, _extends({}, props, {
          t: translate
        }));
      },
      AddRole: function AddRole$1(props) {
        return components.addRole ? React.createElement(components.addRole, props) : React.createElement(AddRole, _extends({}, props, {
          t: translate
        }));
      },
      RoleTag: components.roleTag || RoleTag,
      CheckboxTableContainer: components.checkboxTableContainer || CheckboxTableContainer
    };
  }, [components, i18nFunction]);
  return React.createElement(React.Fragment, null, permissionsTable && React.createElement(StyledContainer, null, React.createElement(TreeBlock, {
    resources: {
      _resources: permissionsTable._resources
    },
    expandedItems: expandedItems,
    setExpandedItems: setExpandedItems,
    onChange: handleResourceChanges,
    resourceForbiddenCharsRegex: resourceForbiddenCharsRegex,
    buttons: memoizedButtons,
    icons: memoizedIcons,
    components: memoizedComponents,
    admin: admin,
    t: i18nFunction || defaultTranslate
  }), React.createElement(CheckboxBlock, {
    permissionsTable: permissionsTable,
    expandedItems: expandedItems,
    nodesWithChildren: nodesWithChildren,
    onChange: handleCheckboxChanges,
    buttons: memoizedButtons,
    icons: memoizedIcons,
    components: memoizedComponents,
    admin: admin,
    t: i18nFunction || defaultTranslate
  })));
};
var StyledContainer = /*#__PURE__*/styled.div(_templateObject$7 || (_templateObject$7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n    width: 100%;\n    display: flex;\n    > div {\n        width: 100%;\n        flex-grow: 1;\n    }\n"])));

export default Rbac;
//# sourceMappingURL=react-rbac-ui-manager.esm.js.map
