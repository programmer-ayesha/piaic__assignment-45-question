// showMagicians name
function showmagicians(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
 
  function make_Great(magicians: string[]): string[] {
    return magicians.map((magician) => `The Great ${magician}`);
  }
  
  // magician names
  const MagicianNames: string[] = ["Seraphina Mystique", "Eldritch Enchantus", "Zephyr Spellweaver", "Astral Illusionist  "];
  

  const greatmagicians = makeGreat(magicianNames);
  
  
  showMagicians(greatMagicians);