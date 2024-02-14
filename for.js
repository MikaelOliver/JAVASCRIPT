for (let i = 0; i < 10; i++) {
    console.log(i);
}

let meuArrey = ['a', 'e', 'i', 'o', 'u']

for (let i = 0; i < meuArrey.length; i++){
    if(meuArrey[i] === 'i'){
        continue;
    }
    if(meuArrey[i] === 'o'){
        break
    }
    console.log(meuArrey[i])
}