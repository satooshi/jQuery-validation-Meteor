Package.describe({
    summary : "jzaefferer/jquery-validation for Meteor smart package"
});

Package.on_use(function(api, where) {
    where = where || [ 'client', 'server' ];
    api.use('jquery', where);

    api.add_files('lib/jquery.validate.js', where);
    api.add_files('lib/additional-methods.js', where);
    api.add_files('lib/lib/jquery.form.js', where);
    api.add_files('lib/lib/jquery.mockjax.js', where);
    api.add_files('lib/localization/messages_ja.js', where);
});
