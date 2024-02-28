let getText = () => {
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    num1 = (Math.random() * 10).toFixed(0)
    text = ''
    for (let i = 0; i < num1; i++) {
        let num = (Math.random() * 25).toFixed(0)
        text += alpha[num]
    }
    return (text)
}

let GeneratePara = () => {
    let x = Number(document.getElementById("input").value)
    text = ''
    for (let i = 0; i < x; i++) {
        text += getText()
        text += ' '
    }
    const p = document.createElement('p')
    p.innerText = text
    para.append(p)
}

GeneratePara()