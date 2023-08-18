import { toHiragana } from 'wanakana';

interface HiraganaExample {
    japanese: string;
    romanji: string;
    espanol: string;
}

const listOfWords: string[] = [
    "こにしわ",
    'すし',
    'ください',
    'ごはん',
    'と',
    'みず',
    'おちゃ',
    'うし',
    'かっこいい',
    'べんごし',
    'いしゃ',
    'せんせい',
    'やさしい',
    'ひと',
    'かさ',
    'どうぞよろしく',
    'こんばんは',
    'じゃあね',
    'またあした',
    'あたま',
    'かお',
    'みみ',
    'くび',
    'あか',
    'うみ',
    'えみ',
    'こんにちわ',
    'いか',
    'かた',
    'いえ',
    'かみ',
    'すこし',
    'ここ',
    'あき',
    'さい',
    'すき',
    'きた',
    'えん',
    'ゆき',
    'つき',
    'こし',
    'あさ',
    'いす',
    'しあい',
    'ちかい',
    'ゆり',
    'はし',
    'はな',
    'たかい',
    'しま'
]

const listOfWords2 : HiraganaExample[] = [
        {
            "japanese": "あか",
            "romanji": "aka",
            "espanol": "rojo"
        },
        {
            "japanese": "あお",
            "romanji": "ao",
            "espanol": "azul"
        },
        {
            "japanese": "あかるい",
            "romanji": "akarui",
            "espanol": "brillante"
        },
        {
            "japanese": "いちご",
            "romanji": "ichigo",
            "espanol": "fresa"
        },
        {
            "japanese": "いえ",
            "romanji": "ie",
            "espanol": "casa"
        },
        {
            "japanese": "いろ",
            "romanji": "iro",
            "espanol": "color"
        },
        {
            "japanese": "うみ",
            "romanji": "umi",
            "espanol": "mar"
        },
        {
            "japanese": "うた",
            "romanji": "uta",
            "espanol": "canción"
        },
        {
            "japanese": "うつ",
            "romanji": "utsu",
            "espanol": "deprimir"
        },
        {
            "japanese": "えんぴつ",
            "romanji": "enpitsu",
            "espanol": "lápiz"
        },
        {
            "japanese": "えき",
            "romanji": "eki",
            "espanol": "estación de tren"
        },
        {
            "japanese": "えいご",
            "romanji": "eigo",
            "espanol": "inglés (idioma)"
        },
        {
            "japanese": "おおきい",
            "romanji": "ookii",
            "espanol": "grande"
        },
        {
            "japanese": "おかね",
            "romanji": "okane",
            "espanol": "dinero"
        },
        {
            "japanese": "おとうさん",
            "romanji": "otousan",
            "espanol": "papá"
        },
        {
            "japanese": "かさ",
            "romanji": "kasa",
            "espanol": "paraguas"
        },
        {
            "japanese": "かわ",
            "romanji": "kawa",
            "espanol": "río"
        },
        {
            "japanese": "かみ",
            "romanji": "kami",
            "espanol": "papel"
        },
        {
            "japanese": "きいろ",
            "romanji": "kiiro",
            "espanol": "amarillo"
        },
        {
            "japanese": "きんぎょ",
            "romanji": "kingyo",
            "espanol": "pez dorado"
        },
        {
            "japanese": "きょう",
            "romanji": "kyou",
            "espanol": "hoy"
        },
        {
            "japanese": "くるま",
            "romanji": "kuruma",
            "espanol": "coche"
        },
        {
            "japanese": "くつ",
            "romanji": "kutsu",
            "espanol": "zapatos"
        },
        {
            "japanese": "くち",
            "romanji": "kuchi",
            "espanol": "boca"
        },
        {
            "japanese": "けいたい",
            "romanji": "keitai",
            "espanol": "teléfono móvil"
        },
        {
            "japanese": "けっこん",
            "romanji": "kekkon",
            "espanol": "matrimonio"
        },
        {
            "japanese": "けしき",
            "romanji": "keshiki",
            "espanol": "paisaje"
        },
        {
            "japanese": "こども",
            "romanji": "kodomo",
            "espanol": "niño"
        },
        {
            "japanese": "こうちゃ",
            "romanji": "koucha",
            "espanol": "té negro"
        },
        {
            "japanese": "こたえ",
            "romanji": "kotae",
            "espanol": "respuesta"
        },
        {
            "japanese": "さくらんぼ",
            "romanji": "sakuranbo",
            "espanol": "cereza"
        },
        {
            "japanese": "さかな",
            "romanji": "sakana",
            "espanol": "pescado"
        },
        {
            "japanese": "さんぽ",
            "romanji": "sanpo",
            "espanol": "paseo"
        },
        {
            "japanese": "しお",
            "romanji": "shio",
            "espanol": "sal"
        },
        {
            "japanese": "しちょう",
            "romanji": "shichou",
            "espanol": "alcalde"
        },
        {
            "japanese": "しんぶん",
            "romanji": "shinbun",
            "espanol": "periódico"
        },
        {
            "japanese": "すいか",
            "romanji": "suika",
            "espanol": "sandía"
        },
        {
            "japanese": "すき",
            "romanji": "suki",
            "espanol": "gustar"
        },
        {
            "japanese": "すうがく",
            "romanji": "suugaku",
            "espanol": "matemáticas"
        },
        {
            "japanese": "せんせい",
            "romanji": "sensei",
            "espanol": "profesor"
        },
        {
            "japanese": "せんたく",
            "romanji": "sentaku",
            "espanol": "lavado (ropa)"
        },
        {
            "japanese": "せかい",
            "romanji": "sekai",
            "espanol": "mundo"
        },
        {
            "japanese": "そら",
            "romanji": "sora",
            "espanol": "cielo"
        },
        {
            "japanese": "そと",
            "romanji": "soto",
            "espanol": "afuera"
        },
        {
            "japanese": "そうじ",
            "romanji": "souji",
            "espanol": "limpieza"
        },
        {
            "japanese": "たいふう",
            "romanji": "taifuu",
            "espanol": "tifón"
        },
        {
            "japanese": "たけ",
            "romanji": "take",
            "espanol": "bambú"
        },
        {
            "japanese": "たんじょうび",
            "romanji": "tanjoubi",
            "espanol": "cumpleaños"
        },
        {
            "japanese": "ちいさい",
            "romanji": "chiisai",
            "espanol": "pequeño"
        },
        {
            "japanese": "ちゅうしゃ",
            "romanji": "chuusha",
            "espanol": "estacionamiento"
        },
        {
            "japanese": "ちかてつ",
            "romanji": "chikatetsu",
            "espanol": "metro"
        },
        {
            "japanese": "つき",
            "romanji": "tsuki",
            "espanol": "luna"
        },
        {
            "japanese": "つくえ",
            "romanji": "tsukue",
            "espanol": "escritorio"
        },
        {
            "japanese": "つめたい",
            "romanji": "tsumetai",
            "espanol": "frío (al tacto)"
        },
        {
            "japanese": "てがみ",
            "romanji": "tegami",
            "espanol": "carta (correo)"
        },
        {
            "japanese": "てんき",
            "romanji": "tenki",
            "espanol": "clima"
        },
        {
            "japanese": "てつ",
            "romanji": "tetsu",
            "espanol": "hierro"
        },
        {
            "japanese": "とけい",
            "romanji": "tokei",
            "espanol": "reloj"
        },
        {
            "japanese": "とき",
            "romanji": "toki",
            "espanol": "tiempo"
        },
        {
            "japanese": "とうきょう",
            "romanji": "toukyou",
            "espanol": "Tokio"
        },
        {
            "japanese": "なつ",
            "romanji": "natsu",
            "espanol": "verano"
        },
        {
            "japanese": "なまえ",
            "romanji": "namae",
            "espanol": "nombre"
        },
        {
            "japanese": "なみ",
            "romanji": "nami",
            "espanol": "ola"
        },
        {
            "japanese": "にく",
            "romanji": "niku",
            "espanol": "carne"
        },
        {
            "japanese": "にほん",
            "romanji": "nihon",
            "espanol": "Japón"
        },
        {
            "japanese": "にちようび",
            "romanji": "nichiyoubi",
            "espanol": "domingo"
        },
        {
            "japanese": "ぬま",
            "romanji": "numa",
            "espanol": "pantano"
        },
        {
            "japanese": "ぬくもり",
            "romanji": "nukumori",
            "espanol": "calor (sensación)"
        },
        {
            "japanese": "ぬける",
            "romanji": "nukeru",
            "espanol": "salir"
        },
        {
            "japanese": "ねこ",
            "romanji": "neko",
            "espanol": "gato"
        },
        {
            "japanese": "ねた",
            "romanji": "neta",
            "espanol": "chiste"
        },
        {
            "japanese": "ねつ",
            "romanji": "netsu",
            "espanol": "fiebre"
        },
        {
            "japanese": "のみもの",
            "romanji": "nomimono",
            "espanol": "bebida"
        },
        {
            "japanese": "のり",
            "romanji": "nori",
            "espanol": "alga nori"
        },
        {
            "japanese": "のる",
            "romanji": "noru",
            "espanol": "subir"
        },
        {
            "japanese": "はな",
            "romanji": "hana",
            "espanol": "flor"
        },
        {
            "japanese": "はし",
            "romanji": "hashi",
            "espanol": "palillos"
        },
        {
            "japanese": "はやい",
            "romanji": "hayai",
            "espanol": "rápido"
        },
        {
            "japanese": "ひこうき",
            "romanji": "hikouki",
            "espanol": "avión"
        },
        {
            "japanese": "ひる",
            "romanji": "hiru",
            "espanol": "mediodía"
        },
        {
            "japanese": "ひと",
            "romanji": "hito",
            "espanol": "persona"
        },
        {
            "japanese": "ふく",
            "romanji": "fuku",
            "espanol": "ropa"
        },
        {
            "japanese": "ふじさん",
            "romanji": "fujisan",
            "espanol": "Monte Fuji"
        },
        {
            "japanese": "ふゆ",
            "romanji": "fuyu",
            "espanol": "invierno"
        },
        {
            "japanese": "へや",
            "romanji": "heya",
            "espanol": "habitación"
        },
        {
            "japanese": "へた",
            "romanji": "heta",
            "espanol": "torpe"
        },
        {
            "japanese": "へん",
            "romanji": "hen",
            "espanol": "extraño"
        },
        {
            "japanese": "ほし",
            "romanji": "hoshi",
            "espanol": "estrella"
        },
        {
            "japanese": "ほん",
            "romanji": "hon",
            "espanol": "libro"
        },
        {
            "japanese": "ほんとう",
            "romanji": "hontou",
            "espanol": "verdad"
        },
        {
            "japanese": "まど",
            "romanji": "mado",
            "espanol": "ventana"
        },
        {
            "japanese": "まち",
            "romanji": "machi",
            "espanol": "ciudad"
        },
        {
            "japanese": "まるい",
            "romanji": "marui",
            "espanol": "redondo"
        },
        {
            "japanese": "みず",
            "romanji": "mizu",
            "espanol": "agua"
        },
        {
            "japanese": "みせ",
            "romanji": "mise",
            "espanol": "tienda"
        },
        {
            "japanese": "みち",
            "romanji": "michi",
            "espanol": "camino"
        },
        {
            "japanese": "むし",
            "romanji": "mushi",
            "espanol": "insecto"
        },
        {
            "japanese": "むずかしい",
            "romanji": "muzukashii",
            "espanol": "difícil"
        },
        {
            "japanese": "むらさき",
            "romanji": "murasaki",
            "espanol": "morado"
        },
        {
            "japanese": "め",
            "romanji": "me",
            "espanol": "ojo"
        },
        {
            "japanese": "めがね",
            "romanji": "megane",
            "espanol": "anteojos"
        },
        {
            "japanese": "めだま",
            "romanji": "medama",
            "espanol": "pupila"
        },
        {
            "japanese": "もも",
            "romanji": "momo",
            "espanol": "durazno"
        },
        {
            "japanese": "もくようび",
            "romanji": "mokuyoubi",
            "espanol": "jueves"
        },
        {
            "japanese": "もち",
            "romanji": "mochi",
            "espanol": "pastel de arroz"
        },
        {
            "japanese": "やま",
            "romanji": "yama",
            "espanol": "montaña"
        },
        {
            "japanese": "やさい",
            "romanji": "yasai",
            "espanol": "verduras"
        },
        {
            "japanese": "やさいせん",
            "romanji": "yasaisen",
            "espanol": "ensalada"
        },
        {
            "japanese": "ゆき",
            "romanji": "yuki",
            "espanol": "nieve"
        },
        {
            "japanese": "ゆび",
            "romanji": "yubi",
            "espanol": "dedo"
        },
        {
            "japanese": "ゆめ",
            "romanji": "yume",
            "espanol": "sueño"
        },
        {
            "japanese": "よる",
            "romanji": "yoru",
            "espanol": "noche"
        },
        {
            "japanese": "よく",
            "romanji": "yoku",
            "espanol": "bien"
        },
        {
            "japanese": "よわい",
            "romanji": "yowai",
            "espanol": "débil"
        },
        {
            "japanese": "らいねん",
            "romanji": "rainen",
            "espanol": "próximo año"
        },
        {
            "japanese": "らく",
            "romanji": "raku",
            "espanol": "cómodo"
        },
        {
            "japanese": "らいがっき",
            "romanji": "raigakki",
            "espanol": "semestre próximo"
        },
        {
            "japanese": "りんご",
            "romanji": "ringo",
            "espanol": "manzana"
        },
        {
            "japanese": "りょうり",
            "romanji": "ryouri",
            "espanol": "cocina (comida)"
        },
        {
            "japanese": "りょこう",
            "romanji": "ryokou",
            "espanol": "viaje"
        },
        {
            "japanese": "るす",
            "romanji": "rusu",
            "espanol": "ausente"
        },
        {
            "japanese": "るい",
            "romanji": "rui",
            "espanol": "categoría"
        },
        {
            "japanese": "るびー",
            "romanji": "rubii",
            "espanol": "ruby"
        },
        {
            "japanese": "れきし",
            "romanji": "rekishi",
            "espanol": "historia"
        },
        {
            "japanese": "れんしゅう",
            "romanji": "renshuu",
            "espanol": "práctica"
        },
        {
            "japanese": "れつ",
            "romanji": "retsu",
            "espanol": "fila"
        },
        {
            "japanese": "ろうそく",
            "romanji": "rousoku",
            "espanol": "vela"
        },
        {
            "japanese": "ろく",
            "romanji": "roku",
            "espanol": "seis"
        },
        {
            "japanese": "ろんぶん",
            "romanji": "ronbun",
            "espanol": "ensayo"
        },
        {
            "japanese": "わかい",
            "romanji": "wakai",
            "espanol": "joven"
        },
        {
            "japanese": "わたし",
            "romanji": "watashi",
            "espanol": "yo"
        },
        {
            "japanese": "わらう",
            "romanji": "warau",
            "espanol": "reír"
        },
        {
            "japanese": "を",
            "romanji": "wo",
            "espanol": "partícula de objeto"
        },
        {
            "japanese": "をる",
            "romanji": "woru",
            "espanol": "trabajar"
        },
        {
            "japanese": "をん",
            "romanji": "won",
            "espanol": "won (moneda surcoreana)"
        },
        {
            "japanese": "んま",
            "romanji": "nma",
            "espanol": "terminar"
        },
        {
            "japanese": "んちゅう",
            "romanji": "nchuu",
            "espanol": "insecto"
        },
        {
            "japanese": "んばん",
            "romanji": "nban",
            "espanol": "noche"
        }
];

export const getRandomWord = () => {
    return listOfWords[Math.floor(Math.random() * listOfWords.length)];
}

export const getRandomWordNMeaning = () => {
    return listOfWords2[Math.floor(Math.random() * listOfWords.length)];
}

export const romanjiToHiragana = (romanji: string, hiragana: string) => {
    const hiraganaOutput = toHiragana(romanji);

    return hiraganaOutput === hiragana;
}