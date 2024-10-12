import * as readline from 'node:readline/promises';
import{exit, stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

function oppervlaktevierkant(zijde,){
    let oppervlakte = zijde * zijde;
    return oppervlakte

}

console.log(oppervlaktevierkant(5));