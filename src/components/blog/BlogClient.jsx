"use client";

import React, { useEffect, useState, useRef } from "react";
import DOMPurify from "dompurify";
import Image from "next/image";
import Script from "next/script";
import SectionWrapper from "../utils/SectionWrapper";
import useScreenStore from "../../../store/useScreenStore";
import Blogs from "../Blogs";
import ReadableDate from "../ReadableDate";



const BlogClient = ({ blogData, recentblogURL }) => {
  const [sanitizedContent, setSanitizedContent] = useState("");
  const contentRef = useRef(null);

  // Sanitize the blog content after the component mounts
  useEffect(() => {
    if (blogData?.content) {
      const clean = DOMPurify.sanitize(blogData.content, {
        ALLOWED_TAGS: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'blockquote'],
        ALLOWED_ATTR: ['src', 'alt', 'href', 'class', 'style']
      });
      setSanitizedContent(clean);
    }
  }, [blogData]);

  // Prepare JSON-LD for Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blogData?.metaTitle || '',
    datePublished: blogData?.postedDate || '',
    image: blogData?.coverImage || '',
    author: {
      "@type": "Person",
      name: "Taimoor Hamza",
    },
    publisher: {
      "@type": "Organization",
      name: "MSA Club",
      logo: {
        "@type": "ImageObject",
        url: "https://msa-club.com/logo.png",
      },
    },
    description: blogData?.metaDescription || "",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://msa-club.com/blog/post/${blogData?.friendlyUrl || ''}`,
    },
  };

  if (!blogData) {
    return (
      <div className="text-center py-0 mt-0">
        <div className="border-white/[21%] bg-white/[9%] w-[50%] lg:py-20 inline-block rounded-[1.7rem]">
          <h1 className="text-2xl font-bold text-white capitalize">
            Blog not found
          </h1>
          <p className="text-gray-300 py-3">
            The blog post you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="relative pt-[8px] lg:pt-[2px]">
        <div className="mx-0 relative bg-cover bg-center overflow-x-hidden">
          <div className="mt-32 max-w-7xl mx-auto">
            {/* <SectionWrapper> */}
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="lg:col-span-2 px-2 lg:p-4 rounded-2xl relative">
                  <div className="relative">
                  <h1 className="text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-white font-primary ">
                        {blogData?.title}
                      </h1>
                      
                    <div className="flex items-center gap-2 my-8">
                      <Image
                        src={
                          "/user.svg"
                        }
                        width={20}
                        height={20}
                        className="rounded-full h-10 w-10 2xl:h-12 2xl:w-12 bg-cover bg-center"
                      />
                      <span className=" text-oslo2Gray font-medium-geist text-lg 2xl:text-xl">
                        {blogData?.postedBy}
                      </span>
                      <span className="ml-2 text-oslo2Gray font-medium-geist text-lg 2xl:text-xl">
                        <ReadableDate isoString={blogData?.postedDate} />
                      </span>
                    </div>
                      <Image
                      width={1356}
                      height={842}
                      src={blogData?.coverImage}
                      alt="Floating big Bubble"
                      className=" left-0 w-12 md:w-12 lg:w-full lg:h-auto xl:h-[50rem] bg-cover bg-center 2xl:left-5 z-50 signature-container"
                      priority
                    />
                   
                  </div>

                  <div className="px-2 lg:px-0">
                    <div className="items-center mt-6 lg:mt-10 w-full">
                    
                
                    </div>

                    <div
                      ref={contentRef}
                      className="text-gray-100 blog_description leading-relaxed bg-opacity-90 lg:p-3 lg:px-0 rounded mt-3 lg:mt-5 font-medium-kgpr text-sm"
                      dangerouslySetInnerHTML={{
                        __html: sanitizedContent,
                      }}
                    />
                  </div>
                </div>
              </div>
            {/* </SectionWrapper> */}
          </div>
            <Blogs URL={recentblogURL}/>
        </div>
      </div>
    </>
  );
};

export default BlogClient;