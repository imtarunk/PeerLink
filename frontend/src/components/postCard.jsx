import React from 'react'
import { TiMessages } from "react-icons/ti";
import { CiRepeat } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePoll } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";


const PostCard = () => {
  return (
    <div className='h-auto border-b border-gray-200' >
      <div className='flex items-center'>
        <div width="55" className='m-2' >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none" shape-rendering="auto" width="55" className='rounded-full' ><metadata xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/"><rdf:RDF><rdf:Description><dc:title>Adventurer Neutral</dc:title><dc:creator>Lisa Wischofsky</dc:creator><dc:source xsi:type="dcterms:URI">https://www.figma.com/community/file/1184595184137881796</dc:source><dcterms:license xsi:type="dcterms:URI">https://creativecommons.org/licenses/by/4.0/</dcterms:license><dc:rights>Remix of „Adventurer Neutral” (https://www.figma.com/community/file/1184595184137881796) by „Lisa Wischofsky”, licensed under „CC BY 4.0” (https://creativecommons.org/licenses/by/4.0/)</dc:rights></rdf:Description></rdf:RDF></metadata><mask id="viewboxMask"><rect width="400" height="400" rx="0" ry="0" x="0" y="0" fill="#fff" /></mask><g mask="url(#viewboxMask)"><rect fill="#f2d3b1" width="400" height="400" x="0" y="0" /><g transform="translate(-279 -322)"><path d="M506.03 461.12c5.5-1.16 11.66 2.44 16.92 3.98 22.15 7.08 45.9 9.46 69.06 7.74 6.23-.6 12.8-2.4 19.04-2 6.2.65 10.4 6.06 10.95 12.05.76 10.8-.8 22-5.08 32a65.62 65.62 0 0 1-30.44 32.6c-21.35 11.07-48.35 9-67.75-5.22-14.69-10.5-24.7-27.34-26.67-45.3-.85-8.7-.38-17.4 2.09-25.8 1.4-5.24 6.78-9 11.88-10.05ZM428.25 466.75c3.63 2.23 5.82 6.6 7.78 10.25 5.54 10.8 7 23.18 4.95 35.07a55.32 55.32 0 0 1-14.73 28.2 55.06 55.06 0 0 1-72.17 5.63 54.77 54.77 0 0 1-21.34-34.89c-.57-3.68-1.52-7.6.15-11.13a12.41 12.41 0 0 1 10.11-7.6c4.94-.59 9.87-1.18 14.78-2 18.38-3.3 35.26-11.25 50.36-22.12 5.88-5.11 13.54-5.46 20.11-1.41Z" fill="#000" /><path d="M513.41 467.65c12.21 5.03 25.5 7.97 38.57 9.71 15.64 2.02 31.39 2.59 47.04.31 3.87-.56 8.11-1.82 12-1.53 2.42.08 4.34 2.67 4.81 4.87a59.18 59.18 0 0 1-5.45 34.37 59.08 59.08 0 0 1-31.6 29.27 58.37 58.37 0 0 1-33.76 3.03 59.62 59.62 0 0 1-40.59-30.1c-6.9-12.96-9.37-29-5.07-43.17 1.67-6.19 8-9.93 14.05-6.76ZM427.77 474.23a51.2 51.2 0 0 1 8.4 23.72c1.23 16.4-6.14 32.97-19.26 42.91a50.17 50.17 0 0 1-30.92 10.3 50.1 50.1 0 0 1-31.68-12.48 49.18 49.18 0 0 1-16.54-33.7c-.47-3.2 2.13-6.47 5.26-6.96 3.24-.67 6.63-.78 9.92-1.18 18.5-2.26 36.6-9.6 52.19-19.69 3.1-1.92 5.86-4.31 8.97-6.18 4.4-2.3 10.95-1.13 13.66 3.26Z" fill="#fff" /><path d="M533.54 496.92c12.3-1.1 23.89 8.53 24.08 21.08.84 11.05-7.56 21.22-18.45 22.83-11.9 2.14-23.93-6.81-25.4-18.8-1.93-12.29 7.5-23.97 19.77-25.1ZM400.49 505.5c5.96-1.31 12.63.86 17.06 4.96a19.5 19.5 0 0 1 3.72 23.81c-4.15 7.79-13.62 11.6-22.08 9.37-8.34-2.18-14.54-9.95-14.42-18.64-.3-9.44 6.57-17.6 15.72-19.5Z" fill="#000" /></g><g transform="translate(-279 -322)"><path d="M501.99 384.96c9.9.12 19.87 3.23 28.83 7.31 3.36 1.88 7.05 4 7.3 8.3-5.13-.87-10.13-2.07-15.37-2.3-11.6-.67-23.13 1.37-33.25 7.24-2.54 1.41-4.95 3.26-7.64 4.35-1.8.27-3.92-2-3.94-3.73-.18-5.81 1.95-11.92 6.53-15.7 5.03-4.23 11.15-5.3 17.54-5.47ZM414.03 402.61c5.81.15 10.93 5.3 12.51 10.64.8 2.63-.46 5.72-3.53 5.61-8.82.2-18.2.03-26.81 2.26-7.52 2-14.74 6.7-21.36 10.74-1.22.81-2.57.96-3.98 1.22.33-1.93.64-3.66 1.94-5.2a97.47 97.47 0 0 1 10.74-12.31c5.88-5.17 13-8.96 20.32-11.66a25.26 25.26 0 0 1 10.17-1.29Z" fill="#000" /></g><g transform="translate(-279 -322)"><path d="M517 555.43c13.39-.24 28.7 3.46 38.6 12.98 5.97 5.58 9.72 13.37 9.9 21.58.32 10.21-3.84 19.58-9.89 27.58-9.04 11.85-21.87 20.72-35.47 26.57-7.32 2.84-14.4 5.71-22.15 7.24a86.28 86.28 0 0 1-50.03-5.3c-13.98-6.02-27.24-14.25-38.31-24.72-5.42-5.3-10.58-11.7-13.28-18.84-2.03-5.48-2.34-11.97 1.22-16.9 3.69-5.38 9.98-7.75 16.17-8.85 12.6-1.77 24.45.42 36.57 3.76 7.36-6.86 15.88-12.06 25.02-16.2 13-5.75 27.38-9.3 41.64-8.9Z" fill="#000" /><path d="M542.47 566.35c-3.47 2.67-7.33 4.74-10.83 7.34-4.3 4.07-7.6 10.96-12.77 14.1-5.16.83-10.5-3.33-15.18-1.12a174.6 174.6 0 0 1-28.5 7.9c-14.13 2.57-29.47 3.77-43.63.89-4.3-1.11-7.12 1.32-11.46 1.88-4.37-4.22-7.53-9.21-12.73-12.6 12.76-5.3 28.76-1.98 41.63 1.52 3.92 1.25 6.04-2.46 8.8-4.48 13.48-10.73 30.18-17.54 47.23-19.85 12.66-1.87 25.64-.74 37.44 4.4Z" fill="#fff" /><path d="M547.96 569.91c7.13 4.3 11.65 12.83 11.82 21.1-.18 7.43-2.97 13.98-6.8 20.23-6.37-2.56-13.17-3.29-20-2.88-14.35.89-28.53 4.42-41.9 9.67-9.04 3.64-18.05 8.23-25.74 14.27a32.46 32.46 0 0 0-8.76 10.38c-7.74-2.15-14.6-5.75-21.53-9.73-9.94-5.85-19.02-12.62-26.5-21.47-3.77-4.64-7.55-10.34-7.78-16.5-.14-2.32.91-4.42 1.72-6.54 5.4 3.65 9.36 8.64 14.22 12.85 4 3.4 9.21-.66 13.75.07 5.81.96 11.66 1.4 17.53 1.74a174.18 174.18 0 0 0 59.65-11.55c4.16.86 9.89 2.73 13.97 1.05 4.92-2.83 8.62-8.57 12.18-12.9 1.47-1.75 3.81-2.92 5.71-4.17 2.9-1.75 5.48-4.02 8.46-5.62Z" fill="#8F2E45" /><path d="M536 614.18c4.54-.1 8.95.63 13.3 1.9-9.23 11.12-22.42 19.3-35.85 24.38-16.26 6.04-34.23 8.32-51.21 3.94a34.42 34.42 0 0 1 6.76-7.39c8.9-7.26 20.2-12.2 31-15.97 11.5-3.83 23.85-6.67 36-6.86Z" fill="#EA869E" /></g><g transform="translate(-279 -322)"></g></g></svg>
        </div>
        <div>
          <div>
            <h1>@codexkalii</h1>
          </div>
          <div>
            <h3 className='text-sm text-gray-500'>location tags</h3>
          </div>
        </div>
      </div>
      <div>
        <div class="border border-gray-200 ml-[10%] mr-3 p-4 rounded-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur esse saepe animi illum rem voluptas expedita id placeat incidunt, maxime quo non eum reprehenderit ex, doloribus perspiciatis ea accusamus nobis.
        </div>
      </div>
      <div className='ml-[10%] mt-2 mb-2 relative'>
        <div className="reactuonIcon flex items-center space-x-4 text-xl">
          <TiMessages />
          <CiRepeat />
          <CiHeart />
          <MdOutlinePoll />
          <CiBookmark />
          <div className="ml-8 flex absolute space-x-2 right-3 ">
            <CiShare2 />
            <CiBookmark />
          </div>
        </div>
      </div>

    </div>
  )
}

export default PostCard;