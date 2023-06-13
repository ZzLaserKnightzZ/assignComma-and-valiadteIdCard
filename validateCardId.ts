  const validateCardId = (id: string) => {

    const degit = id.split("");
    let sum = 0;
    let index = 0;

    for (let i = 13; i >= 2; i--) {
      sum += Number(degit[index]) * i;
      index++;
    }

    return 11 - (sum % 11) === Number(degit[12]);
  }
