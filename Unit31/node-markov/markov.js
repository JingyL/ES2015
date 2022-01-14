/** Textual markov chain generator */

const { text } = require("stream/consumers");


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let dict = {}
    for (let i = 0; i < this.words.length - 2; i++){
        if (!dict.hasOwnProperty(this.words[i])){
            dict[this.words[i]] = [this.words[i + 1] || null]
        }else{
            if (!dict[this.words[i]].includes(this.words[i + 1])){
                dict[this.words[i]].push(this.words[i + 1] || null)
            }
        }
    }
    console.log(dict);
    return dict
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let dict = this.makeChains()
    let str = ""
    for (let i = 0; i < numWords - 1; i++){
        let randomNum = Math.floor(Math.random() * (Object.keys(dict).length - 1))
        let word = Object.keys(dict)[randomNum]
        str += ` ${word}`
        let randomAfterword = Math.floor(Math.random() * (dict[word].length-1))
        if (dict[word][randomAfterword] === null){
            return str
        }else{
            str += ` ${dict[word][randomAfterword]}`
        }
    }
    console.log(str);
    return str
  }
}

module.exports = {
    MarkovMachine
  };