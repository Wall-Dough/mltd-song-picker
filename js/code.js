var SongTypes = {
  NONE: "NONE",
  ALL: "All",
  ANGEL: "Angel",
  FAIRY: "Fairy",
  PRINCESS: "Princess"
};

var PLACEHOLDER_IMG = "img/placeholder.png";

function Song() {
  this.title = "";
  this.romanized = null;
  this.translated = null;
  this.type = SongTypes.NONE;
  this.cover = null;

  this.setTitle = function (title) {
    this.title = title;
    return this;
  };

  this.getTitle = function () {
    return this.title;
  };

  this.setRomanized = function (romanized) {
    this.romanized = romanized;
    return this;
  };

  this.getRomanized = function () {
    if (this.romanized == null) {
      return this.getTitle();
    }
    return this.romanized;
  };

  this.setTranslated = function (translated) {
    this.translated = translated;
    return this;
  };

  this.getTranslated = function () {
    if (this.translated == null) {
      return this.getRomanized();
    }
    return this.translated;
  };

  this.setCover = function (cover) {
    this.cover = cover;
    return this;
  };

  this.getCover = function () {
    if (this.cover == null) {
      return PLACEHOLDER_IMG;
    }
    return this.cover;
  };

  this.setType = function (type) {
    this.type = type;
    return this;
  };

  this.getType = function (type) {
    return this.type;
  };

  this.matches = function (filter) {
    if (filter.shouldMatchType() && !filter.hasType(this.getType())) {
      return false;
    }
    return true;
  };
}

var filter = {
  types : [],
  shouldMatchType : function () {
    return this.types.length > 0;
  },
  reset : function () {
    document.getElementById("type-all").checked = false;
    document.getElementById("type-angel").checked = false;
    document.getElementById("type-fairy").checked = false;
    document.getElementById("type-princess").checked = false;
    this.types = [];
  },
  update : function () {
    this.types = [];
    if (document.getElementById("type-all").checked) {
      this.types.push(SongTypes.ALL);
    }
    if (document.getElementById("type-angel").checked) {
      this.types.push(SongTypes.ANGEL);
    }
    if (document.getElementById("type-fairy").checked) {
      this.types.push(SongTypes.FAIRY);
    }
    if (document.getElementById("type-princess").checked) {
      this.types.push(SongTypes.PRINCESS);
    }
  },
  getTypes : function () {
    return this.types;
  },
  hasType : function (type) {
    return this.types.includes(type);
  },
  hasFilters : function () {
    if (this.shouldMatchType()) {
      return true;
    }
    return false;
  },
};

