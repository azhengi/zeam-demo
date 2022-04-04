import type { NextApiHandler } from 'next';
import got from 'got';

const gameHandler: NextApiHandler = async (request, response) => {
    const { id } = request.query;
    const gameData = await got.get(`https://www.freetogame.com/api/game?id=${id}`).json();
    
    response.json({
        data: gameData,
        msg: '',
        success: true
    });
};

export default gameHandler;
