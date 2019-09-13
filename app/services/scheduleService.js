angular.module('myApp').service('scheduleService', function() {
    var selectedDoctorSchedule = {};

    return {
        getSelectedDoctorSchedule: function() {
            return selectedDoctorSchedule;
        },

        setSelectedDoctorSchedule: function(schedule) {
            selectedDoctorSchedule = schedule;
        }
    }

})