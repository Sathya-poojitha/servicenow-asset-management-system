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
