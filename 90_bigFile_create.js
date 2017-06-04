const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for(let i=0; i<= 1e6; i++) {
  file.write('Con el arte que te sobra, con la gente que quiere en el tiempo y la memoria manque pierda blanco y verde. Corazón que late fuerte, sentimiento que desborda, tradición que desde siempre es motivo de tu gloria. Ole, ole, ole ole, Betis olé. Ole, ole, ole, ole, Betis olé. Ole, ole, ole, Betis. Ole, ole, Betis. Ole, ole, ole, ole, Betis olé. Tu corazón ya tiene un siglo, siente el calor de la afición que está contigo. Ole, ole, ole ole, Betis olé. Ole, ole, ole, ole, Betis olé. Ole, ole, ole, Betis. Ole, ole, Betis. Ole, ole, ole, ole, Betis olé. Mucho más que un sentimiento, mucho más que una bandera, muchás que todo eso, más allá de la frontera, siempre habrá alguien que diga ¡Viva el Betis manque pierda! Y así sonarán los sones Al Final de la Palmera. Ole, ole, ole ole, Betis olé. Ole, ole, ole, ole, Betis olé. Ole, ole, ole, Betis. Ole, ole, Betis. Ole, ole, ole, ole, Betis olé. \n');
}

file.end();