// 1 parasyti funkcija kuri paima 2 argumentus ir grazina ju sandauga. argumentai skaiciai
// 2 parasyti funkcija kuri paima skaiciu pvz 3.254587 ir grazina stringa $3.25 (suapvalinta ir prideta currency)
function makeCurrency(ammount: number): string {
    const apvalinta: string = ammount.toFixed(2);
  
    return `$${apvalinta}`;
  }
  console.log('makeCurrency(3.254587) ===', makeCurrency(3.256587));
  let result: string = makeCurrency(3.256587);
  console.log('result ===', result);
  
  // 3 parasyti tipa masyvui kuriame bus stringas, skaicius ir boolean
  const dalykas: (string | number | boolean)[] = ['james', 15, false];
  
  // 4 parasyti funkcija kuri argumentu ima skaiciu masyva. pvz [1, 2, 3, 4]
  // ir grazina string tipo masyva ['id_1', 'id_2', 'id_3', 'id_4']
  
  function makeStringIds(arr: number[]): string[] {
    let x = 'id_' + 1;
    const resultArr: string[] = arr.map((n: number) => 'id_' + n);
    return resultArr;
  }
  
  const ids: string[] = makeStringIds([1, 2, 3, 4]);
  console.log('ids ===', ids);
  
  // oddOrEven
  
  function oddOrEven(word: string): boolean {
    const l: number = word.length;
    let oddOrEven: boolean = l % 2 ? false : true;
    console.log('oddOrEven ===', oddOrEven);
    return oddOrEven;
  }
  oddOrEven('apples');
  oddOrEven('pears');

  // Convert Minutes into Seconds

  