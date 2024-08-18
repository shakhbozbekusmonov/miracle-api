class miracleAPI {
	static async get(url: string): Promise<any> {
		return this.request(url, 'GET')
	}

	static async post(url: string, data: any): Promise<any> {
		return this.request(url, 'POST', data)
	}

	static async put(url: string, data: any): Promise<any> {
		return this.request(url, 'PUT', data)
	}

	static async delete(url: string): Promise<any> {
		return this.request(url, 'DELETE')
	}

	private static async request(
		url: string,
		method: string,
		data?: any
	): Promise<any> {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest()
			xhr.open(method, url)
			xhr.setRequestHeader('Content-Type', 'application/json')
			xhr.responseType = 'json'

			xhr.onload = () => {
				if (xhr.status >= 200 && xhr.status < 300) {
					resolve(xhr.response)
				} else {
					reject(xhr.statusText)
				}
			}

			xhr.onerror = () => reject(xhr.statusText)
			xhr.send(data ? JSON.stringify(data) : null)
		})
	}
}

export default miracleAPI
