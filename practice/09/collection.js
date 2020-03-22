const charChoises = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

for (let i = 0; i < charChoises.length ; i++) {
  for (let j = 0; j < charChoises.length ; j++) {
    document.write('<p>' + charChoises[i] + charChoises[j] + '</p>');
  }
}
