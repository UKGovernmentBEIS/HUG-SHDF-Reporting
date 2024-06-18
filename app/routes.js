//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// Run this code when a form is submitted to 'add-properties-method'
router.post('/add-properties-method', function (req, res) {

    // Make a variable
    var whichMethod = req.session.data['addProperties']
  
    // Check whether the variable matches a condition
    if (whichMethod == "individual"){
      // Send user to next page
      res.redirect('/hug/properties/new-individual-address')
    } else {
      // Send user to ineligible page
      res.redirect('/hug/properties/new-bulk')
    }
  
  })