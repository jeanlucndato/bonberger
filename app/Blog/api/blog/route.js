import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BonBerger";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

const LoadDB = async () => {
    await ConnectDB();
};

// API Endpoint to get all blogs
export async function GET(request) {
    try {
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return NextResponse.json({ success: false, msg: "Failed to fetch blogs" }, { status: 500 });
    }
}

// API endpoint for uploading a blog
export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        // Retrieve the image file from the form data
        const image = formData.get("image");
        if (!image) {
            return NextResponse.json({ success: false, msg: "Image is required" }, { status: 400 });
        }

        // Convert the image to a buffer
        const imageBuffer = Buffer.from(await image.arrayBuffer());

        // Construct the file path and save the image
        const fileName = `${timestamp}_${image.name}`;
        const filePath = `./public/${fileName}`;
        await writeFile(filePath, imageBuffer);

        // Construct the public URL for the image
        const imgUrl = `/${fileName}`;

        // Create the blog data object
        const blogData = {
            title: formData.get("title"),
            content: formData.get("content"),
            category: formData.get("category"),
            author: formData.get("author"),
            image: imgUrl,
            author_img: formData.get("author_img"),
        };

        // Save the blog to the database
        await BlogModel.create(blogData);
        console.log("Blog saved");

        return NextResponse.json({ success: true, msg: "Blog added successfully" });
    } catch (error) {
        console.error("Error uploading blog:", error);
        return NextResponse.json({ success: false, msg: "Failed to upload blog" }, { status: 500 });
    }
}