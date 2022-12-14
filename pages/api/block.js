import { createBlock } from '../../lib/redis';

export default async function handler(req, res) {
    const id = await createBlock(req.body);
    res.status(200).json({ id })
}