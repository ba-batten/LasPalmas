function AppViewModel() {
  var self = this;

  self.data = {
    about: {
      text: 'Las Palmas Inc.,  Originated from a dream, In 1980 Saul Alfaro migrated from his place of' +
      ' birth El Salvador, to Los Angeles with the American dream. At the age of 20 Saul started working' +
      ' as a dish washer at a small Restaurant called Las Palmas in California the only place to offer him' +
      ' a job, a year later he was promoted to head chef. Saul\'s dream was to one day be able to run his' +
      ' own successful business and give his family a better life.\nYears later he made a decision that' +
      ' would change his life forever, he moved to North Carolina where all his hard work would pay off. In' +
      ' 1995 he open his first restaurant naming it after the first job he got in the United States,' +
      ' Las Palmas Mexican Restaurant.\nLas Palmas was the American dream Saul carried in his heart,' +
      ' 18 years later he is now the president of 3 successful Las Palmas Mexican restaurants. Las Palmas ' +
      ' is made up of delicious authentic Mexican food with a touch of home cooked recipes. Saul is grateful' +
      ' to have customers who support him and have helped him meet his dream. On behalf of Las Palmas Inc ' +
      ' and Saul and his family they would like to thank all there customers for there support and hope to ' +
      ' keep serving the community with more years to come!',
      img: 'images/girl_and_truck.jpeg',
      show: ko.observable(false)
    }
  };

  self.goHome = function() {
    self.data.about.show(false);
    console.log('Go Home');
  };

  self.goAbout = function() {
    self.data.about.show(true);
    console.log('Go About');
  };





}


var model = new AppViewModel();

ko.applyBindings(model);
