var user = require('../user.js');

module.exports = {

    getName: function(req, res, next) {
        res.json({
            Name: user.name
        });

    },
    getLoc: function(req, res, next) {
        res.json({
            Location: user.location
        })

    },
    getOcc: function(req, res, next) {
        res.json({
            Occupation: user.occupations
        })

    },
    getRecentOcc: function(req, res, next) {
        var lastJob = user.occupations.slice(user.occupations.length - 1);
        res.json({
            lastJob
        })

    },
    getHobbies: function(req, res, next) {
        res.json({
            Hobbies: user.hobbies
        });

    },
    getHobbName: (req, res, next) => {
        var hobbyArr = user.hobbies.filter(value => {
            if (value.type === req.params.type) {
                return value;
            }
        })
        res.json(hobbyArr)

    },
    getFam: function(req, res, next) {
        res.json({
            Family: user.family
        })

    },
    getFamGen: (req, res, next) => {
        var famArr = user.family.filter(value => {
            if (value.gender === req.params.gender) {
                return value;
            }
        })
        res.json(famArr);
    },
    getRestaurants: function(req, res, next) {

        res.json({
            Restaurants: user.restaurants
        })
    },


  getRestName: function(req, res, next) {
      var restArr = user.restaurants.filter(function(value) {
          if (value.name === req.params.name) {
              return value;
          }
      })
      res.json(restArr);
  },
  getRating: (req, res, next) => {
    var restaurantsResponse = {
            "restaurants": user.restaurants
        }

        // var rating = req.query.rating || 1;
    //     var restaurantArr = user.restaurants.filter(function(value) {
    //         if (parseInt(value.rating) >= parseInt(req.query.rating)) {
    //             return value;
    //         }
    //     })
    // var restaurantsByRatingResponse = {
    //     "restaurants": restaurantArr
    // }
    res.send(restaurantsByRatingResponse);
    // var rating = user.restaurants.filter(value => {
    //
    // })
  }
}

// if(req.query.order === 'asc'){
//   res.json(user.occupations.sort())
// }
// }
