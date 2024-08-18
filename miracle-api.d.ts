declare module 'miracle-api' {
	export default class miracleAPI {
		static get(url: string): Promise<any>
		static post(url: string, data: any): Promise<any>
		static put(url: string, data: any): Promise<any>
		static delete(url: string): Promise<any>
	}
}
