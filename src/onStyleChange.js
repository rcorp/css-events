function onStyleChange (element, cb){

  // Check if CSS `transition` has already been applied.
  if (element.style.transition != ""){
    // If so,


  }

  else {
    // Else just add a dummy `transition` of 0.00001s for all properties
    element.style.transition = 'all 0.000001s ease'

  }

  element.addEventListener('transitionend', function transitionEndHandler (e){
    cb(e.propertyName, window.getComputedStyle(element).getPropertyValue(e.propertyName))
  })


}
