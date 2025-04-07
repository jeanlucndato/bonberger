import connectToDatabase from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const { id } = params;
    try {
        const db = await connectToDatabase();
        const collection = db.collection('posts');
        const objectId = new ObjectId(id);
        const post = await collection.findOne({ _id: objectId });
        if (post) {
            return NextResponse.json(post);
        } else {
            return NextResponse.json({ message: 'Article non trouvé' }, { status: 404 });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'article :', error);
        return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
    }
}

// Implémentez les fonctions PUT et DELETE de manière similaire si nécessaire