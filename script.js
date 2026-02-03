console.log('number' + 3 + 3);           // Результат: 'number33' — 'number' + 3 → 'number3', 'number3' + 3 → 'number33'
console.log(null + 3);                    // Результат: 3 — null → 0, 0 + 3 → 3
console.log(5 && "qwerty");               // Результат: "qwerty" — 5 truthy, && повертає другий операнд
console.log(+'40' + +'2' + "hillel");     // Результат: '42hillel' — +'40' → 40, +'2' → 2, 40 + 2 → 42, 42 + "hillel" → '42hillel'
console.log('10' - 5 === 6);              // Результат: false — '10' - 5 → 5, 5 === 6 → false
console.log(true + false);                // Результат: 1 — true → 1, false → 0, 1 + 0 → 1
console.log('4px' - 3);                   // Результат: NaN — '4px' не приводиться до числа, NaN - 3 → NaN
console.log('4' - 3);                     // Результат: 1 — '4' → 4, 4 - 3 → 1
console.log('6' + 3 ** 0);                // Результат: '61' — 3 ** 0 → 1, '6' + 1 → '61'
console.log(12 / '6');                     // Результат: 2 — '6' → 6, 12 / 6 → 2
console.log('10' + (5 === 6));             // Результат: '10false' — 5 === 6 → false, '10' + false → '10false'
console.log(null == '');                    // Результат: false — null == '' → false (null == undefined → true)
console.log(3 ** (9 / 3));                  // Результат: 27 — 9 / 3 → 3, 3 ** 3 → 27
console.log(!!'false' == !!'true');         // Результат: true — обидва рядки truthy, !! → true, true == true → true
console.log(0 || '0' && 1);                 // Результат: 1 — '0' && 1 → 1, 0 || 1 → 1
console.log((+null == false) < 1);           // Результат: false — +null → 0, 0 == false → true → 1, 1 < 1 → false
console.log(false && true || true);          // Результат: true — false && true → false, false || true → true
console.log(false && (false || true));       // Результат: false — (false || true) → true, false && true → false
console.log((+null == false) < 1 ** 5);      // Результат: false — +null → 0, 0 == false → true → 1, 1 ** 5 → 1, 1 < 1 → false

