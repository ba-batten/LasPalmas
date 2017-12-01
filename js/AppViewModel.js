function AppViewModel() {
  var self = this;

  self.data = {
    home: {
      text: 'Authentic Mexican food with a touch of home cooking',
      show: ko.observable(true)
    },
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
    },
    locations: {
      show: ko.observable(false),
      locs: [
        {
          description: 'Wake Forest Highway Location',
          street: '3801 Wake Forest Highway',
          city: 'Durham',
          state: 'NC',
          zip: '27703',
          phone: '(919) 598-5610',
          img: 'images/wake_forest_hwy_location.jpg'
        },
        {
          description: 'North Duke Street Location',
          street: '3814 North Duke Street',
          city: 'Durham',
          state: 'NC',
          zip: '27704',
          phone: '(919) 620-1824',
          img: 'images/duke_st_location.jpg'
        },
        {
          description: 'Strickland Road Location',
          street: '13220 Strickland Road',
          city: 'Raleigh',
          state: 'NC',
          zip: '27613',
          phone: '(919) 845-4780',
          img: 'images/strickland_rd_location.jpg'
        }
      ]

    }

  };

  self.closeViews = function() {
    self.data.about.show(false);
    self.data.home.show(false);
    self.data.locations.show(false);
  }

  // Change wordmark container to be a bar across top of page
  self.changeWordmarkContainer = function() {
    $('.m-wordmark-container').css('width', '100%');
    $('.m-wordmark-container').css('clip-path',
     'polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)');
    $('.m-wordmark-container').css('-webkit-clip-path',
    'polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)');
    $('.m-wordmark-container').css('padding', '10px 0');
    $('.t-tagline').css('display', 'none');
  }

  // Reset wordmark container to be a shape centered at top of page
  self.resetWordmarkContainer = function() {
    $('.m-wordmark-container').css('width', '250px');
    $('.m-wordmark-container').css('clip-path',
     'polygon(0% 0%, 100% 0%, 97% 80%, 50% 100%, 3% 80%)');
    $('.m-wordmark-container').css('-webkit-clip-path',
     'polygon(0% 0%, 100% 0%, 97% 80%, 50% 100%, 3% 80%)');
    $('.m-wordmark-container').css('padding', '10px 15px 20px');
    $('.t-tagline').css('display', 'block');

  }

  self.goHome = function() {
    self.resetWordmarkContainer();
    self.closeViews();
    self.data.home.show(true);
    console.log('Go Home');
  };

  self.goAbout = function() {
    self.changeWordmarkContainer();
    self.closeViews();
    self.data.about.show(true);
    console.log('Go About');
  };

  self.goLocations = function() {
    self.changeWordmarkContainer();
    self.closeViews();
    self.data.locations.show(true);
    console.log('Go Locations');
  };




}


var model = new AppViewModel();

ko.applyBindings(model);
