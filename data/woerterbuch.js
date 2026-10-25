// Dialekt-Wörterbuch Mittelbaden – automatisch aus dialekt_woerterbuch_start_bereinigt.xlsx erzeugt
// Einträge: 1288
const WOERTERBUCH = [
  {
    "id": 1,
    "dialekt_text": "Aawu-eschd",
    "hochdeutsch": "nicht genug bekommen, ein Unersättliche-r"
  },
  {
    "id": 2,
    "dialekt_text": "ab'glabbere",
    "hochdeutsch": "von Ort zu Ort oder von Person zu Peron gehen"
  },
  {
    "id": 3,
    "dialekt_text": "ab'gmodld",
    "hochdeutsch": "zu eng anliegend gekleidet"
  },
  {
    "id": 4,
    "dialekt_text": "ab'lugse",
    "hochdeutsch": "etwas ergattern oder abnötigen"
  },
  {
    "id": 5,
    "dialekt_text": "ab'murgse",
    "hochdeutsch": "1. Motor abwürgen, 2. jemand töten"
  },
  {
    "id": 6,
    "dialekt_text": "ab'pfätze",
    "hochdeutsch": "abzwicken"
  },
  {
    "id": 7,
    "dialekt_text": "ab'raggere",
    "hochdeutsch": "abmühen"
  },
  {
    "id": 8,
    "dialekt_text": "abba",
    "hochdeutsch": "Achwas / ohne mich"
  },
  {
    "id": 9,
    "dialekt_text": "abdatsche",
    "hochdeutsch": "abschlagen beim Spiel"
  },
  {
    "id": 10,
    "dialekt_text": "abdriggle",
    "hochdeutsch": "abtrocknen „Wer driggelt mir's Gschirr ab?“"
  },
  {
    "id": 11,
    "dialekt_text": "abkonzle",
    "hochdeutsch": "zurechtweisen, kritisieren"
  },
  {
    "id": 12,
    "dialekt_text": "abgratze",
    "hochdeutsch": "1. sterben 2. ein Belag oder Schmutz abkratzen"
  },
  {
    "id": 13,
    "dialekt_text": "Aff",
    "hochdeutsch": "Rausch: „Der het hit in Aff im G'siicht.“"
  },
  {
    "id": 14,
    "dialekt_text": "Ahle",
    "hochdeutsch": "Liebkosung"
  },
  {
    "id": 15,
    "dialekt_text": "Alderle",
    "hochdeutsch": "Ausruf des Erstaunens, oder Drohung: „Alderle, bass mer bloß uff“"
  },
  {
    "id": 16,
    "dialekt_text": "als-emol",
    "hochdeutsch": "ab und zu einmal"
  },
  {
    "id": 17,
    "dialekt_text": "alsfort",
    "hochdeutsch": "immerfort"
  },
  {
    "id": 18,
    "dialekt_text": "alsgmach",
    "hochdeutsch": "allmählich"
  },
  {
    "id": 19,
    "dialekt_text": "altgebache",
    "hochdeutsch": "altes Brot oder altmodisch oder spießig"
  },
  {
    "id": 20,
    "dialekt_text": "Ärm, d'Ärm",
    "hochdeutsch": "Mehrzal von Arme"
  },
  {
    "id": 21,
    "dialekt_text": "Arschdritt",
    "hochdeutsch": "Tritt in den Hintern"
  },
  {
    "id": 22,
    "dialekt_text": "Äsch",
    "hochdeutsch": "Asche"
  },
  {
    "id": 23,
    "dialekt_text": "Awueschd",
    "hochdeutsch": "1. wildes Kind 2. ein Mensch, der schnell arbeitet"
  },
  {
    "id": 24,
    "dialekt_text": "ärjer, erjer",
    "hochdeutsch": "schlimmer"
  },
  {
    "id": 25,
    "dialekt_text": "baafießi",
    "hochdeutsch": "barfüßig"
  },
  {
    "id": 26,
    "dialekt_text": "Backsteikäs",
    "hochdeutsch": "Litnburger"
  },
  {
    "id": 27,
    "dialekt_text": "Backe",
    "hochdeutsch": "Wange"
  },
  {
    "id": 28,
    "dialekt_text": "badde",
    "hochdeutsch": "nütze, helfen"
  },
  {
    "id": 29,
    "dialekt_text": "bädde",
    "hochdeutsch": "beten"
  },
  {
    "id": 30,
    "dialekt_text": "baff",
    "hochdeutsch": "sprachlos"
  },
  {
    "id": 31,
    "dialekt_text": "bäffze",
    "hochdeutsch": "maulen, motzen"
  },
  {
    "id": 32,
    "dialekt_text": "Bagaasch",
    "hochdeutsch": "Schimpfwort, (so gewisse Leute) (fr.: bagage)"
  },
  {
    "id": 33,
    "dialekt_text": "Bagedell",
    "hochdeutsch": "Kleinigkeit (frz.: bagatelle)"
  },
  {
    "id": 34,
    "dialekt_text": "Bai-iz",
    "hochdeutsch": "anrüchige Kneipe, Spelunke"
  },
  {
    "id": 35,
    "dialekt_text": "baldohwere",
    "hochdeutsch": "Radau machen"
  },
  {
    "id": 36,
    "dialekt_text": "Balle",
    "hochdeutsch": "Ball oder Rausch"
  },
  {
    "id": 37,
    "dialekt_text": "balleschuckes",
    "hochdeutsch": "Ballspiel"
  },
  {
    "id": 38,
    "dialekt_text": "Bäredräck",
    "hochdeutsch": "Lakritze"
  },
  {
    "id": 39,
    "dialekt_text": "barsch",
    "hochdeutsch": "nicht gerade freundlich"
  },
  {
    "id": 40,
    "dialekt_text": "Bäschdler",
    "hochdeutsch": "Bastler"
  },
  {
    "id": 41,
    "dialekt_text": "Bässe",
    "hochdeutsch": "Besen"
  },
  {
    "id": 42,
    "dialekt_text": "Bässeschdiel",
    "hochdeutsch": "Besenstiel"
  },
  {
    "id": 43,
    "dialekt_text": "bätsche",
    "hochdeutsch": "aufs Wasser schlagen"
  },
  {
    "id": 44,
    "dialekt_text": "Batschhond",
    "hochdeutsch": "Kinderhand"
  },
  {
    "id": 45,
    "dialekt_text": "bätschnaß",
    "hochdeutsch": "sehr nass"
  },
  {
    "id": 46,
    "dialekt_text": "Batze",
    "hochdeutsch": "Klumpen"
  },
  {
    "id": 47,
    "dialekt_text": "Beck",
    "hochdeutsch": "Bäcker"
  },
  {
    "id": 48,
    "dialekt_text": "bedide",
    "hochdeutsch": "bedeuten"
  },
  {
    "id": 49,
    "dialekt_text": "bedure",
    "hochdeutsch": "bedauern"
  },
  {
    "id": 50,
    "dialekt_text": "biegle",
    "hochdeutsch": "bügeln"
  },
  {
    "id": 51,
    "dialekt_text": "Biegliise",
    "hochdeutsch": "Bügeleisen"
  },
  {
    "id": 52,
    "dialekt_text": "be-ige",
    "hochdeutsch": "Holz aufsetzen"
  },
  {
    "id": 53,
    "dialekt_text": "Be-ll mache",
    "hochdeutsch": "sich sputen, andere antreiben"
  },
  {
    "id": 54,
    "dialekt_text": "Bä-im, Baim",
    "hochdeutsch": "Bäume"
  },
  {
    "id": 55,
    "dialekt_text": "Bengl",
    "hochdeutsch": "Stecken, Stock oder ein Lausejunge"
  },
  {
    "id": 56,
    "dialekt_text": "Benglsupp",
    "hochdeutsch": "Schläge (wenn'd nit horchsch, bekommsch Benglsupp)"
  },
  {
    "id": 57,
    "dialekt_text": "Bettlad",
    "hochdeutsch": "Bettgestell"
  },
  {
    "id": 58,
    "dialekt_text": "Bettsaicher",
    "hochdeutsch": "Schimpfwort"
  },
  {
    "id": 59,
    "dialekt_text": "Bettzieche",
    "hochdeutsch": "Bettüberzug"
  },
  {
    "id": 60,
    "dialekt_text": "Bibbele",
    "hochdeutsch": "junge Hühner, Küken"
  },
  {
    "id": 61,
    "dialekt_text": "Bibbeleskäs",
    "hochdeutsch": "Rahmkäse, Quark"
  },
  {
    "id": 62,
    "dialekt_text": "biggl'härd",
    "hochdeutsch": "sehr hart"
  },
  {
    "id": 63,
    "dialekt_text": "bil-eje",
    "hochdeutsch": "biegen, Reben biegen (Bogen machen)"
  },
  {
    "id": 64,
    "dialekt_text": "Büh",
    "hochdeutsch": "Speicher"
  },
  {
    "id": 65,
    "dialekt_text": "Bipp",
    "hochdeutsch": "Schimpfwort für weibliche Person, die nicht viel kann"
  },
  {
    "id": 66,
    "dialekt_text": "bisse",
    "hochdeutsch": "beißen"
  },
  {
    "id": 67,
    "dialekt_text": "Bißzong",
    "hochdeutsch": "Beißzange, Kneifzange, keifendes ,veib"
  },
  {
    "id": 68,
    "dialekt_text": "Bitt",
    "hochdeutsch": "Bütte"
  },
  {
    "id": 69,
    "dialekt_text": "bläche",
    "hochdeutsch": "bezahlen blärre"
  },
  {
    "id": 70,
    "dialekt_text": "bläschdere",
    "hochdeutsch": "schnaufen,ächzen"
  },
  {
    "id": 71,
    "dialekt_text": "blii-eje",
    "hochdeutsch": "blühen"
  },
  {
    "id": 72,
    "dialekt_text": "Bliewes",
    "hochdeutsch": "kein Bleiben, eilig,: „Der het kei Bliewes“"
  },
  {
    "id": 73,
    "dialekt_text": "Blindholz",
    "hochdeutsch": "Rebholz, das gesteckt wird für eine Jungrebe"
  },
  {
    "id": 74,
    "dialekt_text": "Blindschlich",
    "hochdeutsch": "Blindschleiche"
  },
  {
    "id": 75,
    "dialekt_text": "Blooda, Bloodare",
    "hochdeutsch": "Blase, Bläschen"
  },
  {
    "id": 76,
    "dialekt_text": "Bloßarsch",
    "hochdeutsch": "vorwitzige Person, neugierig, (man sagt dieses wort und bleibt die Antwort schuldig) „Der Bloßarsch vun Kuppene (Kuppenhelm)t wenns reint geht er ins Druckene!"
  },
  {
    "id": 77,
    "dialekt_text": "blotze",
    "hochdeutsch": "fallen lassen"
  },
  {
    "id": 78,
    "dialekt_text": "blöü",
    "hochdeutsch": "blau"
  },
  {
    "id": 79,
    "dialekt_text": "Blöühu-eschde",
    "hochdeutsch": "Keuchhusten"
  },
  {
    "id": 80,
    "dialekt_text": "bludd",
    "hochdeutsch": "halbnackt, offenherzig angezogen oder"
  },
  {
    "id": 81,
    "dialekt_text": "Bodd",
    "hochdeutsch": "Dorfbüttel, Dorfbote, auch Briebote"
  },
  {
    "id": 82,
    "dialekt_text": "Bodschamber",
    "hochdeutsch": "Nachttopf (frz.: pot de chambre)"
  },
  {
    "id": 83,
    "dialekt_text": "Bogsgiichder",
    "hochdeutsch": "Angstzustände"
  },
  {
    "id": 84,
    "dialekt_text": "bohne",
    "hochdeutsch": "Schnee räumen"
  },
  {
    "id": 85,
    "dialekt_text": "bollere",
    "hochdeutsch": "poltern"
  },
  {
    "id": 86,
    "dialekt_text": "bomble",
    "hochdeutsch": "pendeln, schwingen: „Loss diene Fii-eß nit so bomble!“"
  },
  {
    "id": 87,
    "dialekt_text": "Bosse mache",
    "hochdeutsch": "Dummheiten machen"
  },
  {
    "id": 88,
    "dialekt_text": "Bräschde",
    "hochdeutsch": "Gebrechen"
  },
  {
    "id": 89,
    "dialekt_text": "Brätschl",
    "hochdeutsch": "Brezel"
  },
  {
    "id": 90,
    "dialekt_text": "Brätschle",
    "hochdeutsch": "Brezeln"
  },
  {
    "id": 91,
    "dialekt_text": "briichd",
    "hochdeutsch": "bräuchte"
  },
  {
    "id": 92,
    "dialekt_text": "Brii-e",
    "hochdeutsch": "Brühe"
  },
  {
    "id": 93,
    "dialekt_text": "Brosle",
    "hochdeutsch": "Brosamen"
  },
  {
    "id": 94,
    "dialekt_text": "bruche",
    "hochdeutsch": "gebrauchen können"
  },
  {
    "id": 95,
    "dialekt_text": "bruchsch",
    "hochdeutsch": "brauchst du"
  },
  {
    "id": 96,
    "dialekt_text": "brumme",
    "hochdeutsch": "Geräusch oder Haftstrafe"
  },
  {
    "id": 97,
    "dialekt_text": "Bruck",
    "hochdeutsch": "Brücke"
  },
  {
    "id": 98,
    "dialekt_text": "brunze",
    "hochdeutsch": "urinieren, wasser lassen"
  },
  {
    "id": 99,
    "dialekt_text": "Bschiß",
    "hochdeutsch": "Betrug"
  },
  {
    "id": 100,
    "dialekt_text": "bschisse",
    "hochdeutsch": "betrügen, mogeln"
  },
  {
    "id": 101,
    "dialekt_text": "Bubb",
    "hochdeutsch": "Puppe"
  },
  {
    "id": 102,
    "dialekt_text": "Buhneschääfe",
    "hochdeutsch": "Bohnenschote"
  },
  {
    "id": 103,
    "dialekt_text": "Bulldog",
    "hochdeutsch": "Traktor"
  },
  {
    "id": 104,
    "dialekt_text": "Bur",
    "hochdeutsch": "Bauer"
  },
  {
    "id": 105,
    "dialekt_text": "Burjmeischder",
    "hochdeutsch": "Bürgermeister"
  },
  {
    "id": 106,
    "dialekt_text": "buschber",
    "hochdeutsch": "aufgeweckt, ein aufgewecktes Kind, das neugierig und wissensdurstlg ist"
  },
  {
    "id": 107,
    "dialekt_text": "Bussier'schdengl",
    "hochdeutsch": "Jemand, der heftig und oft flirtet (frz.: poussiere)"
  },
  {
    "id": 108,
    "dialekt_text": "büssiere",
    "hochdeutsch": "flirten"
  },
  {
    "id": 109,
    "dialekt_text": "Butsch",
    "hochdeutsch": "dumpfer Schlag"
  },
  {
    "id": 110,
    "dialekt_text": "hutsche",
    "hochdeutsch": "schlagen"
  },
  {
    "id": 111,
    "dialekt_text": "d'Lit",
    "hochdeutsch": "die Leute"
  },
  {
    "id": 112,
    "dialekt_text": "d'Dir",
    "hochdeutsch": "die Türe"
  },
  {
    "id": 113,
    "dialekt_text": "d'Nämme",
    "hochdeutsch": "die Namen"
  },
  {
    "id": 114,
    "dialekt_text": "Auue",
    "hochdeutsch": "die Augen"
  },
  {
    "id": 115,
    "dialekt_text": "daachdle",
    "hochdeutsch": "schlagen"
  },
  {
    "id": 116,
    "dialekt_text": "Daag",
    "hochdeutsch": "guten Tag"
  },
  {
    "id": 117,
    "dialekt_text": "dabbe",
    "hochdeutsch": "etwas unvorsichtig gehen, „Bass uff, wu'd no dabb'sch!“"
  },
  {
    "id": 118,
    "dialekt_text": "dabbi",
    "hochdeutsch": "ungeschickt, dumm"
  },
  {
    "id": 119,
    "dialekt_text": "dachdle",
    "hochdeutsch": "schlagen, Ohrfeige geben"
  },
  {
    "id": 120,
    "dialekt_text": "Daddarich",
    "hochdeutsch": "Angst, vor Prüfungen"
  },
  {
    "id": 121,
    "dialekt_text": "Däschl",
    "hochdeutsch": "kleine Tasche"
  },
  {
    "id": 122,
    "dialekt_text": "dätsch",
    "hochdeutsch": "tätest du"
  },
  {
    "id": 123,
    "dialekt_text": "dätsch mer nitt mol",
    "hochdeutsch": "tätest du mir nicht mal. würdest du für mich ..."
  },
  {
    "id": 124,
    "dialekt_text": "datsche",
    "hochdeutsch": "etwas fest oder glatt schlagen oder: schwerer Gang, waten"
  },
  {
    "id": 125,
    "dialekt_text": "Datsche",
    "hochdeutsch": "Stockschlag auf die Handinnenseite (früher in der Schule üblich)"
  },
  {
    "id": 126,
    "dialekt_text": "Dätschkapp",
    "hochdeutsch": "Schiebermütze"
  },
  {
    "id": 127,
    "dialekt_text": "Deerle",
    "hochdeutsch": "Türchen"
  },
  {
    "id": 128,
    "dialekt_text": "Deifl",
    "hochdeutsch": "Teufel"
  },
  {
    "id": 129,
    "dialekt_text": "Dengelstock",
    "hochdeutsch": "Dangelstock Dengl'gschirr,"
  },
  {
    "id": 130,
    "dialekt_text": "Mähgeschirr",
    "hochdeutsch": "Kumpf, Wetzstein, Sense"
  },
  {
    "id": 131,
    "dialekt_text": "der Daa",
    "hochdeutsch": "der Tag"
  },
  {
    "id": 132,
    "dialekt_text": "derfe, derfsch",
    "hochdeutsch": "darf, du darfst"
  },
  {
    "id": 133,
    "dialekt_text": "Dergl",
    "hochdeutsch": "kleiner Kerl"
  },
  {
    "id": 134,
    "dialekt_text": "derzwische",
    "hochdeutsch": "dazwischen"
  },
  {
    "id": 135,
    "dialekt_text": "des un säll",
    "hochdeutsch": "dies und jenes"
  },
  {
    "id": 136,
    "dialekt_text": "desdrum",
    "hochdeutsch": "darum"
  },
  {
    "id": 137,
    "dialekt_text": "desletscht",
    "hochdeutsch": "neulich"
  },
  {
    "id": 138,
    "dialekt_text": "deswägge / dessdarwegge",
    "hochdeutsch": "deswegen"
  },
  {
    "id": 139,
    "dialekt_text": "dichsle",
    "hochdeutsch": "steuern, lenken"
  },
  {
    "id": 140,
    "dialekt_text": "Dickriieb",
    "hochdeutsch": "Runkelrübe"
  },
  {
    "id": 141,
    "dialekt_text": "die Gutsch",
    "hochdeutsch": "deuten, zeigen"
  },
  {
    "id": 142,
    "dialekt_text": "ding Sach",
    "hochdeutsch": "deine Sache"
  },
  {
    "id": 143,
    "dialekt_text": "Dinnpfiff",
    "hochdeutsch": "Durchfall"
  },
  {
    "id": 144,
    "dialekt_text": "dirmli",
    "hochdeutsch": "schwindlig, taumelig"
  },
  {
    "id": 145,
    "dialekt_text": "dischberlächd",
    "hochdeutsch": "Dämmerlicht, wenn es dunkel wird vom Abend zur Nacht"
  },
  {
    "id": 146,
    "dialekt_text": "dischgariere",
    "hochdeutsch": "plaudern, besprechen"
  },
  {
    "id": 147,
    "dialekt_text": "Dickschäddl",
    "hochdeutsch": "ein sturer Mensch"
  },
  {
    "id": 148,
    "dialekt_text": "Dissl",
    "hochdeutsch": "Deichsel"
  },
  {
    "id": 149,
    "dialekt_text": "diwwe",
    "hochdeutsch": "drüben"
  },
  {
    "id": 150,
    "dialekt_text": "do dro",
    "hochdeutsch": "daran"
  },
  {
    "id": 151,
    "dialekt_text": "doderfir",
    "hochdeutsch": "dafür"
  },
  {
    "id": 152,
    "dialekt_text": "doderzu",
    "hochdeutsch": "dazu"
  },
  {
    "id": 153,
    "dialekt_text": "Do'ris",
    "hochdeutsch": "Tannenreisig"
  },
  {
    "id": 154,
    "dialekt_text": "Donne",
    "hochdeutsch": "Tanne"
  },
  {
    "id": 155,
    "dialekt_text": "Donnenoodle",
    "hochdeutsch": "Tannennadeln"
  },
  {
    "id": 156,
    "dialekt_text": "deese",
    "hochdeutsch": "Halbschlaf, gedankenlos vor sich hinbrüten"
  },
  {
    "id": 157,
    "dialekt_text": "Dräckschbatz",
    "hochdeutsch": "Schimpfwort"
  },
  {
    "id": 158,
    "dialekt_text": "drädde",
    "hochdeutsch": "treten, gegen etwas treten Draguner, Dragoner ein Mensch, der andere antreibt"
  },
  {
    "id": 159,
    "dialekt_text": "Dratschwieb",
    "hochdeutsch": "Schwatzbase; Frau, die immer alles weiß und weitererzählt"
  },
  {
    "id": 160,
    "dialekt_text": "dratsche",
    "hochdeutsch": "über andere reden"
  },
  {
    "id": 161,
    "dialekt_text": "drebble",
    "hochdeutsch": "in die Pedale treten oder: ungeduldig auf der Stelle treten"
  },
  {
    "id": 162,
    "dialekt_text": "Driwweliere",
    "hochdeutsch": "Hektik machen"
  },
  {
    "id": 163,
    "dialekt_text": "driwwer-na",
    "hochdeutsch": "darüber, hinunter"
  },
  {
    "id": 164,
    "dialekt_text": "Drohd",
    "hochdeutsch": "Draht"
  },
  {
    "id": 165,
    "dialekt_text": "druggse",
    "hochdeutsch": "sich herumdrücken"
  },
  {
    "id": 166,
    "dialekt_text": "druff",
    "hochdeutsch": "darauf"
  },
  {
    "id": 167,
    "dialekt_text": "drugge",
    "hochdeutsch": "trocken"
  },
  {
    "id": 168,
    "dialekt_text": "drum",
    "hochdeutsch": "darum"
  },
  {
    "id": 169,
    "dialekt_text": "drunger",
    "hochdeutsch": "darunter"
  },
  {
    "id": 170,
    "dialekt_text": "drutze",
    "hochdeutsch": "trotzen"
  },
  {
    "id": 171,
    "dialekt_text": "Dibbl",
    "hochdeutsch": "Dummkopf, beschränkt"
  },
  {
    "id": 172,
    "dialekt_text": "Dummbabbler",
    "hochdeutsch": "männl. Person, die unbedacht redet"
  },
  {
    "id": 173,
    "dialekt_text": "Dumme",
    "hochdeutsch": "Daumen"
  },
  {
    "id": 174,
    "dialekt_text": "dunke",
    "hochdeutsch": "Brot in der Suppe tunken oder andere unter Wasser drücken"
  },
  {
    "id": 175,
    "dialekt_text": "dupfe",
    "hochdeutsch": "etwas abtupfen oder an etwas erinnern, was peinlich sein kann"
  },
  {
    "id": 176,
    "dialekt_text": "durchschlupfe",
    "hochdeutsch": "hindurchschlüpfen"
  },
  {
    "id": 177,
    "dialekt_text": "durkle",
    "hochdeutsch": "torkeln, schwanken"
  },
  {
    "id": 178,
    "dialekt_text": "Durn",
    "hochdeutsch": "Arrestzelle im Rathaus, Knast"
  },
  {
    "id": 179,
    "dialekt_text": "Durschdi",
    "hochdeutsch": "Donnerstag"
  },
  {
    "id": 180,
    "dialekt_text": "düssli",
    "hochdeutsch": "schwindlig"
  },
  {
    "id": 181,
    "dialekt_text": "düüdle",
    "hochdeutsch": "mehr schlecht als recht auf einem Blasinstrument spielen oder Alkohol trinken"
  },
  {
    "id": 182,
    "dialekt_text": "duure",
    "hochdeutsch": "bedauern"
  },
  {
    "id": 183,
    "dialekt_text": "Duwak",
    "hochdeutsch": "Tabak"
  },
  {
    "id": 184,
    "dialekt_text": "Düwe",
    "hochdeutsch": "Tauben"
  },
  {
    "id": 185,
    "dialekt_text": "e'bissl",
    "hochdeutsch": "ein bisschen"
  },
  {
    "id": 186,
    "dialekt_text": "e'Breggele",
    "hochdeutsch": "kleiner Brocken"
  },
  {
    "id": 187,
    "dialekt_text": "ebbes",
    "hochdeutsch": "etwas"
  },
  {
    "id": 188,
    "dialekt_text": "Emeis, Omeis",
    "hochdeutsch": "Ameise"
  },
  {
    "id": 189,
    "dialekt_text": "eewe",
    "hochdeutsch": "eben, plan"
  },
  {
    "id": 190,
    "dialekt_text": "eggle",
    "hochdeutsch": "ekeln"
  },
  {
    "id": 191,
    "dialekt_text": "ehnder",
    "hochdeutsch": "früher, eher"
  },
  {
    "id": 192,
    "dialekt_text": "Eichhernl",
    "hochdeutsch": "Eichhörnchen"
  },
  {
    "id": 193,
    "dialekt_text": "ellai",
    "hochdeutsch": "alleine"
  },
  {
    "id": 194,
    "dialekt_text": "emmol",
    "hochdeutsch": "einmal"
  },
  {
    "id": 195,
    "dialekt_text": "Epflbritsch",
    "hochdeutsch": "Apfelpritsche (Kellerdecke zum Lagern)"
  },
  {
    "id": 196,
    "dialekt_text": "Erjer",
    "hochdeutsch": "Frust"
  },
  {
    "id": 197,
    "dialekt_text": "erlickere",
    "hochdeutsch": "entdecken"
  },
  {
    "id": 198,
    "dialekt_text": "fääge",
    "hochdeutsch": "fegen"
  },
  {
    "id": 199,
    "dialekt_text": "fadegrad",
    "hochdeutsch": "schnurgerade oder. jemand, der seinen Prinzipien treu bleibt"
  },
  {
    "id": 200,
    "dialekt_text": "figgarich",
    "hochdeutsch": "ungeduldig, nervös"
  },
  {
    "id": 201,
    "dialekt_text": "fiichd",
    "hochdeutsch": "feucht"
  },
  {
    "id": 202,
    "dialekt_text": "Fiierle",
    "hochdeutsch": "Feuer"
  },
  {
    "id": 203,
    "dialekt_text": "Firz",
    "hochdeutsch": "dumme Sachen (mach kei Firz)"
  },
  {
    "id": 204,
    "dialekt_text": "Flätsch",
    "hochdeutsch": "Mund, Grimasse (zieh kei so e Flätsch)"
  },
  {
    "id": 205,
    "dialekt_text": "Flättwisch",
    "hochdeutsch": "etwas Heraushängendes („do hengt noch so in Flättwisch“)"
  },
  {
    "id": 206,
    "dialekt_text": "Fleischblume",
    "hochdeutsch": "Kuckucksnelke"
  },
  {
    "id": 207,
    "dialekt_text": "flottere",
    "hochdeutsch": "stürzen"
  },
  {
    "id": 208,
    "dialekt_text": "fobbe",
    "hochdeutsch": "hänseln, auf die Schippe nehmen"
  },
  {
    "id": 209,
    "dialekt_text": "Fonges",
    "hochdeutsch": "Fangspiel"
  },
  {
    "id": 210,
    "dialekt_text": "Fonni",
    "hochdeutsch": "Stefanie"
  },
  {
    "id": 211,
    "dialekt_text": "ferschle",
    "hochdeutsch": "ausfragen"
  },
  {
    "id": 212,
    "dialekt_text": "Fresse",
    "hochdeutsch": "grob für Mund"
  },
  {
    "id": 213,
    "dialekt_text": "Friddi",
    "hochdeutsch": "Freitag"
  },
  {
    "id": 214,
    "dialekt_text": "Frihjohr",
    "hochdeutsch": "Frühjahr"
  },
  {
    "id": 215,
    "dialekt_text": "freili, hajo",
    "hochdeutsch": "freilich"
  },
  {
    "id": 216,
    "dialekt_text": "freindli",
    "hochdeutsch": "freundlich"
  },
  {
    "id": 217,
    "dialekt_text": "fuchzeh",
    "hochdeutsch": "fünfzehn"
  },
  {
    "id": 218,
    "dialekt_text": "fuchzig",
    "hochdeutsch": "fünfzig"
  },
  {
    "id": 219,
    "dialekt_text": "Fuuder määge",
    "hochdeutsch": "Futter mähen"
  },
  {
    "id": 220,
    "dialekt_text": "fuggare",
    "hochdeutsch": "handeln, kaufen, feilschen oder immer rein und raus gehen („fugger nit immer hereno!“)"
  },
  {
    "id": 221,
    "dialekt_text": "fummle",
    "hochdeutsch": "putzen oder sexuell belästigen"
  },
  {
    "id": 222,
    "dialekt_text": "furt",
    "hochdeutsch": "fortgehen"
  },
  {
    "id": 223,
    "dialekt_text": "Furzdrugge",
    "hochdeutsch": "sehr trocken"
  },
  {
    "id": 224,
    "dialekt_text": "ge'phalde",
    "hochdeutsch": "behalten, ich habe es behalten"
  },
  {
    "id": 225,
    "dialekt_text": "g'falle",
    "hochdeutsch": "schön finden"
  },
  {
    "id": 226,
    "dialekt_text": "G'fehr",
    "hochdeutsch": "wildes Toben"
  },
  {
    "id": 227,
    "dialekt_text": "g'fitzt",
    "hochdeutsch": "besonders schlau"
  },
  {
    "id": 228,
    "dialekt_text": "G'fräs",
    "hochdeutsch": "Lumpenzeug,Plunder"
  },
  {
    "id": 229,
    "dialekt_text": "g'heerig",
    "hochdeutsch": "gehörig, „Do g'heert mol uff'grümt, aber, g'berig!“ oder kräftig"
  },
  {
    "id": 230,
    "dialekt_text": "g'iche",
    "hochdeutsch": "geeicht"
  },
  {
    "id": 231,
    "dialekt_text": "Göulopf",
    "hochdeutsch": "Gugelhupf"
  },
  {
    "id": 232,
    "dialekt_text": "g'schdeigt",
    "hochdeutsch": "ersteigert"
  },
  {
    "id": 233,
    "dialekt_text": "g'schirre",
    "hochdeutsch": "Pferd oder Kuh das Riemenzeug anlegen oder: wie man mit anderen zusammen arbeitet"
  },
  {
    "id": 234,
    "dialekt_text": "g'schliche",
    "hochdeutsch": "Du kommst mir gerade recht!"
  },
  {
    "id": 235,
    "dialekt_text": "G'schlorp",
    "hochdeutsch": "immer wieder irgendwo hingehen"
  },
  {
    "id": 236,
    "dialekt_text": "g'schpässig",
    "hochdeutsch": "seltsam lustig"
  },
  {
    "id": 237,
    "dialekt_text": "Gää",
    "hochdeutsch": "Blattwanze"
  },
  {
    "id": 238,
    "dialekt_text": "gäckle",
    "hochdeutsch": "spielen mit Kindern"
  },
  {
    "id": 239,
    "dialekt_text": "Gäder",
    "hochdeutsch": "zähe Fleischteile"
  },
  {
    "id": 240,
    "dialekt_text": "gaffe",
    "hochdeutsch": "dumm gucken, schauen"
  },
  {
    "id": 241,
    "dialekt_text": "Gäggele",
    "hochdeutsch": "kleines Ei"
  },
  {
    "id": 242,
    "dialekt_text": "gäggelig",
    "hochdeutsch": "körperlich langsam werden (alt)"
  },
  {
    "id": 243,
    "dialekt_text": "Gaarde",
    "hochdeutsch": "Garten"
  },
  {
    "id": 244,
    "dialekt_text": "Gaardehägl",
    "hochdeutsch": "Gartenzaun"
  },
  {
    "id": 245,
    "dialekt_text": "ge'palde",
    "hochdeutsch": "behalten: „Ich habs nott ge'palde“"
  },
  {
    "id": 246,
    "dialekt_text": "gebrii-eld",
    "hochdeutsch": "laut geschrien, gerufen"
  },
  {
    "id": 247,
    "dialekt_text": "geboosd",
    "hochdeutsch": "etwas angestellt"
  },
  {
    "id": 248,
    "dialekt_text": "Geddl",
    "hochdeutsch": "Patentante"
  },
  {
    "id": 249,
    "dialekt_text": "geesch?",
    "hochdeutsch": "gehst du? „wu geesch no?“"
  },
  {
    "id": 250,
    "dialekt_text": "Geis, Gais",
    "hochdeutsch": "Ziege"
  },
  {
    "id": 251,
    "dialekt_text": "geiße",
    "hochdeutsch": "herumklettern"
  },
  {
    "id": 252,
    "dialekt_text": "Geißel",
    "hochdeutsch": "Peitsche"
  },
  {
    "id": 253,
    "dialekt_text": "Geißeläck",
    "hochdeutsch": "Wildes Geißblatt"
  },
  {
    "id": 254,
    "dialekt_text": "geje, gegge",
    "hochdeutsch": "gegen"
  },
  {
    "id": 255,
    "dialekt_text": "geje di, gegge di",
    "hochdeutsch": "gegen dich"
  },
  {
    "id": 256,
    "dialekt_text": "Gemuddl",
    "hochdeutsch": "Durcheinander"
  },
  {
    "id": 257,
    "dialekt_text": "genn",
    "hochdeutsch": "geben"
  },
  {
    "id": 258,
    "dialekt_text": "geplogt",
    "hochdeutsch": "geplagt"
  },
  {
    "id": 259,
    "dialekt_text": "Gifthafe",
    "hochdeutsch": "zorniger, böser Mensch"
  },
  {
    "id": 260,
    "dialekt_text": "Gigg'l",
    "hochdeutsch": "kleine Tüte"
  },
  {
    "id": 261,
    "dialekt_text": "Gigl",
    "hochdeutsch": "Hochmut"
  },
  {
    "id": 262,
    "dialekt_text": "gigse",
    "hochdeutsch": "mit schlechtem Messer schneiden"
  },
  {
    "id": 263,
    "dialekt_text": "i muss gii",
    "hochdeutsch": "ich muss gehen, ich will gehen"
  },
  {
    "id": 264,
    "dialekt_text": "Giifl",
    "hochdeutsch": "Stecknadel"
  },
  {
    "id": 265,
    "dialekt_text": "Gischpl",
    "hochdeutsch": "zappeliger Mensch"
  },
  {
    "id": 266,
    "dialekt_text": "glade",
    "hochdeutsch": "geladen"
  },
  {
    "id": 267,
    "dialekt_text": "glimpfli",
    "hochdeutsch": "mit Glück"
  },
  {
    "id": 268,
    "dialekt_text": "glinze",
    "hochdeutsch": "schauen"
  },
  {
    "id": 269,
    "dialekt_text": "glittschi",
    "hochdeutsch": "glatt"
  },
  {
    "id": 270,
    "dialekt_text": "Gluck",
    "hochdeutsch": "brütendes Huhn oder Schimpfwort für eine Frau"
  },
  {
    "id": 271,
    "dialekt_text": "Gluggser",
    "hochdeutsch": "Schluckauf"
  },
  {
    "id": 272,
    "dialekt_text": "g'sääit",
    "hochdeutsch": "gesät"
  },
  {
    "id": 273,
    "dialekt_text": "Glump",
    "hochdeutsch": "Lumpenzeug"
  },
  {
    "id": 274,
    "dialekt_text": "Glure",
    "hochdeutsch": "Augen (mach keine so große Augen)"
  },
  {
    "id": 275,
    "dialekt_text": "gmächli",
    "hochdeutsch": "langsam"
  },
  {
    "id": 276,
    "dialekt_text": "gme-i",
    "hochdeutsch": "leutselig"
  },
  {
    "id": 277,
    "dialekt_text": "Gons",
    "hochdeutsch": "Gans"
  },
  {
    "id": 278,
    "dialekt_text": "Gosch",
    "hochdeutsch": "Mund"
  },
  {
    "id": 279,
    "dialekt_text": "Großgosch",
    "hochdeutsch": "Angeber"
  },
  {
    "id": 280,
    "dialekt_text": "Gottsacker",
    "hochdeutsch": "Friedhof"
  },
  {
    "id": 281,
    "dialekt_text": "Graddl",
    "hochdeutsch": "Stolz"
  },
  {
    "id": 282,
    "dialekt_text": "Gucller",
    "hochdeutsch": "Hahn"
  },
  {
    "id": 283,
    "dialekt_text": "Gudderle",
    "hochdeutsch": "große, bauchige Flasche mit Korbgeflecht"
  },
  {
    "id": 284,
    "dialekt_text": "Gutsl",
    "hochdeutsch": "Bonbon"
  },
  {
    "id": 285,
    "dialekt_text": "Gofe",
    "hochdeutsch": "Stecknadeln"
  },
  {
    "id": 286,
    "dialekt_text": "Gugg",
    "hochdeutsch": "Tüte"
  },
  {
    "id": 287,
    "dialekt_text": "gügge",
    "hochdeutsch": "schauen"
  },
  {
    "id": 288,
    "dialekt_text": "Gugglar",
    "hochdeutsch": "Hahn"
  },
  {
    "id": 289,
    "dialekt_text": "Gugummer",
    "hochdeutsch": "Gurke"
  },
  {
    "id": 290,
    "dialekt_text": "Gumpe",
    "hochdeutsch": "tiefe Stelle im Bach"
  },
  {
    "id": 291,
    "dialekt_text": "gunne",
    "hochdeutsch": "gönnen"
  },
  {
    "id": 292,
    "dialekt_text": "Gütsch",
    "hochdeutsch": "Hängeschaukel"
  },
  {
    "id": 293,
    "dialekt_text": "gütsche",
    "hochdeutsch": "schaukeln"
  },
  {
    "id": 294,
    "dialekt_text": "graudere",
    "hochdeutsch": "sich plagen mit der Arbeit"
  },
  {
    "id": 295,
    "dialekt_text": "Hau, s'Höuu oder Höii",
    "hochdeutsch": "Heu, dae Heu"
  },
  {
    "id": 296,
    "dialekt_text": "Höuu / Hau mache",
    "hochdeutsch": "Heu wenden"
  },
  {
    "id": 297,
    "dialekt_text": "Hauschdall",
    "hochdeutsch": "Heustall"
  },
  {
    "id": 298,
    "dialekt_text": "Höuuhüffe / Hauhuffe",
    "hochdeutsch": "Heuhaufen"
  },
  {
    "id": 299,
    "dialekt_text": "Hauptschdroß",
    "hochdeutsch": "Hauptstraße"
  },
  {
    "id": 300,
    "dialekt_text": "Höuuwauwwe",
    "hochdeutsch": "Heuwagen"
  },
  {
    "id": 301,
    "dialekt_text": "Haafe / Haffe",
    "hochdeutsch": "Topf"
  },
  {
    "id": 302,
    "dialekt_text": "Hääfele / Häffele",
    "hochdeutsch": "kleiner Topf"
  },
  {
    "id": 303,
    "dialekt_text": "Haag",
    "hochdeutsch": "Zaun"
  },
  {
    "id": 304,
    "dialekt_text": "hääli",
    "hochdeutsch": "heimlich"
  },
  {
    "id": 305,
    "dialekt_text": "habbich",
    "hochdeutsch": "schwierig, heikel"
  },
  {
    "id": 306,
    "dialekt_text": "häble",
    "hochdeutsch": "flink, rasch gehen"
  },
  {
    "id": 307,
    "dialekt_text": "häckle",
    "hochdeutsch": "mit einer kleinen Hacke fein durcharbei- ten („Ich mu-ess des mit dem Gardehe-ijele durchhäckle“)"
  },
  {
    "id": 308,
    "dialekt_text": "Häcksel",
    "hochdeutsch": "Kurzfutter (geschnittenes Heu)"
  },
  {
    "id": 309,
    "dialekt_text": "Hafekäs",
    "hochdeutsch": "Kleinigkeit"
  },
  {
    "id": 310,
    "dialekt_text": "Hawware",
    "hochdeutsch": "Hafer"
  },
  {
    "id": 311,
    "dialekt_text": "Hix",
    "hochdeutsch": "Schwips, leichter Rausch"
  },
  {
    "id": 312,
    "dialekt_text": "Heb-ise",
    "hochdeutsch": "Stemmeisen"
  },
  {
    "id": 313,
    "dialekt_text": "heewe",
    "hochdeutsch": "hochheben und halten oder: Einen trinken"
  },
  {
    "id": 314,
    "dialekt_text": "Ha-imet",
    "hochdeutsch": "Heimat"
  },
  {
    "id": 315,
    "dialekt_text": "hebt, s'hebt",
    "hochdeutsch": "das hält"
  },
  {
    "id": 316,
    "dialekt_text": "heiseri",
    "hochdeutsch": "heiser"
  },
  {
    "id": 317,
    "dialekt_text": "He-iware",
    "hochdeutsch": "Heidelbeeren"
  },
  {
    "id": 318,
    "dialekt_text": "hem'ma, hemmer",
    "hochdeutsch": "haben wir"
  },
  {
    "id": 319,
    "dialekt_text": "Hemm",
    "hochdeutsch": "Hemd"
  },
  {
    "id": 320,
    "dialekt_text": "Hendl / Hängl",
    "hochdeutsch": "Streit"
  },
  {
    "id": 321,
    "dialekt_text": "hendle / hängle",
    "hochdeutsch": "streiten"
  },
  {
    "id": 322,
    "dialekt_text": "Henn",
    "hochdeutsch": "Huhn"
  },
  {
    "id": 323,
    "dialekt_text": "Henschi",
    "hochdeutsch": "Handschuh"
  },
  {
    "id": 324,
    "dialekt_text": "Borbler",
    "hochdeutsch": "Tompinambur-Schnaps"
  },
  {
    "id": 325,
    "dialekt_text": "Hew'omm",
    "hochdeutsch": "Hebamme"
  },
  {
    "id": 326,
    "dialekt_text": "Hewwl",
    "hochdeutsch": "Hebel, oder ungehobelter Mensch"
  },
  {
    "id": 327,
    "dialekt_text": "Hiesl",
    "hochdeutsch": "kleines Haus"
  },
  {
    "id": 328,
    "dialekt_text": "hiffle",
    "hochdeutsch": "häufeln, z.B. Kartoffeln mit Erde anh\"aufeln"
  },
  {
    "id": 329,
    "dialekt_text": "hingenooch",
    "hochdeutsch": "hinterher, nachher"
  },
  {
    "id": 330,
    "dialekt_text": "hinge'rumm",
    "hochdeutsch": "um das Gebäude herum oder:"
  },
  {
    "id": 331,
    "dialekt_text": "hingerschi",
    "hochdeutsch": "zurück gehen"
  },
  {
    "id": 332,
    "dialekt_text": "hingervir",
    "hochdeutsch": "verwirrt"
  },
  {
    "id": 333,
    "dialekt_text": "hinne",
    "hochdeutsch": "drin im Haus, hier drinnen"
  },
  {
    "id": 334,
    "dialekt_text": "hitt",
    "hochdeutsch": "heute"
  },
  {
    "id": 335,
    "dialekt_text": "hobbari",
    "hochdeutsch": "uneben, die Straße ist holprig"
  },
  {
    "id": 336,
    "dialekt_text": "Hochzi",
    "hochdeutsch": "Hochzeit"
  },
  {
    "id": 337,
    "dialekt_text": "Hochzitter",
    "hochdeutsch": "Bräutigam"
  },
  {
    "id": 338,
    "dialekt_text": "hocke, hock di no",
    "hochdeutsch": "sitzen, setz dich hin"
  },
  {
    "id": 339,
    "dialekt_text": "hoddlätz",
    "hochdeutsch": "verkehrt"
  },
  {
    "id": 340,
    "dialekt_text": "hogge",
    "hochdeutsch": "sitzen"
  },
  {
    "id": 341,
    "dialekt_text": "Hondkarch",
    "hochdeutsch": "Handkarren"
  },
  {
    "id": 342,
    "dialekt_text": "Hondorgl",
    "hochdeutsch": "Akkordeon, Ziehharmonika"
  },
  {
    "id": 343,
    "dialekt_text": "Hooge",
    "hochdeutsch": "Haken"
  },
  {
    "id": 344,
    "dialekt_text": "Hoor",
    "hochdeutsch": "Haare"
  },
  {
    "id": 345,
    "dialekt_text": "hobbare",
    "hochdeutsch": "schütteln"
  },
  {
    "id": 346,
    "dialekt_text": "hobse",
    "hochdeutsch": "hüpfen"
  },
  {
    "id": 347,
    "dialekt_text": "hoschbli, haschbli",
    "hochdeutsch": "überhastet"
  },
  {
    "id": 348,
    "dialekt_text": "buddle",
    "hochdeutsch": "schnell arbeiten ohne Genauigkeit"
  },
  {
    "id": 349,
    "dialekt_text": "Huddler",
    "hochdeutsch": "ein Mensch, der nicht genau arbeitet"
  },
  {
    "id": 350,
    "dialekt_text": "Hu-etsimbl, Hudsimbl",
    "hochdeutsch": "Schimpfwort"
  },
  {
    "id": 351,
    "dialekt_text": "hunds'mü-ed",
    "hochdeutsch": "sehr müde"
  },
  {
    "id": 352,
    "dialekt_text": "Hundsbrunzer",
    "hochdeutsch": "Randstein, Schutzstein an Häuserecken"
  },
  {
    "id": 353,
    "dialekt_text": "Hunni",
    "hochdeutsch": "Honig"
  },
  {
    "id": 354,
    "dialekt_text": "hunze",
    "hochdeutsch": "schinde, schnell arbeiten oder: sch,ver arbeiten"
  },
  {
    "id": 355,
    "dialekt_text": "Hüs'erle",
    "hochdeutsch": "Hausgang, Hausflur"
  },
  {
    "id": 356,
    "dialekt_text": "hüss",
    "hochdeutsch": "hier draußen"
  },
  {
    "id": 357,
    "dialekt_text": "Hutzle",
    "hochdeutsch": "gedörrtes Obst"
  },
  {
    "id": 358,
    "dialekt_text": "Hüüs",
    "hochdeutsch": "Haus"
  },
  {
    "id": 359,
    "dialekt_text": "ich sodd",
    "hochdeutsch": "ich sollt"
  },
  {
    "id": 360,
    "dialekt_text": "Ihl",
    "hochdeutsch": "Eule"
  },
  {
    "id": 361,
    "dialekt_text": "ing'binge",
    "hochdeutsch": "einbinden"
  },
  {
    "id": 362,
    "dialekt_text": "ing'drichtere",
    "hochdeutsch": "ermahnen, belehren"
  },
  {
    "id": 363,
    "dialekt_text": "ing'grutzelt",
    "hochdeutsch": "eingeschnurrt"
  },
  {
    "id": 364,
    "dialekt_text": "ing'weiche",
    "hochdeutsch": "einweichen"
  },
  {
    "id": 365,
    "dialekt_text": "ingbrenne",
    "hochdeutsch": "einbrennen"
  },
  {
    "id": 366,
    "dialekt_text": "innerli",
    "hochdeutsch": "innen drin"
  },
  {
    "id": 367,
    "dialekt_text": "lse",
    "hochdeutsch": "Eisen"
  },
  {
    "id": 368,
    "dialekt_text": "Itzi",
    "hochdeutsch": "der Schlauberger"
  },
  {
    "id": 369,
    "dialekt_text": "Itter",
    "hochdeutsch": "Euter"
  },
  {
    "id": 370,
    "dialekt_text": "iwwar",
    "hochdeutsch": "über"
  },
  {
    "id": 371,
    "dialekt_text": "Iwwargongsmondl",
    "hochdeutsch": "Übergangsmantel (Kleidungsstück im Ftiihjahr oder Herbst)"
  },
  {
    "id": 372,
    "dialekt_text": "iwwari",
    "hochdeutsch": "übrig"
  },
  {
    "id": 373,
    "dialekt_text": "iwwarmäßi",
    "hochdeutsch": "übermäßig"
  },
  {
    "id": 374,
    "dialekt_text": "iwwarschiini",
    "hochdeutsch": "schattig, das Gelände liegt im Schatten"
  },
  {
    "id": 375,
    "dialekt_text": "iwwarschbonnt",
    "hochdeutsch": "überspannt"
  },
  {
    "id": 376,
    "dialekt_text": "iwwarziddi",
    "hochdeutsch": "überreif"
  },
  {
    "id": 377,
    "dialekt_text": "iwwarzwärch",
    "hochdeutsch": "überzwerch (schwierig)"
  },
  {
    "id": 378,
    "dialekt_text": "iwwel",
    "hochdeutsch": "übel, „Der nimmt mir's nit iwwel“, der trägt es nicht nach."
  },
  {
    "id": 379,
    "dialekt_text": "jabbse",
    "hochdeutsch": "schnappen"
  },
  {
    "id": 380,
    "dialekt_text": "jaunere, jöunere",
    "hochdeutsch": "jammern"
  },
  {
    "id": 381,
    "dialekt_text": "jemma-neii",
    "hochdeutsch": "(Ausruf des Erschreckens, ·wenn ein"
  },
  {
    "id": 382,
    "dialekt_text": "J'ommerlabbe",
    "hochdeutsch": "Jammerlappen"
  },
  {
    "id": 383,
    "dialekt_text": "juchze",
    "hochdeutsch": "jauchzen"
  },
  {
    "id": 384,
    "dialekt_text": "jugge",
    "hochdeutsch": "jucken"
  },
  {
    "id": 385,
    "dialekt_text": "Jungfer",
    "hochdeutsch": "unverheiratete Frau"
  },
  {
    "id": 386,
    "dialekt_text": "Jungsehbund",
    "hochdeutsch": "Bursche, Jüngling"
  },
  {
    "id": 387,
    "dialekt_text": "Kabbes",
    "hochdeutsch": "Weißkraut"
  },
  {
    "id": 388,
    "dialekt_text": "Kaff",
    "hochdeutsch": "abwertend für Dorf"
  },
  {
    "id": 389,
    "dialekt_text": "Kapp",
    "hochdeutsch": "Mütze"
  },
  {
    "id": 390,
    "dialekt_text": "Käpsele",
    "hochdeutsch": "Flaschenverschluss oder: gescheiter Mensch"
  },
  {
    "id": 391,
    "dialekt_text": "karonse",
    "hochdeutsch": "1. jemand antreiben 2. die l\\!Ieinung sagen"
  },
  {
    "id": 392,
    "dialekt_text": "Karschd",
    "hochdeutsch": "eine Hacke mit drei Zinken (Gartengerät)"
  },
  {
    "id": 393,
    "dialekt_text": "kauzig",
    "hochdeutsch": "ungesellig"
  },
  {
    "id": 394,
    "dialekt_text": "Kehrwisch",
    "hochdeutsch": "Handfeger"
  },
  {
    "id": 395,
    "dialekt_text": "kei, kai",
    "hochdeutsch": "kein (ich häb kei Zitt)"
  },
  {
    "id": 396,
    "dialekt_text": "Kaib",
    "hochdeutsch": "gemeiner Mensch"
  },
  {
    "id": 397,
    "dialekt_text": "Kendl",
    "hochdeutsch": "Dachrinne"
  },
  {
    "id": 398,
    "dialekt_text": "Kepfer",
    "hochdeutsch": "Kopfsprung ins Wasser"
  },
  {
    "id": 399,
    "dialekt_text": "Keschde",
    "hochdeutsch": "Kastanien"
  },
  {
    "id": 400,
    "dialekt_text": "kiddare",
    "hochdeutsch": "kichern, lachen Kiddl"
  },
  {
    "id": 401,
    "dialekt_text": "Ki-echle",
    "hochdeutsch": "Küchlein"
  },
  {
    "id": 402,
    "dialekt_text": "Kii-e",
    "hochdeutsch": "Kühe"
  },
  {
    "id": 403,
    "dialekt_text": "Kinderschuel",
    "hochdeutsch": "Kindergarten"
  },
  {
    "id": 404,
    "dialekt_text": "Kinds'daif",
    "hochdeutsch": "Kindstaufe"
  },
  {
    "id": 405,
    "dialekt_text": "kinne",
    "hochdeutsch": "können"
  },
  {
    "id": 406,
    "dialekt_text": "Kitzlbuhne",
    "hochdeutsch": "Graupel, leichter Hagel"
  },
  {
    "id": 407,
    "dialekt_text": "Kiwwl",
    "hochdeutsch": "Kübel"
  },
  {
    "id": 408,
    "dialekt_text": "Klamodde",
    "hochdeutsch": "Kleider, alte Kleider"
  },
  {
    "id": 409,
    "dialekt_text": "Klapp",
    "hochdeutsch": "Mund (halt diene Klapp)"
  },
  {
    "id": 410,
    "dialekt_text": "Klaue",
    "hochdeutsch": "große Hände"
  },
  {
    "id": 411,
    "dialekt_text": "Knepfler",
    "hochdeutsch": "Gehilfe des Nikolaus"
  },
  {
    "id": 412,
    "dialekt_text": "knitz",
    "hochdeutsch": "schlau, verschmitzt"
  },
  {
    "id": 413,
    "dialekt_text": "Knorre",
    "hochdeutsch": "verkrüppelter Ast Knoblauch"
  },
  {
    "id": 414,
    "dialekt_text": "Knupper",
    "hochdeutsch": "leichter Stoß"
  },
  {
    "id": 415,
    "dialekt_text": "Koched",
    "hochdeutsch": "l\\Iaßeinheit (gerade soviel, wie man Essen braucht)"
  },
  {
    "id": 416,
    "dialekt_text": "Kommod",
    "hochdeutsch": "kleiner Schrank mit Schublade"
  },
  {
    "id": 417,
    "dialekt_text": "knotsche",
    "hochdeutsch": "langsam gehen"
  },
  {
    "id": 418,
    "dialekt_text": "krottefalsrh",
    "hochdeutsch": "absolut falsch"
  },
  {
    "id": 419,
    "dialekt_text": "Kribbele",
    "hochdeutsch": "Weihnachtskrippe"
  },
  {
    "id": 420,
    "dialekt_text": "krutze-dirke",
    "hochdeutsch": "Fluchwort"
  },
  {
    "id": 421,
    "dialekt_text": "Kuddl'muddl",
    "hochdeutsch": "ineinander verheddelte Schnüre oder Bänder"
  },
  {
    "id": 422,
    "dialekt_text": "Kummet",
    "hochdeutsch": "Halsjoch der Zugtiere"
  },
  {
    "id": 423,
    "dialekt_text": "Kumpf",
    "hochdeutsch": "ein am Hosenbrund getragener Behälter für Wasser und Wetzstein zum Schärfen der Sense (vielfach ein Kuhhorn)"
  },
  {
    "id": 424,
    "dialekt_text": "kuraschiert",
    "hochdeutsch": "mutig (couragiert)"
  },
  {
    "id": 425,
    "dialekt_text": "Kuseng",
    "hochdeutsch": "Vetter, Cousin"
  },
  {
    "id": 426,
    "dialekt_text": "Kuttle",
    "hochdeutsch": "Eingeweide"
  },
  {
    "id": 427,
    "dialekt_text": "Laadsche",
    "hochdeutsch": "ausgetretene Schuhe"
  },
  {
    "id": 428,
    "dialekt_text": "Labb",
    "hochdeutsch": "ordinärer Ausdruck für Mund (halt mol diene Labb)"
  },
  {
    "id": 429,
    "dialekt_text": "läbbare",
    "hochdeutsch": "mit Wasser spielen"
  },
  {
    "id": 430,
    "dialekt_text": "labbarri",
    "hochdeutsch": "dünnflüssig, oder schlaff , welk"
  },
  {
    "id": 431,
    "dialekt_text": "läbbisch",
    "hochdeutsch": "albern"
  },
  {
    "id": 432,
    "dialekt_text": "Lach",
    "hochdeutsch": "Pfütze"
  },
  {
    "id": 433,
    "dialekt_text": "läche, verläche",
    "hochdeutsch": "schwellen, undicht werden"
  },
  {
    "id": 434,
    "dialekt_text": "Lafeed",
    "hochdeutsch": "Gesicht"
  },
  {
    "id": 435,
    "dialekt_text": "Laggl",
    "hochdeutsch": "Schimpfwort für: eingebildeter Mann"
  },
  {
    "id": 436,
    "dialekt_text": "Läitseil",
    "hochdeutsch": "Lenk- und Leitseil"
  },
  {
    "id": 437,
    "dialekt_text": "läse",
    "hochdeutsch": "lesen"
  },
  {
    "id": 438,
    "dialekt_text": "lätz",
    "hochdeutsch": "verkehrt"
  },
  {
    "id": 439,
    "dialekt_text": "Lätzhau, Lätzhöu",
    "hochdeutsch": "große Hacke, beidseitg nutzbar"
  },
  {
    "id": 440,
    "dialekt_text": "lätzrum",
    "hochdeutsch": "verkehrt herum"
  },
  {
    "id": 441,
    "dialekt_text": "löuufe",
    "hochdeutsch": "gehen"
  },
  {
    "id": 442,
    "dialekt_text": "löuwarm",
    "hochdeutsch": "lauwarm"
  },
  {
    "id": 443,
    "dialekt_text": "lidde",
    "hochdeutsch": "läuten"
  },
  {
    "id": 444,
    "dialekt_text": "liide",
    "hochdeutsch": "gut leiden, jemand gern haben"
  },
  {
    "id": 445,
    "dialekt_text": "lii-eche",
    "hochdeutsch": "Heu rausziehen mit einem spitzen Haken (Höuulii-echer)"
  },
  {
    "id": 446,
    "dialekt_text": "lii-ederli",
    "hochdeutsch": "liederlich, schlecht"
  },
  {
    "id": 447,
    "dialekt_text": "lii-ere",
    "hochdeutsch": "drehen, leiern oder: etwas umschlingen"
  },
  {
    "id": 448,
    "dialekt_text": "liin",
    "hochdeutsch": "lasst („liin des gi!“)"
  },
  {
    "id": 449,
    "dialekt_text": "Liine",
    "hochdeutsch": "Leinen"
  },
  {
    "id": 450,
    "dialekt_text": "linse",
    "hochdeutsch": "mit zusammengekniffenen Augen schauen"
  },
  {
    "id": 451,
    "dialekt_text": "lipfe",
    "hochdeutsch": "hochheben"
  },
  {
    "id": 452,
    "dialekt_text": "noddle",
    "hochdeutsch": "rütteln"
  },
  {
    "id": 453,
    "dialekt_text": "longe",
    "hochdeutsch": "zureichen (long ma mol des Glas)"
  },
  {
    "id": 454,
    "dialekt_text": "Lohmarsch",
    "hochdeutsch": "langsamer Mensch"
  },
  {
    "id": 455,
    "dialekt_text": "Loschii",
    "hochdeutsch": "Unterkunft (frz. logis)"
  },
  {
    "id": 456,
    "dialekt_text": "lorbare",
    "hochdeutsch": "bestrafen"
  },
  {
    "id": 457,
    "dialekt_text": "lüdder",
    "hochdeutsch": "lauter"
  },
  {
    "id": 458,
    "dialekt_text": "Lummele",
    "hochdeutsch": "Lende vom Schlachtvieh"
  },
  {
    "id": 459,
    "dialekt_text": "lüt, lutt",
    "hochdeutsch": "laut"
  },
  {
    "id": 460,
    "dialekt_text": "Lüüs",
    "hochdeutsch": "Laus"
  },
  {
    "id": 461,
    "dialekt_text": "Magge",
    "hochdeutsch": "Fehler („der het siine Magge“) oder Schaden"
  },
  {
    "id": 462,
    "dialekt_text": "mädd",
    "hochdeutsch": "fad"
  },
  {
    "id": 463,
    "dialekt_text": "Madde",
    "hochdeutsch": "Wiesen"
  },
  {
    "id": 464,
    "dialekt_text": "maloche",
    "hochdeutsch": "hart arbeiten"
  },
  {
    "id": 465,
    "dialekt_text": "Mäddle",
    "hochdeutsch": "kleine Wiesen"
  },
  {
    "id": 466,
    "dialekt_text": "Mähl",
    "hochdeutsch": "Mehl"
  },
  {
    "id": 467,
    "dialekt_text": "Mählbab",
    "hochdeutsch": "aus Mehl und Wasser hergestellter Kleister oder: verunglimpfend für eine pappige Speise"
  },
  {
    "id": 468,
    "dialekt_text": "Maidl",
    "hochdeutsch": "Mädchen"
  },
  {
    "id": 469,
    "dialekt_text": "maije",
    "hochdeutsch": "mähen"
  },
  {
    "id": 470,
    "dialekt_text": "mllde",
    "hochdeutsch": "tadeln"
  },
  {
    "id": 471,
    "dialekt_text": "malaad",
    "hochdeutsch": "krank"
  },
  {
    "id": 472,
    "dialekt_text": "Maläschde",
    "hochdeutsch": "leichte Krankheiten oder"
  },
  {
    "id": 473,
    "dialekt_text": "Maleer",
    "hochdeutsch": "Missgeschick (frz„ Malheur)"
  },
  {
    "id": 474,
    "dialekt_text": "Mänscher",
    "hochdeutsch": "abwertend für Mädchen"
  },
  {
    "id": 475,
    "dialekt_text": "ä suwers Mänsch",
    "hochdeutsch": "Anerkennung für hübsche Frau"
  },
  {
    "id": 476,
    "dialekt_text": "meecht",
    "hochdeutsch": "möchte"
  },
  {
    "id": 477,
    "dialekt_text": "Meesmer",
    "hochdeutsch": "Mesner, Kirchendiener"
  },
  {
    "id": 478,
    "dialekt_text": "meh-na",
    "hochdeutsch": "mefil noch"
  },
  {
    "id": 479,
    "dialekt_text": "mäije",
    "hochdeutsch": "mähen"
  },
  {
    "id": 480,
    "dialekt_text": "Mäisch",
    "hochdeutsch": "gequetschtes Obst für Brennerei"
  },
  {
    "id": 481,
    "dialekt_text": "Maischder",
    "hochdeutsch": "lvleister"
  },
  {
    "id": 482,
    "dialekt_text": "meschugge",
    "hochdeutsch": "verrückt (hehr. meschuga)"
  },
  {
    "id": 483,
    "dialekt_text": "metzle",
    "hochdeutsch": "schlachten"
  },
  {
    "id": 484,
    "dialekt_text": "Middele",
    "hochdeutsch": "Arznei, Medikamente"
  },
  {
    "id": 485,
    "dialekt_text": "mi-eße",
    "hochdeutsch": "müssen"
  },
  {
    "id": 486,
    "dialekt_text": "mi-eßt",
    "hochdeutsch": "müsste"
  },
  {
    "id": 487,
    "dialekt_text": "Migg",
    "hochdeutsch": "Bremse am Wagen"
  },
  {
    "id": 488,
    "dialekt_text": "migge",
    "hochdeutsch": "bremsen"
  },
  {
    "id": 489,
    "dialekt_text": "Miggedriller",
    "hochdeutsch": "Bremskurbel"
  },
  {
    "id": 490,
    "dialekt_text": "mii-ed",
    "hochdeutsch": "müde"
  },
  {
    "id": 491,
    "dialekt_text": "Millich",
    "hochdeutsch": "Milch"
  },
  {
    "id": 492,
    "dialekt_text": "Minz",
    "hochdeutsch": "Kleingeld"
  },
  {
    "id": 493,
    "dialekt_text": "mirb",
    "hochdeutsch": "mürbe"
  },
  {
    "id": 494,
    "dialekt_text": "Mischdhüffe",
    "hochdeutsch": "Misthaufen"
  },
  {
    "id": 495,
    "dialekt_text": "Moggele",
    "hochdeutsch": "dicker Mensch"
  },
  {
    "id": 496,
    "dialekt_text": "moggli",
    "hochdeutsch": "dicklich"
  },
  {
    "id": 497,
    "dialekt_text": "mampfe",
    "hochdeutsch": "kauen, mundvoll kauen"
  },
  {
    "id": 498,
    "dialekt_text": "mangle",
    "hochdeutsch": "fehlen, entbehren"
  },
  {
    "id": 499,
    "dialekt_text": "monnemorje",
    "hochdeutsch": "morgen früh"
  },
  {
    "id": 500,
    "dialekt_text": "Montur",
    "hochdeutsch": "der ganze Anzug"
  },
  {
    "id": 501,
    "dialekt_text": "moole",
    "hochdeutsch": "malen"
  },
  {
    "id": 502,
    "dialekt_text": "Mooler",
    "hochdeutsch": "Maler"
  },
  {
    "id": 503,
    "dialekt_text": "Moor",
    "hochdeutsch": "Mutterschwein"
  },
  {
    "id": 504,
    "dialekt_text": "morje",
    "hochdeutsch": "morgen"
  },
  {
    "id": 505,
    "dialekt_text": "Moschdkopf",
    "hochdeutsch": "Schimpfwort"
  },
  {
    "id": 506,
    "dialekt_text": "motze",
    "hochdeutsch": "kritisieren, schimpfen"
  },
  {
    "id": 507,
    "dialekt_text": "Mucks",
    "hochdeutsch": "geringer Laut"
  },
  {
    "id": 508,
    "dialekt_text": "Mü-eder",
    "hochdeutsch": "Mutter"
  },
  {
    "id": 509,
    "dialekt_text": "muffle",
    "hochdeutsch": "unangenehm riechen"
  },
  {
    "id": 510,
    "dialekt_text": "Mugg",
    "hochdeutsch": "Fliege"
  },
  {
    "id": 511,
    "dialekt_text": "Muggefug",
    "hochdeutsch": "Malzkaffee"
  },
  {
    "id": 512,
    "dialekt_text": "Muggeschiß",
    "hochdeutsch": "Mückenschiss oder. bildb Bezeichnung für eine Kleml"
  },
  {
    "id": 513,
    "dialekt_text": "Mumpfl",
    "hochdeutsch": "ein Bissen, was gerade in den Mundp"
  },
  {
    "id": 514,
    "dialekt_text": "Munges",
    "hochdeutsch": "ein Mensch, der den Gruß nicht erwld und kaum mit anderen spricht"
  },
  {
    "id": 515,
    "dialekt_text": "munkle",
    "hochdeutsch": "geheimnisvoll erzählen, Gerüchte verbreiten"
  },
  {
    "id": 516,
    "dialekt_text": "Mür",
    "hochdeutsch": "Mauer"
  },
  {
    "id": 517,
    "dialekt_text": "Mürer",
    "hochdeutsch": "Maurer"
  },
  {
    "id": 518,
    "dialekt_text": "murgse",
    "hochdeutsch": "schlechte Arbeit machen, fehlerhaft arbeiten"
  },
  {
    "id": 519,
    "dialekt_text": "Müs, Muus",
    "hochdeutsch": "Maus"
  },
  {
    "id": 520,
    "dialekt_text": "müsare",
    "hochdeutsch": "mausern"
  },
  {
    "id": 521,
    "dialekt_text": "Mutze",
    "hochdeutsch": "Kittel"
  },
  {
    "id": 522,
    "dialekt_text": "Muu",
    "hochdeutsch": "Mond"
  },
  {
    "id": 523,
    "dialekt_text": "müüdare",
    "hochdeutsch": "kränkeln"
  },
  {
    "id": 524,
    "dialekt_text": "Muul",
    "hochdeutsch": "Mund"
  },
  {
    "id": 525,
    "dialekt_text": "naa",
    "hochdeutsch": "hinab"
  },
  {
    "id": 526,
    "dialekt_text": "Nachtihl",
    "hochdeutsch": "Nachteule (nachts aktiv)"
  },
  {
    "id": 527,
    "dialekt_text": "Nachtkrabb",
    "hochdeutsch": "Kinderschreck"
  },
  {
    "id": 528,
    "dialekt_text": "nadiirli",
    "hochdeutsch": "natürlich"
  },
  {
    "id": 529,
    "dialekt_text": "Naggertschisser",
    "hochdeutsch": "nacktes Kind (humorvoll ausgedrückt)"
  },
  {
    "id": 530,
    "dialekt_text": "naggerzi",
    "hochdeutsch": "nackt"
  },
  {
    "id": 531,
    "dialekt_text": "Näi-fade",
    "hochdeutsch": "Nähfaden"
  },
  {
    "id": 532,
    "dialekt_text": "näije",
    "hochdeutsch": "nähen"
  },
  {
    "id": 533,
    "dialekt_text": "Nase,vasser",
    "hochdeutsch": "Geringfügigkeit"
  },
  {
    "id": 534,
    "dialekt_text": "natnve",
    "hochdeutsch": "neben Nebel"
  },
  {
    "id": 535,
    "dialekt_text": "uäwli",
    "hochdeutsch": "neblig"
  },
  {
    "id": 536,
    "dialekt_text": "Neegl",
    "hochdeutsch": "Nägel"
  },
  {
    "id": 537,
    "dialekt_text": "Nej-ichkäide",
    "hochdeutsch": "Neuigkeiten"
  },
  {
    "id": 538,
    "dialekt_text": "nemme",
    "hochdeutsch": "nehmen"
  },
  {
    "id": 539,
    "dialekt_text": "Niggerle",
    "hochdeutsch": "Schläfchen"
  },
  {
    "id": 540,
    "dialekt_text": "nidd",
    "hochdeutsch": "nicht"
  },
  {
    "id": 541,
    "dialekt_text": "nidde'mol",
    "hochdeutsch": "nicht einmal („nidde'mol donkschii hat er g'seit“)"
  },
  {
    "id": 542,
    "dialekt_text": "ni-e nix",
    "hochdeutsch": "nie etwas, nichts"
  },
  {
    "id": 543,
    "dialekt_text": "Nied",
    "hochdeutsch": "Neid"
  },
  {
    "id": 544,
    "dialekt_text": "niemes",
    "hochdeutsch": "niemand"
  },
  {
    "id": 545,
    "dialekt_text": "ningglärt",
    "hochdeutsch": "hineingeschüttet"
  },
  {
    "id": 546,
    "dialekt_text": "niin",
    "hochdeutsch": "neun"
  },
  {
    "id": 547,
    "dialekt_text": "niinzig",
    "hochdeutsch": "neunzig"
  },
  {
    "id": 548,
    "dialekt_text": "niine",
    "hochdeutsch": "neun Uhr"
  },
  {
    "id": 549,
    "dialekt_text": "nimm",
    "hochdeutsch": "nimmer, nicht mehr"
  },
  {
    "id": 550,
    "dialekt_text": "ning",
    "hochdeutsch": "hinein"
  },
  {
    "id": 551,
    "dialekt_text": "ning'le-je",
    "hochdeutsch": "liegen (ins Bett)"
  },
  {
    "id": 552,
    "dialekt_text": "Ding-lege",
    "hochdeutsch": "1. einmischen, 2. sich engagieren, 3. betrügen"
  },
  {
    "id": 553,
    "dialekt_text": "nit-darwerd",
    "hochdeutsch": "es lohnt sich nicht"
  },
  {
    "id": 554,
    "dialekt_text": "nix",
    "hochdeutsch": "nichts"
  },
  {
    "id": 555,
    "dialekt_text": "nimutz",
    "hochdeutsch": "unwert"
  },
  {
    "id": 556,
    "dialekt_text": "Noch'barre",
    "hochdeutsch": "Nachbarsfrau"
  },
  {
    "id": 557,
    "dialekt_text": "noddle",
    "hochdeutsch": "rütteln"
  },
  {
    "id": 558,
    "dialekt_text": "Noht",
    "hochdeutsch": "Naht"
  },
  {
    "id": 559,
    "dialekt_text": "nommedags",
    "hochdeutsch": "nachmittags"
  },
  {
    "id": 560,
    "dialekt_text": "nongse",
    "hochdeutsch": "weinerlich, quängelig reagieren"
  },
  {
    "id": 561,
    "dialekt_text": "Nongsgret",
    "hochdeutsch": "Heulsuse, Jammerlappen"
  },
  {
    "id": 562,
    "dialekt_text": "no-nitt",
    "hochdeutsch": "noch nicht"
  },
  {
    "id": 563,
    "dialekt_text": "nooch",
    "hochdeutsch": "nach"
  },
  {
    "id": 564,
    "dialekt_text": "noolonge",
    "hochdeutsch": "1. hinfassen. 2. höchst motiviert"
  },
  {
    "id": 565,
    "dialekt_text": "Noowe",
    "hochdeutsch": "guten Abend"
  },
  {
    "id": 566,
    "dialekt_text": "noowäsche",
    "hochdeutsch": "t.hinschlagen,verpriigeln. 2. hinschlagen im Sinne von stiinen"
  },
  {
    "id": 567,
    "dialekt_text": "nuff",
    "hochdeutsch": "hinauf"
  },
  {
    "id": 568,
    "dialekt_text": "numm",
    "hochdeutsch": "hinüber"
  },
  {
    "id": 569,
    "dialekt_text": "niwwer",
    "hochdeutsch": "hinüber"
  },
  {
    "id": 570,
    "dialekt_text": "O lätz",
    "hochdeutsch": "Ausruf der Erschreckens"
  },
  {
    "id": 571,
    "dialekt_text": "o'bäffze",
    "hochdeutsch": "anschreien"
  },
  {
    "id": 572,
    "dialekt_text": "o'binge",
    "hochdeutsch": "anbinden"
  },
  {
    "id": 573,
    "dialekt_text": "O'gsetzter",
    "hochdeutsch": "angesetzter Schnaps"
  },
  {
    "id": 574,
    "dialekt_text": "o'menno",
    "hochdeutsch": "bei leichter Verärgerung bei Kindern"
  },
  {
    "id": 575,
    "dialekt_text": "o'ronze",
    "hochdeutsch": "ansprechen"
  },
  {
    "id": 576,
    "dialekt_text": "o'schugge",
    "hochdeutsch": "anschieben"
  },
  {
    "id": 577,
    "dialekt_text": "Obarht",
    "hochdeutsch": "Achtung Spiegeleier, Ochsenauge halt (Befehl zum anhalten für Zugtiere)"
  },
  {
    "id": 578,
    "dialekt_text": "irnends",
    "hochdeutsch": "an irgendeinem Ort"
  },
  {
    "id": 579,
    "dialekt_text": "onenonder",
    "hochdeutsch": "aneinander"
  },
  {
    "id": 580,
    "dialekt_text": "Ongl",
    "hochdeutsch": "Angel"
  },
  {
    "id": 581,
    "dialekt_text": "ongle",
    "hochdeutsch": "angeln"
  },
  {
    "id": 582,
    "dialekt_text": "Öngschd",
    "hochdeutsch": "Angst"
  },
  {
    "id": 583,
    "dialekt_text": "Ongschdhas",
    "hochdeutsch": "Angsthase"
  },
  {
    "id": 584,
    "dialekt_text": "Oüwwedeggl",
    "hochdeutsch": "Augenlid"
  },
  {
    "id": 585,
    "dialekt_text": "öü",
    "hochdeutsch": "Auge"
  },
  {
    "id": 586,
    "dialekt_text": "Owe",
    "hochdeutsch": "Abend"
  },
  {
    "id": 587,
    "dialekt_text": "owend's",
    "hochdeutsch": "abends"
  },
  {
    "id": 588,
    "dialekt_text": "owwe",
    "hochdeutsch": "oben"
  },
  {
    "id": 589,
    "dialekt_text": "Owwerdorf",
    "hochdeutsch": "Oberdorf"
  },
  {
    "id": 590,
    "dialekt_text": "paffe",
    "hochdeutsch": "rauchen"
  },
  {
    "id": 591,
    "dialekt_text": "päb",
    "hochdeutsch": "nahe dran, eng an der Wand, knapp"
  },
  {
    "id": 592,
    "dialekt_text": "patzig",
    "hochdeutsch": "nicht gerade freundlich"
  },
  {
    "id": 593,
    "dialekt_text": "pfätze",
    "hochdeutsch": "zwicken, kneifen"
  },
  {
    "id": 594,
    "dialekt_text": "Pfennifuchser",
    "hochdeutsch": "geiziger Mensch"
  },
  {
    "id": 595,
    "dialekt_text": "Pfiffedeggl",
    "hochdeutsch": "Schlauberger"
  },
  {
    "id": 596,
    "dialekt_text": "Pfipfes",
    "hochdeutsch": "Halsweh, starke Erkältung"
  },
  {
    "id": 597,
    "dialekt_text": "Pfirschi",
    "hochdeutsch": "Pfirsich"
  },
  {
    "id": 598,
    "dialekt_text": "Pflatsch",
    "hochdeutsch": "Schimpfwort für schlampige Frau"
  },
  {
    "id": 599,
    "dialekt_text": "Pflegl",
    "hochdeutsch": "Dreschflegel"
  },
  {
    "id": 600,
    "dialekt_text": "Pflenzl",
    "hochdeutsch": "Pflanze, empfindlicher Charakter"
  },
  {
    "id": 601,
    "dialekt_text": "Pflitterli",
    "hochdeutsch": "der Jüngste, der Kleinste"
  },
  {
    "id": 602,
    "dialekt_text": "Pflueg",
    "hochdeutsch": "Pflug"
  },
  {
    "id": 603,
    "dialekt_text": "Pflumme",
    "hochdeutsch": "Pflaume"
  },
  {
    "id": 604,
    "dialekt_text": "Pfludd",
    "hochdeutsch": "dicke weibliche Person"
  },
  {
    "id": 605,
    "dialekt_text": "Pfludde",
    "hochdeutsch": "Grießknödel (Grießpflutte)"
  },
  {
    "id": 606,
    "dialekt_text": "Pfohl",
    "hochdeutsch": "Pfahl"
  },
  {
    "id": 607,
    "dialekt_text": "Pfrimme",
    "hochdeutsch": "Ginster"
  },
  {
    "id": 608,
    "dialekt_text": "päp",
    "hochdeutsch": "ganz dicht"
  },
  {
    "id": 609,
    "dialekt_text": "puldc",
    "hochdeutsch": "behalten"
  },
  {
    "id": 610,
    "dialekt_text": "pluschdere",
    "hochdeutsch": "schwer atmen"
  },
  {
    "id": 611,
    "dialekt_text": "Pläsier",
    "hochdeutsch": "Freude"
  },
  {
    "id": 612,
    "dialekt_text": "plotze",
    "hochdeutsch": "schwerfällig hinf'allen"
  },
  {
    "id": 613,
    "dialekt_text": "plumpe",
    "hochdeutsch": "Butter machen"
  },
  {
    "id": 614,
    "dialekt_text": "Plumpfaß",
    "hochdeutsch": "Butterfass"
  },
  {
    "id": 615,
    "dialekt_text": "quengli",
    "hochdeutsch": "unruhig, weinerlich"
  },
  {
    "id": 616,
    "dialekt_text": "Quengserli",
    "hochdeutsch": "kleines Kind"
  },
  {
    "id": 617,
    "dialekt_text": "racke",
    "hochdeutsch": "schinden, abmühen"
  },
  {
    "id": 618,
    "dialekt_text": "Raddegigl",
    "hochdeutsch": "schlechter Schnaps"
  },
  {
    "id": 619,
    "dialekt_text": "Raffel",
    "hochdeutsch": "Gerät zum Heidelbeeren sammeln"
  },
  {
    "id": 620,
    "dialekt_text": "Riwe",
    "hochdeutsch": "ne en,"
  },
  {
    "id": 621,
    "dialekt_text": "rawose",
    "hochdeutsch": "toben, herumtollen"
  },
  {
    "id": 622,
    "dialekt_text": "redur",
    "hochdeutsch": "zurück (retour)"
  },
  {
    "id": 623,
    "dialekt_text": "raille",
    "hochdeutsch": "ein Rad vor sich herrollen lassen oder: selbst schnell gehen, wenn man in Eile ist"
  },
  {
    "id": 624,
    "dialekt_text": "Raije",
    "hochdeutsch": "Regen"
  },
  {
    "id": 625,
    "dialekt_text": "Raijewädder",
    "hochdeutsch": "Regenwetter"
  },
  {
    "id": 626,
    "dialekt_text": "raine",
    "hochdeutsch": "regnen"
  },
  {
    "id": 627,
    "dialekt_text": "Raismateis, Rematiss",
    "hochdeutsch": "Rheumatismus"
  },
  {
    "id": 628,
    "dialekt_text": "retzle",
    "hochdeutsch": "nach der Weinlese die noch hängen-gebliebenen Trauben suchen"
  },
  {
    "id": 629,
    "dialekt_text": "Reviser",
    "hochdeutsch": "Revisor (Buchprüfer)"
  },
  {
    "id": 630,
    "dialekt_text": "Ring",
    "hochdeutsch": "Rhein, Ring"
  },
  {
    "id": 631,
    "dialekt_text": "Rhingschnog",
    "hochdeutsch": "Rheinschnake"
  },
  {
    "id": 632,
    "dialekt_text": "rämmli",
    "hochdeutsch": "Paarungsbereitschaft von Hasen (Häsin)"
  },
  {
    "id": 633,
    "dialekt_text": "ri-edere, rudere",
    "hochdeutsch": "lenken, steuern"
  },
  {
    "id": 634,
    "dialekt_text": "her-ri-eschdere",
    "hochdeutsch": "reparieren, ausbessern, zusammenflicken"
  },
  {
    "id": 635,
    "dialekt_text": "riewe",
    "hochdeutsch": "reiben"
  },
  {
    "id": 636,
    "dialekt_text": "Riffe",
    "hochdeutsch": "Raureif"
  },
  {
    "id": 637,
    "dialekt_text": "rii-ere",
    "hochdeutsch": "hacken"
  },
  {
    "id": 638,
    "dialekt_text": "Rombe",
    "hochdeutsch": "ein großes Stück"
  },
  {
    "id": 639,
    "dialekt_text": "Ronzer",
    "hochdeutsch": "Bauch"
  },
  {
    "id": 640,
    "dialekt_text": "Ronzeblitze",
    "hochdeutsch": "Bauchweh"
  },
  {
    "id": 641,
    "dialekt_text": "Rosskeschde",
    "hochdeutsch": "Rosskastanie"
  },
  {
    "id": 642,
    "dialekt_text": "rucke",
    "hochdeutsch": "rücken, beiseite rücken"
  },
  {
    "id": 643,
    "dialekt_text": "Rucke, Buckel",
    "hochdeutsch": "Rücken"
  },
  {
    "id": 644,
    "dialekt_text": "Ruckkorb",
    "hochdeutsch": "Tragekorb auf dem Rücken, Rückkorb"
  },
  {
    "id": 645,
    "dialekt_text": "rum",
    "hochdeutsch": "herum"
  },
  {
    "id": 646,
    "dialekt_text": "rumm-dreble",
    "hochdeutsch": "ungeduldig sein, nicht still stehen können"
  },
  {
    "id": 647,
    "dialekt_text": "rumm-grueschdle",
    "hochdeutsch": "arbeiten, suchen, ordnen"
  },
  {
    "id": 648,
    "dialekt_text": "rumm-schääse",
    "hochdeutsch": "viel unterwegs sein mit dem Fahrzeug"
  },
  {
    "id": 649,
    "dialekt_text": "Rumpfl",
    "hochdeutsch": "Falte"
  },
  {
    "id": 650,
    "dialekt_text": "rumpfle",
    "hochdeutsch": "zerknittern"
  },
  {
    "id": 651,
    "dialekt_text": "rumrii-ere",
    "hochdeutsch": "rültren mit dent Kochlöffel"
  },
  {
    "id": 652,
    "dialekt_text": "Ri-eb",
    "hochdeutsch": "Kopf, oder Rübe"
  },
  {
    "id": 653,
    "dialekt_text": "Rüsch",
    "hochdeutsch": "Rausch"
  },
  {
    "id": 654,
    "dialekt_text": "Rutznas",
    "hochdeutsch": "Nasenschleim"
  },
  {
    "id": 655,
    "dialekt_text": "s'Fir",
    "hochdeutsch": "das Feuer („ich mach's Fir“)"
  },
  {
    "id": 656,
    "dialekt_text": "S'iwwl",
    "hochdeutsch": "das Übel"
  },
  {
    "id": 657,
    "dialekt_text": "S'Grimme",
    "hochdeutsch": "Bauchschmerz"
  },
  {
    "id": 658,
    "dialekt_text": "s'longt nid",
    "hochdeutsch": "es ist nicht genug („s'longt hinge un vorne nid!“)"
  },
  {
    "id": 659,
    "dialekt_text": "s'pressiert",
    "hochdeutsch": "ich bin eilig"
  },
  {
    "id": 660,
    "dialekt_text": "sa, g'säit",
    "hochdeutsch": "sagen, gesagt"
  },
  {
    "id": 661,
    "dialekt_text": "sääije",
    "hochdeutsch": "sägen"
  },
  {
    "id": 662,
    "dialekt_text": "Sackdüech",
    "hochdeutsch": "Taschentuch"
  },
  {
    "id": 663,
    "dialekt_text": "Säich",
    "hochdeutsch": "Gülle"
  },
  {
    "id": 664,
    "dialekt_text": "Säichbrie",
    "hochdeutsch": "schlecht schmeckendes Getränk"
  },
  {
    "id": 665,
    "dialekt_text": "säiche",
    "hochdeutsch": "stark regnen oder: Wasser lassen (urinieren)"
  },
  {
    "id": 666,
    "dialekt_text": "sakramoschd",
    "hochdeutsch": "Fluch"
  },
  {
    "id": 667,
    "dialekt_text": "säll",
    "hochdeutsch": "jenes"
  },
  {
    "id": 668,
    "dialekt_text": "Sawackl",
    "hochdeutsch": "Rausch"
  },
  {
    "id": 669,
    "dialekt_text": "schäbs",
    "hochdeutsch": "krumm"
  },
  {
    "id": 670,
    "dialekt_text": "Schädde",
    "hochdeutsch": "Schatten"
  },
  {
    "id": 671,
    "dialekt_text": "schalde",
    "hochdeutsch": "schieben"
  },
  {
    "id": 672,
    "dialekt_text": "schasse",
    "hochdeutsch": "fortjagen"
  },
  {
    "id": 673,
    "dialekt_text": "Schbicher",
    "hochdeutsch": "Speicher"
  },
  {
    "id": 674,
    "dialekt_text": "Schbinatwachtel",
    "hochdeutsch": "Schimpfwort für dummes Weib"
  },
  {
    "id": 675,
    "dialekt_text": "Schbonnbengl",
    "hochdeutsch": "ein starker Stab oder Stecken zum Anziehen einer Kette oder eines Seils"
  },
  {
    "id": 676,
    "dialekt_text": "schbood",
    "hochdeutsch": "spät"
  },
  {
    "id": 677,
    "dialekt_text": "Schärwe",
    "hochdeutsch": "Fasnachtsküchle (in Butter oder Schmalz gebratene Hefeteigstücke)"
  },
  {
    "id": 678,
    "dialekt_text": "Schbrissl",
    "hochdeutsch": "kleiner Holzsplitter in der Haut"
  },
  {
    "id": 679,
    "dialekt_text": "Schdäät",
    "hochdeutsch": "Holztreppe"
  },
  {
    "id": 680,
    "dialekt_text": "Schniitzer",
    "hochdeutsch": "Oberlippenbart"
  },
  {
    "id": 681,
    "dialekt_text": "schnarmüle",
    "hochdeutsch": "extrem sparen („Wenn man sich nur das Nötigste leisten kannn)"
  },
  {
    "id": 682,
    "dialekt_text": "schnipfle",
    "hochdeutsch": "mit Schere oder Messer kleine Stücke schneiden"
  },
  {
    "id": 683,
    "dialekt_text": "Schnoog",
    "hochdeutsch": "Schnake, Stechmücke"
  },
  {
    "id": 684,
    "dialekt_text": "schnuddle",
    "hochdeutsch": "schnell und undeutlich sprechen"
  },
  {
    "id": 685,
    "dialekt_text": "Schnuffl",
    "hochdeutsch": "abwertend für Mund"
  },
  {
    "id": 686,
    "dialekt_text": "schlurfe",
    "hochdeutsch": "beim Gehen die Füße am Boden entlang ziehen"
  },
  {
    "id": 687,
    "dialekt_text": "Schnützer",
    "hochdeutsch": "Oberlippenbart"
  },
  {
    "id": 688,
    "dialekt_text": "schoddle",
    "hochdeutsch": "schütteln, schaukeln"
  },
  {
    "id": 689,
    "dialekt_text": "schoofl",
    "hochdeutsch": "gemein, fies"
  },
  {
    "id": 690,
    "dialekt_text": "Seng-gl",
    "hochdeutsch": "zur Rede stellen (in den Senkel stellen)"
  },
  {
    "id": 691,
    "dialekt_text": "Schopf",
    "hochdeutsch": "Schuppen"
  },
  {
    "id": 692,
    "dialekt_text": "Schpaltklotz",
    "hochdeutsch": "Schuppen"
  },
  {
    "id": 693,
    "dialekt_text": "Schplien",
    "hochdeutsch": "leicht verrückt, Ideen die man nicht verwirklichen kann (engl. Spleen)"
  },
  {
    "id": 694,
    "dialekt_text": "Schuckkarch",
    "hochdeutsch": "Schubkarre"
  },
  {
    "id": 695,
    "dialekt_text": "Schwall",
    "hochdeutsch": "kleine Böschung, Randeinfassung eines Rebstücks"
  },
  {
    "id": 696,
    "dialekt_text": "schwalle",
    "hochdeutsch": "undeutlich reden"
  },
  {
    "id": 697,
    "dialekt_text": "schwarde",
    "hochdeutsch": "schlagen"
  },
  {
    "id": 698,
    "dialekt_text": "schwätze",
    "hochdeutsch": "reden"
  },
  {
    "id": 699,
    "dialekt_text": "schwong-ge",
    "hochdeutsch": "spülen leichter Rausch"
  },
  {
    "id": 700,
    "dialekt_text": "schwonze",
    "hochdeutsch": "affektiert gehen"
  },
  {
    "id": 701,
    "dialekt_text": "Seggl",
    "hochdeutsch": "unbeliebte männliche Person"
  },
  {
    "id": 702,
    "dialekt_text": "Säli",
    "hochdeutsch": "Säge"
  },
  {
    "id": 703,
    "dialekt_text": "Säije",
    "hochdeutsch": "Segen"
  },
  {
    "id": 704,
    "dialekt_text": "Sengenesl",
    "hochdeutsch": "Brennnessel"
  },
  {
    "id": 705,
    "dialekt_text": "sengle",
    "hochdeutsch": "sich an Brennnessel verbrennen"
  },
  {
    "id": 706,
    "dialekt_text": "Sepp",
    "hochdeutsch": "Josef"
  },
  {
    "id": 707,
    "dialekt_text": "si-eß",
    "hochdeutsch": "süß"
  },
  {
    "id": 708,
    "dialekt_text": "simmer",
    "hochdeutsch": "wir sind"
  },
  {
    "id": 709,
    "dialekt_text": "Simbl",
    "hochdeutsch": "Dummkopf"
  },
  {
    "id": 710,
    "dialekt_text": "Sind",
    "hochdeutsch": "Sünde"
  },
  {
    "id": 711,
    "dialekt_text": "sing",
    "hochdeutsch": "seinem"
  },
  {
    "id": 712,
    "dialekt_text": "sinniere",
    "hochdeutsch": "grübeln"
  },
  {
    "id": 713,
    "dialekt_text": "suffe",
    "hochdeutsch": "saufen"
  },
  {
    "id": 714,
    "dialekt_text": "Süffkutl",
    "hochdeutsch": "Säufer"
  },
  {
    "id": 715,
    "dialekt_text": "Suh",
    "hochdeutsch": "Sohn"
  },
  {
    "id": 716,
    "dialekt_text": "Sunni / Sunndi(g)",
    "hochdeutsch": "Sonntag"
  },
  {
    "id": 717,
    "dialekt_text": "sunndis",
    "hochdeutsch": "sonntags"
  },
  {
    "id": 718,
    "dialekt_text": "sunschd",
    "hochdeutsch": "sonst"
  },
  {
    "id": 719,
    "dialekt_text": "Sunn",
    "hochdeutsch": "Sonne"
  },
  {
    "id": 720,
    "dialekt_text": "sür, sur",
    "hochdeutsch": "sauer"
  },
  {
    "id": 721,
    "dialekt_text": "Süre-Buhne",
    "hochdeutsch": "Standbohnen"
  },
  {
    "id": 722,
    "dialekt_text": "Sürrompfer",
    "hochdeutsch": "Sauerampfer"
  },
  {
    "id": 723,
    "dialekt_text": "Suume",
    "hochdeutsch": "Samen"
  },
  {
    "id": 724,
    "dialekt_text": "Tranfunzel",
    "hochdeutsch": "1. langweiliger Mensch 2. schlechtes Licht Lampe"
  },
  {
    "id": 725,
    "dialekt_text": "tri-ele",
    "hochdeutsch": "sich verkleckern"
  },
  {
    "id": 726,
    "dialekt_text": "trotte",
    "hochdeutsch": "Auspressen der Trauben oder Äpfel"
  },
  {
    "id": 727,
    "dialekt_text": "trottle",
    "hochdeutsch": "langsam gehen"
  },
  {
    "id": 728,
    "dialekt_text": "Trottwa",
    "hochdeutsch": "Bürgersteig, Gehweg (fr. trottoir)"
  },
  {
    "id": 729,
    "dialekt_text": "truerig",
    "hochdeutsch": "traurig"
  },
  {
    "id": 730,
    "dialekt_text": "ufenonder",
    "hochdeutsch": "aufeinander"
  },
  {
    "id": 731,
    "dialekt_text": "uff",
    "hochdeutsch": "auf"
  },
  {
    "id": 732,
    "dialekt_text": "Uhmed",
    "hochdeutsch": "Öhmd, zweite Heuernte imS"
  },
  {
    "id": 733,
    "dialekt_text": "ufrmüpfig",
    "hochdeutsch": "aufmüpfig"
  },
  {
    "id": 734,
    "dialekt_text": "uff'risse",
    "hochdeutsch": "aufreißen"
  },
  {
    "id": 735,
    "dialekt_text": "uff'schdipfle",
    "hochdeutsch": "aufwiegeln"
  },
  {
    "id": 736,
    "dialekt_text": "uff-are",
    "hochdeutsch": "auf einer (Bank)"
  },
  {
    "id": 737,
    "dialekt_text": "Ugeziffer",
    "hochdeutsch": "Ungeziefer"
  },
  {
    "id": 738,
    "dialekt_text": "uh'längschd",
    "hochdeutsch": "unlängst"
  },
  {
    "id": 739,
    "dialekt_text": "Uhmues",
    "hochdeutsch": "kleine Probleme bewältigen"
  },
  {
    "id": 740,
    "dialekt_text": "um'mache",
    "hochdeutsch": "1. Konkurs anmelden 2. einen Bamn fällen"
  },
  {
    "id": 741,
    "dialekt_text": "um'moddle",
    "hochdeutsch": "umändern"
  },
  {
    "id": 742,
    "dialekt_text": "umknaggse",
    "hochdeutsch": "Knöchel vertreten"
  },
  {
    "id": 743,
    "dialekt_text": "ungerschi",
    "hochdeutsch": "hinab"
  },
  {
    "id": 744,
    "dialekt_text": "ungerm",
    "hochdeutsch": "unterm"
  },
  {
    "id": 745,
    "dialekt_text": "üs'däsche",
    "hochdeutsch": "aus der gekochten Kastanie mit den Zähnen den Kern herausquetschen"
  },
  {
    "id": 746,
    "dialekt_text": "üs'schbodde",
    "hochdeutsch": "verspotten"
  },
  {
    "id": 747,
    "dialekt_text": "Üsbrechdolder",
    "hochdeutsch": "junge Seitentriebe, die ausgebrochen Yrerden am Rebstock"
  },
  {
    "id": 748,
    "dialekt_text": "üsmällige",
    "hochdeutsch": "ausmelken"
  },
  {
    "id": 749,
    "dialekt_text": "üsrüme",
    "hochdeutsch": "ausräumen"
  },
  {
    "id": 750,
    "dialekt_text": "üsse",
    "hochdeutsch": "außen"
  },
  {
    "id": 751,
    "dialekt_text": "uuliedi",
    "hochdeutsch": "lästig,unangenehm"
  },
  {
    "id": 752,
    "dialekt_text": "verleid",
    "hochdeutsch": "ängstlich, vor dem was kommt"
  },
  {
    "id": 753,
    "dialekt_text": "va'budse",
    "hochdeutsch": "1. alles essen 2. nicht ertragen können"
  },
  {
    "id": 754,
    "dialekt_text": "va'gliggare",
    "hochdeutsch": "erklären"
  },
  {
    "id": 755,
    "dialekt_text": "va'ebblt",
    "hochdeutsch": "an der Nase herum geführt"
  },
  {
    "id": 756,
    "dialekt_text": "va'schdegglt",
    "hochdeutsch": "versteckt"
  },
  {
    "id": 757,
    "dialekt_text": "va'zehle",
    "hochdeutsch": "1. erzählen 2, falsch zählen"
  },
  {
    "id": 758,
    "dialekt_text": "verdrebblt",
    "hochdeutsch": "zertreten"
  },
  {
    "id": 759,
    "dialekt_text": "verhutzlt",
    "hochdeutsch": "ausgetrocknet"
  },
  {
    "id": 760,
    "dialekt_text": "Vedderleswirtschaft",
    "hochdeutsch": "Machenschaften, nicht legal"
  },
  {
    "id": 761,
    "dialekt_text": "verhunze",
    "hochdeutsch": "ungeschickt etwas kaputt machen"
  },
  {
    "id": 762,
    "dialekt_text": "versure",
    "hochdeutsch": "versauern"
  },
  {
    "id": 763,
    "dialekt_text": "vorne-no",
    "hochdeutsch": "vom dran"
  },
  {
    "id": 764,
    "dialekt_text": "Wöuu,v",
    "hochdeutsch": "Waage"
  },
  {
    "id": 765,
    "dialekt_text": "Weschbl",
    "hochdeutsch": "Wespe"
  },
  {
    "id": 766,
    "dialekt_text": "wissle",
    "hochdeutsch": "weiß tünchen, weiß anstreichen"
  },
  {
    "id": 767,
    "dialekt_text": "wem-ma",
    "hochdeutsch": "wenn wir"
  },
  {
    "id": 768,
    "dialekt_text": "Werdi",
    "hochdeutsch": "Werktag"
  },
  {
    "id": 769,
    "dialekt_text": "wie-d widd",
    "hochdeutsch": "wie du willst / deine Entscheidung"
  },
  {
    "id": 770,
    "dialekt_text": "Wiede",
    "hochdeutsch": "Weiden"
  },
  {
    "id": 771,
    "dialekt_text": "wissawie",
    "hochdeutsch": "gegenüber (vis-a-,is)"
  },
  {
    "id": 772,
    "dialekt_text": "Wissbaam",
    "hochdeutsch": "lange starke Stange, um die Ladung von Heu oder Stroh fest zu zurren"
  },
  {
    "id": 773,
    "dialekt_text": "Wissbaamschlupf",
    "hochdeutsch": "Spezieller Knoten für den Wissbaam"
  },
  {
    "id": 774,
    "dialekt_text": "wewware",
    "hochdeutsch": "herumfuchteln"
  },
  {
    "id": 775,
    "dialekt_text": "Wöuw",
    "hochdeutsch": "Waage"
  },
  {
    "id": 776,
    "dialekt_text": "d'Wohret",
    "hochdeutsch": "Wahrheit"
  },
  {
    "id": 777,
    "dialekt_text": "wurgse",
    "hochdeutsch": "hoch würgen"
  },
  {
    "id": 778,
    "dialekt_text": "wuhne",
    "hochdeutsch": "wohnen"
  },
  {
    "id": 779,
    "dialekt_text": "Wunnerfitz",
    "hochdeutsch": "neugierige Person"
  },
  {
    "id": 780,
    "dialekt_text": "Wäscher",
    "hochdeutsch": "enorm großes Ding, Tier oder Mensch"
  },
  {
    "id": 781,
    "dialekt_text": "Waldtrauf",
    "hochdeutsch": "Waldrand"
  },
  {
    "id": 782,
    "dialekt_text": "womse",
    "hochdeutsch": "prügeln"
  },
  {
    "id": 783,
    "dialekt_text": "Wauwe",
    "hochdeutsch": "Wagen"
  },
  {
    "id": 784,
    "dialekt_text": "Wauweseil",
    "hochdeutsch": "Wagenseil"
  },
  {
    "id": 785,
    "dialekt_text": "wegge-dem",
    "hochdeutsch": "wegen dem"
  },
  {
    "id": 786,
    "dialekt_text": "wegge-mir!",
    "hochdeutsch": "meinetwegen"
  },
  {
    "id": 787,
    "dialekt_text": "Wäll, Räwäll",
    "hochdeutsch": "Reisigbündel, Rebholzbündel"
  },
  {
    "id": 788,
    "dialekt_text": "wällig",
    "hochdeutsch": "welk"
  },
  {
    "id": 789,
    "dialekt_text": "Wällebengl",
    "hochdeutsch": "Holzknüppel"
  },
  {
    "id": 790,
    "dialekt_text": "Wälschkorn",
    "hochdeutsch": "Mais"
  },
  {
    "id": 791,
    "dialekt_text": "wemmer",
    "hochdeutsch": "wenn wir"
  },
  {
    "id": 792,
    "dialekt_text": "wärre",
    "hochdeutsch": "werden"
  },
  {
    "id": 793,
    "dialekt_text": "Wärr",
    "hochdeutsch": "Maulwurfsgrille"
  },
  {
    "id": 794,
    "dialekt_text": "Werschi",
    "hochdeutsch": "1. Wirsing 2. Kopf (bekommsch glich eine uff der Werschi)"
  },
  {
    "id": 795,
    "dialekt_text": "wäddare",
    "hochdeutsch": "schimpfen"
  },
  {
    "id": 796,
    "dialekt_text": "Wiewer, Wieber",
    "hochdeutsch": "Frauen"
  },
  {
    "id": 797,
    "dialekt_text": "wu",
    "hochdeutsch": "wo"
  },
  {
    "id": 798,
    "dialekt_text": "wuher",
    "hochdeutsch": "woher"
  },
  {
    "id": 799,
    "dialekt_text": "Wurb",
    "hochdeutsch": "Sensegriff"
  },
  {
    "id": 800,
    "dialekt_text": "omme schiene Daa",
    "hochdeutsch": "irgendwann"
  },
  {
    "id": 801,
    "dialekt_text": "zemble",
    "hochdeutsch": "streiten"
  },
  {
    "id": 802,
    "dialekt_text": "zingsle",
    "hochdeutsch": "zündeln, mit Feuer spielen"
  },
  {
    "id": 803,
    "dialekt_text": "Ziringe",
    "hochdeutsch": "Flieder (lat. SJTinga)"
  },
  {
    "id": 804,
    "dialekt_text": "Zischdi",
    "hochdeutsch": "Dienstag, (Tag des Gottes Thiu)"
  },
  {
    "id": 805,
    "dialekt_text": "ziddi",
    "hochdeutsch": "reif"
  },
  {
    "id": 806,
    "dialekt_text": "Ziddung",
    "hochdeutsch": "Zeitung"
  },
  {
    "id": 807,
    "dialekt_text": "z'letschd",
    "hochdeutsch": "zuletzt"
  },
  {
    "id": 808,
    "dialekt_text": "z'nachd",
    "hochdeutsch": "nachts, in der Nacht"
  },
  {
    "id": 809,
    "dialekt_text": "zottle",
    "hochdeutsch": "schlendern"
  },
  {
    "id": 810,
    "dialekt_text": "Zottel",
    "hochdeutsch": "verklebte Haare"
  },
  {
    "id": 811,
    "dialekt_text": "zowle",
    "hochdeutsch": "zupfen"
  },
  {
    "id": 812,
    "dialekt_text": "Zeigs",
    "hochdeutsch": "Zeug"
  },
  {
    "id": 813,
    "dialekt_text": "zomme",
    "hochdeutsch": "zusammen"
  },
  {
    "id": 814,
    "dialekt_text": "Ziwl",
    "hochdeutsch": "Zwiebel"
  },
  {
    "id": 815,
    "dialekt_text": "Zornigigl",
    "hochdeutsch": "zorniger Mensch"
  },
  {
    "id": 816,
    "dialekt_text": "zwiwle",
    "hochdeutsch": "schikanieren"
  },
  {
    "id": 817,
    "dialekt_text": "zwazli",
    "hochdeutsch": "unruhig,zappelig"
  },
  {
    "id": 818,
    "dialekt_text": "verschachere",
    "hochdeutsch": "verkaufen, tauschen"
  },
  {
    "id": 819,
    "dialekt_text": "buche",
    "hochdeutsch": "hauchen oder keuchen"
  },
  {
    "id": 820,
    "dialekt_text": "Borbel",
    "hochdeutsch": "Haardutt"
  },
  {
    "id": 821,
    "dialekt_text": "verkassemaduggle",
    "hochdeutsch": "für etwas verwenden"
  },
  {
    "id": 822,
    "dialekt_text": "rumm, numm",
    "hochdeutsch": "von einer Seite auf die andere"
  },
  {
    "id": 823,
    "dialekt_text": "z'letschd, z'erschd",
    "hochdeutsch": "zuletzt, zuerst"
  },
  {
    "id": 824,
    "dialekt_text": "ehnder, schbäder",
    "hochdeutsch": "eher, später hingenoch"
  },
  {
    "id": 825,
    "dialekt_text": "vornuus",
    "hochdeutsch": "voraus"
  },
  {
    "id": 826,
    "dialekt_text": "verlööwe",
    "hochdeutsch": "nicht wahr, erfunden und erlogen verschisse und"
  },
  {
    "id": 827,
    "dialekt_text": "versaichd",
    "hochdeutsch": "die Hosen voll mit Dickes (Urin + Stuhl) jetzt hesch's"
  },
  {
    "id": 828,
    "dialekt_text": "ruff, raa",
    "hochdeutsch": "rauf, runter"
  },
  {
    "id": 829,
    "dialekt_text": "hingevier",
    "hochdeutsch": "durcheinander"
  },
  {
    "id": 830,
    "dialekt_text": "verhuddelt",
    "hochdeutsch": "zerzaust"
  },
  {
    "id": 831,
    "dialekt_text": "hereno",
    "hochdeutsch": "hin und her"
  },
  {
    "id": 832,
    "dialekt_text": "drumm-rumm",
    "hochdeutsch": "drum herum"
  },
  {
    "id": 833,
    "dialekt_text": "fadegrad",
    "hochdeutsch": "sehr genau verschdonge-"
  },
  {
    "id": 834,
    "dialekt_text": "verschdesch",
    "hochdeutsch": "hast du verstanden?"
  },
  {
    "id": 835,
    "dialekt_text": "hodlätz",
    "hochdeutsch": "verkehrt"
  },
  {
    "id": 836,
    "dialekt_text": "villiechd",
    "hochdeutsch": "vielleicht"
  },
  {
    "id": 837,
    "dialekt_text": "hähli",
    "hochdeutsch": "leise, unbemerkt"
  },
  {
    "id": 838,
    "dialekt_text": "munner-morje",
    "hochdeutsch": "morgen früh"
  },
  {
    "id": 839,
    "dialekt_text": "nochenonner",
    "hochdeutsch": "nacheinander"
  },
  {
    "id": 840,
    "dialekt_text": "Schdopfe",
    "hochdeutsch": "Stöpsel aus Kork"
  },
  {
    "id": 841,
    "dialekt_text": "Ähä",
    "hochdeutsch": "Ja"
  },
  {
    "id": 842,
    "dialekt_text": "Hä-ä",
    "hochdeutsch": "Nein"
  },
  {
    "id": 843,
    "dialekt_text": "irridiridi?",
    "hochdeutsch": "verwirre ich Dich?"
  },
  {
    "id": 844,
    "dialekt_text": "Hagotzack",
    "hochdeutsch": "Herrgott,Sakrament,Nochemol"
  },
  {
    "id": 845,
    "dialekt_text": "dipfelesglich",
    "hochdeutsch": "identisch"
  },
  {
    "id": 846,
    "dialekt_text": "nebbeznu's gonge",
    "hochdeutsch": "fremd gegangen"
  },
  {
    "id": 847,
    "dialekt_text": "giehn vunond!",
    "hochdeutsch": "auseinander, Ihr Streithähne!"
  },
  {
    "id": 848,
    "dialekt_text": "(i-)Dipfelesschisser",
    "hochdeutsch": "Pedant"
  },
  {
    "id": 849,
    "dialekt_text": "Grabbenoddler",
    "hochdeutsch": "Störrischer alter Mann"
  },
  {
    "id": 850,
    "dialekt_text": "Bruddler",
    "hochdeutsch": "Beschwerdeträger"
  },
  {
    "id": 851,
    "dialekt_text": "nongse",
    "hochdeutsch": "wehleidig klagen"
  },
  {
    "id": 852,
    "dialekt_text": "mudere (er mudert ä bissel)",
    "hochdeutsch": "erkältet sein / er laboriert an einer leichten Erkältung"
  },
  {
    "id": 853,
    "dialekt_text": "ebbes onners",
    "hochdeutsch": "etwas anderes"
  },
  {
    "id": 854,
    "dialekt_text": "iiemes",
    "hochdeutsch": "Jemand"
  },
  {
    "id": 855,
    "dialekt_text": "niiemes",
    "hochdeutsch": "Niemand"
  },
  {
    "id": 856,
    "dialekt_text": "ebbs rechts",
    "hochdeutsch": "hochwertig"
  },
  {
    "id": 857,
    "dialekt_text": "Debbich",
    "hochdeutsch": "Tagesdecke auf dem Bett"
  },
  {
    "id": 858,
    "dialekt_text": "Eberschde",
    "hochdeutsch": "Haueneberstein"
  },
  {
    "id": 859,
    "dialekt_text": "Sondwiir",
    "hochdeutsch": "Sandweier"
  },
  {
    "id": 860,
    "dialekt_text": "Helse",
    "hochdeutsch": "Hügelsheim"
  },
  {
    "id": 861,
    "dialekt_text": "Balli",
    "hochdeutsch": "Balg"
  },
  {
    "id": 862,
    "dialekt_text": "Kuppene",
    "hochdeutsch": "Kuppenheim"
  },
  {
    "id": 863,
    "dialekt_text": "Raschdi",
    "hochdeutsch": "Rastatt"
  },
  {
    "id": 864,
    "dialekt_text": "Eestreich",
    "hochdeutsch": "Österreich"
  },
  {
    "id": 865,
    "dialekt_text": "lidderli",
    "hochdeutsch": "schlecht, liederlich"
  },
  {
    "id": 866,
    "dialekt_text": "saggzement!",
    "hochdeutsch": "Sack Zement, fluchende Verballhornung von Sakrament"
  },
  {
    "id": 867,
    "dialekt_text": "d'Händ im Sack",
    "hochdeutsch": "die Hände in den Hosentaschen"
  },
  {
    "id": 868,
    "dialekt_text": "Luugebiddel",
    "hochdeutsch": "Lügner"
  },
  {
    "id": 869,
    "dialekt_text": "Labbeduddel",
    "hochdeutsch": "Nichtsnutz"
  },
  {
    "id": 870,
    "dialekt_text": "Siidjohn",
    "hochdeutsch": "Hinterlistiger Mensch"
  },
  {
    "id": 871,
    "dialekt_text": "Hondhebetz",
    "hochdeutsch": "1.Griff 2.Handlauf am Geländer"
  },
  {
    "id": 872,
    "dialekt_text": "allefurzlong",
    "hochdeutsch": "andauernd, in kurzen regelmäßigen Abständen"
  },
  {
    "id": 873,
    "dialekt_text": "Babbedegglschachtl",
    "hochdeutsch": "Karton"
  },
  {
    "id": 874,
    "dialekt_text": "Gnitzer Schdinker",
    "hochdeutsch": "Gerissener Hund"
  },
  {
    "id": 875,
    "dialekt_text": "Schierdor",
    "hochdeutsch": "Scheunentor"
  },
  {
    "id": 876,
    "dialekt_text": "Awwa!",
    "hochdeutsch": "Achwas, hör bloß auf! Das gibt es doch nicht!"
  },
  {
    "id": 877,
    "dialekt_text": "Ibbergongsjäggel",
    "hochdeutsch": "Halbdünnes Jäckchen für zwischen den Jahreszeiten"
  },
  {
    "id": 878,
    "dialekt_text": "Rieberessel",
    "hochdeutsch": "Unsensibler Mensch"
  },
  {
    "id": 879,
    "dialekt_text": "Rupfiggel",
    "hochdeutsch": "Frecher Kerl"
  },
  {
    "id": 880,
    "dialekt_text": "Dunnerweddel",
    "hochdeutsch": "Störrischer Mensch"
  },
  {
    "id": 881,
    "dialekt_text": "Malefitzdeifel",
    "hochdeutsch": "Unruhestifter"
  },
  {
    "id": 882,
    "dialekt_text": "Saddänner",
    "hochdeutsch": "Satansbraten"
  },
  {
    "id": 883,
    "dialekt_text": "Schlabbedengler",
    "hochdeutsch": "Nichtsnutz"
  },
  {
    "id": 884,
    "dialekt_text": "Sakramoschder",
    "hochdeutsch": "Unruhestifter"
  },
  {
    "id": 885,
    "dialekt_text": "Letzhau",
    "hochdeutsch": "Weible Nichtsnutzin"
  },
  {
    "id": 886,
    "dialekt_text": "hottlätz",
    "hochdeutsch": "verwirrt, verkehrt herum"
  },
  {
    "id": 887,
    "dialekt_text": "Budderschwämmlesupp",
    "hochdeutsch": "Klare Suope mit Butterklösschen"
  },
  {
    "id": 888,
    "dialekt_text": "Schnitzbierlebaam",
    "hochdeutsch": "Obstbaum mit kleinen Mostbirnchen"
  },
  {
    "id": 889,
    "dialekt_text": "gsi-si",
    "hochdeutsch": "gewesen sein"
  },
  {
    "id": 890,
    "dialekt_text": "z'fir gsi-si",
    "hochdeutsch": "er/sie ist (das Tal) vorgelaufen"
  },
  {
    "id": 891,
    "dialekt_text": "Hä?",
    "hochdeutsch": "Wie bitte?"
  },
  {
    "id": 892,
    "dialekt_text": "Sülz",
    "hochdeutsch": "Pansen"
  },
  {
    "id": 893,
    "dialekt_text": "gebrennde Mehlsubb",
    "hochdeutsch": "Armenessen"
  },
  {
    "id": 894,
    "dialekt_text": "Wurschdsubb",
    "hochdeutsch": "ich bin jo au nitt uff der Wurschdsubb herg'schwomne"
  },
  {
    "id": 895,
    "dialekt_text": "Schunke",
    "hochdeutsch": "Schinken"
  },
  {
    "id": 896,
    "dialekt_text": "Eenteköpfer",
    "hochdeutsch": "Regionalzug"
  },
  {
    "id": 897,
    "dialekt_text": "Haugoogele",
    "hochdeutsch": "Nicht der Hellste"
  },
  {
    "id": 898,
    "dialekt_text": "Haderlump",
    "hochdeutsch": "Betrüger"
  },
  {
    "id": 899,
    "dialekt_text": "Scheereschliffer",
    "hochdeutsch": "Scherenschleifer (Schimpfwort: keine vertrauensvolle Person)"
  },
  {
    "id": 900,
    "dialekt_text": "Honnewaggel",
    "hochdeutsch": "nicht erntzunehmende Person"
  },
  {
    "id": 901,
    "dialekt_text": "Schoofseggel",
    "hochdeutsch": "Depp"
  },
  {
    "id": 902,
    "dialekt_text": "Brunstulp",
    "hochdeutsch": "blöde Kuh"
  },
  {
    "id": 903,
    "dialekt_text": "Schlabbedengler",
    "hochdeutsch": "durchtriebener Nichtsnutz"
  },
  {
    "id": 904,
    "dialekt_text": "Hoiblümler",
    "hochdeutsch": "Depp"
  },
  {
    "id": 905,
    "dialekt_text": "Lötseggel",
    "hochdeutsch": "Depp"
  },
  {
    "id": 906,
    "dialekt_text": "Hudsimbel",
    "hochdeutsch": "arroganter Depp"
  },
  {
    "id": 907,
    "dialekt_text": "Dirmel",
    "hochdeutsch": "Depp"
  },
  {
    "id": 908,
    "dialekt_text": "Grasdaggl",
    "hochdeutsch": "Depp/Dackel"
  },
  {
    "id": 909,
    "dialekt_text": "Regimentsmarie",
    "hochdeutsch": "Familienoberhäuptin / Kommandeurin"
  },
  {
    "id": 910,
    "dialekt_text": "d'Lefze hänge lasse",
    "hochdeutsch": "traurig sein"
  },
  {
    "id": 911,
    "dialekt_text": "ebbs bessers",
    "hochdeutsch": "hochnäsige Menschen"
  },
  {
    "id": 912,
    "dialekt_text": "umenond",
    "hochdeutsch": "umher"
  },
  {
    "id": 913,
    "dialekt_text": "Staffel",
    "hochdeutsch": "Steintreppe im Aussenberrich"
  },
  {
    "id": 914,
    "dialekt_text": "Stäh",
    "hochdeutsch": "Holztreppe im Innenausbau"
  },
  {
    "id": 915,
    "dialekt_text": "Kirchestaffle",
    "hochdeutsch": "Dorftratsch-Treff"
  },
  {
    "id": 916,
    "dialekt_text": "rätsche",
    "hochdeutsch": "tratschen"
  },
  {
    "id": 917,
    "dialekt_text": "rätze",
    "hochdeutsch": "aufstacheln"
  },
  {
    "id": 918,
    "dialekt_text": "reggene / reene / rain",
    "hochdeutsch": "regnen"
  },
  {
    "id": 919,
    "dialekt_text": "Katze raa mache",
    "hochdeutsch": "Unwetter"
  },
  {
    "id": 920,
    "dialekt_text": "bäbbig",
    "hochdeutsch": "klebrig"
  },
  {
    "id": 921,
    "dialekt_text": "bädschnass",
    "hochdeutsch": "triefend nass"
  },
  {
    "id": 922,
    "dialekt_text": "bussiere",
    "hochdeutsch": "flirten"
  },
  {
    "id": 923,
    "dialekt_text": "Griesse",
    "hochdeutsch": "Kirschen"
  },
  {
    "id": 924,
    "dialekt_text": "Kirschde",
    "hochdeutsch": "Kirschen"
  },
  {
    "id": 925,
    "dialekt_text": "Dalle",
    "hochdeutsch": "Beule"
  },
  {
    "id": 926,
    "dialekt_text": "Gluggser",
    "hochdeutsch": "Schluckauf"
  },
  {
    "id": 927,
    "dialekt_text": "Homme",
    "hochdeutsch": "Hügel"
  },
  {
    "id": 928,
    "dialekt_text": "Ladschi",
    "hochdeutsch": "großer/ungehobelter Mensch"
  },
  {
    "id": 929,
    "dialekt_text": "ludd",
    "hochdeutsch": "laut"
  },
  {
    "id": 930,
    "dialekt_text": "Mäni / Mändi",
    "hochdeutsch": "Montag"
  },
  {
    "id": 931,
    "dialekt_text": "Miierle",
    "hochdeutsch": "kleines Mäuerchen"
  },
  {
    "id": 932,
    "dialekt_text": "Muggesäggele",
    "hochdeutsch": "sehr geringes Abstandsmass"
  },
  {
    "id": 933,
    "dialekt_text": "noddle",
    "hochdeutsch": "wackeln, rum reißen"
  },
  {
    "id": 934,
    "dialekt_text": "Päper",
    "hochdeutsch": "Blasinstrument"
  },
  {
    "id": 935,
    "dialekt_text": "pfuuse",
    "hochdeutsch": "beleidigt sein"
  },
  {
    "id": 936,
    "dialekt_text": "schelle",
    "hochdeutsch": "klingeln"
  },
  {
    "id": 937,
    "dialekt_text": "schbachdle",
    "hochdeutsch": "gierig essen / verschlingen"
  },
  {
    "id": 938,
    "dialekt_text": "tripple / drepple",
    "hochdeutsch": "drängeln"
  },
  {
    "id": 939,
    "dialekt_text": "Trottwar",
    "hochdeutsch": "Gehweg"
  },
  {
    "id": 940,
    "dialekt_text": "Tschoobe",
    "hochdeutsch": "Jacke, Kittel, Mantel"
  },
  {
    "id": 941,
    "dialekt_text": "ummesunschd",
    "hochdeutsch": "umsonst"
  },
  {
    "id": 942,
    "dialekt_text": "uusruume",
    "hochdeutsch": "ausräumen"
  },
  {
    "id": 943,
    "dialekt_text": "verbuzze",
    "hochdeutsch": "hinunterschlingen"
  },
  {
    "id": 944,
    "dialekt_text": "verdruggd",
    "hochdeutsch": "schüchtern, verklemmt"
  },
  {
    "id": 945,
    "dialekt_text": "verseggle",
    "hochdeutsch": "veräppeln"
  },
  {
    "id": 946,
    "dialekt_text": "wahrschiens",
    "hochdeutsch": "wahrscheinlich zustimmend"
  },
  {
    "id": 947,
    "dialekt_text": "zabbeduschder",
    "hochdeutsch": "totale Finsternis"
  },
  {
    "id": 948,
    "dialekt_text": "Abord",
    "hochdeutsch": "Toilette"
  },
  {
    "id": 949,
    "dialekt_text": "Bolle",
    "hochdeutsch": "Kugel"
  },
  {
    "id": 950,
    "dialekt_text": "Schnoog",
    "hochdeutsch": "Schnake"
  },
  {
    "id": 951,
    "dialekt_text": "Billeddel",
    "hochdeutsch": "Ticket, Fahrschein"
  },
  {
    "id": 952,
    "dialekt_text": "ä Maleer",
    "hochdeutsch": "Malheur"
  },
  {
    "id": 953,
    "dialekt_text": "Moores",
    "hochdeutsch": "Angst, Furcht"
  },
  {
    "id": 954,
    "dialekt_text": "aschnide / oschnide",
    "hochdeutsch": "anschneidende"
  },
  {
    "id": 955,
    "dialekt_text": "Alla nott",
    "hochdeutsch": "Also dann,…"
  },
  {
    "id": 956,
    "dialekt_text": "Baggaasch",
    "hochdeutsch": "Lumpenpack"
  },
  {
    "id": 957,
    "dialekt_text": "s'bressiert",
    "hochdeutsch": "es ist eilig"
  },
  {
    "id": 958,
    "dialekt_text": "bäbbig",
    "hochdeutsch": "klebrig"
  },
  {
    "id": 959,
    "dialekt_text": "ä bäbbigs Gutsl",
    "hochdeutsch": "1. klebriges Bonbon 2. anhängliche Person"
  },
  {
    "id": 960,
    "dialekt_text": "blotze lasse",
    "hochdeutsch": "fallen lassen"
  },
  {
    "id": 961,
    "dialekt_text": "daube Funzel",
    "hochdeutsch": "1. Taschenlampe 2. unterbelichtete Person"
  },
  {
    "id": 962,
    "dialekt_text": "forzdrogge",
    "hochdeutsch": "sehr trocken"
  },
  {
    "id": 963,
    "dialekt_text": "gruuschdle",
    "hochdeutsch": "herumkramen"
  },
  {
    "id": 964,
    "dialekt_text": "Grabb",
    "hochdeutsch": "1. Rabe 2. sehr hässliche person"
  },
  {
    "id": 965,
    "dialekt_text": "Geggerle",
    "hochdeutsch": "(Halbes) Hähnchen"
  },
  {
    "id": 966,
    "dialekt_text": "Gääleriebe",
    "hochdeutsch": "Karotten"
  },
  {
    "id": 967,
    "dialekt_text": "geschterd",
    "hochdeutsch": "gestern"
  },
  {
    "id": 968,
    "dialekt_text": "Vurgsjohr",
    "hochdeutsch": "letztes Jahr"
  },
  {
    "id": 969,
    "dialekt_text": "hogge",
    "hochdeutsch": "sitzen"
  },
  {
    "id": 970,
    "dialekt_text": "Kusseng",
    "hochdeutsch": "Cousin"
  },
  {
    "id": 971,
    "dialekt_text": "Krizweh",
    "hochdeutsch": "Rückenschmerzen"
  },
  {
    "id": 972,
    "dialekt_text": "lubfe",
    "hochdeutsch": "heben"
  },
  {
    "id": 973,
    "dialekt_text": "Muggedatscher",
    "hochdeutsch": "Fliegenklatsche"
  },
  {
    "id": 974,
    "dialekt_text": "malaad",
    "hochdeutsch": "krank"
  },
  {
    "id": 975,
    "dialekt_text": "Noowe!",
    "hochdeutsch": "Einen schönen guten Abend zusammen!"
  },
  {
    "id": 976,
    "dialekt_text": "noohogge",
    "hochdeutsch": "hinsitzen"
  },
  {
    "id": 977,
    "dialekt_text": "Ranzepfiffe",
    "hochdeutsch": "Bauchweh"
  },
  {
    "id": 978,
    "dialekt_text": "pfetze",
    "hochdeutsch": "kneifen"
  },
  {
    "id": 979,
    "dialekt_text": "Pederli",
    "hochdeutsch": "Petersilie"
  },
  {
    "id": 980,
    "dialekt_text": "Schnittli",
    "hochdeutsch": "Schnittlauch"
  },
  {
    "id": 981,
    "dialekt_text": "Schlabbe",
    "hochdeutsch": "Hausschuh"
  },
  {
    "id": 982,
    "dialekt_text": "Sunnewirbele",
    "hochdeutsch": "Feldsalat"
  },
  {
    "id": 983,
    "dialekt_text": "schnuufe",
    "hochdeutsch": "atmen"
  },
  {
    "id": 984,
    "dialekt_text": "selles, sell",
    "hochdeutsch": "dasjenige"
  },
  {
    "id": 985,
    "dialekt_text": "seller",
    "hochdeutsch": "derjenige"
  },
  {
    "id": 986,
    "dialekt_text": "Salli!",
    "hochdeutsch": "Hallo!"
  },
  {
    "id": 987,
    "dialekt_text": "Mach kei Fürz!",
    "hochdeutsch": "Mach keine Dummheiten"
  },
  {
    "id": 988,
    "dialekt_text": "Schwätz kei Babb!",
    "hochdeutsch": "Erzähl mir keine Märchen!"
  },
  {
    "id": 989,
    "dialekt_text": "G'schpraddel",
    "hochdeutsch": "1. Zeugs 2. Theater machen"
  },
  {
    "id": 990,
    "dialekt_text": "D'Sun schingt schu long!",
    "hochdeutsch": "Zeit zum Aufstehn!!"
  },
  {
    "id": 991,
    "dialekt_text": "Höuwöuwedissel",
    "hochdeutsch": "Heiwagendeichsel"
  },
  {
    "id": 992,
    "dialekt_text": "hingerschi",
    "hochdeutsch": "rückwärts"
  },
  {
    "id": 993,
    "dialekt_text": "virschi",
    "hochdeutsch": "vorwärts"
  },
  {
    "id": 994,
    "dialekt_text": "Gawwel",
    "hochdeutsch": "Gabel"
  },
  {
    "id": 995,
    "dialekt_text": "Grutzebibbelefasenacht!",
    "hochdeutsch": "Fluch"
  },
  {
    "id": 996,
    "dialekt_text": "Goschmussi",
    "hochdeutsch": "Mundharmonika"
  },
  {
    "id": 997,
    "dialekt_text": "aaner päpere",
    "hochdeutsch": "einen Heben"
  },
  {
    "id": 998,
    "dialekt_text": "hafferes ho'",
    "hochdeutsch": "betrunken sein"
  },
  {
    "id": 999,
    "dialekt_text": "longe Haxe",
    "hochdeutsch": "langes Gebein"
  },
  {
    "id": 1000,
    "dialekt_text": "Klepperle",
    "hochdeutsch": "magere Person"
  },
  {
    "id": 1001,
    "dialekt_text": "guudsche",
    "hochdeutsch": "mit dem Stuhl wippen/schaukeln"
  },
  {
    "id": 1002,
    "dialekt_text": "Sackrattepfetzer",
    "hochdeutsch": "Frauenheld, Hallodri"
  },
  {
    "id": 1003,
    "dialekt_text": "Fuss",
    "hochdeutsch": "gesamter Beinbereich, vom kleinen Zeh bis zum Oberschenkelhalsknochen"
  },
  {
    "id": 1004,
    "dialekt_text": "Klepperkarch",
    "hochdeutsch": "klappriges Fahrrad/Auto"
  },
  {
    "id": 1005,
    "dialekt_text": "(„X“ wie) Xongverein",
    "hochdeutsch": "Gesangverein"
  },
  {
    "id": 1006,
    "dialekt_text": "(Schutzblech) kleppert",
    "hochdeutsch": "Schutzblech klappert"
  },
  {
    "id": 1007,
    "dialekt_text": "Streffer",
    "hochdeutsch": "1. Streif-Kratzer, 2. Strafzettel"
  },
  {
    "id": 1008,
    "dialekt_text": "Schnoogeloch",
    "hochdeutsch": "sumpfiges Wasserloch/Wiese"
  },
  {
    "id": 1009,
    "dialekt_text": "schlorbe",
    "hochdeutsch": "schlurfen"
  },
  {
    "id": 1010,
    "dialekt_text": "Badwonn'",
    "hochdeutsch": "Badewanne"
  },
  {
    "id": 1011,
    "dialekt_text": "Breide Nuudle",
    "hochdeutsch": "sind die bessere Spätzle"
  },
  {
    "id": 1012,
    "dialekt_text": "Schpargeddi",
    "hochdeutsch": "importierte Nudelspezialität"
  },
  {
    "id": 1013,
    "dialekt_text": "Brotesoß'",
    "hochdeutsch": "wichtigste Essenszutat"
  },
  {
    "id": 1014,
    "dialekt_text": "Hunni",
    "hochdeutsch": "Honig"
  },
  {
    "id": 1015,
    "dialekt_text": "Hunnimugge",
    "hochdeutsch": "Bienen"
  },
  {
    "id": 1016,
    "dialekt_text": "Schalkarch",
    "hochdeutsch": "Schubkarre"
  },
  {
    "id": 1017,
    "dialekt_text": "dreiseggelfetze",
    "hochdeutsch": "17:45h"
  },
  {
    "id": 1018,
    "dialekt_text": "Viertelsechse",
    "hochdeutsch": "17:15h"
  },
  {
    "id": 1019,
    "dialekt_text": "zehn nach Viertelsechse",
    "hochdeutsch": "kurz vor halb sechs (17:25h)"
  },
  {
    "id": 1020,
    "dialekt_text": "uffbasse",
    "hochdeutsch": "1. Achtung! 2. Schmiere stehen"
  },
  {
    "id": 1021,
    "dialekt_text": "dusche",
    "hochdeutsch": "austauschen"
  },
  {
    "id": 1022,
    "dialekt_text": "Licht abmache",
    "hochdeutsch": "Licht ausschalten"
  },
  {
    "id": 1023,
    "dialekt_text": "Schesslong",
    "hochdeutsch": "Sofa"
  },
  {
    "id": 1024,
    "dialekt_text": "Paraplü",
    "hochdeutsch": "Regenschirm"
  },
  {
    "id": 1025,
    "dialekt_text": "Mugg'",
    "hochdeutsch": "Stubenfliege"
  },
  {
    "id": 1026,
    "dialekt_text": "G'schmeissmugg'",
    "hochdeutsch": "Schmeißfliege"
  },
  {
    "id": 1027,
    "dialekt_text": "Schopf",
    "hochdeutsch": "Schuppen, Nebengebäude"
  },
  {
    "id": 1028,
    "dialekt_text": "Gugglfuri",
    "hochdeutsch": "unnötiger Aufwand"
  },
  {
    "id": 1029,
    "dialekt_text": "uu-gaddi",
    "hochdeutsch": "groß & umständlich zu heben (z.B. ein Behältnis)"
  },
  {
    "id": 1030,
    "dialekt_text": "ebbene",
    "hochdeutsch": "ungefähr / „an die (z.B. hundert)“"
  },
  {
    "id": 1031,
    "dialekt_text": "Schneggehiesl",
    "hochdeutsch": "Schneckenhäuschen"
  },
  {
    "id": 1032,
    "dialekt_text": "Uppsalla!",
    "hochdeutsch": "Hoppla!"
  },
  {
    "id": 1033,
    "dialekt_text": "hasch Mugge?",
    "hochdeutsch": "Geht's Dir grad nicht gut?"
  },
  {
    "id": 1034,
    "dialekt_text": "Grumbiere",
    "hochdeutsch": "Kartoffeln"
  },
  {
    "id": 1035,
    "dialekt_text": "Quetschekuuche",
    "hochdeutsch": "Zwetschgenkuchen"
  },
  {
    "id": 1036,
    "dialekt_text": "Simbl",
    "hochdeutsch": "Depp"
  },
  {
    "id": 1037,
    "dialekt_text": "Fierowe / Fierobett",
    "hochdeutsch": "Feierabend"
  },
  {
    "id": 1038,
    "dialekt_text": "Schlecksl",
    "hochdeutsch": "Konfitüre"
  },
  {
    "id": 1039,
    "dialekt_text": "d'r Budder",
    "hochdeutsch": "die Butter"
  },
  {
    "id": 1040,
    "dialekt_text": "Ebberdorf",
    "hochdeutsch": "Oberdorf"
  },
  {
    "id": 1041,
    "dialekt_text": "Ungerdorf",
    "hochdeutsch": "Unterdorf"
  },
  {
    "id": 1042,
    "dialekt_text": "d'r Homme nuff",
    "hochdeutsch": "den Hügel hinauf"
  },
  {
    "id": 1043,
    "dialekt_text": "dribberna-g'schdürzt",
    "hochdeutsch": "hinuntergefallen"
  },
  {
    "id": 1044,
    "dialekt_text": "suur's Sprudl",
    "hochdeutsch": "Mineralwasser mit Kohlensäure"
  },
  {
    "id": 1045,
    "dialekt_text": "si-eß' Sprudl",
    "hochdeutsch": "Limonade"
  },
  {
    "id": 1046,
    "dialekt_text": "Dallewatscher",
    "hochdeutsch": "Depp"
  },
  {
    "id": 1047,
    "dialekt_text": "Grumbiere no'hängge",
    "hochdeutsch": "Kartoffeln aufsetzen (zum Kochen)"
  },
  {
    "id": 1048,
    "dialekt_text": "Hundsbrunser",
    "hochdeutsch": "Schutzstein am Haus gegen urinierende Hunde"
  },
  {
    "id": 1049,
    "dialekt_text": "Hornschröder",
    "hochdeutsch": "Depp"
  },
  {
    "id": 1050,
    "dialekt_text": "Baggewatsch",
    "hochdeutsch": "Ohrfeige"
  },
  {
    "id": 1051,
    "dialekt_text": "Watschebaam",
    "hochdeutsch": "„Watschenbaum“, eine ganze „Tracht Prügel“"
  },
  {
    "id": 1052,
    "dialekt_text": "Wasserstei'",
    "hochdeutsch": "Waschbecken, Spülbecken (aus Stein)"
  },
  {
    "id": 1053,
    "dialekt_text": "juumere",
    "hochdeutsch": "jammern"
  },
  {
    "id": 1054,
    "dialekt_text": "Kälbl",
    "hochdeutsch": "kleiner Junge, meist etwas wehleidig"
  },
  {
    "id": 1055,
    "dialekt_text": "nongse",
    "hochdeutsch": "ständiges jammern, plagend"
  },
  {
    "id": 1056,
    "dialekt_text": "Bloog",
    "hochdeutsch": "1. Gruppe von Menschen 2. Menschheitsschicksal, Plage, 3. abwertend für Kind"
  },
  {
    "id": 1057,
    "dialekt_text": "(Rum-) Nongser",
    "hochdeutsch": "Person, die anderen Mitmenschen jesusmässig auf die Nüsse geht"
  },
  {
    "id": 1058,
    "dialekt_text": "sakramentsmässig",
    "hochdeutsch": "Synonym: unglaublich, tierisch,"
  },
  {
    "id": 1059,
    "dialekt_text": "ä Fidzele",
    "hochdeutsch": "Badische Masseinheit für „ein ganz kleines Stückchen“"
  },
  {
    "id": 1060,
    "dialekt_text": "Kawenzmonn",
    "hochdeutsch": "riesiger Mann, evtl. mit großem Bauchumfang"
  },
  {
    "id": 1061,
    "dialekt_text": "Morzdrum",
    "hochdeutsch": "korpulente Frau, gemeinhin auch gerne mal als „Waschweib“ bezeichnet"
  },
  {
    "id": 1062,
    "dialekt_text": "mortz Atzventzkrontzkertz",
    "hochdeutsch": "Wort mit 5 „tz“"
  },
  {
    "id": 1063,
    "dialekt_text": "Achduschande",
    "hochdeutsch": "stärker gemeinter Ausruf für „Hoppla“"
  },
  {
    "id": 1064,
    "dialekt_text": "ujuuses",
    "hochdeutsch": "achherrjemine"
  },
  {
    "id": 1065,
    "dialekt_text": "Ulschder",
    "hochdeutsch": "schwerer Wintermantel aus Tuch/Wolle"
  },
  {
    "id": 1066,
    "dialekt_text": "Boddschamber",
    "hochdeutsch": "Nachttopf, franz.: „pot de chambre“"
  },
  {
    "id": 1067,
    "dialekt_text": "(rum-) schugge",
    "hochdeutsch": "(herum-) schubsen"
  },
  {
    "id": 1068,
    "dialekt_text": "ra'bengle",
    "hochdeutsch": "1. herunterpurzeln 2. Baumobst ernten"
  },
  {
    "id": 1069,
    "dialekt_text": "Suuribbel , Süüriwwel",
    "hochdeutsch": "säuerlicher Most, qualitativ nicht ganz aus dem oberen Regalfach"
  },
  {
    "id": 1070,
    "dialekt_text": "Uffsatz schriewe",
    "hochdeutsch": "Aufsatz schreiben (Schulfach „Deutsch“)"
  },
  {
    "id": 1071,
    "dialekt_text": "Hänglmoschd",
    "hochdeutsch": "minderwertiger, streitstiftender Most"
  },
  {
    "id": 1072,
    "dialekt_text": "hängle",
    "hochdeutsch": "streiten"
  },
  {
    "id": 1073,
    "dialekt_text": "pfetzen",
    "hochdeutsch": "kneifen"
  },
  {
    "id": 1074,
    "dialekt_text": "ä Pfetz",
    "hochdeutsch": "eine Kneifzange"
  },
  {
    "id": 1075,
    "dialekt_text": "lehn mer e Mark!",
    "hochdeutsch": "unglaublich, zum Kuckuck! (da leih' mir doch einer eine Mark!)"
  },
  {
    "id": 1076,
    "dialekt_text": "schwätz mer keinfünf Mark in d'Dasch!",
    "hochdeutsch": "Erzähl mir keine Geschichten"
  },
  {
    "id": 1077,
    "dialekt_text": "schwätz kei Babb",
    "hochdeutsch": "red kein Blödsinn"
  },
  {
    "id": 1078,
    "dialekt_text": "pfupfere",
    "hochdeutsch": "sich ärgern („dess pfupfert mi jetz doch!“)"
  },
  {
    "id": 1079,
    "dialekt_text": "fuchse",
    "hochdeutsch": "1. sich ärgern („dess fuchst mi jetz doch!“) 2. Münzspiel an der Hasuwand & Boden"
  },
  {
    "id": 1080,
    "dialekt_text": "uhuuses, do worz pfuuse",
    "hochdeutsch": "Eieiei, das wird noch Ärger geben"
  },
  {
    "id": 1081,
    "dialekt_text": "kiiwiedi",
    "hochdeutsch": "wütend, zornig (wie eine Kuh)"
  },
  {
    "id": 1082,
    "dialekt_text": "(macht mi) ronndeesi",
    "hochdeutsch": "das regt mich tierisch auf"
  },
  {
    "id": 1083,
    "dialekt_text": "zabbeduschder",
    "hochdeutsch": "wirklich sehr dunkel"
  },
  {
    "id": 1084,
    "dialekt_text": "Luffbump'",
    "hochdeutsch": "aufgeblasener Taugenichts"
  },
  {
    "id": 1085,
    "dialekt_text": "Schilleeweschdl-Bruschddiechl",
    "hochdeutsch": "Brusttuch einer Gilet Weste (Mode)"
  },
  {
    "id": 1086,
    "dialekt_text": "blärre",
    "hochdeutsch": "weinen"
  },
  {
    "id": 1087,
    "dialekt_text": "Griewe",
    "hochdeutsch": "ausgelassene Speckwürfel"
  },
  {
    "id": 1088,
    "dialekt_text": "Daig-aff'",
    "hochdeutsch": "eingebildeter Schnösel"
  },
  {
    "id": 1089,
    "dialekt_text": "Hott Vollee",
    "hochdeutsch": "Haute Volé, Elitäres Gesinde"
  },
  {
    "id": 1090,
    "dialekt_text": "durchvor",
    "hochdeutsch": "Richtungsangabe: Das Dorf/Tal vor laufen"
  },
  {
    "id": 1091,
    "dialekt_text": "durchnuff",
    "hochdeutsch": "Richtungsangabe: das Tal in Richtung hintere Ecken durchschreiten"
  },
  {
    "id": 1092,
    "dialekt_text": "dribbernuff",
    "hochdeutsch": "Richtungsangabe: den Hügel hochschreiten"
  },
  {
    "id": 1093,
    "dialekt_text": "dribbernibber",
    "hochdeutsch": "Richtungsangabe: über eine Brücke das Gelände wechseln"
  },
  {
    "id": 1094,
    "dialekt_text": "dribberna'",
    "hochdeutsch": "Richtungsangabe: hinunter, von wo auch immer"
  },
  {
    "id": 1095,
    "dialekt_text": "lädschi",
    "hochdeutsch": "der Salat ist schon etwas „drüber“"
  },
  {
    "id": 1096,
    "dialekt_text": "wieschd",
    "hochdeutsch": "wüst, hässlich"
  },
  {
    "id": 1097,
    "dialekt_text": "än wieschder Grabb",
    "hochdeutsch": "ein hässlicher Vogel, keine attraktive Frau"
  },
  {
    "id": 1098,
    "dialekt_text": "JesmandJosef!",
    "hochdeutsch": "Kurzform: Ausruf der Verzeiflung/Verwunderung: Jesses, Maria und Josef!"
  },
  {
    "id": 1099,
    "dialekt_text": "obbedobbe, owwedowwe",
    "hochdeutsch": "droben"
  },
  {
    "id": 1100,
    "dialekt_text": "Triewle",
    "hochdeutsch": "Träubchen"
  },
  {
    "id": 1101,
    "dialekt_text": "Truuwe",
    "hochdeutsch": "Trauben"
  },
  {
    "id": 1102,
    "dialekt_text": "Gitzelbuhne",
    "hochdeutsch": "Graupel"
  },
  {
    "id": 1103,
    "dialekt_text": "Katze ra g'macht",
    "hochdeutsch": "sehr regnerisch, Schlagwetter"
  },
  {
    "id": 1104,
    "dialekt_text": "Millich-Hiesl",
    "hochdeutsch": "Milchsammelstelle"
  },
  {
    "id": 1105,
    "dialekt_text": "wie ä g'senkte Sau",
    "hochdeutsch": "sehr schnell, Raser"
  },
  {
    "id": 1106,
    "dialekt_text": "Ferz mit Krigge",
    "hochdeutsch": "Blödsinn"
  },
  {
    "id": 1107,
    "dialekt_text": "nimme do sing g'sehne",
    "hochdeutsch": "nicht mehr da"
  },
  {
    "id": 1108,
    "dialekt_text": "Noochg'schwischderking",
    "hochdeutsch": "Neffen & Nichten"
  },
  {
    "id": 1109,
    "dialekt_text": "Noog'schwischderkuhkälbl",
    "hochdeutsch": "Umschreibung einer Person mit sehr komplexen Verwandschaftsverhältnisse"
  },
  {
    "id": 1110,
    "dialekt_text": "leggmi om hemm",
    "hochdeutsch": "Ja, leck mich am Hemd"
  },
  {
    "id": 1111,
    "dialekt_text": "Daagdieb",
    "hochdeutsch": "Gauner"
  },
  {
    "id": 1112,
    "dialekt_text": "Mischdlach fiehre",
    "hochdeutsch": "Mist ausfahren (auf den Acker)"
  },
  {
    "id": 1113,
    "dialekt_text": "Geggerle",
    "hochdeutsch": "(halbes) Hähnchen"
  },
  {
    "id": 1114,
    "dialekt_text": "bräche (z.B. Buhne)",
    "hochdeutsch": "pflücken (z.B. Bohnen)"
  },
  {
    "id": 1115,
    "dialekt_text": "sodde",
    "hochdeutsch": "sollten"
  },
  {
    "id": 1116,
    "dialekt_text": "schiints",
    "hochdeutsch": "wahrscheinlich"
  },
  {
    "id": 1117,
    "dialekt_text": "dozmols",
    "hochdeutsch": "damals"
  },
  {
    "id": 1118,
    "dialekt_text": "allewiel",
    "hochdeutsch": "ständig"
  },
  {
    "id": 1119,
    "dialekt_text": "als",
    "hochdeutsch": "immer"
  },
  {
    "id": 1120,
    "dialekt_text": "alle Dä long",
    "hochdeutsch": "andauernd, jeden Tag"
  },
  {
    "id": 1121,
    "dialekt_text": "ebber",
    "hochdeutsch": "jemand"
  },
  {
    "id": 1122,
    "dialekt_text": "nirnedz",
    "hochdeutsch": "nirgendwo"
  },
  {
    "id": 1123,
    "dialekt_text": "wungerfitzi, wunnerfitzi",
    "hochdeutsch": "neugierig"
  },
  {
    "id": 1124,
    "dialekt_text": "Muggedatscher",
    "hochdeutsch": "Fliegenklatsche"
  },
  {
    "id": 1125,
    "dialekt_text": "Hosseschisser",
    "hochdeutsch": "Angsthase"
  },
  {
    "id": 1126,
    "dialekt_text": "rumfuuchtle",
    "hochdeutsch": "gestikulieren"
  },
  {
    "id": 1127,
    "dialekt_text": "Maidle",
    "hochdeutsch": "Mädchen"
  },
  {
    "id": 1128,
    "dialekt_text": "Zwuggel",
    "hochdeutsch": "kleiner Mensch"
  },
  {
    "id": 1129,
    "dialekt_text": "ä Gugg",
    "hochdeutsch": "eine Tüte"
  },
  {
    "id": 1130,
    "dialekt_text": "adjee",
    "hochdeutsch": "Adieu, Tschüss"
  },
  {
    "id": 1131,
    "dialekt_text": "vergelschdere",
    "hochdeutsch": "jemanden erschrecken"
  },
  {
    "id": 1132,
    "dialekt_text": "debigsisi, debigwä",
    "hochdeutsch": "dabei gewesen sein"
  },
  {
    "id": 1133,
    "dialekt_text": "gsi, gwä",
    "hochdeutsch": "gewesen"
  },
  {
    "id": 1134,
    "dialekt_text": "Pferrschi",
    "hochdeutsch": "Pfirsiche"
  },
  {
    "id": 1135,
    "dialekt_text": "hebe",
    "hochdeutsch": "halten, nicht lupfen"
  },
  {
    "id": 1136,
    "dialekt_text": "hingervürschi",
    "hochdeutsch": "verkehrt herum"
  },
  {
    "id": 1137,
    "dialekt_text": "Erdepfelbabb",
    "hochdeutsch": "Kartoffelbrei"
  },
  {
    "id": 1138,
    "dialekt_text": "ibberzwerch",
    "hochdeutsch": "aus der Reihe tanzend"
  },
  {
    "id": 1139,
    "dialekt_text": "letzrum",
    "hochdeutsch": "verkehrt herum"
  },
  {
    "id": 1140,
    "dialekt_text": "umenondergingele",
    "hochdeutsch": "Arbeit vortäuschen"
  },
  {
    "id": 1141,
    "dialekt_text": "knaue",
    "hochdeutsch": "hinknieen"
  },
  {
    "id": 1142,
    "dialekt_text": "Froschgöschel",
    "hochdeutsch": "Löwenmaul"
  },
  {
    "id": 1143,
    "dialekt_text": "schiebutzi",
    "hochdeutsch": "genieren"
  },
  {
    "id": 1144,
    "dialekt_text": "Gudderle",
    "hochdeutsch": "kleiner Kanister"
  },
  {
    "id": 1145,
    "dialekt_text": "Mädelschmegger",
    "hochdeutsch": "Mädchenschwärmer"
  },
  {
    "id": 1146,
    "dialekt_text": "ä Pfludd",
    "hochdeutsch": "eine stillose blöde Kuh"
  },
  {
    "id": 1147,
    "dialekt_text": "bäffze",
    "hochdeutsch": "jemanden anschnautzen"
  },
  {
    "id": 1148,
    "dialekt_text": "bschnodde",
    "hochdeutsch": "zu enge Kleidung"
  },
  {
    "id": 1149,
    "dialekt_text": "Bätschlach",
    "hochdeutsch": "Wasserpfütze"
  },
  {
    "id": 1150,
    "dialekt_text": "bludd",
    "hochdeutsch": "nackt"
  },
  {
    "id": 1151,
    "dialekt_text": "Hilbetritsche, Elwetritsche",
    "hochdeutsch": "Vogelähnliches Fabelwesen"
  },
  {
    "id": 1152,
    "dialekt_text": "Moo",
    "hochdeutsch": "Mann"
  },
  {
    "id": 1153,
    "dialekt_text": "kroddefalsch",
    "hochdeutsch": "grundverkehrt"
  },
  {
    "id": 1154,
    "dialekt_text": "Glumb",
    "hochdeutsch": "altes Zeug"
  },
  {
    "id": 1155,
    "dialekt_text": "er duurt mi grad",
    "hochdeutsch": "ich bedaure ihn"
  },
  {
    "id": 1156,
    "dialekt_text": "Graddel",
    "hochdeutsch": "Arroganz"
  },
  {
    "id": 1157,
    "dialekt_text": "Acherenemer",
    "hochdeutsch": "Einwohner von Achern"
  },
  {
    "id": 1158,
    "dialekt_text": "Balles",
    "hochdeutsch": "wie Fussball, bloß ohne Regelwerk"
  },
  {
    "id": 1159,
    "dialekt_text": "baffiesi",
    "hochdeutsch": "barfuß"
  },
  {
    "id": 1160,
    "dialekt_text": "binond",
    "hochdeutsch": "beieinander"
  },
  {
    "id": 1161,
    "dialekt_text": "Zudegetz",
    "hochdeutsch": "Bettdecke"
  },
  {
    "id": 1162,
    "dialekt_text": "Bälljer Blosarsch",
    "hochdeutsch": "Fabelwesen aus Balg (bei Baden-Baden)"
  },
  {
    "id": 1163,
    "dialekt_text": "nackerzi",
    "hochdeutsch": "nackt"
  },
  {
    "id": 1164,
    "dialekt_text": "Omlett",
    "hochdeutsch": "Pfannkuchen"
  },
  {
    "id": 1165,
    "dialekt_text": "verklepperte Eier",
    "hochdeutsch": "Omelett"
  },
  {
    "id": 1166,
    "dialekt_text": "obbenuus stie, obbenuus gugge",
    "hochdeutsch": "räumlicher Überstand in die Höhe"
  },
  {
    "id": 1167,
    "dialekt_text": "Honnewaggel",
    "hochdeutsch": "nicht ganz ernstzunehmende Person"
  },
  {
    "id": 1168,
    "dialekt_text": "Ooschdere",
    "hochdeutsch": "Ostern"
  },
  {
    "id": 1169,
    "dialekt_text": "Wiehnaachde",
    "hochdeutsch": "Weihnachten"
  },
  {
    "id": 1170,
    "dialekt_text": "Neijohr",
    "hochdeutsch": "Neujahr"
  },
  {
    "id": 1171,
    "dialekt_text": "neier Karch",
    "hochdeutsch": "neues Auto"
  },
  {
    "id": 1172,
    "dialekt_text": "Oohänger",
    "hochdeutsch": "Anhänger"
  },
  {
    "id": 1173,
    "dialekt_text": "Tschoobes",
    "hochdeutsch": "Jacke"
  },
  {
    "id": 1174,
    "dialekt_text": "allefurzlong",
    "hochdeutsch": "andauernd"
  },
  {
    "id": 1175,
    "dialekt_text": "Moschdkopf",
    "hochdeutsch": "Quadratschädel"
  },
  {
    "id": 1176,
    "dialekt_text": "giegse",
    "hochdeutsch": "quietschen"
  },
  {
    "id": 1177,
    "dialekt_text": "o'g'stoche",
    "hochdeutsch": "Rausch haben"
  },
  {
    "id": 1178,
    "dialekt_text": "ra'bisse",
    "hochdeutsch": "runterbeißen"
  },
  {
    "id": 1179,
    "dialekt_text": "Naijohrsbratschel",
    "hochdeutsch": "Neujahrsbretzel"
  },
  {
    "id": 1180,
    "dialekt_text": "Bratschel",
    "hochdeutsch": "Bretzel"
  },
  {
    "id": 1181,
    "dialekt_text": "Mutschle",
    "hochdeutsch": "Einback in der Weihnachtszeit"
  },
  {
    "id": 1182,
    "dialekt_text": "muulfuul",
    "hochdeutsch": "nicht gerade gesprächig"
  },
  {
    "id": 1183,
    "dialekt_text": "schwätz odder schiß Bustabe!",
    "hochdeutsch": "Rede mit mir!"
  },
  {
    "id": 1184,
    "dialekt_text": "nit huddle",
    "hochdeutsch": "keine Eile haben"
  },
  {
    "id": 1185,
    "dialekt_text": "needi",
    "hochdeutsch": "nötig"
  },
  {
    "id": 1186,
    "dialekt_text": "uuneedi",
    "hochdeutsch": "unnötig"
  },
  {
    "id": 1187,
    "dialekt_text": "mengsch?",
    "hochdeutsch": "meinst Du wirklich?"
  },
  {
    "id": 1188,
    "dialekt_text": "bruddli",
    "hochdeutsch": "unzufrieden sein"
  },
  {
    "id": 1189,
    "dialekt_text": "Hemmglonker",
    "hochdeutsch": "Mensch im Nachthemd"
  },
  {
    "id": 1190,
    "dialekt_text": "ä weng",
    "hochdeutsch": "wenig"
  },
  {
    "id": 1191,
    "dialekt_text": "awuuschdle",
    "hochdeutsch": "im Dreck wühlen"
  },
  {
    "id": 1192,
    "dialekt_text": "arri",
    "hochdeutsch": "sehr"
  },
  {
    "id": 1193,
    "dialekt_text": "Wasserreserwa",
    "hochdeutsch": "Wasservorrat der Gemeinde"
  },
  {
    "id": 1194,
    "dialekt_text": "Schisskribbl",
    "hochdeutsch": "nerviges Kind"
  },
  {
    "id": 1195,
    "dialekt_text": "ä Schlapp",
    "hochdeutsch": "Tratschweib, meist bösartig"
  },
  {
    "id": 1196,
    "dialekt_text": "ä Schletzmatretz",
    "hochdeutsch": "Tratschweib"
  },
  {
    "id": 1197,
    "dialekt_text": "Huuschdeguudsel",
    "hochdeutsch": "Hustenbonbon"
  },
  {
    "id": 1198,
    "dialekt_text": "bäbbigs Guudsel",
    "hochdeutsch": "1. klebriges Bonbon 2. anhängliche Person"
  },
  {
    "id": 1199,
    "dialekt_text": "Schlotzer",
    "hochdeutsch": "Süssigkeit am Stiel"
  },
  {
    "id": 1200,
    "dialekt_text": "schlotze",
    "hochdeutsch": "ablecken"
  },
  {
    "id": 1201,
    "dialekt_text": "Schdimpele",
    "hochdeutsch": "kleiner Stumpen"
  },
  {
    "id": 1202,
    "dialekt_text": "schiine King",
    "hochdeutsch": "gutaussehende, teils goldige Kinder"
  },
  {
    "id": 1203,
    "dialekt_text": "Schlenzer",
    "hochdeutsch": "Riß"
  },
  {
    "id": 1204,
    "dialekt_text": "schlenze",
    "hochdeutsch": "1.etwas aufreißen 2.schlendern"
  },
  {
    "id": 1205,
    "dialekt_text": "schlengere",
    "hochdeutsch": "schlenkern"
  },
  {
    "id": 1206,
    "dialekt_text": "Schlawiddi",
    "hochdeutsch": "Kopfhaar"
  },
  {
    "id": 1207,
    "dialekt_text": "schlombare",
    "hochdeutsch": "unordentlich sein"
  },
  {
    "id": 1208,
    "dialekt_text": "Schlorum",
    "hochdeutsch": "geringschätzig für Habseligkeiten"
  },
  {
    "id": 1209,
    "dialekt_text": "schmecke",
    "hochdeutsch": "riechen"
  },
  {
    "id": 1210,
    "dialekt_text": "Schdubb'",
    "hochdeutsch": "Wohnzimmer"
  },
  {
    "id": 1211,
    "dialekt_text": "Schdrupfer",
    "hochdeutsch": "Schrubber"
  },
  {
    "id": 1212,
    "dialekt_text": "schdupfle",
    "hochdeutsch": "frotzeln, aufrührig"
  },
  {
    "id": 1213,
    "dialekt_text": "schdibarre, abschdibarre",
    "hochdeutsch": "stützen, abstützen"
  },
  {
    "id": 1214,
    "dialekt_text": "Scheeß",
    "hochdeutsch": "Chaise, Transporthilfe, großes Korbgefleicht mit Rädern"
  },
  {
    "id": 1215,
    "dialekt_text": "Märkscheeß",
    "hochdeutsch": "Marktchaise, Transporthilfe,"
  },
  {
    "id": 1216,
    "dialekt_text": "schbränze",
    "hochdeutsch": "gießen"
  },
  {
    "id": 1217,
    "dialekt_text": "Schbicher",
    "hochdeutsch": "Speicher (Lagerort, keine Gigabite)"
  },
  {
    "id": 1218,
    "dialekt_text": "Schbinnhuddel",
    "hochdeutsch": "Spinnennetz, -faden"
  },
  {
    "id": 1219,
    "dialekt_text": "Sackduch",
    "hochdeutsch": "Taschentuch"
  },
  {
    "id": 1220,
    "dialekt_text": "schäbs",
    "hochdeutsch": "krumm, schief"
  },
  {
    "id": 1221,
    "dialekt_text": "Rupfl",
    "hochdeutsch": "ein kekckes Mädchen"
  },
  {
    "id": 1222,
    "dialekt_text": "Brodmehlkuche",
    "hochdeutsch": "Artverwanter vom Flammkuchen, aber mit Kümmel"
  },
  {
    "id": 1223,
    "dialekt_text": "Pläsier",
    "hochdeutsch": "Freude"
  },
  {
    "id": 1224,
    "dialekt_text": "Pfloodsch",
    "hochdeutsch": "schlampige Frau"
  },
  {
    "id": 1225,
    "dialekt_text": "achde",
    "hochdeutsch": "Acht Uhr"
  },
  {
    "id": 1226,
    "dialekt_text": "Käpsele",
    "hochdeutsch": "1. Flaschenverschluß 2. gang gscheiter Mensch"
  },
  {
    "id": 1227,
    "dialekt_text": "Konsch'ebbser",
    "hochdeutsch": "ein geschicklicher, gescheiter Mensch"
  },
  {
    "id": 1228,
    "dialekt_text": "verhunze",
    "hochdeutsch": "schlecht gearbeitet, Ergebnis ist Murks"
  },
  {
    "id": 1229,
    "dialekt_text": "innerli",
    "hochdeutsch": "innerlich"
  },
  {
    "id": 1230,
    "dialekt_text": "d'Itter",
    "hochdeutsch": "die Euter"
  },
  {
    "id": 1231,
    "dialekt_text": "ibberg'schnabbt",
    "hochdeutsch": "verrückt geworden"
  },
  {
    "id": 1232,
    "dialekt_text": "hopse",
    "hochdeutsch": "hüpfen"
  },
  {
    "id": 1233,
    "dialekt_text": "g'scheit, g'steigt",
    "hochdeutsch": "ersteigert, 321... meins!"
  },
  {
    "id": 1234,
    "dialekt_text": "Dissl",
    "hochdeutsch": "Deichsel"
  },
  {
    "id": 1235,
    "dialekt_text": "drille",
    "hochdeutsch": "drehen"
  },
  {
    "id": 1236,
    "dialekt_text": "dräge, dräje",
    "hochdeutsch": "drehen"
  },
  {
    "id": 1237,
    "dialekt_text": "driggle",
    "hochdeutsch": "trocknen"
  },
  {
    "id": 1238,
    "dialekt_text": "drii-ele",
    "hochdeutsch": "verkleckern, tropfen lassen"
  },
  {
    "id": 1239,
    "dialekt_text": "dresche",
    "hochdeutsch": "schlagen (kommt vom Getreide schlagen)"
  },
  {
    "id": 1240,
    "dialekt_text": "diffesill",
    "hochdeutsch": "diffizil"
  },
  {
    "id": 1241,
    "dialekt_text": "dirmli",
    "hochdeutsch": "schwindelig"
  },
  {
    "id": 1242,
    "dialekt_text": "dischber, duschber",
    "hochdeutsch": "Dämmerlicht, recht dunkel"
  },
  {
    "id": 1243,
    "dialekt_text": "Do'riß",
    "hochdeutsch": "Tannenreißig"
  },
  {
    "id": 1244,
    "dialekt_text": "dichsle",
    "hochdeutsch": "steuern, lenken"
  },
  {
    "id": 1245,
    "dialekt_text": "Bubbescheeß",
    "hochdeutsch": "Puppenwagen"
  },
  {
    "id": 1246,
    "dialekt_text": "Kingerscheeß",
    "hochdeutsch": "Kinderwagen"
  },
  {
    "id": 1247,
    "dialekt_text": "brunse",
    "hochdeutsch": "urinieren"
  },
  {
    "id": 1248,
    "dialekt_text": "brosel nit",
    "hochdeutsch": "mach keine Brosamen"
  },
  {
    "id": 1249,
    "dialekt_text": "mir briche",
    "hochdeutsch": "wir brauchen"
  },
  {
    "id": 1250,
    "dialekt_text": "ich brichd",
    "hochdeutsch": "ich bräuchte"
  },
  {
    "id": 1251,
    "dialekt_text": "Bosse mache",
    "hochdeutsch": "Dummheiten machen"
  },
  {
    "id": 1252,
    "dialekt_text": "Bogsgichder",
    "hochdeutsch": "Angstzustände"
  },
  {
    "id": 1253,
    "dialekt_text": "Gichder",
    "hochdeutsch": "Angst"
  },
  {
    "id": 1254,
    "dialekt_text": "Blaffo",
    "hochdeutsch": "Zimmerdecke (frz.: plafond = Decke)"
  },
  {
    "id": 1255,
    "dialekt_text": "abschnabbe",
    "hochdeutsch": "fast sterben"
  },
  {
    "id": 1256,
    "dialekt_text": "ins Schisse mie'ße",
    "hochdeutsch": "seines Stuhlgangs erleichtern"
  },
  {
    "id": 1257,
    "dialekt_text": "Logus, Lokus",
    "hochdeutsch": "Toilette, Abort"
  },
  {
    "id": 1258,
    "dialekt_text": "Abord",
    "hochdeutsch": "Toilette, Lokus"
  },
  {
    "id": 1259,
    "dialekt_text": "zaggere",
    "hochdeutsch": "pflügen"
  },
  {
    "id": 1260,
    "dialekt_text": "zemble",
    "hochdeutsch": "streiten"
  },
  {
    "id": 1261,
    "dialekt_text": "Wackes",
    "hochdeutsch": "großer Stein"
  },
  {
    "id": 1262,
    "dialekt_text": "welle",
    "hochdeutsch": "1. welche? 2. wollen"
  },
  {
    "id": 1263,
    "dialekt_text": "Wochedelbl",
    "hochdeutsch": "Mumps"
  },
  {
    "id": 1264,
    "dialekt_text": "Wurb",
    "hochdeutsch": "Sensegriff"
  },
  {
    "id": 1265,
    "dialekt_text": "Wißwing",
    "hochdeutsch": "Weißwein"
  },
  {
    "id": 1266,
    "dialekt_text": "verzwatzle",
    "hochdeutsch": "verzweifeln"
  },
  {
    "id": 1267,
    "dialekt_text": "lehre",
    "hochdeutsch": "lernen („Was lehre denn dir in dr Schul?!“)"
  },
  {
    "id": 1268,
    "dialekt_text": "verroozelt",
    "hochdeutsch": "angebrannt"
  },
  {
    "id": 1269,
    "dialekt_text": "verkassemaduggle",
    "hochdeutsch": "Regelwerk erklären"
  },
  {
    "id": 1270,
    "dialekt_text": "verblembere",
    "hochdeutsch": "vergeuden"
  },
  {
    "id": 1271,
    "dialekt_text": "verhutzlt",
    "hochdeutsch": "ausgetrocknet"
  },
  {
    "id": 1272,
    "dialekt_text": "verläbbere",
    "hochdeutsch": "Wasser oder Most vergeuden, verkleckern"
  },
  {
    "id": 1273,
    "dialekt_text": "dodazunuus",
    "hochdeutsch": "hinaus"
  },
  {
    "id": 1274,
    "dialekt_text": "ummoddle",
    "hochdeutsch": "umändern"
  },
  {
    "id": 1275,
    "dialekt_text": "uh-längschd",
    "hochdeutsch": "vor kurzem"
  },
  {
    "id": 1276,
    "dialekt_text": "uffmuggse",
    "hochdeutsch": "aufmüpfig"
  },
  {
    "id": 1277,
    "dialekt_text": "uuf'gmutzt",
    "hochdeutsch": "aufgeputzt"
  },
  {
    "id": 1278,
    "dialekt_text": "uff'gschieft",
    "hochdeutsch": "aufhetzen"
  },
  {
    "id": 1279,
    "dialekt_text": "uff der Sau fort ritte",
    "hochdeutsch": "unerträglich, macht mich wütend"
  },
  {
    "id": 1280,
    "dialekt_text": "verbrunse",
    "hochdeutsch": "aus dem Staub machen"
  },
  {
    "id": 1281,
    "dialekt_text": "u'gschbitzt",
    "hochdeutsch": "ungespitzt (in den Boden schlagen)"
  },
  {
    "id": 1282,
    "dialekt_text": "Gnoodscher",
    "hochdeutsch": "sehr langsam arbeitende Mensch"
  },
  {
    "id": 1283,
    "dialekt_text": "kei Fiduz",
    "hochdeutsch": "keinen Mut"
  },
  {
    "id": 1284,
    "dialekt_text": "Weschbls'neschd",
    "hochdeutsch": "Wespennest"
  },
  {
    "id": 1285,
    "dialekt_text": "Pfiffedeggel",
    "hochdeutsch": "durchtriebener Mensch"
  },
  {
    "id": 1286,
    "dialekt_text": "Bardl",
    "hochdeutsch": "„der“ Bartl - wo anderen zeigt, wo man den Most holt"
  },
  {
    "id": 1287,
    "dialekt_text": "Hau hunge",
    "hochdeutsch": "Ermahnung zum still sein"
  },
  {
    "id": 1288,
    "dialekt_text": "gebrennte Mehlsupp'",
    "hochdeutsch": "Armenessen (wirklich arm)"
  }
];

if (typeof module !== 'undefined') module.exports = WOERTERBUCH;
