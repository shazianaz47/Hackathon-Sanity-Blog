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
   
   const {slug} =  params;
    const data:Blog = await client.fetch (`*[_type == "blog" && slug.current == $slug]{ 
    heading,
    description,
    "slug":slug.current,
    "imageUrl":image.asset-> url
   }[0]`, {slug})
  return (
    <main className='max-w-5xl my-10 shadow-xl rounded-lg mx-auto p-4 flex-col items-center'>
       {/* Image Section */}
        <div className='space-y-4'>
            <Image className="rounded-lg object-cover h-[20rem]  "
             src={data.imageUrl} alt={data.heading} width={1200} height={600}/>
        </div>
        {/* Text Section */}
        <div className='mt-6'>
            <h2 className='text-3xl font-bold mb-6'>
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