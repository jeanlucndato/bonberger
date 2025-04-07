import connectToDatabase from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('posts');
        const posts = await collection.find({}).sort({ createdAt: -1 }).toArray();
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
        return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('posts');
        const { title, content, author, tags } = await request.json();
        const newPost = { title, content, author, createdAt: new Date(), updatedAt: new Date(), tags: tags || [] };
        const result = await collection.insertOne(newPost);
        return NextResponse.json({ message: 'Article créé avec succès', postId: result.insertedId }, { status: 201 });
    } catch (error) {
        console.error('Erreur lors de la création de l\'article :', error);
        return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
    }
}