let data = [
    {
      name: '蘋果',
      price: 100,
    }, 
    {
      name: '百香果',
      price: 200,
    }, 
    {
      name: '奇異果',
      price: 300,
    },
  ];


//for-loop
let results = [];
for (let i = 0; i < data.length; i++) {
  results.push(data[i].price);
}

console.log(results); // [100, 200, 300]


//map
let result1 = data.map(item => item.price);