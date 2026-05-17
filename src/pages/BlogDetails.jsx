import { useParams } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { ArticleBody } from '../components/blog/ArticleBody'
import { BlogActions } from '../components/blog/BlogActions'
import { CommentsPanel } from '../components/blog/CommentsPanel'
import { ReadingProgress } from '../components/blog/ReadingProgress'
import { RelatedPosts } from '../components/blog/RelatedPosts'
import { getCategoryById } from '../constants/categories'
import { getBlogPost, getRelatedPosts } from '../data/blogMock'
import './BlogDetails.css'

export default function BlogDetails() {
  const { slug } = useParams()
  const post = getBlogPost(slug)
  const related = getRelatedPosts(post.categoryId, post.slug, 3)
  const cat = getCategoryById(post.categoryId)

  return (
    <article className="pj-blog">
      <ReadingProgress />
      <div className="pj-blog__hero">
        <img src={post.coverImage} alt="" className="pj-blog__hero-img" />
        <div className="pj-blog__hero-scrim" />
      </div>

      <Container>
        <header className="pj-blog__header">
          <p className="pj-blog__eyebrow">
            {cat?.label ?? 'Blog'} · {post.publishedAt} · {post.readTime}
          </p>
          <h1 className="pj-blog__title">{post.title}</h1>
          <p className="pj-blog__excerpt">{post.excerpt}</p>
          <div className="pj-blog__toolbar">
            <div className="pj-blog__author">
              <img src={post.authorProfile.avatar} alt="" className="pj-blog__author-img" />
              <div>
                <p className="pj-blog__author-name">{post.authorProfile.name}</p>
                <p className="pj-blog__author-bio">{post.authorProfile.bio}</p>
              </div>
            </div>
            <BlogActions />
          </div>
          {post.tags?.length ? (
            <ul className="pj-blog__tags">
              {post.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ) : null}
        </header>

        <div className="pj-blog__article">
          <ArticleBody blocks={post.body} />
        </div>

        <RelatedPosts posts={related} />
        <CommentsPanel comments={post.comments} />
      </Container>
    </article>
  )
}
