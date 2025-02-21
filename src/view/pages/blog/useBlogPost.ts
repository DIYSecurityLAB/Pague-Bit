import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useBlogPost = (id: string | undefined) => {
  const [post, setPost] = useState<{ title: string; date: string; content: string } | undefined>();
  const { t } = useTranslation();

  useEffect(() => {
    console.log(t(`faq.categories.bitcoin.title`))
    if (id) {
      const translatedPost = {
        title: t(`blog.posts.${id}.title`),
        date: t(`blog.posts.${id}.date`),
        content: t(`blog.posts.${id}.content`),
      };
      setPost(translatedPost);
    }
  }, [id, t]);

  return { post };
};
