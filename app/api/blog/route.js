import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
const LoadDB = async() =>{
    await connectDB();
}

LoadDB();

export async function GET(request){
    console.log("Blog GET Hit");
    return NextResponse.json({msg: "Api Working"})
}

export async function POST( request) {
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
    const blogData ={
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author: `${formData.get('author')}`, 
        image: `${imgUrl}`
    }
    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({success:true, msg:"Blog Added"})

}