
var $random = $("#random"),
    $youtubeAudio = $("#youtube-audio"),
    $youtubeAudioI = $("#youtube-audio i");

// randomly chose one of the 151 first gen pokemon
$(document).ready(function() {
  $random.click(function() {
    // always reset pokeball as image
    $random.attr("src", "https://res.cloudinary.com/beumsk/image/upload/v1506068916/pokeball.png").css("padding","0");
    
    // start animation
    $random.addClass("animated");
    setTimeout( function () {
      // replace image with one random pokemon after the animation (1s length)
      $random.attr('src', pokemons[Math.floor(Math.random() * pokemons.length)]);
      $random.removeClass("animated").css("padding", "10px");
      $random.fadeTo(0, 0.2).fadeTo(1000, 1);
    }, 1000);
  });
  
  // change youtube audio icon on play
  $youtubeAudio.on('click', function() {
    $youtubeAudioI.toggleClass('fa-volume-up fa-volume-off')
  });
});

// array with 151 pokemons
var pokemons = [
  'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png',
  'https://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png',
  'https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png',
  'https://cdn.bulbagarden.net/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png',
  'https://cdn.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png',
  'https://cdn.bulbagarden.net/upload/thumb/5/5d/010Caterpie.png/250px-010Caterpie.png',
  'https://cdn.bulbagarden.net/upload/thumb/c/cd/011Metapod.png/250px-011Metapod.png',
  'https://cdn.bulbagarden.net/upload/thumb/d/d1/012Butterfree.png/250px-012Butterfree.png',
  'https://cdn.bulbagarden.net/upload/thumb/d/df/013Weedle.png/250px-013Weedle.png',
  'https://cdn.bulbagarden.net/upload/thumb/f/f0/014Kakuna.png/250px-014Kakuna.png',
  'https://cdn.bulbagarden.net/upload/thumb/6/61/015Beedrill.png/250px-015Beedrill.png',
  'https://cdn.bulbagarden.net/upload/thumb/5/55/016Pidgey.png/250px-016Pidgey.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/7a/017Pidgeotto.png/250px-017Pidgeotto.png',
  'https://cdn.bulbagarden.net/upload/thumb/5/57/018Pidgeot.png/250px-018Pidgeot.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/46/019Rattata.png/250px-019Rattata.png',
  'https://cdn.bulbagarden.net/upload/thumb/f/f4/020Raticate.png/250px-020Raticate.png',
  'https://cdn.bulbagarden.net/upload/thumb/8/8b/021Spearow.png/250px-021Spearow.png',
  'https://cdn.bulbagarden.net/upload/thumb/a/a0/022Fearow.png/250px-022Fearow.png',
  'https://cdn.bulbagarden.net/upload/thumb/f/fa/023Ekans.png/250px-023Ekans.png',
  'https://cdn.bulbagarden.net/upload/thumb/c/cd/024Arbok.png/250px-024Arbok.png',
  'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png',
  'https://cdn.bulbagarden.net/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png',
  'https://cdn.bulbagarden.net/upload/thumb/9/9e/027Sandshrew.png/250px-027Sandshrew.png',
  'https://cdn.bulbagarden.net/upload/thumb/0/0b/028Sandslash.png/250px-028Sandslash.png',
  'https://cdn.bulbagarden.net/upload/thumb/8/81/029Nidoran.png/250px-029Nidoran.png',
  'https://cdn.bulbagarden.net/upload/thumb/c/cd/030Nidorina.png/250px-030Nidorina.png',
  'https://cdn.bulbagarden.net/upload/thumb/b/bf/031Nidoqueen.png/250px-031Nidoqueen.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/4a/032Nidoran.png/250px-032Nidoran.png',
  'https://cdn.bulbagarden.net/upload/thumb/9/9f/033Nidorino.png/250px-033Nidorino.png',
  'https://cdn.bulbagarden.net/upload/thumb/c/c6/034Nidoking.png/250px-034Nidoking.png',
  'https://cdn.bulbagarden.net/upload/thumb/f/f4/035Clefairy.png/250px-035Clefairy.png',
  'https://cdn.bulbagarden.net/upload/thumb/a/a9/036Clefable.png/250px-036Clefable.png',
  'https://cdn.bulbagarden.net/upload/thumb/6/60/037Vulpix.png/250px-037Vulpix.png',
  'https://cdn.bulbagarden.net/upload/thumb/0/05/038Ninetales.png/250px-038Ninetales.png',
  'https://cdn.bulbagarden.net/upload/thumb/3/3e/039Jigglypuff.png/250px-039Jigglypuff.png',
  'https://cdn.bulbagarden.net/upload/thumb/9/92/040Wigglytuff.png/250px-040Wigglytuff.png',
  'https://cdn.bulbagarden.net/upload/thumb/d/da/041Zubat.png/250px-041Zubat.png',
  'https://cdn.bulbagarden.net/upload/thumb/0/0c/042Golbat.png/250px-042Golbat.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/43/043Oddish.png/250px-043Oddish.png',
  'https://cdn.bulbagarden.net/upload/thumb/2/2a/044Gloom.png/250px-044Gloom.png',
  'https://cdn.bulbagarden.net/upload/thumb/6/6a/045Vileplume.png/250px-045Vileplume.png',
  'https://cdn.bulbagarden.net/upload/thumb/d/d4/046Paras.png/250px-046Paras.png',
  'https://cdn.bulbagarden.net/upload/thumb/8/80/047Parasect.png/250px-047Parasect.png',
  'https://cdn.bulbagarden.net/upload/thumb/a/ad/048Venonat.png/250px-048Venonat.png',
  'https://cdn.bulbagarden.net/upload/thumb/d/d3/049Venomoth.png/250px-049Venomoth.png',
  'https://cdn.bulbagarden.net/upload/thumb/3/31/050Diglett.png/250px-050Diglett.png',
  'https://cdn.bulbagarden.net/upload/thumb/e/e5/051Dugtrio.png/250px-051Dugtrio.png',
  'https://cdn.bulbagarden.net/upload/thumb/d/d6/052Meowth.png/250px-052Meowth.png',
  'https://cdn.bulbagarden.net/upload/thumb/1/13/053Persian.png/250px-053Persian.png',
  'https://cdn.bulbagarden.net/upload/thumb/5/53/054Psyduck.png/250px-054Psyduck.png',
  'https://cdn.bulbagarden.net/upload/thumb/f/fe/055Golduck.png/250px-055Golduck.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/41/056Mankey.png/250px-056Mankey.png',
  'https://cdn.bulbagarden.net/upload/thumb/9/9a/057Primeape.png/250px-057Primeape.png',
  'https://cdn.bulbagarden.net/upload/thumb/3/3d/058Growlithe.png/250px-058Growlithe.png',
  'https://cdn.bulbagarden.net/upload/thumb/b/b8/059Arcanine.png/250px-059Arcanine.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/49/060Poliwag.png/250px-060Poliwag.png',
  'https://cdn.bulbagarden.net/upload/thumb/a/a9/061Poliwhirl.png/250px-061Poliwhirl.png',
  'https://cdn.bulbagarden.net/upload/thumb/2/2d/062Poliwrath.png/250px-062Poliwrath.png',
  'https://cdn.bulbagarden.net/upload/thumb/6/62/063Abra.png/250px-063Abra.png',
  'https://cdn.bulbagarden.net/upload/thumb/9/97/064Kadabra.png/250px-064Kadabra.png',
  'https://cdn.bulbagarden.net/upload/thumb/c/cc/065Alakazam.png/250px-065Alakazam.png',
  'https://cdn.bulbagarden.net/upload/thumb/8/85/066Machop.png/250px-066Machop.png',
  'https://cdn.bulbagarden.net/upload/thumb/8/8e/067Machoke.png/250px-067Machoke.png',
  'https://cdn.bulbagarden.net/upload/thumb/8/8f/068Machamp.png/250px-068Machamp.png',
  'https://cdn.bulbagarden.net/upload/thumb/a/a2/069Bellsprout.png/250px-069Bellsprout.png',
  'https://cdn.bulbagarden.net/upload/thumb/9/9f/070Weepinbell.png/250px-070Weepinbell.png',
  'https://cdn.bulbagarden.net/upload/thumb/b/be/071Victreebel.png/250px-071Victreebel.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/4e/072Tentacool.png/250px-072Tentacool.png',
  'https://cdn.bulbagarden.net/upload/thumb/f/f6/073Tentacruel.png/250px-073Tentacruel.png',
  'https://cdn.bulbagarden.net/upload/thumb/9/98/074Geodude.png/250px-074Geodude.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/75/075Graveler.png/250px-075Graveler.png',
  'https://cdn.bulbagarden.net/upload/thumb/f/f2/076Golem.png/250px-076Golem.png',
  'https://cdn.bulbagarden.net/upload/thumb/3/3b/077Ponyta.png/250px-077Ponyta.png',
  'https://cdn.bulbagarden.net/upload/thumb/3/3f/078Rapidash.png/250px-078Rapidash.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/70/079Slowpoke.png/250px-079Slowpoke.png',
  'https://cdn.bulbagarden.net/upload/thumb/8/80/080Slowbro.png/250px-080Slowbro.png',
  'https://cdn.bulbagarden.net/upload/thumb/6/6c/081Magnemite.png/250px-081Magnemite.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/72/082Magneton.png/250px-082Magneton.png',
  'https://cdn.bulbagarden.net/upload/thumb/f/f8/083Farfetch\'d.png/250px-083Farfetch\'d.png',
  'https://cdn.bulbagarden.net/upload/thumb/5/54/084Doduo.png/250px-084Doduo.png',
  'https://cdn.bulbagarden.net/upload/thumb/9/93/085Dodrio.png/250px-085Dodrio.png',
  'https://cdn.bulbagarden.net/upload/thumb/1/1f/086Seel.png/250px-086Seel.png',
  'https://cdn.bulbagarden.net/upload/thumb/c/c7/087Dewgong.png/250px-087Dewgong.png',
  'https://cdn.bulbagarden.net/upload/thumb/a/a0/088Grimer.png/250px-088Grimer.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/7c/089Muk.png/250px-089Muk.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/40/090Shellder.png/250px-090Shellder.png',
  'https://cdn.bulbagarden.net/upload/thumb/1/1d/091Cloyster.png/250px-091Cloyster.png',
  'https://cdn.bulbagarden.net/upload/thumb/c/ca/092Gastly.png/250px-092Gastly.png',
  'https://cdn.bulbagarden.net/upload/thumb/6/62/093Haunter.png/250px-093Haunter.png',
  'https://cdn.bulbagarden.net/upload/thumb/c/c6/094Gengar.png/250px-094Gengar.png',
  'https://cdn.bulbagarden.net/upload/thumb/9/9a/095Onix.png/250px-095Onix.png',
  'https://cdn.bulbagarden.net/upload/thumb/3/3e/096Drowzee.png/250px-096Drowzee.png',
  'https://cdn.bulbagarden.net/upload/thumb/0/0a/097Hypno.png/250px-097Hypno.png',
  'https://cdn.bulbagarden.net/upload/thumb/a/a7/098Krabby.png/250px-098Krabby.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/71/099Kingler.png/250px-099Kingler.png',
  'https://cdn.bulbagarden.net/upload/thumb/d/da/100Voltorb.png/250px-100Voltorb.png',
  'https://cdn.bulbagarden.net/upload/thumb/8/84/101Electrode.png/250px-101Electrode.png',
  'https://cdn.bulbagarden.net/upload/thumb/a/af/102Exeggcute.png/250px-102Exeggcute.png',
  'https://cdn.bulbagarden.net/upload/thumb/2/24/103Exeggutor.png/250px-103Exeggutor.png',
  'https://cdn.bulbagarden.net/upload/thumb/2/2a/104Cubone.png/250px-104Cubone.png',
  'https://cdn.bulbagarden.net/upload/thumb/9/98/105Marowak.png/250px-105Marowak.png',
  'https://cdn.bulbagarden.net/upload/thumb/3/32/106Hitmonlee.png/250px-106Hitmonlee.png',
  'https://cdn.bulbagarden.net/upload/thumb/a/a3/107Hitmonchan.png/250px-107Hitmonchan.png',
  'https://cdn.bulbagarden.net/upload/thumb/0/00/108Lickitung.png/250px-108Lickitung.png',
  'https://cdn.bulbagarden.net/upload/thumb/1/17/109Koffing.png/250px-109Koffing.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/42/110Weezing.png/250px-110Weezing.png',
  'https://cdn.bulbagarden.net/upload/thumb/9/9b/111Rhyhorn.png/250px-111Rhyhorn.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/47/112Rhydon.png/250px-112Rhydon.png',
  'https://cdn.bulbagarden.net/upload/thumb/c/cd/113Chansey.png/250px-113Chansey.png',
  'https://cdn.bulbagarden.net/upload/thumb/3/3e/114Tangela.png/250px-114Tangela.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/4e/115Kangaskhan.png/250px-115Kangaskhan.png',
  'https://cdn.bulbagarden.net/upload/thumb/5/5a/116Horsea.png/250px-116Horsea.png',
  'https://cdn.bulbagarden.net/upload/thumb/2/26/117Seadra.png/250px-117Seadra.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/7b/118Goldeen.png/250px-118Goldeen.png',
  'https://cdn.bulbagarden.net/upload/thumb/6/6a/119Seaking.png/250px-119Seaking.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/4f/120Staryu.png/250px-120Staryu.png',
  'https://cdn.bulbagarden.net/upload/thumb/c/cd/121Starmie.png/250px-121Starmie.png',
  'https://cdn.bulbagarden.net/upload/thumb/e/ec/122Mr._Mime.png/250px-122Mr._Mime.png',
  'https://cdn.bulbagarden.net/upload/thumb/b/ba/123Scyther.png/250px-123Scyther.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/7c/124Jynx.png/250px-124Jynx.png',
  'https://cdn.bulbagarden.net/upload/thumb/d/de/125Electabuzz.png/250px-125Electabuzz.png',
  'https://cdn.bulbagarden.net/upload/thumb/8/8c/126Magmar.png/250px-126Magmar.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/71/127Pinsir.png/250px-127Pinsir.png',
  'https://cdn.bulbagarden.net/upload/thumb/b/b8/128Tauros.png/250px-128Tauros.png',
  'https://cdn.bulbagarden.net/upload/thumb/0/02/129Magikarp.png/250px-129Magikarp.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/41/130Gyarados.png/250px-130Gyarados.png',
  'https://cdn.bulbagarden.net/upload/thumb/a/ab/131Lapras.png/250px-131Lapras.png',
  'https://cdn.bulbagarden.net/upload/thumb/3/36/132Ditto.png/250px-132Ditto.png',
  'https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png',
  'https://cdn.bulbagarden.net/upload/thumb/f/fd/134Vaporeon.png/250px-134Vaporeon.png',
  'https://cdn.bulbagarden.net/upload/thumb/b/bb/135Jolteon.png/250px-135Jolteon.png',
  'https://cdn.bulbagarden.net/upload/thumb/d/dd/136Flareon.png/250px-136Flareon.png',
  'https://cdn.bulbagarden.net/upload/thumb/6/6b/137Porygon.png/250px-137Porygon.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/79/138Omanyte.png/250px-138Omanyte.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/43/139Omastar.png/250px-139Omastar.png',
  'https://cdn.bulbagarden.net/upload/thumb/f/f9/140Kabuto.png/250px-140Kabuto.png',
  'https://cdn.bulbagarden.net/upload/thumb/2/29/141Kabutops.png/250px-141Kabutops.png',
  'https://cdn.bulbagarden.net/upload/thumb/e/e8/142Aerodactyl.png/250px-142Aerodactyl.png',
  'https://cdn.bulbagarden.net/upload/thumb/f/fb/143Snorlax.png/250px-143Snorlax.png',
  'https://cdn.bulbagarden.net/upload/thumb/4/4e/144Articuno.png/250px-144Articuno.png',
  'https://cdn.bulbagarden.net/upload/thumb/e/e3/145Zapdos.png/250px-145Zapdos.png',
  'https://cdn.bulbagarden.net/upload/thumb/1/1b/146Moltres.png/250px-146Moltres.png',
  'https://cdn.bulbagarden.net/upload/thumb/c/cc/147Dratini.png/250px-147Dratini.png',
  'https://cdn.bulbagarden.net/upload/thumb/9/93/148Dragonair.png/250px-148Dragonair.png',
  'https://cdn.bulbagarden.net/upload/thumb/8/8b/149Dragonite.png/250px-149Dragonite.png',
  'https://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png',
  'https://cdn.bulbagarden.net/upload/thumb/b/b1/151Mew.png/250px-151Mew.png'
];