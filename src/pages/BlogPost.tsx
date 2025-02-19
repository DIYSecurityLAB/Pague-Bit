import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogPosts from '../data/blogPosts';

function BlogPost() {
  const { id } = useParams<{ id: string }>();

  // Find the blog post by ID.  Handle the case where it's not found.
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="container mx-auto p-4 text-white">
        <h1 className="text-3xl font-bold">Postagem não encontrada</h1>
        <p>Desculpe, a postagem que você está procurando não existe.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-md text-white"
      >
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-300 mb-4">{post.date}</p>
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </motion.div>
    </div>
  );
}

export default BlogPost;
