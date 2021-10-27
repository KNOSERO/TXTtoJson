module.exports = function() {

    //MAPA TABLIC SŁÓW
    const langMap = new Map();

    /** FUNKCJA ZARZĄDZA JAK MA DZIAŁAĆ DLA KAŻDEGO JEZYKA
     * 
     * @param {*} name 
     * @param {*} data 
     * @returns 
     */
    function _parser(name, data) {
        switch(name) {
            case 'pl-pl':
                return data.split('\r\n').join(', ').split(', ');
            default:
                return data;
        }
    }

    /** POBIERA WSZYSTKIE KLUCZE Z OBIEKTU MAP
     * 
     * @param {*} lang 
     * @param {*} callback 
     */
    function _getKey(lang, callback) {
        for(const key of [...lang.keys() ]) {
            callback(key);
        }
    }

    /** FUNKCJA PRZYJMUJE MAPE STRINGÓW SŁOWNIKÓW I ZAPISUJE JĄ W PAMIĘCI MAPE TABLIC SŁÓW
     * 
     * @param {*} lang PRZYJMUJE SŁOWNIKI W POSTACI OBIEKTU MAP
     */
    function init(lang) {
        _getKey(lang, (key) => {
            langMap.set(key, _parser(key, lang.get(key)));
        });
    }

    /** FUNKCJA ZWRACAJĄCA POJEDYNCZO SŁOWNIKI POPRZEZ CALLBACK
     * 
     * @param {*} callback FUNKCJA PRZYJMUJĄCA NAZWE ORAZ DANE 
     */
    function get(callback) {
        _getKey(langMap, (key) => {
            callback(key, langMap.get(key));
        });        
    }

    return {
        init,
        get
    }
}