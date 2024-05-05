export const normalizeText = (inputString: string): string => {
    const regex: RegExp = /[čšžťľťďäáéíĺňóôöőúýů]/g
    const charMap: { [key: string]: string } = {
        č: 'c',
        š: 's',
        ž: 'z',
        ť: 't',
        ľ: 'l',
        ď: 'd',
        ä: 'a',
        á: 'a',
        é: 'e',
        í: 'i',
        ĺ: 'l',
        ň: 'n',
        ó: 'o',
        ô: 'o',
        ö: 'o',
        ő: 'o',
        ú: 'u',
        ý: 'y',
        ů: 'u',
    }

    return inputString.replace(regex, (match) => charMap[match])
}