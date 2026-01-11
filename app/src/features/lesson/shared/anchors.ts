export function createAnchorId(text: string, postfix?: string) {
  const id = text
    .toLowerCase()
    .split(" ")
    .map((word) => word.trim())
    .join("-")

  return postfix ? `${id}-${postfix}` : `${id}`
}
