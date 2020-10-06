import React from "react";
import Header from "../components/Header";
import WelcomePage from "../components/WelcomePage";
import SharePage from "../components/SharePage";
import WritingPost from "../components/WritingPost";
import Footer from "../components/Footer";

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
