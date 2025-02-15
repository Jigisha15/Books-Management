// import { GraphQLFormattedError } from "graphql";

// const customFetch = async (url: string, options: RequestInit) => {
//     const headers = options.headers as Record<string, string>;

//     return fetch(url, {
//         ...options,
//         headers: {
//             ...headers,
//             "Content-Type": "application/json",
//         },
//     });
// };

// export const fetchWrapper = async (url: string, options: RequestInit) => {
//     try {
//         const response = await customFetch(url, options);

//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
//         }

//         const body = await response.json();

//         if (body.errors) {
//             throw new Error(
//                 body.errors.map((err: GraphQLFormattedError) => err.message).join(", ")
//             );
//         }

//         return body;
//     } catch (error) {
//         console.error("Fetch error:", error);
//         throw new Error("An error occurred while fetching data.");
//     }
// };


const customFetch = async (url: string, options: RequestInit) => {
    const headers = options.headers as Record<string, string>;

    return fetch(url, {
        ...options,
        headers: {
            ...headers,
            "Content-Type": "application/json",
        },
    });
};

export const fetchWrapper = async (url: string, options: RequestInit) => {
    try {
        const response = await customFetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }

        const body = await response.json();

    
        if (Array.isArray(body)) {
            return { data: body, total: body.length };
        }

        
        if (body.errors) {
            throw new Error(
                body.errors.map((err: any) => err.message).join(", ")
            );
        }

        return body;
    } catch (error) {
        console.error("Fetch Error:", error);
        throw new Error("An error occurred while fetching data.");
    }
};

