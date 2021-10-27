const fs = require('fs');

module.exports = function () {
    
    /** FUNKCJA WCZYTUJE SŁOWNKI Z KATALOGU
     * 
     * @param {string} path SCIEŻKA KATALOGU
     * @returns ZWRACA MAPE WCZYTANYCH SŁOWNIKÓW 
     */
    function read(path) {
        const langMap = new Map();

        /** FUNKCJA ZWRACA JAKIE MAMY PLIKI W KATALOGU */
        const readFromDir = (path) => fs.readdirSync(path).filter(file => file.endsWith('.txt'));
        /** FUNKCJA ZWRACA ZAWARTOŚĆ PLIKU */
        const readFromFile = (path) => fs.readFileSync(path).toString();

        for(const file of readFromDir(path)) {
            const name = (`${file}`).replace(".txt", "");
            langMap.set(name, readFromFile(path + file));
        }

        return langMap;
    }

    /** FUNKCJA KONWERTUJE DANE ZAPISUJĄC JE W PLIKU JSON
     * 
     * @param {*} path ŚCIEŻKA DO KATALOGU
     * @param {*} name NAZWA NOWEGO PLIKU
     * @param {*} data ZAWARTOŚĆ NOWEGO PLIKU
     */
    function write(path, name, data) {
        const json = JSON.stringify(data);
        fs.writeFileSync(path + name + '.json', json);
    }

    return {
        read,
        write
    }
}