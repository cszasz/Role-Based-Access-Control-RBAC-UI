'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var AddCircleOutlineIcon = _interopDefault(require('@material-ui/icons/AddCircleOutline'));
var EditIcon = _interopDefault(require('@material-ui/icons/Edit'));
var DeleteIcon = _interopDefault(require('@material-ui/icons/Block'));
var ArrowDropDown = _interopDefault(require('@material-ui/icons/ArrowDropDown'));
var ArrowRight = _interopDefault(require('@material-ui/icons/ArrowRight'));
var FiberManualRecord = _interopDefault(require('@material-ui/icons/FiberManualRecord'));
var MenuIcon = _interopDefault(require('@material-ui/icons/Menu'));
var Dialog = _interopDefault(require('@material-ui/core/Dialog'));
var DialogTitle = _interopDefault(require('@material-ui/core/DialogTitle'));
var DialogContent = _interopDefault(require('@material-ui/core/DialogContent'));
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var InputLabel = _interopDefault(require('@material-ui/core/InputLabel'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var core = require('@material-ui/core');
var DialogActions = _interopDefault(require('@material-ui/core/DialogActions'));
var TreeView = _interopDefault(require('@material-ui/lab/TreeView'));
var TableContainer = _interopDefault(require('@material-ui/core/TableContainer'));
var TreeItem = _interopDefault(require('@material-ui/lab/TreeItem'));
var Table = _interopDefault(require('@material-ui/core/Table'));
var TableHead = _interopDefault(require('@material-ui/core/TableHead'));
var TableRow = _interopDefault(require('@material-ui/core/TableRow'));
var TableCell = _interopDefault(require('@material-ui/core/TableCell'));
var TableBody = _interopDefault(require('@material-ui/core/TableBody'));
var Checkbox = _interopDefault(require('@material-ui/core/Checkbox'));

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
    displayDescription = _ref.displayDescription;
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
  return React__default.createElement(TreeBlockContainer, null, Object.keys(items).map(function (resource) {
    var hasChildren = Object.keys(items[resource]._resources).length > 0;
    return React__default.createElement(StyledTreeItem, {
      key: resource,
      nodeId: resource,
      label: React__default.createElement(TreeItemContent, {
        "$hasChildren": hasChildren
      }, hasChildren ? React__default.createElement(Icons.TreeParentIcon, {
        color: "primary"
      }) : React__default.createElement(Icons.TreeNodeIcon, {
        color: "primary",
        style: {
          fontSize: '11px'
        }
      }), React__default.createElement(ItemResourceName, {
        "$hasChildren": hasChildren
      }, items[resource].name), displayDescription ? React__default.createElement(ItemResource, null, items[resource].description || '', admin && items[resource].description && React__default.createElement("span", {
        style: {
          color: '#888',
          marginLeft: '10px'
        }
      }, "(", resource, ")")) : React__default.createElement(ItemResource, null, resource), admin && React__default.createElement(ActionsContainer, null, React__default.createElement(Icons.TreeAddIcon, {
        style: {
          fontSize: '16px'
        },
        onClick: function onClick(e) {
          handleAdd(e, resource);
        }
      }), React__default.createElement(Icons.TreeEditIcon, {
        style: {
          fontSize: '16px'
        },
        onClick: function onClick(e) {
          handleEdit(e, resource);
        }
      }), React__default.createElement(Icons.TreeDeleteIcon, {
        style: {
          fontSize: '16px'
        },
        color: "error",
        onClick: function onClick(e) {
          handleDelete(e, resource);
        }
      })))
    }, Object.keys(items[resource]._resources).length > 0 && React__default.createElement(_TreeGenerator, {
      resources: items[resource]._resources,
      handleOpenModal: handleOpenModal,
      icons: Icons,
      admin: admin,
      displayDescription: displayDescription
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
var ItemResource = /*#__PURE__*/core.withTheme(/*#__PURE__*/styled.span(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    position: absolute;\n    left: max(15%, 250px);\n    color: ", ";\n"])), function (props) {
  return props.theme.palette.text.disabled;
}));
var TreeItemContent = /*#__PURE__*/core.withTheme(/*#__PURE__*/styled.div(_templateObject6 || (_templateObject6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    display: flex;\n    line-height: 31px;\n    border-width: 0 0 1px 0;\n    border-style: solid;\n    border-color: ", ";\n    align-items: center;\n\n    &:hover ", " {\n        display: block;\n    }\n"])), function (props) {
  return props['$hasChildren'] ? props.theme.palette.text.disabled : 'transparent';
}, ActionsContainer));

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7, _templateObject8;
console.log('React version2:', React__default.version);
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
    admin = _ref.admin;
  var _React$useState = React__default.useState(false),
    modalIsOpen = _React$useState[0],
    setModalIsOpen = _React$useState[1];
  var _React$useState2 = React__default.useState(false),
    modalDeleteIsOpen = _React$useState2[0],
    setModalDeleteIsOpen = _React$useState2[1];
  var _React$useState3 = React__default.useState(''),
    currentModalResourceKey = _React$useState3[0],
    setCurrentModalResourceKey = _React$useState3[1];
  var _React$useState4 = React__default.useState(),
    currentModalResourceRef = _React$useState4[0],
    setCurrentModalResourceRef = _React$useState4[1];
  var _React$useState5 = React__default.useState(),
    currentModalParentResourceRef = _React$useState5[0],
    setCurrentModalParentResourceRef = _React$useState5[1];
  var _React$useState6 = React__default.useState(false),
    modalInEditMode = _React$useState6[0],
    setModalInEditMode = _React$useState6[1];
  var _React$useState7 = React__default.useState(false),
    permissionNameFirstFocus = _React$useState7[0],
    setPermissionNameFirstFocus = _React$useState7[1];
  var _React$useState8 = React__default.useState(false),
    errorInPermission = _React$useState8[0],
    setErrorInPermission = _React$useState8[1];
  var _React$useState9 = React__default.useState(''),
    errorHelperText = _React$useState9[0],
    setErrorHelperText = _React$useState9[1];
  var nameEl = React__default.useRef(null);
  var permissionEl = React__default.useRef(null);
  var descriptionEl = React__default.useRef(null);
  var handleResource = function handleResource() {
    var _nameEl$current, _descriptionEl$curren, _permissionEl$current;
    var name = nameEl == null || (_nameEl$current = nameEl.current) == null ? void 0 : _nameEl$current.value;
    var description = descriptionEl == null || (_descriptionEl$curren = descriptionEl.current) == null ? void 0 : _descriptionEl$curren.value;
    var permission = "" + (currentModalResourceKey ? currentModalResourceKey + "." : '') + (permissionEl == null || (_permissionEl$current = permissionEl.current) == null ? void 0 : _permissionEl$current.value);
    var parent = currentModalResourceRef;
    if (parent && permission in parent._resources) {
      setErrorHelperText('Permission name already exists');
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
  return React__default.createElement(TableContainer, null, React__default.createElement(Dialog, {
    open: modalIsOpen,
    onClose: function onClose() {
      handleCloseModal(false);
    },
    disableBackdropClick: true
  }, React__default.createElement(DialogContainer, null, React__default.createElement(DialogTitle, null, "New Resource"), React__default.createElement(DialogContent, null, React__default.createElement(InputRowContainer, null, React__default.createElement(InputLabel, {
    htmlFor: "name"
  }, "Resource Name:"), React__default.createElement(PermissionStyledInput, {
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
  })), React__default.createElement(InputRowContainer, null, React__default.createElement(InputLabel, {
    htmlFor: "description"
  }, "Description:"), React__default.createElement(PermissionStyledInput, {
    id: "description",
    type: "text",
    inputRef: descriptionEl,
    defaultValue: modalInEditMode ? currentModalResourceRef.description : undefined
  })), React__default.createElement(InputRowContainer, null, React__default.createElement(InputLabel, {
    htmlFor: "permission"
  }, "Permission name:"), React__default.createElement(PermissionStyledInput, {
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
  }))), React__default.createElement(DialogActions, null, React__default.createElement(Buttons.CloseButton, {
    variant: "outlined",
    onClick: function onClick() {
      handleCloseModal(false);
    }
  }, "Close"), React__default.createElement(Buttons.SaveButton, {
    variant: "contained",
    color: "primary",
    onClick: handleResource
  }, "Save")))), React__default.createElement(Dialog, {
    open: modalDeleteIsOpen,
    onClose: function onClose() {
      return handleCloseModal(true);
    },
    disableBackdropClick: true
  }, React__default.createElement(DialogContainer, null, React__default.createElement(DialogTitle, null, "Delete Resources"), React__default.createElement(DialogContent, null, React__default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, React__default.createElement(Typography, null, "Are you sure you want to delete the following resources:")), React__default.createElement(TreeView, {
    defaultCollapseIcon: React__default.createElement(Icons.TreeCollapseIcon, null),
    defaultExpandIcon: React__default.createElement(Icons.TreeExpandIcon, null),
    defaultExpanded: expandedItems,
    disableSelection: true
  }, React__default.createElement(_TreeGenerator, {
    resources: (_resources = {}, _resources[currentModalResourceKey] = currentModalResourceRef, _resources),
    handleOpenModal: handleOpenModal,
    icons: Icons,
    admin: admin
  }))), React__default.createElement(DialogActions, null, React__default.createElement(Buttons.CloseButton, {
    variant: "outlined",
    onClick: function onClick() {
      return handleCloseModal(true);
    }
  }, "Close"), React__default.createElement(Buttons.DeleteButton, {
    variant: "contained",
    color: "secondary",
    onClick: handleDeleteResources
  }, "Delete")))), React__default.createElement(TreeHeaderContainer, null, React__default.createElement(ResourceTitle, null, "Resource"), React__default.createElement(PermissionTitle, null, admin ? 'Description (Permission)' : 'Description')), React__default.createElement(StyledTreeView, {
    defaultCollapseIcon: React__default.createElement(Icons.TreeCollapseIcon, null),
    defaultExpandIcon: React__default.createElement(Icons.TreeExpandIcon, null),
    expanded: expandedItems,
    disableSelection: true,
    onNodeToggle: handleExpand
  }, React__default.createElement(_TreeGenerator, {
    resources: resources._resources,
    handleOpenModal: handleOpenModal,
    icons: Icons,
    admin: admin,
    displayDescription: true
  })), admin && React__default.createElement(AddResourceBlock, {
    onClick: function onClick() {
      handleOpenModal(resources);
    }
  }, React__default.createElement(Components.AddResource, null)));
};
var TreeHeaderContainer = /*#__PURE__*/core.withTheme(/*#__PURE__*/styled.div(_templateObject$1 || (_templateObject$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    display: flex;\n    font-size: 18px;\n    height: 86px;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: ", ";\n    margin-left: 22px;\n\n    div {\n        padding-bottom: 5px;\n        margin-top: auto;\n    }\n"])), function (_ref2) {
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
var PermissionStyledInput = /*#__PURE__*/core.withTheme(/*#__PURE__*/styled(TextField)(_templateObject7 || (_templateObject7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    flex-grow: 1;\n\n    .MuiInputBase-root {\n        color: ", ";\n    }\n\n    & input {\n        color: ", ";\n        &.Mui-disabled {\n            color: ", ";\n            cursor: not-allowed;\n        }\n    }\n"])), function (_ref3) {
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
var AddResource = function AddResource() {
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(AddResourceIcon, null), " Add Resource");
};
var AddResourceIcon = /*#__PURE__*/styled(AddCircleOutlineIcon)(_templateObject$2 || (_templateObject$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    vertical-align: -6px;\n"])));

var _templateObject$3;
var AddRole = function AddRole() {
  return React__default.createElement(React__default.Fragment, null, "Add Role ", React__default.createElement(AddRoleIcon, {
    fontSize: 'small'
  }));
};
var AddRoleIcon = /*#__PURE__*/styled(AddCircleOutlineIcon)(_templateObject$3 || (_templateObject$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    vertical-align: -4px;\n"])));

var _templateObject$4;
var RoleTag = /*#__PURE__*/core.withTheme(/*#__PURE__*/styled.span(_templateObject$4 || (_templateObject$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    text-transform: uppercase;\n    color: ", ";\n    background: ", ";\n    padding: 4px;\n    white-space: nowrap;\n"])), function (props) {
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
    Components = _ref.components;
  var _React$useState = React__default.useState(false),
    modalIsOpen = _React$useState[0],
    setModalIsOpen = _React$useState[1];
  var _React$useState2 = React__default.useState(''),
    currentModalRole = _React$useState2[0],
    setCurrentModalRole = _React$useState2[1];
  var _React$useState3 = React__default.useState(false),
    modalDeleteIsOpen = _React$useState3[0],
    setModalDeleteIsOpen = _React$useState3[1];
  var _React$useState4 = React__default.useState(false),
    modalInEditMode = _React$useState4[0],
    setModalInEditMode = _React$useState4[1];
  var _React$useState5 = React__default.useState([]),
    rolesOrdered = _React$useState5[0],
    setRolesOrdered = _React$useState5[1];
  var _React$useState6 = React__default.useState([]),
    displayedRows = _React$useState6[0],
    setDisplayedRows = _React$useState6[1];
  var _React$useState7 = React__default.useState(false),
    errorInRoleName = _React$useState7[0],
    setErrorInRoleName = _React$useState7[1];
  var _React$useState8 = React__default.useState(''),
    errorHelperText = _React$useState8[0],
    setErrorHelperText = _React$useState8[1];
  var roleNameEl = React__default.useRef(null);
  React.useEffect(function () {
    var roles = Object.keys(permissionsTable._roles);
    setRolesOrdered(roles);
  }, []);
  React.useEffect(function () {
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
      setErrorHelperText('Role name already exists');
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
  return React__default.createElement(Components.CheckboxTableContainer, null, React__default.createElement(Dialog, {
    open: modalIsOpen,
    onClose: function onClose() {
      handleCloseModal(false);
    },
    disableBackdropClick: true
  }, React__default.createElement(DialogContainer$1, null, React__default.createElement(DialogTitle, null, "Role"), React__default.createElement(DialogContent, null, React__default.createElement(InputRowContainer$1, null, React__default.createElement(InputLabel, {
    htmlFor: "name"
  }, "Role Name:"), React__default.createElement(TextField, {
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
  }))), React__default.createElement(DialogActions, null, React__default.createElement(Buttons.CancelButton, {
    variant: "outlined",
    onClick: function onClick() {
      handleCloseModal(false);
    }
  }, "Cancel"), React__default.createElement(Buttons.SaveButton, {
    variant: "contained",
    color: "primary",
    onClick: handleRole
  }, "Save")))), React__default.createElement(Dialog, {
    open: modalDeleteIsOpen,
    onClose: function onClose() {
      return handleCloseModal(true);
    },
    disableBackdropClick: true
  }, React__default.createElement(DialogContainer$1, null, React__default.createElement(DialogTitle, null, "Delete Resources"), React__default.createElement(DialogContent, null, React__default.createElement(Typography, null, "Are you sure you want to delete the role ", React__default.createElement("b", null, currentModalRole), "?"), React__default.createElement(Typography, null, "This action cannot be undone.")), React__default.createElement(DialogActions, null, React__default.createElement(Buttons.CancelButton, {
    variant: "outlined",
    onClick: function onClick() {
      return handleCloseModal(true);
    }
  }, "Cancel"), React__default.createElement(Buttons.DeleteButton, {
    variant: "contained",
    onClick: handleDeleteRole
  }, "Delete")))), React__default.createElement(AddRoleBlock, null, React__default.createElement("span", {
    onClick: function onClick() {
      handleOpenModal('');
    }
  }, React__default.createElement(Components.AddRole, null))), React__default.createElement(StyledTable, null, React__default.createElement(StyledTHead, null, React__default.createElement(TableRow, null, rolesOrdered.map(function (row) {
    return React__default.createElement(StyledCell, {
      key: row
    }, React__default.createElement(Components.RoleTag, null, row), isReadOnly(row) ? null : React__default.createElement(RoleActions, null, React__default.createElement(Icons.EditIcon, {
      fontSize: "small",
      onClick: function onClick() {
        handleOpenModal(row, false, true);
      }
    }), React__default.createElement(Icons.DeleteIcon, {
      fontSize: "small",
      color: "error",
      onClick: function onClick() {
        handleOpenModal(row, true);
      }
    })));
  }), React__default.createElement(TableCell, null, "\xA0"))), React__default.createElement(TableBody, null, displayedRows.map(function (perm) {
    return React__default.createElement(StyledRow, {
      key: perm
    }, rolesOrdered.map(function (role) {
      var itemChecked = isChecked(role, perm);
      var itemCheckedByParent = isCheckedByParent(role, perm);
      return React__default.createElement(StyledCell, {
        key: role + "-" + perm
      }, React__default.createElement(StyledCheckbox, {
        onChange: function onChange(e) {
          var checked = e.target.checked;
          handleCheckboxChange(checked, role, perm);
        },
        checked: itemChecked || itemCheckedByParent,
        disabled: itemCheckedByParent,
        color: "primary",
        size: "small"
      }));
    }), React__default.createElement(TableCell, null, "\xA0"));
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
    admin = _ref.admin;
  var _React$useState = React__default.useState(defaultValue),
    permissionsTable = _React$useState[0],
    setPermissionsTable = _React$useState[1];
  var _React$useState2 = React__default.useState([]),
    expandedItems = _React$useState2[0],
    setExpandedItems = _React$useState2[1];
  var _React$useState3 = React__default.useState([]),
    nodesWithChildren = _React$useState3[0],
    setNodesWithChildren = _React$useState3[1];
  React.useEffect(function () {
    setExpandedItems(getAllResources(permissionsTable));
  }, []);
  React.useEffect(function () {
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
  var memoizedButtons = React__default.useMemo(function () {
    return {
      CancelButton: buttons.cancelButton || Button,
      CloseButton: buttons.closeButton || Button,
      DeleteButton: buttons.deleteButton || Button,
      SaveButton: buttons.saveButton || Button
    };
  }, [buttons]);
  var memoizedIcons = React__default.useMemo(function () {
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
  var memoizedComponents = React__default.useMemo(function () {
    return {
      AddResource: components.addResource || AddResource,
      AddRole: components.addRole || AddRole,
      RoleTag: components.roleTag || RoleTag,
      CheckboxTableContainer: components.checkboxTableContainer || CheckboxTableContainer
    };
  }, [components]);
  return React__default.createElement(React__default.Fragment, null, permissionsTable && React__default.createElement(StyledContainer, null, React__default.createElement(TreeBlock, {
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
    admin: admin
  }), React__default.createElement(CheckboxBlock, {
    permissionsTable: permissionsTable,
    expandedItems: expandedItems,
    nodesWithChildren: nodesWithChildren,
    onChange: handleCheckboxChanges,
    buttons: memoizedButtons,
    icons: memoizedIcons,
    components: memoizedComponents,
    admin: admin
  })));
};
var StyledContainer = /*#__PURE__*/styled.div(_templateObject$7 || (_templateObject$7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n    width: 100%;\n    display: flex;\n    > div {\n        width: 100%;\n        flex-grow: 1;\n    }\n"])));

exports.default = Rbac;
//# sourceMappingURL=react-rbac-ui-manager.cjs.development.js.map
