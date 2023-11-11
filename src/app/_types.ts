export type Item = {
    startDate: string;
    endDate: string;
    locations: string;
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
