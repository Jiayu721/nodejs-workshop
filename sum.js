// let result = 0;
// prettier => 幫你排版
// ESLint =>語法檢查

// 時間複雜度
// 不是絕對時間，比較像是 "步驟數"
function sum(n) {
    //1+2+3...+n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }
    return sum;
  }
  console.log(sum(1));
  console.log(sum(3));
  console.log(sum(10));