export class Quotes {
    _id: string = "";
    tags: string[] = [];
    content: string = "";
    author: string = "";
    authorSlug: string = "";
    length: number = 0;
    dateAdded: string = "";
    dateModified: string = "";
}

export const fetchQuotes: () => Promise<Quotes> = async () => {
    const url: string = "https://api.quotable.io/random";
    const getUrl: Response = await fetch(url);
    const data: Quotes = await getUrl.json();

    return data;
}