export interface GameData {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
};

export interface GameListResponse {
    data: Array<GameData>;
    msg: string;
    success: boolean;
};

export async function fetchGameList(params): Promise<GameListResponse> {
    const response = await fetch(`/api/games${params ? '?' + new URLSearchParams(params) : ''}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const result = await response.json();

    return result;
}
