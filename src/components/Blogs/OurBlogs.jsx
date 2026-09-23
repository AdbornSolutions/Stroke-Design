import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const OurBlogs = () => {
  /* =========================================================
     BLOG DATA
  ========================================================= */

  const posts = [
    {
      id: 1,
      slug: "functional-design-trends-that-blend-style-and-comfort",
      title: "Functional Design Trends That Blend Style and Comfort",
      category: "Power Tools",
      date: "June 2,2025",
      image: "/images/blog/blog-1.jpg",
      excerpt:
        "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home, incorporating modern interior design principles can bring a fresh, sophisticated, and elegant ambiance. With an emphasis on minimalism, clean",
    },
    {
      id: 2,
      slug: "innovative-interior-ideas-to-refresh-your-living-space",
      title: "Innovative Interior Ideas To Refresh Your Living Space",
      category: "Power Tools",
      date: "June 2,2025",
      image: "/images/blog/blog-2.jpg",
      excerpt:
        "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home, incorporating modern interior design principles can bring a fresh, sophisticated, and elegant ambiance.",
    },
    {
      id: 3,
      slug: "elevate-every-corner-with-sleek-interior-concepts",
      title: "Elevate Every Corner With Sleek Interior Concepts",
      category: "Interior Design",
      date: "June 2,2025",
      image: "/images/blog/blog-3.jpg",
      excerpt:
        "Create beautifully considered interiors with refined materials, thoughtful layouts and contemporary design elements that make every corner feel intentional.",
    },
    {
      id: 4,
      slug: "modern-living-room-design-ideas",
      title: "Modern Living Room Design Ideas",
      category: "Interior Design",
      date: "May 28,2025",
      image: "/images/blog/blog-4.jpg",
      excerpt:
        "Discover contemporary living room ideas that balance comfort, functionality and timeless aesthetics.",
    },
  ];

  const categories = [
    "Accessories",
    "Electrical & Lighting",
    "Home Appliance",
    "Power Tools",
    "Uncategorized",
    "Ware Accessories",
  ];

  const [search, setSearch] = useState("");

  /* =========================================================
     SEARCH
  ========================================================= */

  const filteredPosts = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) return posts;

    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(value) ||
        post.category.toLowerCase().includes(value) ||
        post.excerpt.toLowerCase().includes(value)
    );
  }, [search]);

  const featuredPost = filteredPosts[0];

  /* =========================================================
     RECENT POSTS
  ========================================================= */

  const recentPosts = filteredPosts.slice(0, 2);

  return (
    <section className="w-full bg-white px-5 py-6 text-black sm:px-7 md:px-8 lg:px-10 xl:px-12">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1400px]
          grid-cols-1
          gap-x-10
          lg:grid-cols-[48%_52%]
          xl:grid-cols-[50%_50%]
        "
      >
        {/* =====================================================
            LEFT SIDEBAR
        ===================================================== */}

        <aside
          className="
            w-full
            pr-0

            lg:pr-8
            xl:pr-12
          "
        >
          {/* =================================================
              SEARCH
          ================================================= */}

          <div className="mb-5">
            <h2
              className="
                m-0
                mb-5
                font-['Arial',Helvetica,sans-serif]
                text-[25px]
                font-normal
                leading-none
                text-black
              "
            >
              Search
            </h2>

            <div className="relative w-full max-w-[287px]">
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search"
                aria-label="Search blog posts"
                className="
                  h-[43px]
                  w-full
                  rounded-[20px]
                  border-0
                  bg-white
                  px-[10px]
                  pr-[48px]

                  font-['Arial',Helvetica,sans-serif]
                  text-[14px]
                  font-semibold
                  text-black

                  outline-none

                  shadow-[0_8px_10px_rgba(0,0,0,0.32)]

                  placeholder:text-black
                "
              />

              {/* SEARCH ICON */}

              <button
                type="button"
                aria-label="Search"
                className="
                  absolute
                  right-[7px]
                  top-1/2
                  flex
                  h-[32px]
                  w-[32px]
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-transparent
                  text-black
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[22px] w-[22px] fill-none stroke-current stroke-[2.8]"
                >
                  <circle cx="10.8" cy="10.8" r="6.8" />
                  <path d="M16 16l5 5" />
                </svg>
              </button>
            </div>
          </div>

          {/* =================================================
              CATEGORIES
          ================================================= */}

          <div className="mb-6">
            <h2
              className="
                m-0
                mb-5

                font-['Arial',Helvetica,sans-serif]
                text-[25px]
                font-normal
                leading-none
                text-black
              "
            >
              Categories
            </h2>

            <div className="w-full max-w-[286px]">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="
                    flex
                    h-[34px]
                    w-full
                    items-center

                    border-b
                    border-[#333333]

                    bg-transparent

                    px-0

                    font-['Arial',Helvetica,sans-serif]
                    text-left
                    text-[15px]
                    font-normal

                    text-[#374151]

                    transition-colors
                    duration-200

                    hover:text-[#CAA05C]
                  "
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* =================================================
              RECENT POSTS
          ================================================= */}

          <div>
            <h2
              className="
                m-0
                mb-7

                font-['Arial',Helvetica,sans-serif]
                text-[25px]
                font-normal
                leading-none
                text-black
              "
            >
              Recent Posts
            </h2>

            <div className="space-y-7">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="
                    group
                    grid
                    grid-cols-[165px_minmax(0,1fr)]
                    gap-x-[30px]
                    no-underline

                    sm:grid-cols-[165px_minmax(0,1fr)]

                    md:grid-cols-[165px_minmax(0,1fr)]

                    lg:grid-cols-[165px_minmax(0,1fr)]
                  "
                >
                  {/* RECENT IMAGE */}

                  <div
                    className="
                      h-[120px]
                      w-[165px]
                      overflow-hidden
                      rounded-[17px]
                      bg-[#ddd]

                      max-sm:h-[105px]
                      max-sm:w-full
                    "
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover

                        transition-transform
                        duration-500

                        group-hover:scale-[1.04]
                      "
                    />
                  </div>

                  {/* RECENT CONTENT */}

                  <div className="min-w-0 pt-2">
                    <h3
                      className="
                        m-0
                        mb-4

                        font-['Arial',Helvetica,sans-serif]
                        text-[20px]
                        font-bold
                        leading-[1.25]

                        text-black

                        max-md:text-[18px]
                        max-sm:text-[17px]
                      "
                    >
                      {post.title}
                    </h3>

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-3
                      "
                    >
                      <span
                        className="
                          inline-flex
                          shrink-0
                          items-center
                          rounded-full
                          bg-[#D2A352]
                          px-[10px]
                          py-[7px]

                          font-['Arial',Helvetica,sans-serif]
                          text-[12px]
                          font-bold
                          leading-none
                          text-white
                        "
                      >
                        {post.category}
                      </span>

                      <span
                        className="
                          whitespace-nowrap

                          font-['Arial',Helvetica,sans-serif]
                          text-[19px]
                          font-semibold
                          leading-none

                          text-[#999999]

                          max-md:text-[16px]
                        "
                      >
                        {post.date}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* =====================================================
            RIGHT BLOG CONTENT
        ===================================================== */}

        <main className="mt-10 w-full lg:mt-0">
          {featuredPost ? (
            <>
              {/* =================================================
                  FEATURED IMAGE
              ================================================= */}

              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group block w-full"
              >
                <div
                  className="
                    relative
                    h-[278px]
                    w-full
                    overflow-hidden
                    rounded-[17px]
                    bg-[#ddd]

                    sm:h-[310px]

                    md:h-[340px]

                    lg:h-[278px]

                    xl:h-[330px]
                  "
                >
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="
                      h-full
                      w-full
                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-[1.025]
                    "
                  />
                </div>
              </Link>

              {/* =================================================
                  META
              ================================================= */}

              <div
                className="
                  mt-10
                  flex
                  items-center
                  gap-12

                  sm:gap-14

                  md:gap-16

                  lg:mt-10
                "
              >
                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-[#D2A352]

                    px-[9px]
                    py-[8px]

                    font-['Arial',Helvetica,sans-serif]
                    text-[14px]
                    font-bold
                    leading-none

                    text-white
                  "
                >
                  {featuredPost.category}
                </span>

                <span
                  className="
                    font-['Arial',Helvetica,sans-serif]
                    text-[20px]
                    font-semibold
                    leading-none

                    text-[#999999]

                    max-md:text-[18px]

                    max-sm:text-[16px]
                  "
                >
                  {featuredPost.date}
                </span>
              </div>

              {/* =================================================
                  FEATURED TITLE
              ================================================= */}

              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group block no-underline"
              >
                <h1
                  className="
                    m-0
                    mt-4

                    max-w-[650px]

                    font-['Arial',Helvetica,sans-serif]
                    text-[25px]
                    font-normal
                    leading-[1.3]

                    text-black

                    transition-colors
                    duration-200

                    group-hover:text-[#CAA05C]

                    md:text-[27px]

                    lg:text-[25px]

                    xl:text-[28px]
                  "
                >
                  {featuredPost.title}
                </h1>
              </Link>

              {/* =================================================
                  EXCERPT
              ================================================= */}

              <p
                className="
                  m-0
                  mt-3

                  max-w-[650px]

                  font-['Arial',Helvetica,sans-serif]
                  text-[16px]
                  font-normal
                  leading-[1.7]

                  text-[#7B7B7B]

                  max-md:text-[15px]
                  max-md:leading-[1.65]
                "
              >
                {featuredPost.excerpt}
              </p>

              {/* =================================================
                  READ MORE
              ================================================= */}

              <Link
                to={`/blog/${featuredPost.slug}`}
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-1

                  font-['Arial',Helvetica,sans-serif]
                  text-[14px]
                  font-normal

                  text-black

                  no-underline

                  transition-colors
                  duration-200

                  hover:text-[#CAA05C]
                "
              >
                Read More
                <span aria-hidden="true">→</span>
              </Link>

              {/* =================================================
                  SECOND POST PREVIEW
              ================================================= */}

              {filteredPosts[1] && (
                <Link
                  to={`/blog/${filteredPosts[1].slug}`}
                  className="
                    group
                    mt-20
                    block
                    w-full
                    no-underline
                  "
                >
                  <div
                    className="
                      h-[280px]
                      w-full
                      overflow-hidden
                      rounded-[17px]
                      bg-[#ddd]

                      sm:h-[320px]

                      md:h-[360px]
                    "
                  >
                    <img
                      src={filteredPosts[1].image}
                      alt={filteredPosts[1].title}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover

                        transition-transform
                        duration-700

                        group-hover:scale-[1.025]
                      "
                    />
                  </div>
                </Link>
              )}
            </>
          ) : (
            /* =================================================
               NO SEARCH RESULTS
            ================================================= */

            <div
              className="
                flex
                min-h-[400px]
                items-center
                justify-center

                font-['Arial',Helvetica,sans-serif]
                text-[18px]
                text-[#777777]
              "
            >
              No posts found.
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default OurBlogs;