function buildSongList() {
  var songs = [];
  songs.push(new Song().setTitle("Brand New Theater!")
                        .setType(SongTypes.ALL)
                        .setCover("https://www.project-imas.com/w/images/0/00/Brand_New_Theater%21_Logo.png"));
  songs.push(new Song().setTitle("Thank You!")
                        .setType(SongTypes.ALL)
                        .setCover("https://www.project-imas.com/w/images/d/d0/Thank-You%21_Logo.png"));
  songs.push(new Song().setTitle("Welcome!!")
                        .setType(SongTypes.ALL)
                        .setCover("https://www.project-imas.com/w/images/e/e5/Welcome_Logo.png"));
  songs.push(new Song().setTitle("UNION!!")
                        .setType(SongTypes.ALL)
                        .setCover("https://www.project-imas.com/w/images/7/7c/Jacket_union1.png"));
  songs.push(new Song().setTitle("THE IDOLM@STER")
                        .setType(SongTypes.ALL)
                        .setCover("https://www.project-imas.com/w/images/3/3f/TheIdolmastersong-logo.jpg"));
  songs.push(new Song().setTitle("&#x81ea;&#x5206;REST@RT")
                        .setRomanized("Jibun REST@RT")
                        .setTranslated("Myself REST@RT")
                        .setType(SongTypes.ALL)
                        .setCover("https://www.project-imas.com/w/images/9/9d/Jibun.jpg"));
  songs.push(new Song().setTitle("READY!!")
                        .setType(SongTypes.ALL)
                        .setCover("https://www.project-imas.com/w/images/1/10/READY%21%21.png"));
  songs.push(new Song().setTitle("&#x5f85;&#x3061;&#x53d7;&#x3051;&#x30d7;&#x30ea;&#x30f3;&#x30b9;")
                        .setRomanized("Machiuke Prince")
                        .setTranslated("Awaited Prince")
                        .setType(SongTypes.ALL)
                        .setCover("https://www.project-imas.com/w/images/8/83/MachiukePrince.jpg"));
  songs.push(new Song().setTitle("ToP!!!!!!!!!!!!!")
                        .setType(SongTypes.ALL)
                        .setCover("https://www.project-imas.com/w/images/7/75/ToP%21%21%21%21%21%21%21%21%21%21%21%21%21_Logo.png"));
  songs.push(new Song().setTitle("Blooming Star")
                        .setType(SongTypes.ALL)
                        .setCover("https://www.project-imas.com/w/images/2/26/Blooming_Star_Logo.png"));

  songs.push(new Song().setTitle("Marionette&#x306f;&#x7720;&#x3089;&#x306a;&#x3044;")
                        .setRomanized("Marionette wa Nemuranai")
                        .setTranslated("Marionette Never Sleeps")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/5/58/Marionette_wa_Nemuranai_Logo.png"));
  songs.push(new Song().setTitle("Good-Sleep, Baby&#x2661;")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/0/0d/Good-Sleep%2C_Baby_Logo.png"));
  songs.push(new Song().setTitle("STANDING ALIVE")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/6/64/STANDING_ALIVE_Logo.png"));
  songs.push(new Song().setTitle("Angelic Parade&#x266a;")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/0/04/Angelic_Parade%E2%99%AA_Logo.jpg"));
  songs.push(new Song().setTitle("&#x30c9;&#x30ea;&#x30fc;&#x30e0;&#x30c8;&#x30e9;&#x30d9;&#x30e9;&#x30fc;")
                        .setRomanized("Doriimu Toraberaa")
                        .setTranslated("Dream Traveler")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/d/d1/Dream_Traveler_Logo.png"));
  songs.push(new Song().setTitle("&#x8679;&#x8272;letters")
                        .setRomanized("Nijiiro letters")
                        .setTranslated("Rainbow-colored letters")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/f/f8/Nijiiro_letters_logo.png"));
  songs.push(new Song().setTitle("&#x661f;&#x5c51;&#x306e;&#x30b7;&#x30f3;&#x30d5;&#x30a9;&#x30cb;&#x30a2;")
                        .setRomanized("Hoshikuzu no Shinfonia")
                        .setTranslated("Stardust Symphonia")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/9/91/Hoshikuzu_no_Symphonia_Logo.png"));
  songs.push(new Song().setTitle("&#x82b1;&#x3056;&#x304b;&#x308a;Weekend&#x273f;")
                        .setRomanized("Hanazakari Weekend&#x273f;")
                        .setTranslated("Blooming Weekend&#x273f;")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/0/04/Jacket_hzwend.png"));
  songs.push(new Song().setTitle("&#x30b5;&#x30f3;&#x30ea;&#x30ba;&#x30e0;&#x30fb;&#x30aa;&#x30fc;&#x30b1;&#x30b9;&#x30c8;&#x30e9;&#x266a;")
                        .setRomanized("San Rizumu Ookesutora&#x266a;")
                        .setTranslated("Sun Rhythm Orchestra")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/8/8a/Sun_Rhythm_Orchestra_Logo.png"));
  songs.push(new Song().setTitle("&#x604b;&#x306e;Lesson&#x521d;&#x7d1a;&#x7de8;")
                        .setRomanized("Koi no Lesson Shokyuuhen")
                        .setTranslated("Love Lesson: Elementary Level Edition")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/9/95/Koi_no_Lesson_Shokyuuhen_Logo.jpg"));
  songs.push(new Song().setTitle("&#x30cf;&#x30df;&#x30f3;&#x30b0;&#x30d0;&#x30fc;&#x30c9;")
                        .setRomanized("Hamingubaado")
                        .setTranslated("Hummingbird")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/d/d1/Hummingbird_Logo.png"));
  songs.push(new Song().setTitle("&#x30c8;&#x30ad;&#x30e1;&#x30ad;&#x306e;&#x97f3;&#x7b26;&#x306b;&#x306a;&#x3063;&#x3066;")
                        .setRomanized("Tokimeki no Onpu ni Natte")
                        .setTranslated("Become the Notes of Excitement")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/7/7a/Tokimeki_no_Onpu_ni_Natte.png"));
  songs.push(new Song().setTitle("Happy Darling")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/d/df/Happy_Darling_Logo.png"));
  songs.push(new Song().setTitle("dear...")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/9/92/Dear_logo.png"));
  songs.push(new Song().setTitle("&#x30cf;&#x30c3;&#x30d4;&#xff5e;&#x20;&#x30a8;&#x30d5;&#x30a7;&#x30af;&#x30c8;&#xff01;")
                        .setRomanized("Happi~ Efekuto!")
                        .setRomanized("Happy~ Effect!")
                        .setType(SongTypes.ANGEL)
                        .setCover("https://www.project-imas.com/w/images/5/52/Jacket_hpyeft.png"));
  songs.push(new Song().setTitle("&#x60f3;&#x3044;&#x306f;Carnaval")
                        .setRomanized("Omoi wa Carnaval")
                        .setTranslated("Feelings Are a Carnaval")
                        .setType(SongTypes.ANGEL));

  songs.push(new Song().setTitle("Blue Symphony")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/d/d9/Blue_Symphony_Logo.png"));
  songs.push(new Song().setTitle("Sentimental Venus")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/0/06/Sentimental_Venus_Logo.png"));
  songs.push(new Song().setTitle("Shooting Stars")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/5/5c/Shooting_Stars_Logo.jpg"));
  songs.push(new Song().setTitle("FairyTale&#x3058;&#x3083;&#x3044;&#x3089;&#x308c;&#x306a;&#x3044;")
                        .setRomanized("FairyTale ja Irarenai")
                        .setTranslated("It Can't be a FairyTale")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/1/18/FairyTale_ja_Irarenai_Logo.jpg"));
  songs.push(new Song().setTitle("&#x660f;&#x304d;&#x661f;&#x3001;&#x9060;&#x3044;&#x6708;")
                        .setRomanized("Kuraki Hoshi, Tooi Tsuki")
                        .setTranslated("Gloomy Star, Distant Moon")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/6/6f/Kuraki_Hoshi%2C_Tooi_Tsuki_Logo.png"));
  songs.push(new Song().setTitle("Melty Fantasia")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/7/75/Jacket_meltyf.png"));
  songs.push(new Song().setTitle("Eternal Harmony")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/1/19/Jacket_ethamo.png"));
  songs.push(new Song().setTitle("Precious Grain")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/e/e3/Precious_Grain_Logo.jpg"));
  songs.push(new Song().setTitle("&#x7460;&#x7483;&#x8272;&#x91d1;&#x9b5a;&#x3068;&#x82b1;&#x83d6;&#x84b2;")
                        .setRomanized("Ruriiro Kingyo to Hanashoubu")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/0/01/Ruriiro_Kingyo_to_Hanashoubu_Logo.png"));
  songs.push(new Song().setTitle("IMPRESSION&#x2192;LOCOMOTION!")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/c/c2/IMPRESSION_LOCOMOTION%21_Logo.png"));
  songs.push(new Song().setTitle("&#x30a2;&#x30d5;&#x30bf;&#x30fc;&#x30b9;&#x30af;&#x30fc;&#x30eb;&#x30d1;&#x30fc;&#x30ea;&#x30fc;&#x30bf;&#x30a4;&#x30e0;&#x20;")
                        .setRomanized("Afutaa Sukuuru Paarii Taimu")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/3/3f/After_School_Party_Time_Logo.png"));
  songs.push(new Song().setTitle("&#x30e9;&#x30a4;&#x30a2;&#x30fc;&#x30fb;&#x30eb;&#x30fc;&#x30b8;&#x30e5;")
                        .setRomanized("Raiaa Ruuju")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/6/61/Liar_Rouge_Logo.png"));
  songs.push(new Song().setTitle("&#x30e6;&#x30cb;&#x30be;&#x30f3;&#x2606;&#x30d3;&#x30fc;&#x30c8;")
                        .setRomanized("Yunizon&#x2606;Biito")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/9/9e/Jacket_unisbt.png"));
  songs.push(new Song().setTitle("WHY?")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/7/71/Jacket_why000.png"));
  songs.push(new Song().setTitle("brave HARMONY")
                        .setType(SongTypes.FAIRY)
                        .setCover("https://www.project-imas.com/w/images/8/84/Jacket_braveh.png"));

  songs.push(new Song().setTitle("&#x30b3;&#x30b3;&#x30ed;&#x304c;&#x304b;&#x3048;&#x308b;&#x5834;&#x6240;")
                        .setRomanized("Kokoro ga Kaeru Basho")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/b/b1/Kokoro_ga_Kaeru_Basho_Logo.png"));
  songs.push(new Song().setTitle("Growing Storm!")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/f/fe/Growing_Storm%21_Logo.png"));
  songs.push(new Song().setTitle("Princess Be Ambitious!!")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/1/1a/Princess_Be_Ambitious%21%21_Logo.png"));
  songs.push(new Song().setTitle("HOME, SWEET FRIENDSHIP")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/c/c8/HOME%2C_SWEET_FRIENDSHIP_Logo.png"));
  songs.push(new Song().setTitle("&#x5408;&#x8a00;&#x8449;&#x306f;&#x30b9;&#x30bf;&#x30fc;&#x30c8;&#x30a2;&#x30c3;&#x30d7;&#xff01;")
                        .setRomanized("Aikotoba wa Sutaato Appu!")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/e/e0/Aikotoba_wa_Start_Up%21_Logo.png"));
  songs.push(new Song().setTitle("ZETTAI&#xd7;BREAK!! &#x30c8;&#x30a5;&#x30a4;&#x30f3;&#x30af;&#x30eb;&#x30ea;&#x30ba;&#x30e0;")
                        .setRomanized("ZETTAI×BREAK!! Tuinkuru Rizumu")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/9/9d/Jacket_zetbre.png"));
  songs.push(new Song().setTitle("&#x30b8;&#x30ec;&#x308b;&#x30cf;&#x30fc;&#x30c8;&#x306b;&#x706b;&#x3092;&#x3064;&#x3051;&#x3066;")
                        .setRomanized("Jireru Heart ni Hi o Tsukete")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/2/2e/Jacket_jireru.png"));
  songs.push(new Song().setTitle("Birth of Color")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/c/c6/Jacket_bcolor.png"));
  songs.push(new Song().setTitle("&#x54b2;&#x304f;&#x306f;&#x6d6e;&#x4e16;&#x306e;&#x541b;&#x82b1;&#x706b;")
                        .setRomanized("Saku wa Ukiyo no Kimi Hanabi")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/a/a0/Jacket_sakuha.png"));
  songs.push(new Song().setTitle("&#x30d3;&#x30c3;&#x30b0;&#x30d0;&#x30f3;&#x30ba;&#x30d0;&#x30ea;&#x30dc;&#x30fc;!!!!!")
                        .setRomanized("Biggu Banzu Bariboo!!!!!")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/4/4f/Jacket_Big_Bang%27s_Volleyball.png"));
  songs.push(new Song().setTitle("&#x7d20;&#x6575;&#x306a;&#x30ad;&#x30bb;&#x30ad;")
                        .setRomanized("Suteki na Kiseki")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/c/c8/Suteki_na_Kiseki_Logo.jpg"));
  songs.push(new Song().setTitle("&#x900f;&#x660e;&#x306a;&#x30d7;&#x30ed;&#x30ed;&#x30fc;&#x30b0;")
                        .setRomanized("Toumei na Puroroogu")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/c/c2/Toumei_na_Prologue_Logo.png"));
  songs.push(new Song().setTitle("&#x30b9;&#x30de;&#x30a4;&#x30eb;&#x3044;&#x3061;&#x3070;&#x3093;")
                        .setRomanized("Sumairu Ichiban")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/a/a9/Smile_Ichiban_Logo.png"));
  songs.push(new Song().setTitle("&#x30cf;&#x30c3;&#x30d4;&#x30fc;&#x2606;&#x30e9;&#x30c3;&#x30ad;&#x30fc;&#x2606;&#x30b8;&#x30a7;&#x30c3;&#x30c8;&#x30de;&#x30b7;&#x30fc;&#x30f3;")
                        .setRomanized("HAPPII&#x2606;RAKKII&#x2606;JETTOMASHIIN")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/2/27/Happy_Lucky_Jet_Machine_Logo.jpg"));
  songs.push(new Song().setTitle("&#x30aa;&#x30ea;&#x30b8;&#x30ca;&#x30eb;&#x58f0;&#x306b;&#x306a;&#x3063;&#x3066;")
                        .setRomanized("Orijinaru Goe ni Natte")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/1/1f/Original_Goe_ni_Natte_Logo.jpg"));
  songs.push(new Song().setTitle("&#x30b3;&#x30b3;&#x30ed;&#x2606;&#x30a8;&#x30af;&#x30b5;&#x30b5;&#x30a4;&#x30ba;")
                        .setRomanized("Kokoro&#x2606;Ekusasaizu")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/c/c1/Kokoro_Exercise_Logo.png"));
  songs.push(new Song().setTitle("vivid color")
                        .setType(SongTypes.PRINCESS)
                        .setCover("https://www.project-imas.com/w/images/3/30/Jacket_vvdclr.png"));
  return songs;
}

var songs = buildSongList();
var currentSong = null;

function applyFilter(songs, filter) {
  if (!filter.hasFilters()) {
    return songs;
  }
  var filtered = [];
  for (var i = 0; i < songs.length; i++) {
    var song = songs[i];
    if (song.matches(filter)) {
      filtered.push(song);
    }
  }
  return filtered;
}

function updateInterface() {
  if (currentSong == null) {
    return;
  }

  document.getElementById("type-in-title").innerHTML = currentSong.getType();
  document.getElementById("song-art").src = currentSong.getCover();

  var titleType = document.getElementById("title-type").value;
  var title = "";
  switch (titleType) {
    case "romanized":
      title = currentSong.getRomanized();
      break;
    case "translated":
      title = currentSong.getTranslated();
      break;
    default:
      title = currentSong.getTitle();
  }
  document.getElementById("title").innerHTML = title;
}

function pickSong() {
  filter.update();
  var filtered = applyFilter(songs, filter);
  var i = Math.floor(Math.random() * filtered.length);
  currentSong = filtered[i];
  updateInterface();
}

function getTimeInJapan() {
  var UTC_TO_JST = 14 * 60 * 60 * 1000;
  var now = new Date();
  now.setTime(now.getTime() + UTC_TO_JST);
  return now;
}

function getTypeOfDay() {
  var day = getTimeInJapan().getDay();
  switch (day) {
    case 0:
      return SongTypes.ALL;
    case 1:
    case 4:
      return SongTypes.PRINCESS;
    case 2:
    case 5:
      return SongTypes.FAIRY;
    case 3:
    case 6:
      return SongTypes.ANGEL;
  }
  return SongTypes.NONE;
}

window.onload = function () {
  document.getElementById("reset-button").onclick = function () {
    filter.reset();
  };
  document.getElementById("pick-button").onclick = function () {
    pickSong();
  };
  document.getElementById("type-of-day").innerHTML = "Today is a " + getTypeOfDay() + " day";
  document.getElementById("title-type").onchange = function () {
    updateInterface();
  };
}
