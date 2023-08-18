

interface HiraganaCharacter {
    japanese: string;
    romanji: string;
    example?: HiraganaExample[];
}

interface HiraganaExample {
    japanese: string;
    romanji: string;
    espanol: string;
}

const hiragana : HiraganaCharacter[] = [
    {
        "japanese": "あ",
        "romanji": "a",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "い",
        "romanji": "i",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "う",
        "romanji": "u",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "え",
        "romanji": "e",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "お",
        "romanji": "o",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "か",
        "romanji": "ka",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "き",
        "romanji": "ki",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "く",
        "romanji": "ku",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "け",
        "romanji": "ke",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "こ",
        "romanji": "ko",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "さ",
        "romanji": "sa",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "し",
        "romanji": "shi",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "す",
        "romanji": "su",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "せ",
        "romanji": "se",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "そ",
        "romanji": "so",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "た",
        "romanji": "ta",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "ち",
        "romanji": "chi",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "つ",
        "romanji": "tsu",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "て",
        "romanji": "te",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "と",
        "romanji": "to",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "な",
        "romanji": "na",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "に",
        "romanji": "ni",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "ぬ",
        "romanji": "nu",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "ね",
        "romanji": "ne",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "の",
        "romanji": "no",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "は",
        "romanji": "ha",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "ひ",
        "romanji": "hi",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "ふ",
        "romanji": "fu",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "へ",
        "romanji": "he",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "ほ",
        "romanji": "ho",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "ま",
        "romanji": "ma",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "み",
        "romanji": "mi",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "む",
        "romanji": "mu",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "め",
        "romanji": "me",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "も",
        "romanji": "mo",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "や",
        "romanji": "ya",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "ゆ",
        "romanji": "yu",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "よ",
        "romanji": "yo",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "ら",
        "romanji": "ra",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "り",
        "romanji": "ri",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "る",
        "romanji": "ru",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "れ",
        "romanji": "re",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "ろ",
        "romanji": "ro",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "わ",
        "romanji": "wa",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "を",
        "romanji": "wo",
        "example": [
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
            }
        ]
    },
    {
        "japanese": "ん",
        "romanji": "n",
        "example": [
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
        ]
    }
]

