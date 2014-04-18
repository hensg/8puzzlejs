/**
 * Created by henrique on 18/04/14.
 */

function ehFinal(img) {
    return (ehFinal1(img) || ehFinal2(img) || ehFinal3(img) || ehFinal4(img));
}
function ehFinal1(img) {
    var valor = 1;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (img[i][j] != 0) {
                if (img[i][j] != valor) {
                    return false;
                }
                valor++;
            }
        }
    }
    return true;
}
function ehFinal2(img) {
    var valor = 1;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (img[j][i] != 0) {
                if (img[j][i] != valor) {
                    return false;
                }
                valor++;
            }
        }
    }
    return true;
}
function ehFinal3(img) {
    var valor = 1;
    for (var i = 2; i >= 0; i--) {
        for (var j = 2; j >= 0; j--) {
            if (img[i][j] != 0) {
                if (img[i][j] != valor) {
                    return false;
                }
                valor++;
            }
        }
    }
    return true;
}

function ehFinal4(img) {
    var valor = 1;
    for (var i = 2; i >= 0; i--) {
        for (var j = 2; j >= 0; j--) {
            if (img[j][i] != 0) {
                if (img[j][i] != valor) {
                    return false;
                }
                valor++;
            }
        }
    }
    return true;
}

function findPosicaoDoZero(img) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (img[i][j] == 0) {
                return [i, j];
            }
        }
    }
    return null;
}
function findPosicaoDoZeroParaBoxes(boxes) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (boxes[i][j].value == 0) {
                return [i, j];
            }
        }
    }
    return null;
}

function verificaRepetidos(est) {
    var anterior = est.deOndeVim;
    while (anterior != null) {
        if (equals(anterior.img, est.img)) {
            return true;
        }
        anterior = anterior.deOndeVim;
    }
    return false;
}
function equals(boxArray, boxArray2) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (boxArray[i][j].value != boxArray2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

String.prototype.toNum = function () {
    return parseInt(this, 10);
}
Array.prototype.clone = function() {
    var array = this.map(function(arrayDeDentro) {
        return arrayDeDentro.slice(0);
    });
    return array;
}
Array.prototype.last = function() {
    return this[this.length - 1];
}
