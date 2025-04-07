import connectToDatabase from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';
import slugify from 'slugify';

export default async function handler(req, res) {
    const { id } = req.query;

    try {
        const db = await connectToDatabase();
        const collection = db.collection('posts');

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'ID d\'article invalide.' });
        }

        if (req.method === 'GET') {
            const post = await collection.findOne({ _id: new ObjectId(id) });

            if (post) {
                return res.status(200).json({ ...post, _id: post._id.toString() });
            } else {
                return res.status(404).json({ error: 'Article non trouvé.' });
            }
        } else if (req.method === 'PUT') {
            const { title, content, author, tags } = req.body;

            if (!title || !content || !author) {
                return res.status(400).json({ error: 'Le titre, le contenu et l\'auteur sont requis pour la mise à jour.' });
            }

            const slug = slugify(title, { lower: true });
            const updatedAt = new Date();

            const result = await collection.updateOne(
                { _id: new ObjectId(id) },
                { $set: { title, slug, content, author, updatedAt, tags } }
            );

            if (result.modifiedCount > 0) {
                const updatedPost = await collection.findOne({ _id: new ObjectId(id) });
                return res.status(200).json({ message: 'Article mis à jour avec succès!', slug: updatedPost.slug });
            } else {
                return res.status(404).json({ error: 'Article non trouvé ou aucune modification apportée.' });
            }
        } else if (req.method === 'DELETE') {
            const result = await collection.deleteOne({ _id: new ObjectId(id) });

            if (result.deletedCount > 0) {
                return res.status(200).json({ message: 'Article supprimé avec succès!' });
            } else {
                return res.status(404).json({ error: 'Article non trouvé.' });
            }
        } else {
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Erreur lors de la gestion de l\'article par ID :', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
}