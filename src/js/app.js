// TODO: write your code here

function colorIndication(character) {
  if (character.health > 50) {
    return 'healthy';
  } if (character.health < 15) {
    return 'critical';
  }
  return 'wounded';
}

// function colorIndication(character) {
//   const { name, health } = character;

//   alert(name);

//   return (health > 50 && 'healthy') || (health <= 50 && health >= 15 && 'wounded') || 'critical';
// }

export default colorIndication;
