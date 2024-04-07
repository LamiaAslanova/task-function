let mebleg = parseFloat(prompt("Kredit mebleğini daxil edin:"))
let muddet = parseFloat(prompt("Kredit müddətini daxil edin:"))

function hesab(muddet, mebleg) {

    let ayliqMebleg = parseInt(mebleg / muddet)
    let sonAyFerqi = mebleg - (ayliqMebleg * (muddet - 1))
    let odenisler = [0]

    for (let i = 0; i < muddet - 1; i++) {
        odenisler[i] = ayliqMebleg
    }

    odenisler[muddet - 1] = sonAyFerqi

    return odenisler
}

let odenisler = hesab(muddet, mebleg)
let odenislerNeticeString = ""

for (let i = 0; i < odenisler.length; i++) {
    odenislerNeticeString += `${i + 1}-ci ay: ${odenisler[i]} manat\n`
}

alert(odenislerNeticeString)