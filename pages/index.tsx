import { SinglePost } from '@/components/Post/SinglePost';
import { getAllPosts } from '../lib/notionAPI';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps =async () => {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts,
    },
    revalidate: 60,
  }
}

export default function Home({allPosts}) {
  console.log(allPosts);
  return (
    <main className='container w-full mt-16'>
      <h1 className='font-medium text-5xl text-center mb-16'>Notion Blog</h1>
      {allPosts.map((post) => (
        <div className='mx-4'>
          <SinglePost title={post.title} description={post.description} date={post.date} tags={post.tags} slug={post.slug}/>
        </div>
      ))}
    </main>
  )
}
