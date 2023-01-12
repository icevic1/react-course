import {useMemo} from "react";

export const useSortedPosts = (posts, sortType) => {
  const sortedPosts = useMemo(() => {
    return !!sortType
      ? [...posts].sort((a, b) => a[sortType].localeCompare(b[sortType]))
      : posts
  }, [sortType, posts])
  return sortedPosts
}

export const usePosts = (posts, sortType, filterQuery) => {
  const sortedPosts = useSortedPosts(posts, sortType)
  const filteredPosts = useMemo(() => {

    return !!filterQuery
      ? [...sortedPosts].filter((post) => post.title.toLowerCase().includes(filterQuery.toLowerCase()))
      : sortedPosts

  }, [filterQuery, sortedPosts])
  return filteredPosts
}
