export default function getUserImg(userName: string): string {
  return `https://robohash.org/${userName}.png`;
}
