export const formatTableNumber = (number: number) => {
    const formattedNumber = number.toString().padStart(4, "0");
    return formattedNumber;
  };
