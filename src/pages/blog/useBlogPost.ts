import { useState, useEffect } from 'react';
import blogPosts from './data/blogPosts';

export const useBlogPost = (id: string | undefined) => {
  const [post, setPost] = useState<typeof blogPosts[0] | undefined>();

  useEffect(() => {
    if (id) {
      const foundPost = blogPosts.find(p => p.id === id);
      setPost(foundPost);
    }
  }, [id]);

  return { post };
};
