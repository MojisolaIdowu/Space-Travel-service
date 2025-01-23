//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})
router.post('/name-handler', function(req, res) {
  req.session.data['fullName'] = req.body.fullName;
  res.redirect('address-page');

});