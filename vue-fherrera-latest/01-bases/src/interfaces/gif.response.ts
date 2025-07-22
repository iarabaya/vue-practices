export interface GIFResponse {
    data: Data;
    meta: Meta;
}

export interface Data {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: string;
    import_datetime: string;
    trending_datetime: string;
    images: Images;
    user: User;
    analytics_response_payload: string;
    analytics: Analytics;
    alt_text: string;
}

export interface Analytics {
    onload: Onclick;
    onclick: Onclick;
    onsent: Onclick;
}

export interface Onclick { 
    url: string;
}

export interface Images {
    original: { [key: string]: string};
    downsized: The480_WStill;
    downsized_large: The480_WStill;
}

export interface The480_WStill {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface User {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    description: string;
    instagram_url: string;
    website_url: string;
    is_verified: boolean;
}

export interface Meta {
    status: number;
    msg: string;
    response_id: string;
}