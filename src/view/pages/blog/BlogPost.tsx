import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBlogPost } from './useBlogPost';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { post } = useBlogPost(id);


  if (!post) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg text-gray-800 border border-orange-100"
        >
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-8">{post.date}</p>
          <div 
            className="prose prose-orange max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
