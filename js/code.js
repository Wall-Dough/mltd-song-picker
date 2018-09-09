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
  this.romanized = "";
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
    return this.romanized;
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
                        .setRomanized("Brand New Theater!")
                        .setType(SongTypes.ALL)
                        .setCover("https://www.project-imas.com/w/images/0/00/Brand_New_Theater%21_Logo.png"));
  songs.push(new Song().setTitle("Thank You!")
                        .setRomanized("Thank You!")
                        .setType(SongTypes.ALL)
                        .setCover("https://www.project-imas.com/w/images/d/d0/Thank-You%21_Logo.png"));
  songs.push(new Song().setTitle("Welcome!!")
                        .setRomanized("Welcome!!")
                        .setType(SongTypes.ALL));
  songs.push(new Song().setTitle("UNION!!")
                        .setRomanized("UNION!!")
                        .setType(SongTypes.ALL));
  songs.push(new Song().setTitle("THE IDOLM@STER")
                        .setRomanized("THE IDOLM@STER")
                        .setType(SongTypes.ALL));
  songs.push(new Song().setTitle("&#x81ea;&#x5206;REST@RT")
                        .setRomanized("Jibun REST@RT")
                        .setType(SongTypes.ALL));
  songs.push(new Song().setTitle("READY!!")
                        .setRomanized("READY!!")
                        .setType(SongTypes.ALL));
  songs.push(new Song().setTitle("&#x5f85;&#x3061;&#x53d7;&#x3051;&#x30d7;&#x30ea;&#x30f3;&#x30b9;")
                        .setRomanized("Machiuke Prince")
                        .setType(SongTypes.ALL));
  songs.push(new Song().setTitle("ToP!!!!!!!!!!!!!")
                        .setRomanized("ToP!!!!!!!!!!!!!")
                        .setType(SongTypes.ALL));
  songs.push(new Song().setTitle("Blooming Star")
                        .setRomanized("Blooming Star")
                        .setType(SongTypes.ALL));
  songs.push(new Song().setTitle("Marionette&#x306f;&#x7720;&#x3089;&#x306a;&#x3044;")
                        .setRomanized("Marionette wa Nemuranai")
                        .setType(SongTypes.ANGEL));

  songs.push(new Song().setTitle("Good-Sleep, Baby&#x2661;")
                        .setRomanized("Good-Sleep, Baby&#x2661;")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("STANDING ALIVE")
                        .setRomanized("STANDING ALIVE")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("Angelic Parade&#x266a;")
                        .setRomanized("Angelic Parade&#x266a;")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("&#x30c9;&#x30ea;&#x30fc;&#x30e0;&#x30c8;&#x30e9;&#x30d9;&#x30e9;&#x30fc;")
                        .setRomanized("Dream Traveler")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("&#x8679;&#x8272;letters")
                        .setRomanized("Nijiiro letters")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("&#x661f;&#x5c51;&#x306e;&#x30b7;&#x30f3;&#x30d5;&#x30a9;&#x30cb;&#x30a2;")
                        .setRomanized("Hoshikuzu no Shinfonia")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("&#x82b1;&#x3056;&#x304b;&#x308a;Weekend&#x273f;")
                        .setRomanized("Hanazakari Weekend&#x273f;")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("&#x30b5;&#x30f3;&#x30ea;&#x30ba;&#x30e0;&#x30fb;&#x30aa;&#x30fc;&#x30b1;&#x30b9;&#x30c8;&#x30e9;&#x266a;")
                        .setRomanized("San Rizumu Ookesutora&#x266a;")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("&#x604b;&#x306e;Lesson&#x521d;&#x7d1a;&#x7de8;")
                        .setRomanized("Koi no Lesson Shokyuuhen")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("&#x30cf;&#x30df;&#x30f3;&#x30b0;&#x30d0;&#x30fc;&#x30c9;")
                        .setRomanized("Hamingubaado")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("&#x30c8;&#x30ad;&#x30e1;&#x30ad;&#x306e;&#x97f3;&#x7b26;&#x306b;&#x306a;&#x3063;&#x3066;")
                        .setRomanized("Tokimeki no Onpu ni Natte")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("Happy Darling")
                        .setRomanized("Happy Darling")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("dear...")
                        .setRomanized("dear...")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("&#x30cf;&#x30c3;&#x30d4;&#xff5e;&#x20;&#x30a8;&#x30d5;&#x30a7;&#x30af;&#x30c8;&#xff01;")
                        .setRomanized("Happi~ Efekuto!")
                        .setType(SongTypes.ANGEL));
  songs.push(new Song().setTitle("&#x60f3;&#x3044;&#x306f;Carnaval")
                        .setRomanized("Omoi wa Carnaval")
                        .setType(SongTypes.ANGEL));

  songs.push(new Song().setTitle("Blue Symphony")
                        .setRomanized("Blue Symphony")
                        .setType(SongTypes.FAIRY));
  songs.push(new Song().setTitle("Sentimental Venus")
                        .setRomanized("Sentimental Venus")
                        .setType(SongTypes.FAIRY));
  songs.push(new Song().setTitle("Shooting Stars")
                        .setRomanized("Shooting Stars")
                        .setType(SongTypes.FAIRY));
  songs.push(new Song().setTitle("FairyTale&#x3058;&#x3083;&#x3044;&#x3089;&#x308c;&#x306a;&#x3044;")
                        .setRomanized("FairyTale ja Irarenai")
                        .setType(SongTypes.FAIRY));
  songs.push(new Song().setTitle("&#x660f;&#x304d;&#x661f;&#x3001;&#x9060;&#x3044;&#x6708;")
                        .setRomanized("Kuraki Hoshi, Tooi Tsuki")
                        .setType(SongTypes.FAIRY));
  songs.push(new Song().setTitle("Melty Fantasia")
                        .setRomanized("Melty Fantasia")
                        .setType(SongTypes.FAIRY));
  songs.push(new Song().setTitle("Eternal Harmony")
                        .setRomanized("Eternal Harmony")
                        .setType(SongTypes.FAIRY));
  songs.push(new Song().setTitle("Precious Grain")
                        .setRomanized("Precious Grain")
                        .setType(SongTypes.FAIRY));
  songs.push(new Song().setTitle("&#x7460;&#x7483;&#x8272;&#x91d1;&#x9b5a;&#x3068;&#x82b1;&#x83d6;&#x84b2;")
                        .setRomanized("Ruriiro Kingyo to Hanashoubu")
                        .setType(SongTypes.FAIRY));
  songs.push(new Song().setTitle("IMPRESSION&#x2192;LOCOMOTION!")
                        .setRomanized("IMPRESSION&#x2192;LOCOMOTION!")
                        .setType(SongTypes.FAIRY));
  songs.push(new Song().setTitle("&#x30a2;&#x30d5;&#x30bf;&#x30fc;&#x30b9;&#x30af;&#x30fc;&#x30eb;&#x30d1;&#x30fc;&#x30ea;&#x30fc;&#x30bf;&#x30a4;&#x30e0;&#x20;")
                        .setRomanized("Afutaa Sukuuru Paarii Taimu")
                        .setType(SongTypes.FAIRY));
  songs.push(new Song().setTitle("&#x30e9;&#x30a4;&#x30a2;&#x30fc;&#x30fb;&#x30eb;&#x30fc;&#x30b8;&#x30e5;")
                        .setRomanized("Raiaa Ruuju")
                        .setType(SongTypes.FAIRY));
  songs.push(new Song().setTitle("&#x30e6;&#x30cb;&#x30be;&#x30f3;&#x2606;&#x30d3;&#x30fc;&#x30c8;")
                        .setRomanized("Yunizon&#x2606;Biito")
                        .setType(SongTypes.FAIRY));
  songs.push(new Song().setTitle("WHY?")
                        .setRomanized("WHY?")
                        .setType(SongTypes.FAIRY));

  songs.push(new Song().setTitle("&#x30b3;&#x30b3;&#x30ed;&#x304c;&#x304b;&#x3048;&#x308b;&#x5834;&#x6240;")
                        .setRomanized("Kokoro ga Kaeru Basho")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("Growing Storm!")
                        .setRomanized("Growing Storm!")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("Princess Be Ambitious!!")
                        .setRomanized("Princess Be Ambitious!!")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("HOME, SWEET FRIENDSHIP")
                        .setRomanized("HOME, SWEET FRIENDSHIP")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("&#x5408;&#x8a00;&#x8449;&#x306f;&#x30b9;&#x30bf;&#x30fc;&#x30c8;&#x30a2;&#x30c3;&#x30d7;&#xff01;")
                        .setRomanized("Aikotoba wa Sutaato Appu!")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("ZETTAI&#xd7;BREAK!! &#x30c8;&#x30a5;&#x30a4;&#x30f3;&#x30af;&#x30eb;&#x30ea;&#x30ba;&#x30e0;")
                        .setRomanized("ZETTAI×BREAK!! Tuinkuru Rizumu")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("&#x30b8;&#x30ec;&#x308b;&#x30cf;&#x30fc;&#x30c8;&#x306b;&#x706b;&#x3092;&#x3064;&#x3051;&#x3066;")
                        .setRomanized("Jireru Heart ni Hi o Tsukete")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("Birth of Color")
                        .setRomanized("Birth of Color")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("&#x54b2;&#x304f;&#x306f;&#x6d6e;&#x4e16;&#x306e;&#x541b;&#x82b1;&#x706b;")
                        .setRomanized("Saku wa Ukiyo no Kimi Hanabi")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("&#x30d3;&#x30c3;&#x30b0;&#x30d0;&#x30f3;&#x30ba;&#x30d0;&#x30ea;&#x30dc;&#x30fc;!!!!!")
                        .setRomanized("Biggu Banzu Bariboo!!!!!")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("&#x7d20;&#x6575;&#x306a;&#x30ad;&#x30bb;&#x30ad;")
                        .setRomanized("Suteki na Kiseki")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("&#x900f;&#x660e;&#x306a;&#x30d7;&#x30ed;&#x30ed;&#x30fc;&#x30b0;")
                        .setRomanized("Toumei na Puroroogu")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("&#x30b9;&#x30de;&#x30a4;&#x30eb;&#x3044;&#x3061;&#x3070;&#x3093;")
                        .setRomanized("Sumairu Ichiban")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("&#x30cf;&#x30c3;&#x30d4;&#x30fc;&#x2606;&#x30e9;&#x30c3;&#x30ad;&#x30fc;&#x2606;&#x30b8;&#x30a7;&#x30c3;&#x30c8;&#x30de;&#x30b7;&#x30fc;&#x30f3;")
                        .setRomanized("HAPPII&#x2606;RAKKII&#x2606;JETTOMASHIIN")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("&#x30aa;&#x30ea;&#x30b8;&#x30ca;&#x30eb;&#x58f0;&#x306b;&#x306a;&#x3063;&#x3066;")
                        .setRomanized("Orijinaru Goe ni Natte")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("&#x30b3;&#x30b3;&#x30ed;&#x2606;&#x30a8;&#x30af;&#x30b5;&#x30b5;&#x30a4;&#x30ba;")
                        .setRomanized("Kokoro&#x2606;Ekusasaizu")
                        .setType(SongTypes.PRINCESS));
  songs.push(new Song().setTitle("vivid color")
                        .setRomanized("vivid color")
                        .setType(SongTypes.PRINCESS));
  return songs;
}

var songs = buildSongList();

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

function pickSong() {
  filter.update();
  var filtered = applyFilter(songs, filter);
  var i = Math.floor(Math.random() * filtered.length);
  var song = filtered[i];
  document.getElementById("original-title").innerHTML = song.getTitle();
  document.getElementById("romanized-title").innerHTML = song.getRomanized();
  document.getElementById("type").innerHTML = song.getType();
  document.getElementById("song-art").src = song.getCover();
}

window.onload = function () {
  var resetButton = document.getElementById("reset-button");
  var pickButton = document.getElementById("pick-button");
  resetButton.onclick = function () {
    filter.reset();
  };
  pickButton.onclick = function () {
    pickSong();
  };
}
