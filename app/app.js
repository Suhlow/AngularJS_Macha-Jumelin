'use strict';
angular.module('myApp', [])
.controller('MainController', ['$scope', function($scope){
  $scope.restaurants=[{
    nom : 'Delice Land',
    numVoie : '3 ',
    libVoie : 'Boulevard Gambetta ',
    date : '04/11/2019',
    note : '5/5',
    proprio : 'Jean Horacio Délice',
    mail : 'contact.deliceMachine@wanadoo.fr',
    commentaire: 'Vraiment un super resto. Choqué pas déçu. Bisous, Jeannine.'
  },
    {
      nom : 'Papa John',
      numVoie : '6 ',
      libVoie : ' Avenue des Martyrs ',
      date : '04/04/1996',
      note : '3,5/5',
      proprio : 'John Doe',
      mail : 'onsepaskiseh@aol.com',
      commentaire: 'Les pizzas étaient bonnes.'
    },
    {
      nom : 'Au Bu/Fais',
      numVoie : '12 ',
      libVoie : 'Cours de la libération ',
      date : '15/06/2004',
      note : '2/5',
      proprio : 'Skylar White',
      mail : ' unjourjetrouveraiuneadressemail@hotmail.fr',
      commentaire: 'Rarement mangé de si bonne choucroute.'
    },
    {
      nom : 'Jean-Michels Burgers ',
      numVoie : '12 ',
      libVoie : ' rue de la paie ',
      date : '15/11/1978',
      note : '5/5',
      proprio : 'JeanMichel Fédebonburger',
      mail : ' jeanmichelBG@hotmail.fr',
      commentaire: 'Incroyable.'
    },
    {
      nom : 'Chez Jimmy',
      numVoie : '45',
      libVoie : 'Avenue Blanche ',
      date : '06/09/2014',
      note : '4/5',
      proprio : 'Jimmy Choo',
      mail : ' splendideImagination@societeGenerale.fr',
      commentaire: 'Jimmy fait bien à manger!'
    }
    ];

}]);