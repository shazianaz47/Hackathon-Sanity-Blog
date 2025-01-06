import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { Blog } from '@/app/page'
import CommentsSection from '@/app/components/CommentsSection'

interface Params {
    params:{
        slug:string
    };
}

const BlogPost = async ({params}:Params) => {
   
   const {slug} = await params;
    const data:Blog = await client.fetch (`*[_type == "blog" && slug.current == $slug]{ 
    heading,
    description,
    "slug":slug.current,
    "imageUrl":image.asset-> url
   }[0]`, {slug})
  return (
    <main className='max-w-5xl my-20 shadow-xl rounded-lg mx-auto p-4 flex-col items-center'>
        <div>
            <Image className="rounded-lg object-cover h-[20rem]" src={data.imageUrl} alt={data.heading} width={1024} height={600}/>
        </div>
        <div>
            <h2 className='text-3xl font-bold my-10'>
                {data.heading}
            </h2>

            <p className='text-lg '>
                {data.description}
            </p><br/>
            <CommentsSection/>
        </div>
    </main>
  )
}

export default BlogPost