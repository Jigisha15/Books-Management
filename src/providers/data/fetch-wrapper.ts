type ErrorResponse = {
    errors?: { message: string }[];
    error?: string;
};
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
            const errorData = await response.json() as ErrorResponse;
            throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            return data;
        }

        return response;
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
};

