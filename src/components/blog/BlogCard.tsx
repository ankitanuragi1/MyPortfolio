import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import type { Blog } from "./blogData";

interface BlogCardProps {
    blog: Blog;
}

function BlogCard({ blog }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: .8,
                ease: "easeOut"
            }}
            className="rounded-2xl border border-gray-800 bg-[#111] p-6 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,.35)] transition-all duration-300"
        >

            <span className="inline-block rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-400">
                {blog.category}
            </span>

            <h3 className="mt-5 text-2xl font-bold">
                {blog.title}
            </h3>

            <p className="mt-3 text-gray-400">
                {blog.description}
            </p>

            <p className="mt-4 text-sm text-gray-500">
                {blog.readingTime} read
            </p>

            <a
                href={blog.link}
                className="mt-6 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
            >
                Read More
                <FaArrowRight />
            </a>

        </motion.div>
    );
}

export default BlogCard;