declare class miracleAPI {
    static get(url: string): Promise<any>;
    static post(url: string, data: any): Promise<any>;
    static put(url: string, data: any): Promise<any>;
    static delete(url: string): Promise<any>;
    private static request;
}
export default miracleAPI;
