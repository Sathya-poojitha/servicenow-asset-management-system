# ServiceNow Asset Management System

A custom ServiceNow application developed to manage and track IT assets with automated check-in and check-out functionality.


# 📌 Project Overview

This project was built using the ServiceNow platform to simplify asset management processes inside an organization.  

The application allows users to:
- Store asset details
- Track asset availability
- Assign assets to users
- Perform automated check-in/check-out actions

The system improves asset tracking efficiency and reduces manual work.


# 🚀 Features

- Custom Asset Register Table
- Asset Tracking System
- Automated Check-in / Check-out
- User Assignment Automation
- Status Management
- Custom Form Design
- UI Action Functionality


# 🛠️ What I Implemented

# 1. Custom Table Creation

Created a custom table:

```text
u_asset_register
```

to store asset details.

## Fields Created

| Field Name | Type |
|------------|------|
| Asset Tag | String |
| Asset Name | String |
| Category | Choice |
| Status | Choice |
| Assigned To | Reference |
| Location | String |
| Purchase Date | Date |
| Notes | String |


# 2. Form Design

Designed a clean and user-friendly form layout for managing assets.


# 3. UI Action Development

Created a custom UI Action button:

```text
Check-in / Check-out
```

The button automatically:
- Changes asset status
- Assigns users
- Removes assignment during check-in
- Displays status messages


# 4. GlideScript Automation

Implemented server-side GlideScript logic for asset automation.

```javascript
if (current.u_status == 'In Stock') {

    current.setValue('u_status', 'In Use');
    current.setValue('u_assigned_to', gs.getUserID());

    gs.addInfoMessage(
        'Asset Checked-out to ' + gs.getUserDisplayName()
    );

} else if (current.u_status == 'In Use') {

    current.setValue('u_status', 'In Stock');
    current.setValue('u_assigned_to', '');

    gs.addInfoMessage(
        'Asset Checked-in successfully'
    );
}

current.update();
action.setRedirectURL(current);
```


# 📸 Screenshots

# Form View
![Form](./docs/screenshots/01-form-view.jpeg)


# Check-in / Check-out Action
![Action](./docs/screenshots/02-button-action.jpeg)


# Table Fields
![Fields](./docs/screenshots/03-table-fields.jpeg)


# 🎯 Key Learnings

- ServiceNow custom table creation
- Field configuration
- Form design
- UI Actions
- GlideScript automation
- Update Set handling
- Asset lifecycle management


# 🧰 Technologies Used

- ServiceNow
- GlideScript
- UI Actions
- Update Sets


# 👩‍💻 Developed By

Paluru Sathya Poojitha
