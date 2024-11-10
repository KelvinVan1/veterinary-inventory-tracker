function verifyNumerical(element: React.FormEvent<HTMLInputElement>) : boolean {
  return Number.isNaN(Number(element.currentTarget.value));
}

export {verifyNumerical} 
