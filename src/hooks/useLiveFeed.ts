import { useState, useEffect, useCallback } from 'react';
import { mockSellers, initialComments, simulatedStreamMessages } from '../data/liveStreams';
import type { Seller, Comment } from '../types';

interface FloatingHeart {
  id: number;
  left: number;
  color: string;
}

export function useLiveFeed(initialSellerIndex = 0) {
  const [currentSellerIndex, setCurrentSellerIndex] = useState(initialSellerIndex);
  const [sellers, setSellers] = useState<Seller[]>(mockSellers);
  const [commentsMap, setCommentsMap] = useState<Record<string, Comment[]>>(initialComments);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([]);
  const [isMuted, setIsMuted] = useState(true);
  const [streamError, setStreamError] = useState(false);

  useEffect(() => {
    setSellers(mockSellers);
  }, []);

  const currentSeller = sellers[currentSellerIndex] || sellers[0];

  // Navigation
  const goToNextSeller = useCallback(() => {
    setCurrentSellerIndex((prev) => (prev + 1) % sellers.length);
    setStreamError(false);
  }, [sellers.length]);

  const goToPrevSeller = useCallback(() => {
    setCurrentSellerIndex((prev) => (prev - 1 + sellers.length) % sellers.length);
    setStreamError(false);
  }, [sellers.length]);

  const goToSellerById = useCallback((sellerId: string) => {
    const idx = sellers.findIndex((s) => s.id === sellerId);
    if (idx !== -1) {
      setCurrentSellerIndex(idx);
      setStreamError(false);
    }
  }, [sellers]);

  // Toggle Like
  const toggleLike = useCallback(() => {
    const sellerId = currentSeller.id;
    const isCurrentlyLiked = !!likedMap[sellerId];

    setLikedMap((prev) => ({
      ...prev,
      [sellerId]: !isCurrentlyLiked
    }));

    setSellers((prev) =>
      prev.map((s) => {
        if (s.id === sellerId) {
          return {
            ...s,
            likeCount: isCurrentlyLiked ? Math.max(0, s.likeCount - 1) : s.likeCount + 1
          };
        }
        return s;
      })
    );

    // Spawn floating heart
    const colors = ['#ef4444', '#ec4899', '#f43f5e', '#fb7185', '#fda4af'];
    const newHeart: FloatingHeart = {
      id: Date.now() + Math.random(),
      left: 10 + Math.random() * 50,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setFloatingHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1200);
  }, [currentSeller.id, likedMap]);

  // Toggle Follow
  const toggleFollow = useCallback((sellerId: string) => {
    setSellers((prev) =>
      prev.map((s) => {
        if (s.id === sellerId) {
          return {
            ...s,
            isFollowed: !s.isFollowed
          };
        }
        return s;
      })
    );
  }, []);

  // Add Comment
  const addComment = useCallback((text: string, userName = 'You') => {
    if (!text.trim()) return;
    const newComment: Comment = {
      id: 'usr-' + Date.now(),
      userName,
      userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      text: text.trim(),
      timestamp: 'Just now',
      isVerifiedBuyer: true
    };

    setCommentsMap((prev) => ({
      ...prev,
      [currentSeller.id]: [newComment, ...(prev[currentSeller.id] || [])]
    }));
  }, [currentSeller.id]);

  // Pin / Unpin Product
  const pinProduct = useCallback((sellerId: string, productId: string) => {
    setSellers((prev) =>
      prev.map((s) => {
        if (s.id === sellerId) {
          return {
            ...s,
            featuredProductId: s.featuredProductId === productId ? '' : productId
          };
        }
        return s;
      })
    );
  }, []);

  // Toggle Mute
  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  // Background Simulated Live Activity: Viewer count fluctuation & incoming live chat
  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setSellers((prev) =>
        prev.map((s) => {
          const delta = Math.floor(Math.random() * 7) - 3;
          return {
            ...s,
            viewerCount: Math.max(120, s.viewerCount + delta)
          };
        })
      );
    }, 4500);

    const chatInterval = setInterval(() => {
      const randomText =
        simulatedStreamMessages[Math.floor(Math.random() * simulatedStreamMessages.length)];
      const names = ['Rohan M.', 'Pooja G.', 'Kabir K.', 'Shreya S.', 'Vikram P.', 'Divya N.'];
      const randomName = names[Math.floor(Math.random() * names.length)];
      const incoming: Comment = {
        id: 'sim-' + Date.now(),
        userName: randomName,
        userAvatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80`,
        text: randomText,
        timestamp: 'Just now'
      };

      setCommentsMap((prev) => {
        const list = prev[currentSeller.id] || [];
        return {
          ...prev,
          [currentSeller.id]: [incoming, ...list.slice(0, 30)]
        };
      });
    }, 7000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(chatInterval);
    };
  }, [currentSeller.id]);

  return {
    sellers,
    currentSeller,
    currentSellerIndex,
    totalSellers: sellers.length,
    goToNextSeller,
    goToPrevSeller,
    goToSellerById,
    isLiked: !!likedMap[currentSeller.id],
    toggleLike,
    toggleFollow,
    comments: commentsMap[currentSeller.id] || [],
    addComment,
    pinProduct,
    floatingHearts,
    isMuted,
    toggleMute,
    streamError,
    setStreamError
  };
}
