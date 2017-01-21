'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './edas.routes';

export class EdasComponent {
  /*@ngInject*/
  headers = []
  formContent = [];
  scale = [];
  constructor() {
    this.headers = [
      {
        label: 'Nom :',
        key: 'lastname'
      },
      {
        label: 'Prénom :',
        key: 'firstname'
      },
      {
        label: 'Date de naissance :',
        key: 'birthdate'
      },
      {
        label: 'Date du jour :',
        key: 'date'
      }
    ]

    this.formContent = [
      '1. J\'ai trouvé difficile de décompresser',
      '2. J\'ai été conscient(e) d\'avoir la bouche sèche',
      '3. J\'ai eu l\'impression de ne pas pouvoir ressentir d\'émotion positive.',
      '4. J\'ai eu de la difficulté à respirer (par exemple, respirations excessivement rapides, essoufflement sans effort physique).',
      '5. J\'ai eu de la difficulté à initier de nouvelles activités.',
      '6. J\'ai eu tendance à réagir de façon exagérée.',
      '7. J\'ai eu des tremblements (par exemple, des mains).',
      '8. J\'ai eu l\'impression de dépenser beaucoup d\'énergie nerveuse.',
      '9. Je me suis inquiété(e) en pensant à des situations où je pourrais paniquer et faire de moi un(e) idiot(e).',
      '10. J\'ai eu le sentiment de ne rien envisager avec plaisir.',
      '11. Je me suis aperçu(e) que je devenais agité(e).',
      '12. J\'ai eu de la difficulté à me détendre.',
      '13. Je me suis senti(e) triste et déprimé(e).',
      '14. Je me suis aperçu(e) que je devenais impatient(e) lorsque j\'étais retardé(e) de quelque façon que ce soit (par exemple dans les ascenseurs, aux feux de circulation, lorsque je devais attendre).',
      '15. J\'ai eu le sentiment d\'être presque pris(e) de panique.',
      '16. J\'ai été incapable de me sentir enthousiaste au sujet de quoi que ce soit.',
      '17. J\'ai eu le sentiment de ne pas valoir grand chose comme personne.',
      '18. Je me suis aperçu(e) que j’étais très irritable.',
      '19. J\’ai été conscient(e) des palpitations de mon coeur en l’absence d’effort physique (sensation d’augmentation de mon rythme cardiaque ou l’impression que mon cœur venait de sauter).',
      '20. J\’ai eu peur sans bonne raison.',
      '21. J\’ai eu l’impression que la vie n’avait pas de sens.',
    ];

    this.scale = [0, 1, 2, 3];
  }
}

export default angular.module('toothrushApp.edas', [uiRouter])
  .config(routes)
  .component('edas', {
    template: require('./edas.pug'),
    controller: EdasComponent,
    controllerAs: 'edasCtrl'
  })
  .name;
