export default function RichText({ text }) {
  if (!text) return null

  return String(text)
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((fragment, index) => {
      const isEmphasis = fragment.startsWith('**') && fragment.endsWith('**')

      return isEmphasis ? (
        <strong key={`${fragment}-${index}`}>{fragment.slice(2, -2)}</strong>
      ) : (
        fragment
      )
    })
}
