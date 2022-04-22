import type { NextApiHandler } from 'next';
import got from 'got';

const gamesHandler: NextApiHandler = async (request, response) => {
    const { query } = request;

    const gamesData = await got.get(
        `https://www.freetogame.com/api/games`,
        {
            // @ts-ignore
            searchParams: query
        }
    ).json();
    response.json({
        data: gamesData,
        msg: '',
        success: true
    });
};

export default gamesHandler;
