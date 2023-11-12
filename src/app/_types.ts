export type Item = {
    startDate: string;
    endDate: string;
    location: string;
    urlPath: string;
    id: string;
    mainImage: Image;
    title: string;
    details: Description;
    summary: string;
    page: 'selectedworks' | 'archive' | 'events' | 'words';
};

export type Image = {
    id: string;
    height: number;
    width: number;
    url: string;
    mimeType: string;
};

export type Description = {
    text: string;
    html: string;
};

export type About = {
    id: string;
    image: Image;
    description: Description;
    title: string;
    statement: string;
};
