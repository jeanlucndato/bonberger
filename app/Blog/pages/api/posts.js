import connectToDatabase from '../../lib/mongodb';
import slugify from 'slugify';

export default async function handler(req, res) {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('posts');

        if (req.method === 'POST') {
            const { title, content, author, tags } = req.body;

            if (!title || !content || !author) {
                return res.status(400).json({ error: 'Le titre, le contenu et l\'auteur sont requis.' });
            }

            const slug = slugify(title, { lower: true });
            const createdAt = new Date();

            const newPost = {
                title,
                slug,
                content,
                author,
                createdAt,
                updatedAt: createdAt,
                tags: tags || []
            };

            const result = await collection.insertOne(newPost);

            if (result.insertedId) {
                return res.status(201).json({ message: 'Article créé avec succès', postId: result.insertedId, slug });
            } else {
                return res.status(500).json({ error: 'Erreur lors de la création de l\'article.' });
            }
        } else if (req.method === 'GET') {
            const posts = await collection.find({}).sort({ createdAt: -1 }).toArray();
            // Formatter l'ID pour le JSON
            const formattedPosts = posts.map(post => ({ ...post, _id: post._id.toString() }));
            res.status(200).json(formattedPosts);
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Erreur lors de la gestion des articles :', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
}