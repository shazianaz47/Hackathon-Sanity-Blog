// import { client } from './client';

// export const getHeaderData = async () => {
//   const query = `*[_type == "header"][0]{
//     "logo": logo.asset->url,
//     navigationLinks[] {
//       title,
//       url
//     }
//   }`;
//   return await client.fetch(query);
// };

// export const getFooterData = async () => {
//   const query = `*[_type == "footer"][0]{
//     contactInfo,
//     socialMediaLinks[] {
//       platform,
//       url
//     }
//   }`;
//   return await client.fetch(query);
// };
