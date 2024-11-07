export type Item = {
    startDate: string;
    endDate: string;
    location: string;
    urlPath: string;
    id: string;
    title: string;
    homepageImage: Image;
    page: 'selectedworks' | 'archive' | 'events' | 'words';
    meta: string;
    rows: Row[];
};

export type Description = {
    text: string;
    html: string;
};

export type About = {
    id: string;
    rows: Row[];
};

export type Row = {
    width?: number;
    align: string;
    columns: number;
    segments: Segment[];
};

export type Segment = {
    type: string;
    width: number;
    content: SegmentImage | Text;
};

export type SegmentImage = { image: Image; alt?: string; meta?: string };

export type Text = {
    text: {
        text: string;
        html: string;
    };
};

export type Image = {
    id: string;
    height: number;
    width: number;
    url: string;
    mimeType: string;
};
