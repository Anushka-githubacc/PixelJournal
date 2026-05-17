export function ArticleBody({ blocks }) {
  return (
    <div className="pj-blog__body">
      {blocks.map((block, i) => {
        if (block.type === 'p') {
          return (
            <p key={i} className="pj-blog__p">
              {block.text}
            </p>
          )
        }
        if (block.type === 'h2') {
          return (
            <h2 key={i} className="pj-blog__h2">
              {block.text}
            </h2>
          )
        }
        if (block.type === 'ul' && block.items) {
          return (
            <ul key={i} className="pj-blog__ul">
              {block.items.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          )
        }
        if (block.type === 'figure' && block.src) {
          return (
            <figure key={i} className="pj-blog__figure">
              <img src={block.src} alt={block.caption || ''} loading="lazy" />
              {block.caption ? <figcaption>{block.caption}</figcaption> : null}
            </figure>
          )
        }
        return null
      })}
    </div>
  )
}
