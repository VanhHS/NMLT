let rnd = Math.round(Math.random() * 100)
let geussNum

do{
    geussNum = Number(prompt5('Nhap so du doan'))
    if (geussNumber == rnd){
        alert('Ban hay vl')
    }else if(geussNum < rnd){
        alert('So du doan be hon')
    }else if(geussnum > rnd){
        alert('So du doan lon hon')
    }
}while(rnd != geussNum)
