import blogImage from "../../assets/Images/blogImage.png";

function Blog() {
  return (
    <div
      style={{
        height: "800px",
        width: "80%", // for mobile responsiveness nes it should be 100%
        margin: "50px auto",
        padding: "24px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E7E7E7",
        borderRadius: "30px",
      }}
    >
      <img
        src={blogImage}
        alt="blog header"
        style={{
          height: "40%", // for mobile responsiveness it should be 20%
          width: "100%",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#E7E7E7",
        }}
      ></div>

      
    </div>
  );
}

export default Blog;
