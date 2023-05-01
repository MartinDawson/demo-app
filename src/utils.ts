export const toSentenceCase = (input: string, separator: string = '-'): string => {
  const words = input.split(separator);

  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return `${firstLetter}${restOfWord}`;
  });

  return capitalizedWords.join(' ');
};