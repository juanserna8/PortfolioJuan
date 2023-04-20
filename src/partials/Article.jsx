import { createClient } from "contentful";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Article = () => {
    
    const [blogPost, setBlogPost] = useState();
    const [otherPosts, setOtherPosts] = useState();

    const client = createClient({
        space: import.meta.env.VITE_API_SPACE,
        accessToken: import.meta.env.VITE_API_ACCESS_TOKEN
    })

    const { id } = useParams();

    useEffect(() => {
        const getEntryById = async () => {
            try{
                if (id) {
                    const entries = await client.getEntry(id);
                    setBlogPost(entries);
                }
            } catch(err){
                console.log(err)
            }
        }

        getEntryById()
    }, [id]);

    // console.log(blogPost);

    useEffect(() => {
        const getAllEntries = async () => {
            try{
                const entries = await client.getEntries();
                setOtherPosts(entries);
            } catch(err) {
                console.log(err);
            }
        }
        getAllEntries();
        // console.log(otherPosts, 'hey.');
    }, [])

    if (!blogPost) {
        return <div>Loading...</div>;
    }
    
    return ( 
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            className="flex flex-col min-h-screen overflow-hidden"
        >

            <Header />

            <main className="grow mt-[8rem] px-4 pb-12">
                <div className="max-w-6xl px-4 text-white lg:grid lg:grid-cols-4 gap-8">
                    {/* Blog post content */}
                    <div className="lg:col-span-3">
                        <h2 className="text-2xl text-gray-600 font-poppins dark:text-white">
                            {blogPost.fields.title}
                        </h2>
                        <img 
                            src={blogPost.fields.postImage.fields.file.url} 
                            alt="Blog post image" 
                            className="mt-4 mb-4"    
                        />
                        {blogPost.fields.description.content.map((paragraph, index) => {
                            return (
                                <div 
                                    key={index}
                                    className="mt-2 text-justify"
                                >
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {paragraph.content[0].value}
                                    </p>
                                </div>     
                            )
                        })}
                    </div>

                    <Link to='/blog' className="flex justify-center lg:hidden">
                        <button className="flex gap-2 mt-8 btn text-white bg-teal-500 hover:bg-orange-700 dark:hover:bg-transparent dark:hover:border dark:hover:border-teal-500 dark:hover:text-teal-500 shrink-0 transition duration-500 dark:duration-800">
                            <svg className="h-4 w-4 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="5" y1="12" x2="11" y2="18" />  <line x1="5" y1="12" x2="11" y2="6" /></svg>
                            <p>Blog</p>
                        </button>
                    </Link>

                    {/* Related posts section */}
                    <div className="mx-auto mt-[5rem] hidden lg:inline">
                        <h2 className="text-2xl text-gray-600 font-poppins dark:text-white">
                            Other posts
                        </h2>
                        {otherPosts?.items?.map(otherPost => {
                            // Skip the post that is being rendered
                            if (otherPost.sys.id === id) {
                                return null
                            }
                            
                            return (
                                <div 
                                    key={otherPost.sys.id}
                                    className='mt-8 pb-4 bg-gray-100 dark:bg-gray-800 rounded shadow-md'
                                >
                                    <img src={otherPost.fields.postImage.fields.file.url} alt="Post's image description" className='' />
                                    <div className='mt-4 px-4'>
                                        <h2 className='text-gray-600 font-poppins font-bold dark:text-white'>{otherPost.fields.title}</h2>
                                        <p className='text-sm text-gray-600 dark:text-gray-400 mt-4 text-justify'>{otherPost.fields.description.content[0].content[0].value.substring(0,150)}...</p>
                                        <Link to={`/blog/articles/${otherPost.sys.id}`}>
                                            <button className='mt-4 p-2 rounded text-white text-sm bg-teal-500 hover:bg-orange-700 dark:hover:bg-transparent dark:hover:border dark:hover:border-teal-500 dark:hover:text-teal-500 shrink-0 transition duration-500 dark:duration-800'>Read more</button>
                                        </Link>
                                    </div>    
                                </div>
                            )
                        }).filter(otherPost => otherPost !==null)}
                    </div>
                </div>

            </main>

            <Footer />

        </motion.div>
     );
}
 
export default Article;