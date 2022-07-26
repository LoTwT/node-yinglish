import jieba from '@node-rs/jieba'

function probably(probability: number) : boolean {
    return Math.random() < probability
}

const fragments = {
    get ellipsis() {
        return probably(0.5) ? '...' : '......'
    },
    get emoji() {
        const emojis = ['😍', '❤', '🥺', '🥵', '🥰']
        const index = Math.floor(Math.random() * 5)
        return emojis[index]
    }
}

function convertWord(word: string, tag: string, level: number) : string {
    if (!probably(level)) {
        return word
    }
    word = word.replace(/,|，|。/g, fragments.ellipsis).replace(/!|！/g, '❤')
    if (tag === 'x') {
        return word
    }
    if (tag === 'n' && probably(level)) {
        return word.replace(/./g, '〇')
    }
    if (tag === 'v' && probably(level)) {
        return word + fragments.emoji
    }
    return word[0] + fragments.ellipsis + word
}

export function chs2yin(sentence: string, level: number = 0.5) {
    return jieba.tag(sentence).map(word => convertWord(word.word, word.tag, level)).join('')
}
