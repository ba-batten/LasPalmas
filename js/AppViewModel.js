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
          street: '3801 Wake Forest Hwy',
          city: 'Durham',
          state: 'NC',
          zip: '27703',
          phone: '(919) 598-5610',
          img: 'images/wake_forest_hwy_location.jpg'
        },
        {
          description: 'North Duke Street Location',
          street: '3814 North Duke St',
          city: 'Durham',
          state: 'NC',
          zip: '27704',
          phone: '(919) 620-1824',
          img: 'images/duke_st_location.jpg'
        },
        {
          description: 'Strickland Road Location',
          street: '13220 Strickland Rd',
          city: 'Raleigh',
          state: 'NC',
          zip: '27613',
          phone: '(919) 845-4780',
          img: 'images/strickland_rd_location.jpg'
        }
      ]
    },
    menu: {
      show: ko.observable(false),
      meals: [
        {
          category: 'lunch',
          showMenu: ko.observable(false),
          items: [
            {
              item: 'Speedy González',
              description: 'One taco, one enchilada and choice of Spanish rice or refried beans',
            },
            {
              item: 'Lunch Special, No. 1',
              description: 'One chile relleno, one taco, refried beans and guacamole salad',
            },
            {
              item: 'Lunch Special, No. 2',
              description: 'One beef burrito, Spanish rice and refried beans',
            },
            {
              item: 'Lunch Special, No. 3',
              description: 'One burrito, one taco and Spanish rice',
            },
            {
              item: 'Lunch Special, No. 4',
              description: 'One chile relleno, Spanish rice and refried beans',
            },
            {
              item: 'Lunch Special, No. 5',
              description: 'One enchilada, Spanish rice and refried beans',
            },
            {
              item: 'Lunch Special, No. 6',
              description: 'One cheese quesadilla, one burrito, and guacamole salad',
            },
            {
              item: 'Lunch Special, No. 7',
              description: 'Laredo-skirt steak, choice of two scrmbled or sunny-side-up eggs, refried beans and hash browns',
            },
            {
              item: 'Lunch Special, No. 8',
              description: 'Pio-Pio-chicken fajitas, chilaquiles, choice of tow scrambled or sunny-side-up eggs and refried beans',
            },
            {
              item: 'Lunch Special, No. 9',
              description: 'La Cazuela-Two sunny-side-up eggs on top of one chicken or beef sincronizada served with refried beans and has browns with ranchero sauce',
            },
            {
              item: 'A.C.P Lunch',
              description: 'Rice with chicken topped with cheese dip',
            },
            {
              item: 'Huevos Rancheros',
              description: 'Two ranch-style eggs topped with Mexican sauce and served with Spanish rice, refried beans and choice of corn or flour tortillas',
            },
            {
              item: 'Quesadilla Deluxe',
              description: 'Flour tortilla with cheese and chicken, topped with lettuce, tomatoes, sour cream and Spanish rice',
            },
            {
              item: 'Lunch Fajita Quesadilla',
              description: 'Beef or chicken cooked with tomatoes and onions served with choice of rice or beans and guacamole salad',
            },
            {
              item: 'Burrito Especial',
              description: 'One beef-and-bean burrito topped with lettuce, tomatoes and sour cream',
            },
            {
              item: 'Green Pork Burrito',
              description: 'Burrito filled with tender pork sautéed with our homemade fresh green tomatillo sauce and servce with rice',
            },
            {
              item: 'Shrimp Chimichanga Lunch',
              description: 'Soft or fried flour tortilla filled with shrimp and beans',
            },
            {
              item: 'Chimichanga Lunch',
              description: 'Soft or fried flour tortilla filled with beef tips and beans',
            },
            {
              item: 'Enchiladas Supremas Lunch',
              description: 'One cheese and one chicken enchilada topped with lettuce and sour cream served with Spanish rice',
            },
            {
              item: 'Taquitos Mexicanos Lunch',
              description: 'Two taquitos - one chicken and one beef - served lettuce, guacamole, sour cream and Spanish rice',
            },
            {
              item: 'Huevos con Chorizo',
              description: 'Eggs scrambled with Mexican sausage served with Spanish rice, refried beans and tortillas',
            },
            {
              item: 'Fajita Burrito Lunch',
              description: 'One burrito fille with fajita-style chicken or beef ' +
                'topped with nacho cheese, lettuce, tomatoes and guacamole served ' +
                'with green peppers, onions, tomatoes, SPanish rice and refried beans',
            },
            {
              item: 'Fajitas Lunch',
              description: 'A lunch-sized portion of tender-sliced beef or chicken cooked ' +
                'with bell peppers, onions, and tomatoes served with guacamole salad and refried beans',
            },
            {
              item: 'Burrito Carnitas',
              description: 'One burrito filled with carnitas, topped with cheese sauce and pico de gallo ' +
                'served with lettuce, beans or rice',
            },
            {
              item: 'Fajita Taco Salad Lunch',
              description: 'Beef or chicken',
            }
          ]
        },
        {
          category: 'chicken',
          showMenu: ko.observable(false),
          items: [
            {
              item: 'Pollo a la Plancha',
              description: 'Chicken breast cooked on the grill and served with Spanish rice, salad and two tortillas',
            }
        }
    }

  };

  self.closeViews = function() {
    self.data.about.show(false);
    self.data.home.show(false);
    self.data.locations.show(false);
    self.data.menu.show(false);
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

  self.goMenu = function() {
    self.changeWordmarkContainer();
    self.closeViews();
    self.data.menu.show(true);
    console.log('Go Menu');
  };

  self.openCloseMenu = function(data) {
    var element = data.category;
    $('#' + element + ' ul').toggleClass('is-collapsed');
    $('#' + element + ' i').toggleClass('fa-caret-down fa-caret-up')
  };




}


var model = new AppViewModel();

ko.applyBindings(model);
