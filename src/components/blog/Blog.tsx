import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { blogData } from "./blogData";

function Blog() {
    return (
        <section
            id="blog"
            className="bg-black text-white py-24 px-6"
        >

            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="text-5xl font-bold text-center mb-4"
                >
                    Latest Articles
                </motion.h2>

                <p className="text-center text-gray-400 mb-16">
                    Sharing what I learn while building projects.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {blogData.map((blog) => (

                        <BlogCard
                            key={blog.title}
                            blog={blog}
                        />

                    ))}

                </div>

                <div className="text-center mt-16">

                    <button className="rounded-lg bg-purple-600 px-6 py-3 hover:bg-purple-700 transition">
                        View All Articles
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Blog;