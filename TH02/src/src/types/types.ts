export interface WeatherData {
    current_condition: {
        temp_C: string;
        weatherDesc: Array<{ value: string }>;
    }[];
}

export interface Student {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface NewsArticle {
    id: number;
    title: string;
    url: string;
    image_url: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
}