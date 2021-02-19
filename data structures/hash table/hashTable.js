class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, val]);
  }

  //         set(key, val) {
  //             let index = this._hash(key);
  //             const keyMap = this.keyMap;
  // //             if(keyMap.includes(key)) return 'Key aldready exists';
  //             keyMap.includes(key)
  // //             console.log(keyMap.includes(key))
  //             if(!keyMap[index]) {
  //                 keyMap[index] = []
  //             }
  //             keyMap[index].push([key, val])
  //         }

  get(key) {
    let index = this._hash(key);
    const idx = this.keyMap[index];
    if (idx) {
      for (let i = 0; i < idx.length; i++) {
        if (idx[i][0] === key) return idx[i][1];
      }
    }
    return undefined;
  }

  values() {
    let valArr = [];
    const keyMap = this.keyMap;
    for (let i = 0; i < keyMap.length; i++) {
      if (keyMap[i]) {
        for (let j = 0; j < keyMap[i].length; j++) {
          if (!valArr.includes(keyMap[i][j][1])) {
            valArr.push(keyMap[i][j][1]);
          }
        }
      }
    }
    return valArr;
  }

  keys() {
    let keysArr = [];
    const keyMap = this.keyMap;
    for (let i = 0; i < keyMap.length; i++) {
      if (keyMap[i]) {
        for (let j = 0; j < keyMap[i].length; j++) {
          if (!keysArr.includes(keyMap[i][j][0])) {
            keysArr.push(keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable(8);
ht.set("lol", 1);
ht.set("cheque", 2);
ht.set("solve-problems", 3);
ht.set("lunch", 4);
ht.set("timepass", 5);
// ht.set("purple", 5)
