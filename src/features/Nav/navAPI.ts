const url = `https://bezoge.nftendo.net/api/header-master?populate%5BLev0%5D%5Bpopulate%5D%5BColumnLinks1%5D=*&populate%5BLev0%5D%5Bpopulate%5D%5BColumnLinks2%5D=*&populate%5BLev0%5D%5Bpopulate%5D%5BImageLink1%5D%5Bpopulate%5D=*&populate%5BLev0%5D%5Bpopulate%5D%5BImageLink2%5D%5Bpopulate%5D=*`;

export async function fetchNavList(): Promise<unknown> {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const result = await response.json();

    return result;
}
