import blogImage from "../../assets/Images/blogImage.png";
import BlogContent from "./components/BlogContent";
import "./styles/style.scss";

function Blog() {
  return (
    <div className="blog-root-container">
      <img src={blogImage} alt="blog header" className="blog-image" />
      <div className="divider"></div>
      <BlogContent />
    </div>
  );
}

export default Blog;
