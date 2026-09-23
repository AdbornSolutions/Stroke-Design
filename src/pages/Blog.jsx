import React from "react";
import BlogHero from "../components/Blogs/BlogHero";
import OurBlogs from "../components/Blogs/OurBlogs";
import LeaveReply from "../components/Blogs/LeaveReply";

const Blog = () => {
    return (
        <div>
            <BlogHero />
            <OurBlogs />
            <LeaveReply />
        </div>
    )
}

export default Blog;