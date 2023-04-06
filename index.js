// --------------------------------- Task-1 ---------------------------------

let showProducts = function () {

    listShop.sort(function (a, b) {
        return b.isBuy - a.isBuy;
    });
    
    let text = "<table>";
    text += "<thead class = \"color\" >";
    text += "<tr>";
    text += "<th>" + "Продукт" + "</th>";
    text += "<th>" + "Количество" + "</th>";
    text += "<th>" + "Куплено" + "</th>";
    text += "<tr>";
    text += "</thead>";

    for (const product of listShop) {
        text += "<tr>";
        text += "<td>" + product["nameProduct"] + "</td>" + "<th>" + product["count"] + " " + "шт" + "</th>" + "<th>" + product["isBuy"] + "</th>"
        document.getElementById('task1').innerHTML = text;
        text += "<tr>";
    }
    text += "</table>"

};

let addProduct = function (Product) {
    let count = 0;
    for (let i = 0; i < listShop.length; ++i) {
        if (listShop[i].nameProduct === Product) {
            count = i;
        }
    }

    if (count === 0) {
        listShop[listShop.length - 1] = {
            nameProduct: Product,
            count: "1",
            isBuy: true
        };
        console.log("count === 0");
    } else {
        listShop[count].count = Number(listShop[count].count);
        listShop[count].count += 1;
    }
};

let buyProduct = function (myProduct) {
    let count = 0;
    myProduct = String(myProduct);
    for (let i = 0; i < listShop.length; ++i) {
        if (listShop[i].nameProduct === myProduct) {
            count = i;
        }
    }

    if (count === 0) {
        document.getElementById('task1').innerHTML = (`Error !!!! Don't have this product: ${myProduct}`);
    } else {
        listShop[count].isBuy = true;
    }
};


let listShop = [
    {
        nameProduct: "Хлеб",
        count: "10",
        isBuy: true
    },
    {
        nameProduct: "Вода",
        count: "6",
        isBuy: true
    },
    {
        nameProduct: "Помидоры",
        count: "8",
        isBuy: false
    },
    {
        nameProduct: "Огурцы",
        count: "20",
        isBuy: true
    },
    {
        nameProduct: "Яблоко",
        count: "3",
        isBuy: false
    }
];

showProducts(listShop);
addProduct("Вода");
showProducts(listShop);
buyProduct("Помидоры");
showProducts(listShop);

// --------------------------------- Task-2 ---------------------------------


let chequeShop = [
    {
        productName: "Хлеб",
        count: "3",
        price: "5"
    },
    {
        productName: "Молоко",
        count: "2",
        price: "3"
    },
    {
        productName: "Колбаса",
        count: "4",
        price: "7"
    },
    {
        productName: "Рыба",
        count: "5",
        price: "12"
    },
    {
        productName: "Йогурт",
        count: "5",
        price: "4"
    }
];


let showCheque = function () {

    let text = "<table>";
    text += "<thead class = \"color\" >";
    text += "<tr>";
    text += "<th>" + "Продукт" + "</th>";
    text += "<th>" + "Количество" + "</th>";
    text += "<th>" + "Cумма" + "</th>";
    text += "<tr>";
    text += "</thead>";

    for (const info of chequeShop) {
        text += "<tr>";
        text += "<td>" + info["productName"] + "</td>" + "<th>" + info["count"] + " " + "шт" + "</th>" + "<th>" + " "+  info["price"] + " " + "$" + "</th>"
        document.getElementById('task2').innerHTML = text;
        text += "<tr>";
    }
    text += "</table>"

};

let multi = function() {
  let mul = 0;
  for (let info of chequeShop) {
      info.price = info.price * Number(info.count);
      mul = info.price
  }
  return mul;
};

multi()

let sumOfPurchase = function() {
  let sum = 0;
  for (let info of chequeShop) {
    info.price = Number(info.price);
    sum += info.price;
  }
  return sum;
};

let getExpensivePurchase = function() {
  let minPrice = 0;
  for (let info of chequeShop) {
    info.price = Number(info.price);
    if (info.price > minPrice) {
      minPrice = info.price;
    }
  }
  return minPrice;
};

let averagePriceOfProduct = function() {
  let averagePrice = 0;
  let count = 0;
  for (let i = 0; i < chequeShop.length; ++i) {
    chequeShop[i].price = Number(chequeShop[i].price);
    averagePrice += chequeShop[i].price;
    count++;
  }
  averagePrice /= count;
  return averagePrice;
};

showCheque();
let sum = sumOfPurchase();
let result = "<h3>" + "Сумма покупки: " + " " + sum + " " + " $" + "</h3>";
let maxPrice = getExpensivePurchase();
result += "<h3>" + "Максимальная цена: " + " " + maxPrice + " " + " $" + "</h3>";
let averagePrise = averagePriceOfProduct();
result += "<h3>" + "Средняя цена: " + " " + averagePrise + " " + " $" + "</h3>";

document.getElementById('result').innerHTML = result;


// --------------------------------- Task-3 ---------------------------------


let addedStyles = function (){
    let style = "";
    let style1 = "";
    for (let i = 0; i < basicStyles.length; i++){
        style += basicStyles[i].name + ":" + basicStyles[i].value + ";";
    } 
    for (let i = 0; i < stylesP.length; i++){
        style1 += stylesP[i].name + ":" + stylesP[i].value + ";";
    } 
    let t = "<p style=" + style + ">Сложнее всего начать действовать, все остальное зависит только от упорства.</p>"
    t += "<p style=" + style1 + ">Амелия Эрхарт.</p>";
    return document.getElementById('task3').innerHTML = t;
}

let basicStyles = [
    {
        name: "font-weight",
        value: "700"
    },
    {
        name: "width",
        value: "400px"    
    },
    {
        name: "margin",
        value: "auto"
    },
    {
        name: "background-color",
        value: "#ff6b08"
    },
    {
        name: "text-align",
        value: "center"
    },
    {
        name: "color",
        value: "#ffffff"
    }
];

let stylesP = [
    {
        name: "font-weight",
        value: "400"
    },
    {
        name: "font-style",
        value: "italic"    
    },
    {
        name: "text-align",
        value: "end"
    },
    {
        name: "margin",
        value: "0"
    },
    {
        name: "padding-bottom",
        value: "20px"
    },
    {
        name: "padding-right",
        value: "30px"
    },
    {
        name: "padding-top",
        value: "10px"
    }
];

addedStyles()

 



