import jieba from '@node-rs/jieba'

function probably(probability: number) : boolean {
    return Math.random() < probability
}

function convertWord(word: string, tag: string, level: number) : string {
    if (!probably(level)) {
        return word
    }
    if (['，', ',', '。'].includes(word)) {
        return '……'
    }
    if (['!', '！'].includes(word)) {
        return '❤'
    }
    if (word.length > 1 && probably(level)) {
        return word[0] + '……' + word
    }
    if (tag === 'n' && probably(level)) {
        return word.replace(/./g, '〇')
    }
    return '……' + word
}

export function chs2yin(sentence: string, level: number = 0.75) {
    return jieba.tag(sentence).map(word => convertWord(word.word, word.tag, level)).join('')
}

console.log(chs2yin('吃葡萄不吐葡萄皮。'))