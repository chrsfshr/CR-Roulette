angular.module('scheduleApp', ['firebase'])

// main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
  
// connect to firebase
var ref = new Firebase("Firebase Url");
var fb = $firebase(ref);

// sync as object 
var syncObject = fb.$asObject();

// three way data binding
syncObject.$bindTo($scope, 'rooms');

// function to set the default data
  $scope.reset = function() {    

    fb.$set({
      stubbs: {
        name: 'Stubbs',
        slots: {
          '0001': {
            time: '9:00am',
            booked: false
          },
          '0002': {
            time: '9:30am',
            booked: false
          },
          '0003': {
          	time: '10:00am',
          	booked: false
          },
          '0004': {
          	time: '10:30am',
          	booked: false
          },
          '0005': {
          	time: '11:00am',
          	booked: false
          },
          '0006': {
          	time: '11:30am',
          	booked: false
          },
          '0007': {
          	time: '12:00pm',
          	booked: false
          },
          '0008': {
          	time: '12:30pm',
          	booked: false
          },
          '0009': {
          	time: '1:00pm',
          	booked: false
          },
          '0010': {
          	time: '1:30pm',
          	booked: false
          },
          '0011': {
          	time: '2:00pm',
          	booked: false
          },
          '0012': {
          	time: '2:30pm',
          	booked: false
          },
          '0013': {
          	time: '3:00pm',
          	booked: false
          },
          '0014': {
          	time: '3:30pm',
          	booked: false
          },
          '0015': {
          	time: '4:00pm',
          	booked: false
          },
          '0016': {
          	time: '4:30pm',
          	booked: false
          },
          '0017': {
          	time: '5:00pm',
          	booked: false
          },
          '0018': {
          	time: '5:30pm',
          	booked: false
          }
        }
      },
      antones: {
        name: 'Antones',
        slots: {
          '0001': {
            time: '9:00am',
            booked: false
          },
          '0002': {
            time: '9:30am',
            booked: false
          },
          '0003': {
          	time: '10:00am',
          	booked: false
          },
          '0004': {
          	time: '10:30am',
          	booked: false
          },
          '0005': {
          	time: '11:00am',
          	booked: false
          },
          '0006': {
          	time: '11:30am',
          	booked: false
          },
          '0007': {
          	time: '12:00pm',
          	booked: false
          },
          '0008': {
          	time: '12:30pm',
          	booked: false
          },
          '0009': {
          	time: '1:00pm',
          	booked: false
          },
          '0010': {
          	time: '1:30pm',
          	booked: false
          },
          '0011': {
          	time: '2:00pm',
          	booked: false
          },
          '0012': {
          	time: '2:30pm',
          	booked: false
          },
          '0013': {
          	time: '3:00pm',
          	booked: false
          },
          '0014': {
          	time: '3:30pm',
          	booked: false
          },
          '0015': {
          	time: '4:00pm',
          	booked: false
          },
          '0016': {
          	time: '4:30pm',
          	booked: false
          },
          '0017': {
          	time: '5:00pm',
          	booked: false
          },
          '0018': {
          	time: '5:30pm',
          	booked: false
          }
        }
      },
      austin360: {
        name: 'Austin 360',
        slots: {
          '0001': {
            time: '9:00am',
            booked: false
          },
          '0002': {
            time: '9:30am',
            booked: false
          },
          '0003': {
          	time: '10:00am',
          	booked: false
          },
          '0004': {
          	time: '10:30am',
          	booked: false
          },
          '0005': {
          	time: '11:00am',
          	booked: false
          },
          '0006': {
          	time: '11:30am',
          	booked: false
          },
          '0007': {
          	time: '12:00pm',
          	booked: false
          },
          '0008': {
          	time: '12:30pm',
          	booked: false
          },
          '0009': {
          	time: '1:00pm',
          	booked: false
          },
          '0010': {
          	time: '1:30pm',
          	booked: false
          },
          '0011': {
          	time: '2:00pm',
          	booked: false
          },
          '0012': {
          	time: '2:30pm',
          	booked: false
          },
          '0013': {
          	time: '3:00pm',
          	booked: false
          },
          '0014': {
          	time: '3:30pm',
          	booked: false
          },
          '0015': {
          	time: '4:00pm',
          	booked: false
          },
          '0016': {
          	time: '4:30pm',
          	booked: false
          },
          '0017': {
          	time: '5:00pm',
          	booked: false
          },
          '0018': {
          	time: '5:30pm',
          	booked: false
          }
        }
      },
      mohawk: {
        name: 'Mohawk',
        slots: {
          '0001': {
            time: '9:00am',
            booked: false
          },
          '0002': {
            time: '9:30am',
            booked: false
          },
          '0003': {
          	time: '10:00am',
          	booked: false
          },
          '0004': {
          	time: '10:30am',
          	booked: false
          },
          '0005': {
          	time: '11:00am',
          	booked: false
          },
          '0006': {
          	time: '11:30am',
          	booked: false
          },
          '0007': {
          	time: '12:00pm',
          	booked: false
          },
          '0008': {
          	time: '12:30pm',
          	booked: false
          },
          '0009': {
          	time: '1:00pm',
          	booked: false
          },
          '0010': {
          	time: '1:30pm',
          	booked: false
          },
          '0011': {
          	time: '2:00pm',
          	booked: false
          },
          '0012': {
          	time: '2:30pm',
          	booked: false
          },
          '0013': {
          	time: '3:00pm',
          	booked: false
          },
          '0014': {
          	time: '3:30pm',
          	booked: false
          },
          '0015': {
          	time: '4:00pm',
          	booked: false
          },
          '0016': {
          	time: '4:30pm',
          	booked: false
          },
          '0017': {
          	time: '5:00pm',
          	booked: false
          },
          '0018': {
          	time: '5:30pm',
          	booked: false
          }
        }
      },
      cclub: {
        name: 'Continental Club',
        slots: {
          '0001': {
            time: '9:00am',
            booked: false
          },
          '0002': {
            time: '9:30am',
            booked: false
          },
          '0003': {
          	time: '10:00am',
          	booked: false
          },
          '0004': {
          	time: '10:30am',
          	booked: false
          },
          '0005': {
          	time: '11:00am',
          	booked: false
          },
          '0006': {
          	time: '11:30am',
          	booked: false
          },
          '0007': {
          	time: '12:00pm',
          	booked: false
          },
          '0008': {
          	time: '12:30pm',
          	booked: false
          },
          '0009': {
          	time: '1:00pm',
          	booked: false
          },
          '0010': {
          	time: '1:30pm',
          	booked: false
          },
          '0011': {
          	time: '2:00pm',
          	booked: false
          },
          '0012': {
          	time: '2:30pm',
          	booked: false
          },
          '0013': {
          	time: '3:00pm',
          	booked: false
          },
          '0014': {
          	time: '3:30pm',
          	booked: false
          },
          '0015': {
          	time: '4:00pm',
          	booked: false
          },
          '0016': {
          	time: '4:30pm',
          	booked: false
          },
          '0017': {
          	time: '5:00pm',
          	booked: false
          },
          '0018': {
          	time: '5:30pm',
          	booked: false
          }
        }
      }
    });    

  };
  
});