//bài 1: Tìm số nguyên dương nhỏ hơn 100

function timSo(){
    let soChan = "";
    let soLe = "";

    for (let i = 1; i<=100;i++){
        if (i % 2 === 0){
            soChan += i + " ";
        }else{
            soLe += i + " ";
        }
    }
    document.getElementById('ketQua-b1-soChan').innerHTML = 'Số chẵn: ' + soChan;
    document.getElementById('ketQua-b1-soLe').innerHTML = 'Số lẻ: ' + soLe;

}

//Bài 2: tính tổng

// S = x + x^2 + x^3 + ... + x^n

function tinhTong(){
    let x = +document.getElementById('x').value;
    let n = +document.getElementById('n').value;
    let tong = 0;

    for (let i = 1; i <= n; i++ ){
        tong += Math.pow(x, i)
    }
    document.getElementById('ketQua-b2').innerHTML = tong;
}

//Bài 3: Tính giai thừa

function tinhGiaiThua(){
    let n = +document.getElementById('n-b2').value;
    let tong = 1;

    for (let i = 1; i <= n; i++){
        tong *= i;
    }
    document.getElementById('ketQua-b3').innerHTML = tong;
}

//Bài 4: Tạo div chẵn lẻ

function taoThe(){
    let content = "";

    for (let i = 1; i<=10 ; i++){
        if(i % 2 === 0){
            content += "<p>Div Chẵn</p>" 
        }else{
            content += "<p>Div lẻ</p>"
        }
    }

    document.getElementById('ketQua-b4').innerHTML = content;
}

//Bài 5: Tìm số nguyên tố

function timSoNT(){
    let soNT = "";
    let nb5 = +document.getElementById('n-b5').value;

    for (let i = 2; i <= nb5; i++){
        if(i % (Math.pow(i, 2)) === 0){
            soNT += i + " ";
        }
    }
    console.log(soNT);

    document.getElementById('ketQua-b5').innerHTML = soNT;
}


