import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';
import type {APIContext} from 'astro';
export async function GET(context:APIContext){const notes=await getCollection('notes',({data})=>!data.draft);return rss({title:'Haoran Qian — Notes',description:'A research notebook on world models, generative modeling, and multimodal learning.',site:context.site!,items:notes.sort((a,b)=>b.data.date.valueOf()-a.data.date.valueOf()).map(n=>({title:n.data.title,description:n.data.description,pubDate:n.data.date,link:`/notes/${n.id}/`}))})}
