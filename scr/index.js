const Parser = require('./parser');
const FileMenage = require("./fileMenage");

const PATH_IN = __dirname + "/../in/";
const PATH_OUT = __dirname + '/../out/';

const fileMenage = FileMenage(); 
const parser = Parser();

parser.init(fileMenage.read(PATH_IN));
parser.get((name, data) => fileMenage.write(PATH_OUT, name, data));