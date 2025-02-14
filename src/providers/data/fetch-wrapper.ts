import { GraphQLFormattedError } from "graphql";

type Error = {
    message: string;
    statusCode: string;
}

const customFetch = async (url: string, options: RequestInit) => {
    const headers = options.headers as Record<string, string>;

    return await fetch(url, {
        ...options,
        headers: {
            ...headers,
            "Content-Type": "application/json",
        }
    });
};

export const fetchWrapper = async (url: string, options: RequestInit) => {
    const response = await customFetch(url, options);
  
    const body = await response.json();
  
    if (body.errors) {
        throw new Error(body.errors.map((err: GraphQLFormattedError) => err.message).join(", "));
    }
  
    return body;
};
