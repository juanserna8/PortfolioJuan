import { motion } from 'framer-motion';
import {createClient} from 'contentful';

import Header from '../partials/Header';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../partials/Footer';

const Blog = () => {
    
    const [blogPosts, setBlogPosts] = useState([]);

    const client = createClient({
        space: import.meta.env.VITE_API_SPACE,
        accessToken: import.meta.env.VITE_API_ACCESS_TOKEN
    });

    useEffect(() => {
        const getAllEntries = async () => {
            try{
                const entries = await client.getEntries();
                setBlogPosts(entries);
            } catch(err) {
                console.log(err);
            }
        }
        getAllEntries();
        // console.log(blogPosts, 'hey');
    }, [])
    
    if(!blogPosts) {
        return <div>Loading...</div>
    }

    return ( 
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            className="flex flex-col min-h-screen overflow-hidden"
        >

            <Header />

            <main className='grow mt-[8rem] px-4 pb-12'>
                <div className='max-w-6xl sm:px-6 text-white'>
                    <h1 className='h1 text-black dark:text-white lg:text-6xl font-open text-left'>Blog</h1>
                    <div className='mt-8 grid md:grid-cols-2 gap-8'>
                        {blogPosts?.items?.map(post => {
                            return(
                                <motion.div 
                                    initial={{ x: -250 }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 1 }}
                                    key={post.sys.id} 
                                    className='pb-4 bg-gray-100 dark:bg-gray-800 rounded shadow-md'
                                >
                                    <img src={post.fields.postImage.fields.file.url} alt="Post's image description" className='' />
                                    <div className='mt-4 px-4'>
                                        <h2 className='text-xl text-gray-600 font-poppins font-bold dark:text-white'>{post.fields.title}</h2>
                                        <p className='text-gray-600 dark:text-gray-400 mt-4 text-justify'>{post.fields.description.content[0].content[0].value.substring(0,150)}...</p>
                                        <Link to={`/blog/articles/${post.sys.id}`}>
                                            <button className='mt-4 btn btn-general'>Read more</button>
                                        </Link>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

            </main>
            
            <Footer />

        </motion.div>
     );
}
 
export default Blog;