function AppViewModel() {
  var self = this;

  self.data = {
    home: {
      text: "Authentic Mexican food with a touch of home cooking",
      show: ko.observable(true)
    },
    about: {
      text:
        "Las Palmas Inc.,  Originated from a dream, In 1980 Saul Alfaro migrated from his place of" +
        " birth El Salvador, to Los Angeles with the American dream. At the age of 20 Saul started working" +
        " as a dish washer at a small Restaurant called Las Palmas in California the only place to offer him" +
        " a job, a year later he was promoted to head chef. Saul's dream was to one day be able to run his" +
        " own successful business and give his family a better life.\nYears later he made a decision that" +
        " would change his life forever, he moved to North Carolina where all his hard work would pay off. In" +
        " 1995 he open his first restaurant naming it after the first job he got in the United States," +
        " Las Palmas Mexican Restaurant.\nLas Palmas was the American dream Saul carried in his heart," +
        " 18 years later he is now the president of 3 successful Las Palmas Mexican restaurants. Las Palmas " +
        " is made up of delicious authentic Mexican food with a touch of home cooked recipes. Saul is grateful" +
        " to have customers who support him and have helped him meet his dream. On behalf of Las Palmas Inc " +
        " and Saul and his family they would like to thank all there customers for there support and hope to " +
        " keep serving the community with more years to come!",
      img: "images/girl_and_truck.jpeg",
      show: ko.observable(false)
    },
    locations: {
      show: ko.observable(false),
      locs: [
        {
          description: "Wake Forest Highway Location",
          street: "3801 Wake Forest Hwy",
          city: "Durham",
          state: "NC",
          zip: "27703",
          phone: "(919) 598-5610",
          img: "images/wake_forest_hwy_location.jpg"
        },
        {
          description: "North Duke Street Location",
          street: "3814 North Duke St",
          city: "Durham",
          state: "NC",
          zip: "27704",
          phone: "(919) 620-1824",
          img: "images/duke_st_location.jpg"
        },
        {
          description: "Strickland Road Location",
          street: "13220 Strickland Rd",
          city: "Raleigh",
          state: "NC",
          zip: "27613",
          phone: "(919) 845-4780",
          img: "images/strickland_rd_location.jpg"
        }
      ]
    },
    menu: {
      show: ko.observable(false),
      meals: [
        {
          category: "lunch",
          categoryID: "lunch",
          showMenu: ko.observable(false),
          items: [
            {
              item: "Speedy González",
              description:
                "One taco, one enchilada and choice of Spanish rice or refried beans"
            },
            {
              item: "Lunch Special, No. 1",
              description:
                "One chile relleno, one taco, refried beans and guacamole salad"
            },
            {
              item: "Lunch Special, No. 2",
              description: "One beef burrito, Spanish rice and refried beans"
            },
            {
              item: "Lunch Special, No. 3",
              description: "One burrito, one taco and Spanish rice"
            },
            {
              item: "Lunch Special, No. 4",
              description: "One chile relleno, Spanish rice and refried beans"
            },
            {
              item: "Lunch Special, No. 5",
              description: "One enchilada, Spanish rice and refried beans"
            },
            {
              item: "Lunch Special, No. 6",
              description:
                "One cheese quesadilla, one burrito, and guacamole salad"
            },
            {
              item: "Lunch Special, No. 7",
              description:
                "Laredo-skirt steak, choice of two scrmbled or sunny-side-up eggs, refried beans and hash browns"
            },
            {
              item: "Lunch Special, No. 8",
              description:
                "Pio-Pio-chicken fajitas, chilaquiles, choice of tow scrambled or sunny-side-up eggs and refried beans"
            },
            {
              item: "Lunch Special, No. 9",
              description:
                "La Cazuela-Two sunny-side-up eggs on top of one chicken or beef sincronizada served with refried beans and has browns with ranchero sauce"
            },
            {
              item: "A.C.P Lunch",
              description: "Rice with chicken topped with cheese dip"
            },
            {
              item: "Huevos Rancheros",
              description:
                "Two ranch-style eggs topped with Mexican sauce and served with Spanish rice, refried beans and choice of corn or flour tortillas"
            },
            {
              item: "Quesadilla Deluxe",
              description:
                "Flour tortilla with cheese and chicken, topped with lettuce, tomatoes, sour cream and Spanish rice"
            },
            {
              item: "Lunch Fajita Quesadilla",
              description:
                "Beef or chicken cooked with tomatoes and onions served with choice of rice or beans and guacamole salad"
            },
            {
              item: "Burrito Especial",
              description:
                "One beef-and-bean burrito topped with lettuce, tomatoes and sour cream"
            },
            {
              item: "Green Pork Burrito",
              description:
                "Burrito filled with tender pork sautéed with our homemade fresh green tomatillo sauce and servce with rice"
            },
            {
              item: "Shrimp Chimichanga Lunch",
              description:
                "Soft or fried flour tortilla filled with shrimp and beans"
            },
            {
              item: "Chimichanga Lunch",
              description:
                "Soft or fried flour tortilla filled with beef tips and beans"
            },
            {
              item: "Enchiladas Supremas Lunch",
              description:
                "One cheese and one chicken enchilada topped with lettuce and sour cream served with Spanish rice"
            },
            {
              item: "Taquitos Mexicanos Lunch",
              description:
                "Two taquitos - one chicken and one beef - served lettuce, guacamole, sour cream and Spanish rice"
            },
            {
              item: "Huevos con Chorizo",
              description:
                "Eggs scrambled with Mexican sausage served with Spanish rice, refried beans and tortillas"
            },
            {
              item: "Fajita Burrito Lunch",
              description:
                "One burrito fille with fajita-style chicken or beef " +
                "topped with nacho cheese, lettuce, tomatoes and guacamole served " +
                "with green peppers, onions, tomatoes, SPanish rice and refried beans"
            },
            {
              item: "Fajitas Lunch",
              description:
                "A lunch-sized portion of tender-sliced beef or chicken cooked " +
                "with bell peppers, onions, and tomatoes served with guacamole salad and refried beans"
            },
            {
              item: "Burrito Carnitas",
              description:
                "One burrito filled with carnitas, topped with cheese sauce and pico de gallo " +
                "served with lettuce, beans or rice"
            },
            {
              item: "Fajita Taco Salad Lunch",
              description: "Beef or chicken"
            }
          ]
        },
        {
          category: "chicken",
          categoryID: "chicken",
          showMenu: ko.observable(false),
          items: [
            {
              item: "Pollo a la Plancha",
              description:
                "Chicken breast cooked on the grill and served with Spanish rice, salad and two tortillas"
            },
            {
              item: "Mole Ranchero",
              description:
                "Chicken breast topped with mole sauce and served with Spanish rice, guacamole salad, and two tortillas"
            },
            {
              item: "Chilaquiles Mexicanos",
              description:
                "Tortilla chips covered with special sauce chicken and cheese served with Spanish rice, lettuce, sour cream and guacamole"
            },
            {
              item: "Pollo a la Crema",
              description:
                "Grilled chicken tenders served with sour cream, rice, beans, and tortillas"
            },
            {
              item: "Pollo Chipotle",
              description:
                "Grilled chicken breast covered with home made chiptle cream sauce and served with rice, refried beans, pico de gallo, tortillas and guacamole salad on the side"
            },
            {
              item: "A.C.P.",
              description: "Rice with chicken topeed with cheese dip"
            },
            {
              item: "Chori-Pollo",
              description:
                "Two flour totillas stuffed with shredded chicken, cheese, tomatoes, onions, bell peppers, and beans served with rice, lettuce and cheese"
            }
          ]
        },
        {
          category: "beef & pork",
          categoryID: "beefPork",
          showMenu: ko.observable(false),
          items: [
            {
              item: "Carnitas Dinner",
              description:
                "Pork served with lettuce, tomatoes, sliced avocado, pico de gallo, spanish rice and refried beans"
            },
            {
              item: "Taco Salad",
              description:
                "A crisp flour tortilla filled with ground beef, refried beans, lettuce, tomatoes, grated cheese and sour cream"
            },
            {
              item: "Costillas de Res",
              description:
                "Beef ribs served in a skillet with bell peppers and onions with guacamole salad, rice and beans"
            },
            {
              item: "Grande Special",
              description:
                "One of each - chalupa, chile relleno, enchilada, burrito and beef taco served with Spanish rice and refried beans"
            },
            {
              item: "Nuevo Guadalajara",
              description:
                "One tamal, two flautas, top skirt thin steak and guacamole salad"
            },
            {
              item: "Bistec a la Tampiqueña",
              description:
                "Skirt thin steak topped with roasted onions and tomatoes served with Spanish rice, refried beans, salad and tortillas"
            },
            {
              item: "Carne Asada",
              description:
                "Skirt thin steak served with Spanish rice, refired beans and pico de gallo"
            },
            {
              item: "Tacos de Carne Asada Dinner",
              description:
                "Four skirt thin steak tacos served with Spanish rice and refried beans"
            },
            {
              item: "Bistec en Sasa Verde",
              description:
                "Skirt thin steak served with Spanish rice, refried beans and guacamole salad"
            },
            {
              item: "Steak Sincronizada",
              description:
                "Two flour totillas stuffed with thin steak cheese, tomatoes, onions, bell peppers and beans served with rice, lettuce and cheese"
            }
          ]
        },
        {
          category: "Burritos & Enchiladas",
          categoryID: "burritosEnchiladas",
          showMenu: ko.observable(false),
          items: [
            {
              item: "Burritos Deluxe",
              description:
                "Tow combination burritos - one chicken with refried beans and one beef with refried beans topped with lettuce, tomatoes and sour cream"
            },
            {
              item: "Burrito de Chorizo",
              description:
                "Burrito filled with our homemade Mexican sausage and green sauce served with Spanish rice and refried beans"
            },
            {
              item: "Burritos de Carnitas",
              description:
                "Fried pork burrito topped with green sauce and served with Spanish rice and refried beans"
            },
            {
              item: "Burritos Rancheros",
              description:
                "Two burritos filled with beef tips and topped with melted cheese and special sauce"
            },
            {
              item: "Burritos de Carne Asada",
              description:
                "Burrito filled with skirt steak and topped with lettuce and pico de gallo, served with Spanish rice and refried beans"
            },
            {
              item: "Chimichanga",
              description:
                "Two soft or fried flour tortillas filled with beef tips and refried beans and topped with lettuce, tomatoes, sour cream, nacho cheese and guacamole"
            },
            {
              item: "#F",
              description:
                "One chicken burrito and one chicken enchilada topped with lettuce and sour cream"
            },
            {
              item: "Yolandas",
              description:
                "Three chicken enchiladas served wth Spanish rice and salad"
            },
            {
              item: "Enchiladas Supremas",
              description:
                "Supreme combination consisting of four enchiladas, one chicken, one beef, one bean, and one cheese all topped with cheese, lettuce, tomatoes and sour cream"
            },
            {
              item: "Enchiladas Rancheras",
              description:
                "One cheese and one chicken enchilada with onions topped with lettuce, sour cream, tomatoes and Spanish rice"
            },
            {
              item: "Shrimp Chimichanga",
              description: ""
            }
          ]
        },
        {
          category: "desserts",
          categoryID: "desserts",
          showMenu: ko.observable(false),
          items: [
            {
              item: "Sopapillas",
              description: ""
            },
            {
              item: "Fried Ice Cream",
              description: ""
            },
            {
              item: "Flan Mexican Custard",
              description: ""
            },
            {
              item: "Cheesecake",
              description: ""
            },
            {
              item: "Ice Cream Fudge Cake",
              description: ""
            }
          ]
        },
        {
          category: "Children's Menu",
          categoryID: "childrensMenu",
          showMenu: ko.observable(false),
          items: [
            {
              item: "Burrito and Taco",
              description: ""
            },
            {
              item: "Beef Taco",
              description: "Served with Spanish rice and refried beans"
            },
            {
              item: "Quesadilla and Enchilada",
              description: ""
            },
            {
              item: "Kid's Combo",
              description: "Hamburger and fries"
            },
            {
              item: "Chicken Nuggets",
              description: "Four nuggets with fries"
            },
            {
              item: "Mini Taco Salad",
              description: ""
            },
            {
              item: "Mini Mexican Pizza",
              description: "Served with rice and beans"
            },
            {
              item: "Spaguetti and Cheese Quesadilla",
              description: ""
            },
            {
              item: "Cheese Quesadilla, Rice and Beans",
              description: ""
            }
          ]
        },
        {
          category: "fajitas",
          categoryID: "fajitas",
          showMenu: ko.observable(false),
          items: [
            {
              item: 'Fajitas',
              description: 'Tender sliced beef or chicken cooked with bell peppers, onions and tomatoes served with guacamole salad and refried beans' 
            },
            {
              item: 'Mixed Fajitas',
              description: 'Tender-sliced beef and chicken cooked with bell peppers, onions and tomatoes served with guacamole salad and refried beans' 
            },
            {
              item: 'Fajitas Tejanas',
              description: 'Tender-sliced beef, chicken and shrimp cooked with bell peppers, onions and tomatoes served with guacamole salad and refried beans' 
            },
            {
              item: 'Fajitas Supremas',
              description: 'Tender-sliced beef and chicken cooked with mushrooms, red onions and bell peppers served with guacamole salad and refried beans' 
            },
            {
              item: 'Fajitas Burritos',
              description: 'Two burritos filled with fajitas-style chicken or beef and topped with macho cheese, lettuce, tomatoes and guacamole and then served with green peppers, onions, tomatoes and your choice of Spanish rice or refried beans' 
            },
            {
              item: 'Fajita Nachos',
              description: 'Fajita style chicken or steak topped with nacho cheese and melted shredded cheese' 
            },
            {
              item: 'Fajitas Mexicanas',
              description: 'Shrimp grilled with bell peppers, tomatoes and onions served with guacamole salad and refried beans' 
            },
            {
              item: 'Fajitas Parrillada',
              description: '(Exclusive for two) Beef, chorizo, shrimp, carnitas and chicken cooked with bell peppers and onions and then topped with cheese and served with rice, beans, guacamole salad and pico de gallo' 
            }
          ]
        },
        {
          category: "Mixed Dishes",
          categoryID: "mixedDishes",
          showMenu: ko.observable(false),
          items: [
            {
              item: 'Mar y Tierra',
              description: 'Six breaded shrimp and skirt steak served with spaghetti and salad' 
            },
            {
              item: 'Las Palmas',
              description: 'Chicken breast and skirt steak served with Spanish rice, refried beans and pico de gallo' 
            },
            {
              item: 'Nachos Supreme',
              description: 'Cheese nachos topped with ground beef, chopped chicken, refried beans, shredded lettuce, tomatoes and sour cream' 
            },
            {
              item: 'Taquitos Mexicanos',
              description: 'Four fried corn taquitos tightly rolled around beef and chicken served on a bed of lettuce, guacamole, tomatoes and sour cream' 
            },
            {
              item: 'Shrimp Sineronizada',
              description: 'Two flour tortillas stuffed with shrimp, cheese, tomatoes, onions and bell peppers served with lettuce and cheese' 
            },
            {
              item: 'Laredo',
              description: 'Skirt steak, choice of two scrambled or sunny-side-up eggs, refried beans and hash browns' 
            },
            {
              item: 'Pio Pio',
              description: 'Chicken fajitas, chilaquiles, choice of two scrambled or sunny-side-up eggs and refried beans' 
            },
            {
              item: 'La Cazuela',
              description: 'Two sunny-side-up eggs on top of one chicken or beef sincronizada and served with refried beans and hash browns with ranchero sauce' 
            },
            {
              item: 'Grilled Chicken & Fried Shrimp',
              description: 'Grilled chicken breast paired with six fried shrimp served with rice, fresh vegetables and mashed potatoes with brown gravy' 
            },
            {
              item: 'Steak & Shrimp',
              description: 'Skirt steak and four large grilled shrimp served with fried beans, lettuce, tomatoes, sliced avocado, onions and tortillas' 
            },
            {
              item: 'A.C.P.C',
              description: 'Rice with chicken and shrimp topped with cheese dip and served with beans' 
            },
            {
              item: 'Huevos Rancheros',
              description: 'Ranch-style eggs topped with Mexican sauce and served with Spanish rice, refried beans and choice of corn or flour tortillas' 
            },
            {
              item: 'Huevos con Chorizo',
              description: 'Eggs scrambled with Mexican sausage served with Spanish rice, refried beans and tortillas' 
            }
          ]
        },
        {
          category: 'Combination Dinners',
          categoryID: 'comboDinners',
          showMenu: ko.observable(false),
          items: [
            {
              item: '1. One taco, two enchilada and Spanish rice',
              description: '' 
            },
            {
              item: '2. One taco, one enchilada and one chalupa',
              description: '' 
            },
            {
              item: '3. One enchilada, two tacos and one chile relleno',
              description: '' 
            },
            {
              item: '4. Two tacos, one enchilada and chile con queso',
              description: '' 
            },
            {
              item: '5. Two beef enchiladas, Spanish rice and refried beans',
              description: '' 
            },
            {
              item: '6. One beef enchilada, one taco, Spanish rice and refried beans',
              description: '' 
            },
            {
              item: '7. One enchilada, one chile relleno, Spanish rice and refried beans',
              description: '' 
            },
            {
              item: '8. One enchilada, one tamal, SPanish rice and refried beans',
              description: '' 
            },
            {
              item: '9. One burrito, one enchilada and Spanish rice',
              description: '' 
            },
            {
              item: '10. Two beef tacos, Spanish rice and refried beans',
              description: '' 
            },
            {
              item: '11. One beef burrito, one taco and one enchilada',
              description: '' 
            },
            {
              item: '12. One chalupa, one chile relleno and refried beans0',
              description: '' 
            },
            {
              item: '13. One enchilada, one beef burrito and one chile relleno',
              description: '' 
            },
            {
              item: '14. Two tacos, one chile relleno and one chalupa',
              description: '' 
            },
            {
              item: '15. One beef burrito, one enchilada and one tamal',
              description: '' 
            },
            {
              item: '16. One chalupa, one chile relleno and one beef burrito',
              description: '' 
            },
            {
              item: '17. One burrito, one enchilada, Spanish rice and refried beans',
              description: '' 
            },
            {
              item: '18. One chalupa, one chile relleno and one enchilada',
              description: '' 
            },
            {
              item: '19. One chalupa, one beef burrito and one enchilada',
              description: '' 
            },
            {
              item: '20. One chile relleno, one taco, Spanish rice and refired beans',
              description: '' 
            },
            {
              item: '21. One taco, one burrito and one chalupa',
              description: '' 
            },
            {
              item: '22. One burrito, one chile relleno and one taco',
              description: '' 
            },
            {
              item: '23. One taco, one beef burrito, Spanish rice an drefried beans',
              description: '' 
            },
            {
              item: '24. One chile relleno, one beef burrito and Spanish rice',
              description: '' 
            },
            {
              item: '25. One chalupa, one taco and one tostada',
              description: '' 
            },
            {
              item: '26. One burrito, one chicken quesadilla and Spanish rice',
              description: '' 
            },
            {
              item: '27. One tostada, one enchilada and one chile relleno',
              description: '' 
            },
            {
              item: '28. One burrito, one tamal and one chicken quesadilla',
              description: '' 
            },
            {
              item: '29. One enchilada, one chalupa and one cheese quesadilla',
              description: '' 
            },
            {
              item: '30. Two burritos and Spanish rice',
              description: '' 
            }
          ]
        },
        {
          category: 'Sea Food',
          categoryID: 'seaFood',
          showMenu: ko.observable(false),
          items: [
            {
              item: 'Coctel de Camarón',
              description: 'Shrimp served with fresh tomatoes, onions, cilantro, avocados and ketchup in a cold soup' 
            },
            {
              item: 'Camarones Rancheos',
              description: 'Shrimp cooked in our special ranchero sauce served with Spanish rice, refried beans and flour tortillas' 
            },
            {
              item: 'Quesadilla Rellena de Camarón',
              description: 'A flour tortilla stuffed with shrimp and refired beans served with lettuce, guacamole, tomatoes, sour cream and Spanish rice' 
            },
            {
              item: 'Camarones al Mojo de Ajo',
              description: 'Jumbo shrimp cooked with an exquisite Mexican garlic sauce served with Spanish rice, salad and tortillas' 
            },
            {
              item: 'Tostadas de Ceviche',
              description: 'Two tostadas topped with fish that has been marinated in lime jice and diced onions, cilantro, tomatoes and jalapeño peppers' 
            },
            {
              item: 'Mojarra Frita',
              description: 'Fried whole tilapia served with Spanish rice, refried beans and tortillas then garnished with lettuce, tomatoes and avocados' 
            },
            {
              item: 'A.C.C.',
              description: 'Rice with shrimp topped with cheese dip' 
            },
            {
              item: 'Fish Filet & Fried Shrimp',
              description: 'Two 4 oz. fillets paired with four fried shrimp and served with fresh vegetables and mashed potatoes topped with brown gravy' 
            },
            {
              item: 'Jumbo Shrimp',
              description: 'Eight grilled shrimp with grilled onions and bell peppers served with salad and Spanish rice' 
            },
            {
              item: 'Grilled Fish Fillet',
              description: 'Served with rice, salad and tortillas' 
            },
            {
              item: 'Fish Tacos Dinner',
              description: 'Fou grilled fish tacos topped with onion and cilantro and served with rice and beans' 
            },
            {
              item: 'Shrimp Chimichanga',
              description: 'Two soft or fried flour tortillas filled with shrimp and refried beans then topped with lettuce, tomatoes, sour cream, nacho cheese and guacamole' 
            },
            {
              item: 'Shrimp Sincronizada',
              description: 'Tow flour tortillas stuffed with shrimp, cheese, tomatoes, onions, bell peppers and beans then served with rice, lettuce cheese'
            }
          ]
        },
        {
          category: 'Appetizers',
          categoryID: 'appetizers',
          showMenu: ko.observable(false),
          items: [
            {
              item: 'Nachos',
              description: '' 
            },
            {
              item: 'Refried Bean Nachos',
              description: '' 
            },
            {
              item: 'Beef or Chicken Nachos',
              description: '' 
            },
            {
              item: 'Cheese Dip',
              description: '' 
            },
            {
              item: 'Bean Dip',
              description: '' 
            },
            {
              item: 'Guacamole Dip',
              description: '' 
            },
            {
              item: 'Choriqueso Dip',
              description: 'Cheese dip with Mexican sausage' 
            },
            {
              item: 'Beef or Chicken Quesadilla',
              description: '' 
            },
            {
              item: 'Grilled Chicken or Beef Quesadilla',
              description: '' 
            },
            {
              item: 'Chorizo Quesadilla',
              description: '' 
            },
            {
              item: 'Shrimp Quesadilla',
              description: '' 
            },
            {
              item: 'Mushroom Quesadilla',
              description: '' 
            },
            {
              item: 'Spinach Quesadilla',
              description: '' 
            },
            {
              item: 'Pico de Gallo',
              description: '' 
            }
          ]
        },
        {
          category: 'Quesadillas',
          categoryID: 'quesadillas',
          showMenu: ko.observable(false),
          items: [
            {
              item: 'Quesadilla Rellena',
              description: 'A grilled flour tortilla stuffed with cheese, chopped beef and refried beans served with sour cream, lettuce, guacamole and Spanish rice' 
            },
            {
              item: 'Spinach & Mushroom Quesadilla',
              description: 'A flour tortilla stuffed with cheese, spinach and mushrooms served with lettuce, guacamole, sour cream and Spanish rice' 
            },
            {
              item: 'Dinner Veggie Quesadilla',
              description: 'A flour tortilla filled with cheese and seasoned zucchini, brocolli and squash cooked until tender with olive oil and grilld with bell peppers and onions' 
            },
            {
              item: 'Fajita Quesadilla',
              description: 'A grilled flour tortilla folded and filled with fajita meat (steak or chicken) and served with sour cream, lettuce, guacamole and Spanish rice or black beans' 
            }
          ]
        },
        {
          category: 'Soups & Salads',
          categoryID: 'soupsSalads',
          showMenu: ko.observable(false),
          items: [
            {
              item: 'Taco Salad Lunch',
              description: 'A crisp flour tortilla filled with ground beef, refried beans, lettuce, tomatoes, grated cheese and sour cream' 
            },
            {
              item: 'Las Palmas Salad',
              description: 'Grilled chicken with tomatoes, red onions, cucumbers, croutons and shredded cheese' 
            },
            {
              item: 'Tossed Salad',
              description: 'Lettuce, tomatoes, cucumber, red cabbage, carrot and croutons' 
            },
            {
              item: 'Guacamole Salad',
              description: '' 
            }
          ]
        }
      ]
    }
  };

  self.closeViews = function() {
    self.data.about.show(false);
    self.data.home.show(false);
    self.data.locations.show(false);
    self.data.menu.show(false);
  };

  // Change wordmark container to be a bar across top of page
  self.changeWordmarkContainer = function() {
    $(".m-wordmark-container").css("width", "100%");
    $(".m-wordmark-container").css(
      "clip-path",
      "polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)"
    );
    $(".m-wordmark-container").css(
      "-webkit-clip-path",
      "polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)"
    );
    $(".m-wordmark-container").css("padding", "10px 0");
    $(".t-tagline").css("display", "none");
  };

  // Reset wordmark container to be a shape centered at top of page
  self.resetWordmarkContainer = function() {
    $(".m-wordmark-container").css("width", "250px");
    $(".m-wordmark-container").css(
      "clip-path",
      "polygon(0% 0%, 100% 0%, 97% 80%, 50% 100%, 3% 80%)"
    );
    $(".m-wordmark-container").css(
      "-webkit-clip-path",
      "polygon(0% 0%, 100% 0%, 97% 80%, 50% 100%, 3% 80%)"
    );
    $(".m-wordmark-container").css("padding", "10px 15px 20px");
    $(".t-tagline").css("display", "block");
  };

  self.goHome = function() {
    self.resetWordmarkContainer();
    self.closeViews();
    self.data.home.show(true);
    console.log("Go Home");
  };

  self.goAbout = function() {
    self.changeWordmarkContainer();
    self.closeViews();
    self.data.about.show(true);
    console.log("Go About");
  };

  self.goLocations = function() {
    self.changeWordmarkContainer();
    self.closeViews();
    self.data.locations.show(true);
    console.log("Go Locations");
  };

  self.goMenu = function() {
    self.changeWordmarkContainer();
    self.closeViews();
    self.data.menu.show(true);
    console.log("Go Menu");
  };

  self.openCloseMenu = function(data) {
    var element = data.categoryID;
    $("#" + element + " ul").toggleClass("is-collapsed");
    $("#" + element + " i").toggleClass("fa-caret-down fa-caret-up");
  };
}

var model = new AppViewModel();

ko.applyBindings(model);
