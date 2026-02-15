function checkProbabilityTheory(count) {

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercent = (evenCount / count) * 100;
    let oddPercent = (oddCount / count) * 100;

    const result = {
        totalNumbers: count,
        even: {
            count: evenCount,
            percent: Number(evenPercent.toFixed(2))
        },
        odd: {
            count: oddCount,
            percent: Number(oddPercent.toFixed(2))
        }
    };

    return result;
}

console.log(checkProbabilityTheory(5869));
