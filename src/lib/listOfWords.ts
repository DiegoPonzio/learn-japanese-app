import { toHiragana } from 'wanakana';

const listOfWords = [
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

export const getRandomWord = () => {
    return listOfWords[Math.floor(Math.random() * listOfWords.length)];
}

export const romanjiToHiragana = (romanji: string, hiragana: string) => {
    const hiraganaOutput = toHiragana(romanji);

    return hiraganaOutput === hiragana;
}