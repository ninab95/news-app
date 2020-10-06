import React from "react";
import Header from "../../components/Header";
import WelcomePage from "./WelcomePage";
import SharePage from "./SharePage";
import WritingPost from "./WritingPost";
import Footer from "../../components/Footer";

function BlogPostPage() {
  return (
    <div>
      <Header isHomePage={false} />
      <WelcomePage />
      <SharePage />
      <WritingPost />
      <Footer />
    </div>
  );
}

export default BlogPostPage;
