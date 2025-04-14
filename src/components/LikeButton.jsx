import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  // Fetch initial like count
  useEffect(() => {
    fetch('http://localhost:5000/api/likes')
      .then((res) => res.json())
      .then((data) => setLikes(data.likes));
  }, []);

  const handleLike = async () => {
    if (liked) return;
    const res = await fetch('http://localhost:5000/api/likes', {
      method: 'POST',
    });
    const data = await res.json();
    setLikes(data.likes);
    setLiked(true);
  };

  return (
    <div className="text-center mt-10">
      <button
        onClick={handleLike}
        disabled={liked}
        className={`flex items-center gap-2 mx-auto bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition transform hover:scale-105 ${
          liked ? 'opacity-60 cursor-not-allowed' : ''
        }`}
      >
        <FaHeart className={`text-red-600 ${liked ? 'animate-ping' : ''}`} />
        {liked ? 'Liked!' : 'Like This Page'}
      </button>
      <p className="text-sm text-gray-400 mt-2">{likes} people liked this page</p>
    </div>
  );
};

export default LikeButton;
