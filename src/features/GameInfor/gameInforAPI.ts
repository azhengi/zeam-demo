export type SystemRequirement = {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
};

export interface GameDetail {
    id: number;
    title: string;
    thumbnail: string;
    status: string;
    short_description: string;
    description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
    minimum_system_requirements: SystemRequirement;
    screenshots: Array<{
        id: number;
        image: string;
    }>;
}


export interface GameResponse {
    data: GameDetail;
    msg: string;
    success: boolean;
};

export async function fetchGame(params): Promise<GameResponse> {
    const response = await fetch(`/api/game${params ? '?' + new URLSearchParams(params) : ''}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const result = await response.json();

    return result;
}
