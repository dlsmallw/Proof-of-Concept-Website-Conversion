import { useNavigate } from "react-router-dom";

import { HeaderContainer, HeaderSubtitle, HeaderTitle } from "../../components/layout/header";
import Breadcrumbs from "../../components/misc/breadcrumbs";
import { useState } from "react";
import type { FRONTMATTER } from "src/utils/types";

import blogJSON from '../../data/blog/Routes.json';
import BodyContainer from "src/components/layout/body";

const emojiTags: Record<string, string> = {
  new: "🆕 ",
  urgentUpdate: "⚠️ ",
};

const ArticleCard: React.FC<{ slug: string, articleDetails: FRONTMATTER }> = ({ slug, articleDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNewArticle] = useState(() => {
    const createdDate = articleDetails.createdDate ? new Date(articleDetails.createdDate) : null;
    const now = new Date();

    if (createdDate && ((now.getTime() - createdDate.getTime()) < (365 * 24 * 60 * 60 * 1000))) { // checking if made in current year or within last year
      return true;
    }

    return false;
  });

  const emojiTag = (() => {
    if (articleDetails.urgentUpdate) {
      return emojiTags.urgentUpdate;
    } else if (isNewArticle) {
      return emojiTags.new;
    }
    
    return "";
  })();

  const navigate = useNavigate();

  return (
    <div className="article-card" 
      style={{ 
        ...CustomStyling.articleCardContainer, 
        borderColor: isNewArticle ? "var(--secondary)" : "var(--border)",
        transform: isHovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: isHovered ? "0 8px 24px rgba(0, 0, 0, 0.5)" : "none",
        cursor: "pointer"
      }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => navigate(slug)}>
      <h3 className="article-card-title" style={CustomStyling.articleTitle}>{`${emojiTag}${articleDetails.title}`}</h3>
      <span style={CustomStyling.articleDescription}>{articleDetails.description.content}</span>
      <span style={CustomStyling.articleBottomText}>Read article →</span>
    </div>
  );
}

const Blog: React.FC = () => {
  const [sortedArticleDetails] = useState(() => {
    const alphabeticallySorted = Object.entries(blogJSON).sort(([slugA], [slugB]) => slugA.localeCompare(slugB));

    return alphabeticallySorted.sort(([ , detailsA], [ , detailsB]) => {
      const dateA = detailsA.createdDate ? new Date(detailsA.createdDate) : null;
      const dateB = detailsB.createdDate ? new Date(detailsB.createdDate) : null;

      if (dateA && dateB) {
        return dateB.getTime() - dateA.getTime(); // Sort by createdDate descending
      } else if (dateA) {
        return -1; // Articles with createdDate come before those without
      } else if (dateB) {
        return 1; // Articles with createdDate come before those without
      } else {
        return 0; // If neither article has a createdDate, maintain their relative order
      }
    });
  });

  return (
    <div>
      <HeaderContainer>
          <HeaderTitle style={CustomStyling.blogTitle}>📝 Military Finance Blog</HeaderTitle>
          <HeaderSubtitle style={CustomStyling.blogSubtitle}>Guides, breakdowns, and decision tools for service members and veterans</HeaderSubtitle>
      </HeaderContainer>

      <BodyContainer>
        <Breadcrumbs crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" }
        ]} />

        <div className="blog-grid" style={CustomStyling.articleGridContainer}>
          {sortedArticleDetails.map(([slug, articleDetails]: [string, FRONTMATTER]) => (
            <ArticleCard key={slug} slug={slug} articleDetails={articleDetails} />
          ))}
        </div>
      </BodyContainer>
    </div>

  );
}

const CustomStyling: Record<string, React.CSSProperties> = {
  headerInnerContainer: {
    maxWidth: "1100px",
    width: "100%",
  },
  blogTitle: {
    fontSize: "2rem",
    fontWeight: 800,
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "var(--secondary)",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
  },
  blogSubtitle: {
    fontSize: "1.05rem",
    fontWeight: 600,
    opacity: 0.9,
    marginTop: "5px",
    fontStyle: "italic",
    color: "var(--text)"
  },
  articleGridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
    gap: "24px",
    margin: "30px 0 60px"
  },
  articleCardContainer: {
    display: "flex",
    flexDirection: "column",
    background: "var(--card-bg)",
    border: "2px solid var(--border)",
    borderRadius: "12px",
    padding: "24px",
    textDecoration: "none",
    transition: "all 0.2s"
  },
  articleTitle: {
    fontSize: "1.15rem",
    fontWeight: 700,
    color: "var(--secondary)",
    marginBottom: "10px",
    lineHeight: 1.4
  }, 
  articleDescription: {
    fontSize: "0.9rem",
    color: "var(--text-light)",
    lineHeight: 1.6,
    flexGrow: 1,
    marginBottom: "15px"
  },
  articleBottomText: {
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "var(--accent)"
  }
}

export default Blog;