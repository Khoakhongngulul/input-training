function onBtnTruyVanPhanTuInputClick (){
    var vINputFirstName = document.getElementById("input-firstname")
    console.log("Truy xuất Element input first name : ",vINputFirstName)
}
function onBtnDocGiaTriInputClick(){
    var vLastNameValue = document.getElementById("input-lastname").value
    console.log("Last name của bạn là :"+vLastNameValue)
}
function onBtnLayGiaTriParseIntClick(){ debugger
    var vNamSinhValue = document.getElementById("input-nam-sinh").value
    var vNamSinhNumber = vNamSinhValue
    console.log(vNamSinhNumber)
}
function onBtnGanGiaTriInputClick (){ debugger;
    var vInputFirstNameElement = document.getElementById("input-firstname")
    var tucNguDanGian  = ["mày thích bú lồn không ?","Ít thì 5 quả trứng nhiều thì một quả tên lửa","Gween có cái lồn múp nhất cái quả đất này"]
    var randomTucNguIndex = Math.floor(Math.random(tucNguDanGian) * 3)
    var randomTucNgu = tucNguDanGian[randomTucNguIndex]
    console.log(randomTucNgu)
}