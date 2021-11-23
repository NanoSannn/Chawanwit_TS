let employees  : [number, string, number, number, number, string][]
//1.1
employees = [
    [1001,"ชวัลวิทย์",0,10000,0," "],
    [1002,"เฉลิมชัย",1,10000,0," "],
    [1003,"ธเนศ",3,10000,0," "],
    [1004,"วศก",4,10000,0," "],
    [1005,"หิรัญ",5,10000,0," "],
]
//1.2
employees.forEach(e=>{
    if(e[2]<=1){
        e[4] = 0
    }else if(e[2]<=3){
        e[4] = e[3]
    }else if(e[2]<=5){
        e[4] = e[3]+e[3]
    }else{
        e[4] = e[3]+e[3]+e[3]
    }

    if(e[2]<=3){
        e[5] = "Rice Cooker"
    }else{
        e[5] = "Microwave Oven"
    }
    console.log("=======================================")
    console.log(`ID : ${e[0]}`)
    console.log(`Name : ${e[1]}`)
    console.log(`WorkYear : ${e[2]}`)
    console.log(`Salary : ${e[3]}`)
    console.log(`Bonus : ${e[4]}`)
    console.log(`Gift : ${e[5]}`)
    console.log("=======================================")
});