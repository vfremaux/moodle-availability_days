YUI.add('moodle-availability_days-form', function (Y, NAME) {

/*
 * JavaScript for form editing days conditions.
 *
 * @module moodle-availability_days-form
 */
// jshint unused:false, undef:false

M.availability_days = M.availability_days || {};

/*
 * @class M.availability_days.form
 * @extends M.core_availability.plugin
 */
M.availability_days.form = Y.Object(M.core_availability.plugin);

/*
 * Groupings available for selection (alphabetical order).
 *
 * @property days
 * @type Array
 */
M.availability_days.form.days = null;

/*
 * Initialises this plugin.
 *
 * @method initInner
 * @param {Array} standardFields Array of objects with .field, .display
 * @param {Array} customFields Array of objects with .field, .display
 */
M.availability_days.form.initInner = function(daysfromstart) {
    this.days = daysfromstart;
};

M.availability_days.form.getNode = function(json) {
    // Create HTML structure.
    var strings = M.str.availability_days;

    if (json.d === undefined) {
        json.d = '';
    }

    var html = '<span class="availability-group"><label>' + strings.conditiontitle;
    html += ' <input type="text" size="4" name="field" value="' + json.d + '"></label></span>';

    var node = Y.Node.create('<span>' + html + '</span>');

    // Set initial values if specified.
    if (json.d !== undefined) {
        node.one('input[name=field]').set('value', json.d);
    }

    // Add event handlers (first time only).
    if (!M.availability_days.form.addedEvents) {
        M.availability_days.form.addedEvents = true;
        var updateForm = function(input) {
            var ancestorNode = input.ancestor('span.availability_days');
            M.core_availability.form.update();
        };

        var root = Y.one('.availability-field');
        root.delegate('change', function() {
             updateForm(this);
        }, '.availability_days input[name=field]');
    }

    return node;
};

M.availability_days.form.fillValue = function(value, node) {
    // Set field.
    value.d = node.one('input[name=field]').get('value');
};

}, '@VERSION@', {"requires": ["base", "node", "event", "io", "moodle-core_availability-form"]});
