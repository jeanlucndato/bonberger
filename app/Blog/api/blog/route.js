import { ConnectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/BonBerger";
import { write } from "fs";
const { NextResponse } = require("next/server")
import { writeFile } from 'fs/promises'
import { Content } from "next/font/google";
import { title } from "process";
import { buffer } from "stream/consumers";

const LoadDB = async () => {
    await ConnectDB();
}

export async function GET(request) {
    return NextResponse.json({ msg: "API Working" })
}

export async function POST(request) {

    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteDate = await image.arrayBuffer();
    const path = './public/${timestamp}_${image.name}';
    await writeFile(path, buffer);
    const imgUrl = '/${timestamp}_${image.name}'

    const blogData = {
        title: `${formData.get('title')}`,
        content: `${formData.get('content')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        author_img: `${formData.get('author_img')}`,

    }

    await BlogModel.create(blogData);
    console.log("Blog saved");


    return NextResponse.json({ success: true, msg: "Blog Add" })

}