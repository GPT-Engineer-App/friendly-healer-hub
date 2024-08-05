import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Forum = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Tips for night shifts', content: 'Share your best practices for staying alert during night shifts.' },
    { id: 2, title: 'New COVID-19 protocols', content: 'Discussion on the latest COVID-19 protocols in hospitals.' },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { id: posts.length + 1, ...newPost }]);
    setNewPost({ title: '', content: '' });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Community Forum</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <Input
          type="text"
          placeholder="Post Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className="mb-4"
        />
        <Textarea
          placeholder="Post Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          className="mb-4"
        />
        <Button type="submit">Create Post</Button>
      </form>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
