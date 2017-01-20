<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Front-end class.
 *
 * @package availability_days
 * @copyright 2016 Valery Fremaux (valery.fremaux@gmail.com)
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace availability_days;

defined('MOODLE_INTERNAL') || die();

/**
 * Front-end class.
 *
 * @package availability_days
 * @copyright 2017 Valery Fremaux
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class frontend extends \core_availability\frontend {
    /**
     * The date selector popup is not currently supported because the date
     * selector is in a messy state (about to be replaced with a new YUI3
     * implementation) and MDL-44814 was rejected. I have left the code in
     * place, but disabled. When the date selector situation is finalised,
     * then this constant should be removed (either applying MDL-44814 if old
     * selector is still in use, or modifying the JavaScript code to support the
     * new date selector if it has landed).
     *
     * @var bool
     */
    const DATE_SELECTOR_SUPPORTED = false;

    protected function get_javascript_strings() {
        return array('short_days', 'conditiontitle');
    }
}
