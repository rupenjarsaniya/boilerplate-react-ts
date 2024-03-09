export default class NetworkService {
  private static BASE_URL: string = '/api/v1';

  get = async <T>(url: string): Promise<T> => {
    try {
      const res = await fetch(`${NetworkService.BASE_URL}${url}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        const resJson = await res.json();

        return resJson;
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  post = async (url: string, payload: unknown) => {
    try {
      const res = await fetch(`${NetworkService.BASE_URL}${url}`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      });
      const resJson = await res.json();

      if (res.status === 200) {
        return resJson;
      } else {
        return resJson.message;
      }
    } catch (error) {
      console.log(error);

      return error;
    }
  };

  patch = async <T>(url: string, payload: T) => {
    try {
      const res = await fetch(`${NetworkService.BASE_URL}${url}`, {
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      });
      const resJson = await res.json();

      if (res.status === 200) {
        return resJson;
      } else {
        return resJson.message;
      }
    } catch (error) {
      console.log(error);

      return error;
    }
  };

  delete = async (url: string) => {
    try {
      const res = await fetch(`${NetworkService.BASE_URL}${url}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      const resJson = await res.json();

      if (res.status === 200) {
        return resJson;
      } else {
        return resJson.message;
      }
    } catch (error) {
      console.log(error);

      return error;
    }
  };
}
