import React, { useEffect, useState } from 'react';
import MyModal from "../components/UI/mymodal/MyModal"
import Mybutton from "../components/UI/button/mybutton"
import { usePosts } from '../components/Hooks/usePosts';
import PostFilter from "../components/PostFilter"
import PostFrom from "../components/PostFrom"
import Paginaion from "../components/pagineishn/Pagination"
import Loader from "../components/UI/Loader/Loader"
import PostList from "../components/PostList"
import {useFetching} from "../components/Hooks/useFetching"
import {getPageCount} from "../components/utils/pages"
import PostService from "../components/API/PostService"
    


function Posts() {
const [posts, setPosts] = useState([])
const [ filter, setFilter ] = useState({sort: '' , query: ''})
const [modal, setModal] = useState(false);
const [limit, setLimit] =useState(10)
const [page, setPage] = useState(1)
const [totalPages, setTotalPages] = useState(0);

const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);



const [fetchPosts, isPostsLoading, postError] = useFetching(async() => {
  const response = await PostService.getAll(limit, page);
  setPosts(response.data);
  const totalCount = response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount, limit));
})


useEffect(() => {
  fetchPosts()
}, [page])



const createPost = (newPost) => {
 setPosts([...posts, newPost])
 setModal(false)
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

const changePage = (page) => {
  setPage(page)
}
 
  return (
    <div className="App">
      <Mybutton onClick={() => setModal(true)}>
        Створити
        </Mybutton>
      <MyModal visible={modal} setVisible={setModal}>
       <PostFrom create={createPost}/>
      </MyModal>
      <hr/>
      <PostFilter 
        filter={filter} 
        setFilter={setFilter}
      />
      {postError && 
        <h1>помилка ${postError}</h1>
      }
      {isPostsLoading
        ? <div>
          <Loader/>
        </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
      }
      <Paginaion 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages}
      />
      
    </div>
  );
}

export default Posts;
