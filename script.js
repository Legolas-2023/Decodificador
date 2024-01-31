let area1 = document.getElementById('text_enter');
let area2 = document.getElementById('area');
let btcopiar = document.getElementById('btn_copy');
let remover = document.getElementById('group');

   
function criptografar(){
    if(area1.value == ''){
        alert('Insira algum texto a ser criptografado!');
    }else if(/^[a-z][a-z\s]*$/i.test(area1.value) === false){
        alert('Insira apenas letras minúsculas e sem acento.')
        area1.value = '';
        return;
    }else{
        btcopiar.style.display = 'block';
        remover.style.display = 'none';
        let text = area1.value.toLowerCase();
        const words = {
            a: "ai",
            e: "enter",
            i: "imes",
            o: "ober",
            u: "ufat",
        };

        const reg = new RegExp(Object.keys(words).join("|"), "g");
        let result = text.replaceAll(reg, (matched) => words[matched]);
        area2.innerHTML = result;
    }
    return check
}

function descriptografar(){
    let text = area1.value.toLowerCase();
    const words2 = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u",
    };
    const reg = new RegExp(Object.keys(words2).join("|"), "g");
    let result2 = text.replaceAll(reg, (matched) => words2[matched]);
    area2.innerHTML = result2;
}

function copiar(){
    let copyText = area2;
    navigator.clipboard.writeText(copyText.value).then(copiar => alert("Texto copiado para a área de transferência."));
    area1.value = '';
};
