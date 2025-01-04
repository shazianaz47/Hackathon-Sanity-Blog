import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";


export interface Blog {
  heading: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export default async function Home() {
  const data: Blog[] = await client.fetch(`*[_type == "blog"]{ 
  heading,
    description,
    "slug":slug.current,
    "imageUrl":image.asset-> url
   }`);
  return (
    <div>
      {/* <div className="bg-blue-200"> <Header/></div> */}
     
      <div className="text-gray-500 text-bold text-5xl p-6 underline text-center">
        Blog Design-0-Pedia
      </div>
      <p className="mx-20 font-thin text-[20px] text-[#807575]">
        Jewelry is ornamental objects that wear to decorate someone like a man or
        woman and to present a person with a decorative manner.<br/> In Jewelry,
        design work your jewelry website must be updated according to the latest
        tradition as per your jewelry collection. Classically designed
        ornaments, jewels, gold, silver, diamonds related website templates for
        all types of jewelry items and jewelry shops. It also covers online
        shopping stores websites and e-commerce. You can pick a website template
        under this category to develop a beautiful responsive and mobile
        friendly website. If you want to give the fame of your jewelry brand,
        you can not take your online presence lightly. So for this, you have to
        design an impactable and vital jewelry website. No need to worry about
        your website design as we are giving a readymade designed category as
        jewelry website templates that give a lot of jewelry website template
        options according to your jewelry business. Go through with these
        refreshing jewelry website templates, and show off your jewelry business
        in an ideal way.
      </p>

      <div className=" mx-20 grid grid-cols-2 md:grid-cols-4">
        {data.map((blog, index) => {
          return (
            <Link key={index} href={`/blog/${blog.slug}`}>
              <div className="max-h-screen flex justify-center items-center flex-col gap-20">
                <div className="p-2 shadow-2xl rounded-md  max-w-xs hover:scale-105 active:scale-100 transition-all">
                  <Image
                    src={blog.imageUrl}
                    alt="blogImage"
                    width={500}
                    height={300}
                  />
                  <div className="p-2">
                    <h2 className="text-xl font-bold ">{blog.heading}</h2>
                    <p className="text-sm line-clamp-2">{blog.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      
    </div>
  );
}
