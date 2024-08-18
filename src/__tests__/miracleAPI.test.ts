import miracleAPI from '../index'

describe('miracleAPI', () => {
	const mockUrl = 'https://api.example.com'

	it('should make a GET request', async () => {
		const response = await miracleAPI.get(mockUrl)
		expect(response).toBeDefined()
		// Add more assertions based on your expected response
	})

	it('should make a POST request', async () => {
		const data = { key: 'value' }
		const response = await miracleAPI.post(mockUrl, data)
		expect(response).toBeDefined()
		// Add more assertions based on your expected response
	})

	it('should make a PUT request', async () => {
		const data = { key: 'new-value' }
		const response = await miracleAPI.put(mockUrl, data)
		expect(response).toBeDefined()
		// Add more assertions based on your expected response
	})

	it('should make a DELETE request', async () => {
		const response = await miracleAPI.delete(mockUrl)
		expect(response).toBeDefined()
		// Add more assertions based on your expected response
	})
})
