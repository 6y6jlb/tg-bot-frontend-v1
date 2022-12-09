export async function throwOnError(response: Response) {
    if (response.ok) {
        return;
    }

    const json = await response.json();

    const responseError = {
        type: 'Error',
        message: json.message || response.statusText || 'Something went wrong',
        code: response.status || '',
        errors: json.errors
    };
    let error = new Error();

    error = { ...error, ...responseError };

    throw error;
};