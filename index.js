function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!'
  } else if (feet <= 1500) {
    return 'That will be twenty bucks.'
  } else if (feet >= 2500) {
    return 'No can do.'
  } else {
    return 'I will gladly take your thirty bucks.'
  }

}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.': 'No go.';
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}