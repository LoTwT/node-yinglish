import jieba from '@node-rs/jieba'

function probably(probability: number) : boolean {
    return Math.random() < probability
}

function getEllipsis() {
    return probably(0.5) ? '...' : '......'
}

function getEmoji() : string {
    const emojis = ['😍', '❤', '🥺', '🥵', '🥰']
    const index = Math.floor(Math.random() * 5)
    return emojis[index]
}

function convertWord(word: string, tag: string, level: number) : string {
    if (!probably(level)) {
        return word
    }
    word = word.replace(/,|，|。/g, getEllipsis()).replace(/!|！/g, '❤')
    if (tag === 'x') {
        return word
    }
    if (word.length > 1 && probably(level)) {
        return word[0] + getEllipsis() + word
    }
    if (tag === 'n' && probably(level)) {
        return word.replace(/./g, '〇')
    }
    if (tag === 'v' && probably(level)) {
        return word + getEmoji()
    }
    return getEllipsis() + word
}

export function chs2yin(sentence: string, level: number = 0.5) {
    return jieba.tag(sentence).map(word => convertWord(word.word, word.tag, level)).join('')
}
